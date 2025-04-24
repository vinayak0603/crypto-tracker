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

##  Video link