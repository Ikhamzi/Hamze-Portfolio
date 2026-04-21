import { useState } from "react";
import { auth, loginWithGoogle, logout } from "../firebase"; // Firebase disabled - using mocks

export default function ChatRoom() {
  const [message, setMessage] = useState("");

  // MOCK: Fake logged in user
  const mockUser = {
    uid: 'mock',
    displayName: 'Demo User',
    photoURL: 'https://via.placeholder.com/40?text=You'
  };

  // MOCK: Demo messages (static)
  const demoMessages = [
    { 
      id: 1, 
      uid: 'other', 
      text: 'Hello! Welcome to the portfolio chat demo.', 
      displayName: 'Visitor', 
      photoURL: 'https://via.placeholder.com/40?text=?' 
    },
    { 
      id: 2, 
      uid: 'mock', 
      text: 'Firebase chat disabled (no config). Add real keys to enable!', 
      displayName: 'Demo User', 
      photoURL: 'https://via.placeholder.com/40?text=You' 
    }
  ];

  // MOCK: Send message (logs to console, no persist)
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log('Mock chat send:', message);
    setMessage("");
    // Could add to local state here if wanted
  };

  return (
    <div className="bg-zinc-900 border border-gray-700 p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-5">
      <h2 className="text-2xl font-bold text-center mb-4 text-white">💬 Chat Room (Demo)</h2>

      {/* Mock logged-in header */}
      <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
        <div className="flex items-center gap-3">
          <img src={mockUser.photoURL} alt="avatar" className="w-10 h-10 rounded-full" />
          <span className="text-white font-semibold">{mockUser.displayName}</span>
        </div>
        <button
          onClick={logout}
          className="bg-red-600 px-4 py-1 rounded-full text-white hover:bg-red-700 text-sm"
        >
          Logout
        </button>
      </div>

      {/* Messages area */}
      <div className="h-72 overflow-y-auto border border-gray-700 p-3 rounded-lg bg-zinc-800 mb-4 space-y-3">
        {demoMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 ${msg.uid === mockUser.uid ? "justify-end" : "justify-start"}`}
          >
            {msg.uid !== mockUser.uid && (
              <img
                src={msg.photoURL}
                alt="avatar"
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
            )}
            <div
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.uid === mockUser.uid
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              <div className="text-xs opacity-70 mb-1">{msg.displayName}</div>
              <div>{msg.text}</div>
            </div>
            {msg.uid === mockUser.uid && (
              <img
                src={msg.photoURL}
                alt="avatar"
                className="w-8 h-8 rounded-full flex-shrink-0"
              />
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
          placeholder="Type message... (demo - logs to console)"
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
        💡 Firebase disabled. Check console for mock sends.
      </p>
    </div>
  );
}

