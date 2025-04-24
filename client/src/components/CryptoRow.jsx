import React from 'react';

const CryptoRow = ({ asset, index }) => {
  const {
    logo, name, symbol, price,
    percentChange1h, percentChange24h, percentChange7d,
    marketCap, volume24h, circulatingSupply,
    maxSupply, chart, id
  } = asset;

  const getColor = (value) => (value > 0 ? 'text-green-500' : value < 0 ? 'text-red-500' : 'text-gray-500');

  const handleRowClick = () => {
    //coinmarketcap link structure
    const url = `https://coinmarketcap.com/currencies/${name}/`;
    window.open(url, '_blank'); 
  };

  return (
    <tr
      onClick={handleRowClick}
      className="cursor-pointer text-sm text-center border-b hover:bg-gray-900 hover:text-yellow-500"
    >
      <td>{index + 1}</td>
      <td><img src={logo} alt={symbol} className="w-6 h-6 mx-auto" /></td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${parseFloat(price).toFixed(2)}</td>
      <td className={getColor(percentChange1h)}>{percentChange1h}%</td>
      <td className={getColor(percentChange24h)}>{percentChange24h}%</td>
      <td className={getColor(percentChange7d)}>{percentChange7d}%</td>
      <td>${marketCap.toLocaleString()}</td>
      <td>${volume24h.toLocaleString()}</td>
      <td>{circulatingSupply.toLocaleString()}</td>
      <td>{maxSupply ? maxSupply.toLocaleString() : '∞'}</td>
      <td><img src={chart} alt="7d" className="h-10 w-15 mx-auto" /></td>
    </tr>
  );
};

export default CryptoRow;
