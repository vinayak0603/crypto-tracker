# 💹 Real-Time Crypto Price Tracker

A sleek real-time cryptocurrency tracker built with React and Redux, simulating WebSocket updates, with features like  top gainer filter, and search functionality.

---

##  Features

- Real-time price updates every 1–2 seconds (simulated)
- Redux-based state management
- Top gainers filter (sort by 24h % change)
- Symbol search filter
- Responsive table design

---

##  Tech Stack

- **Frontend:** React, Tailwind CSS
- **State Management:** Redux Toolkit
- **Simulated Realtime:** `setInterval` to mock WebSocket updates

---

##  Architecture

src/
├──app/
│  ├──store.js            # Redux store
├── assets/               # Crypto logos and chart images
├── components/
│   ├── CryptoTable.jsx   # Main data table
│   ├── CryptoRow.jsx     # Main data Row
├── features/
│   ├── crypto    
│       ├── cryptoSelectors.js
│       ├── cryptoSlice.js          
├── App.jsx               # Main layout with provider
├── main.jsx              # Entry point

##  Setup
1. Clone the repository
- git clone https://github.com/vinayak0603/crypto-tracker.git

2. Navigate into the project directory
- cd client

3. Install dependencies
- npm install

4. Start the development server
- npm run dev

##  Video link
- https://drive.google.com/file/d/1jtGygpmeJ_-3r0f5mUL6MT-Wpyb9qF3o/view?usp=drivesdk 

##  Live Project link

- https://crypto-tracker-b309.onrender.com/