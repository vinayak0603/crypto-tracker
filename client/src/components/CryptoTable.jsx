import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortTopGainers, setSortTopGainers] = useState(false);

  // Sort assets before filtering based on 24h % for top gainers
  const sortedAssets = sortTopGainers
    ? [...assets].sort((a, b) => b.percentChange24h - a.percentChange24h) // Assuming 24h % is changePercent24Hr
    : assets;

  // Filter the assets based on search term
  const filteredAssets = sortedAssets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name or symbol..."
          className="px-3 py-2 border rounded-md w-full sm:max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="sm:ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => setSortTopGainers(prev => !prev)}
        >
          {sortTopGainers ? 'Clear Sort' : 'Sort by Top Gainers'}
        </button>
      </div>

      {/* Responsive Scrollable Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full max-h-[70vh] overflow-y-auto rounded-lg border">
          <table className="min-w-full text-sm text-left text-white">
            <thead className="bg-gray-900 text-xs uppercase text-yellow-500 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Logo</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Symbol</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">1h %</th>
                <th className="px-4 py-2">24h %</th>
                <th className="px-4 py-2">7d %</th>
                <th className="px-4 py-2">Market Cap</th>
                <th className="px-4 py-2">24h Volume</th>
                <th className="px-4 py-2">Circulating</th>
                <th className="px-4 py-2">Max Supply</th>
                <th className="px-4 py-2">7D Chart</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.map((asset, index) => (
                <CryptoRow key={asset.id} asset={asset} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
