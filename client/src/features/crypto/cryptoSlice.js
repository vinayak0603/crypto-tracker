// src/redux/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      logo: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489507/crypto/chart/my3o0zmbpqn5ke3kwymx.png",
      name: "Bitcoin",
      symbol: "BTC",
      price: 67500,
      percentChange1h: -0.2,
      percentChange24h: 2.5,
      percentChange7d: 5.1,
      marketCap: 1300000000000,
      volume24h: 45000000000,
      circulatingSupply: 19300000,
      maxSupply: 21000000,
      chart: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489740/crypto/icons/htlfrokboea4fxohup9m.png"
    },
    {
      id: 2,
      logo: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489507/crypto/chart/euz7uy26jumpaelthcra.png",
      name: "Ethereum",
      symbol: "ETH",
      price: 3400,
      percentChange1h: 0.5,
      percentChange24h: 3.1,
      percentChange7d: 7.2,
      marketCap: 420000000000,
      volume24h: 25000000000,
      circulatingSupply: 120000000,
      maxSupply: null,
      chart: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489740/crypto/icons/htlfrokboea4fxohup9m.png"
    },
    {
      id: 3,
      logo: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489507/crypto/chart/xbab7ajtxzxo0qqv3wzz.png",
      name: "Tether",
      symbol: "USDT",
      price: 1.0,
      percentChange1h: 0.0,
      percentChange24h: -0.01,
      percentChange7d: 0.02,
      marketCap: 90000000000,
      volume24h: 80000000000,
      circulatingSupply: 90000000000,
      maxSupply: null,
      chart: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489740/crypto/icons/htlfrokboea4fxohup9m.png"
    },
    {
      id: 4,
      logo: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489507/crypto/chart/eiya2e65kgvhfwrzq9d0.png",
      name: "BNB",
      symbol: "BNB",
      price: 420,
      percentChange1h: -0.4,
      percentChange24h: 1.8,
      percentChange7d: 4.3,
      marketCap: 65000000000,
      volume24h: 1800000000,
      circulatingSupply: 155000000,
      maxSupply: 200000000,
      chart: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489740/crypto/icons/htlfrokboea4fxohup9m.png"
    },
    {
      id: 5,
      logo: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489507/crypto/chart/npdgns9mxkj62r9pd3xu.png",
      name: "Cardano",
      symbol: "ADA",
      price: 1.2,
      percentChange1h: 0.6,
      percentChange24h: 4.0,
      percentChange7d: 6.8,
      marketCap: 42000000000,
      volume24h: 2500000000,
      circulatingSupply: 34000000000,
      maxSupply: 45000000000,
      chart: "https://res.cloudinary.com/dkoqcp1g9/image/upload/v1745489740/crypto/icons/htlfrokboea4fxohup9m.png"
    }
  ],
};

const getRandomChange = () => (Math.random() * 2 - 1).toFixed(2); // -1.00 to +1.00
const getRandomPrice = (price) => +(price * (1 + Math.random() * 0.02 - 0.01)).toFixed(2); // ±1%
const getRandomVolume = (volume) => Math.floor(volume * (1 + Math.random() * 0.1 - 0.05)); // ±5%

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoData: (state) => {
      state.assets = state.assets.map((asset) => ({
        ...asset,
        price: getRandomPrice(asset.price),
        percentChange1h: parseFloat(getRandomChange()),
        percentChange24h: parseFloat(getRandomChange()),
        percentChange7d: parseFloat(getRandomChange()), // <- added this
        volume24h: getRandomVolume(asset.volume24h),
      }));
    },
  },
});


export const { updateCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
