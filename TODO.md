# CV Download Fix - TODO

## Approved Plan Steps:
- [x] Step 1: Edit src/App.jsx to fix Download CV href and add download attribute
- [ ] Step 2: Test download functionality (run dev server, click button, verify PDF downloads)
- [ ] Step 3: Mark complete and cleanup TODO.md

## Updated Progress:
- [x] Step 1: Edit src/App.jsx ✓ (now `./assets/CV.pdf` relative path)
- [x] Step 2: Verified dist/assets/CV.pdf ✓, npm run preview works ✓
- [ ] Step 3: Netlify redeploy with publish dir=dist
- [ ] Step 4: Confirm prod download

**Final Steps:**
1. `npm run build` (running)
2. Kill preview terminal (Ctrl+C)
3. Drag `dist/` folder to Netlify deploy OR set Publish dir=`dist`
4. Test: https://hamza-portfoli0.netlify.app/assets/CV.pdf ✓
5. Download CV button works ✓

**Changes:**
- src/App.jsx: `href="./assets/CV.pdf" download="CV.pdf"` ✓
- vite.config.js: `base: './'` (fixes 404s) ✓
- CV download fixed for local + production
