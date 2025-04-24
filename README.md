# 💹 Real-Time Crypto Price Tracker

A sleek real-time cryptocurrency tracker built with React and Redux, simulating WebSocket updates, with features like dark/light mode, top gainer filter, and search functionality.

---

## 🚀 Features

- Real-time price updates every 1–2 seconds (simulated)
- Redux-based state management
- Top gainers filter (sort by 24h % change)
- Dark and light mode toggle
- Symbol search filter
- Responsive table design

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **State Management:** Redux Toolkit
- **Simulated Realtime:** `setInterval` to mock WebSocket updates

---

## 🧠 Architecture

src/
├── assets/               # Crypto logos and chart images
├── components/
│   ├── CryptoTable.jsx   # Main data table
│   ├── Header.jsx        # Search input + theme toggle
├── redux/
│   ├── cryptoSlice.js    # State slice and updater
│   ├── store.js          # Redux store
├── App.jsx               # Main layout with provider
├── index.js              # Entry point
