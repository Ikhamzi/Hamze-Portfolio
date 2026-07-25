import { useState } from "react";

export default function ChatRoom({ onFillForm = () => {} }) {
  const [message, setMessage] = useState("");

  // MOCK: Fake logged in user — renamed from "Demo User" to something more fitting
  const mockUser = {
    uid: "mock",
    displayName: "Nova",
    photoURL: "https://api.dicebear.com/7.x/thumbs/svg?seed=Nova&backgroundColor=1e293b",
  };

  const botUser = {
    uid: "bot",
    displayName: "Assistant",
    photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=Assistant&backgroundColor=27272a",
  };

  // Assistant kicks off the guided flow
  const [messages, setMessages] = useState([
    {
      id: 1,
      uid: "bot",
      text: "Hi! I can fill out the contact form for you. What's your name?",
      displayName: botUser.displayName,
      photoURL: botUser.photoURL,
    },
  ]);

  // Track which question we're on and the answers collected so far
  const [step, setStep] = useState(0); // 0=name, 1=email, 2=message, 3=done
  const [answers, setAnswers] = useState({ name: "", email: "", message: "" });

  // Send message — walks the visitor through name -> email -> message,
  // then fills the real contact form once all three are collected
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = {
      id: Date.now(),
      uid: mockUser.uid,
      text: message.trim(),
      displayName: mockUser.displayName,
      photoURL: mockUser.photoURL,
    };

    const updatedAnswers = { ...answers };
    let botReply;

    if (step === 0) {
      updatedAnswers.name = message.trim();
      botReply = `Nice to meet you, ${updatedAnswers.name}! What's your email address?`;
      setStep(1);
    } else if (step === 1) {
      updatedAnswers.email = message.trim();
      botReply = "Got it. What would you like to say in your message?";
      setStep(2);
    } else if (step === 2) {
      updatedAnswers.message = message.trim();
      botReply = "Thanks! I've filled out the form for you below — check it over and hit Send when you're ready.";
      setStep(3);
      onFillForm(updatedAnswers);
    } else {
      botReply = "You're all set! Scroll down to review and submit the form.";
    }

    setAnswers(updatedAnswers);

    const botMsg = {
      id: Date.now() + 1,
      uid: botUser.uid,
      text: botReply,
      displayName: botUser.displayName,
      photoURL: botUser.photoURL,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setMessage("");
  };

  // Reset the demo back to the start, and clear the linked form too
  const handleLogout = () => {
    setMessages([
      {
        id: 1,
        uid: "bot",
        text: "Hi! I can fill out the contact form for you. What's your name?",
        displayName: botUser.displayName,
        photoURL: botUser.photoURL,
      },
    ]);
    setStep(0);
    setAnswers({ name: "", email: "", message: "" });
    onFillForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-zinc-900 border border-gray-700 p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-5">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">💬 AI Chat room </h2>

      {/* Logged-in header */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
        <div className="flex items-center gap-3">
          <img src={mockUser.photoURL} alt="avatar" className="w-10 h-10 rounded-full bg-zinc-700" />
          <span className="text-white font-semibold">{mockUser.displayName}</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-1 rounded-full text-white hover:bg-red-700 text-sm"
        >
          Logout
        </button>
      </div>

      {/* Messages area */}
      <div className="h-72 overflow-y-auto border border-gray-700 p-3 rounded-lg bg-zinc-800 mb-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 ${msg.uid === mockUser.uid ? "justify-end" : "justify-start"}`}
          >
            {msg.uid !== mockUser.uid && (
              <img src={msg.photoURL} alt="avatar" className="w-8 h-8 rounded-full flex-shrink-0 bg-zinc-700" />
            )}
            <div
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.uid === mockUser.uid ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
              }`}
            >
              <div className="text-xs opacity-70 mb-1">{msg.displayName}</div>
              <div>{msg.text}</div>
            </div>
            {msg.uid === mockUser.uid && (
              <img src={msg.photoURL} alt="avatar" className="w-8 h-8 rounded-full flex-shrink-0 bg-zinc-700" />
            )}
          </div>
        ))}
      </div>

      {/* Send form */}
      <form onSubmit={sendMessage} className="flex gap-2 flex-wrap sm:flex-nowrap w-full">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your answer..."
          className="flex-1 min-w-0 p-2 rounded-lg bg-zinc-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 w-full sm:w-auto whitespace-nowrap"
        >
          Send
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-2 text-center">
        💡 Demo mode — answers here fill the contact form on the right.
      </p>
    </div>
  );
}