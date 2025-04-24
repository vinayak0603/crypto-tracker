import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoData } from './features/crypto/cryptoSlice';
import CryptoTable from './components/CryptoTable';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCryptoData());
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-yellow-500">Real-Time Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
