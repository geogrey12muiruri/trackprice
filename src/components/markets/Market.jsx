import React from 'react';
import AverageRetailPriceChart from '../charts/AverageRetailPricesChart';

const MarketsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Market Insights & Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Market Insights</h2>
          <AverageRetailPriceChart />
          <p className="text-gray-700">
            Get great insights into the market and how it's performing. 
          </p>
          <p className="text-gray-700 mt-2">
          For the months of February 2024, we have seen a steady 
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Price Analysis</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices ipsum eu nulla consequat, nec eleifend
            sapien suscipit.
          </p>
          <p className="text-gray-700 mt-2">
            Vivamus ut libero odio. Curabitur accumsan ex et vestibulum. Phasellus pretium ante ac nisl eleifend, sed aliquet
            dolor vehicula.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Market Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Trend 1</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Trend 2</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Trend 3</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketsPage;
