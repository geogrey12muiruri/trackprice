import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const Commodity = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/product/getProducts'); // Assuming this endpoint returns product data
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Fetch market names for each product
        // Fetch market names for each product
const updatedProducts = await Promise.all(
  data.map(async (product) => {
    const marketId = product.prices[0].market; // Accessing marketId from prices array
    const marketResponse = await fetch(`/api/market/${marketId}`);
    if (!marketResponse.ok) {
      throw new Error('Market response was not ok');
    }
    const marketData = await marketResponse.json();
    const updatedProduct = { ...product, marketName: marketData.name };
    return updatedProduct;
  })
);

        setProducts(updatedProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors gracefully, e.g., display an error message
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white commodity-container overflow-hidden fixed top-0" style={{ height: '100px', width: '100%', zIndex: '9000' }}>
      {isLoading ? (
        <p className="loading">Loading data...</p>
      ) : (
        <Marquee speed={100}>
          {products.map((product, index) => (
            <div key={index} className="commodity-item flex gap-8">
              <div className="flex gap-4 p-4 mb-20 justify-center">
                <img src={product.img} alt="commodity" className="commodity-image" style={{ width: '40px', height: '40px' }} />
              </div>
              <div className="commodity-info text-sm font-bold">
                <h3>{product.name}</h3>
                <p>Market: {product.marketName}</p>
                <p>Price: {product.prices[0].retailPrice}</p>
              </div>
              <div className="separator-line bg-green-500 h-full w-px opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default Commodity;