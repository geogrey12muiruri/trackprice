import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import Commodity1 from '../../assets/marquee/fish.png';

// import Commodity1 from '../../assets/marquee/fish.png';
// import Commodity2 from '../../assets/marquee/bean.png';
// import Commodity3 from '../../assets/marquee/cattle.png';
// import Commodity4 from '../../assets/marquee/potato.png';
// import Commodity5 from '../../assets/marquee/sukumawiki.png';



// import data.json file from the public directory
// 
const Commodity = () => {
  const [data, setData] = useState([]); // Initialize data state
  const [isLoading, setIsLoading] = useState(true); // Indicate loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Dynamically fetch from public directory
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        console.log(data); // Log the data
        setIsLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors gracefully, e.g., display an error message
      }
    };
    fetchData();
  }, []); // Run effect only once (when component mounts)

  return (
    <div className="bg-white commodity-container overflow-hidden fixed top-0" style={{ height: '100px', width: '100%', zIndex: '9000' }}>
    {isLoading ? ( // Display loading indicator while data fetches
      <p className="loading">Loading data...</p>
    ) : (
      <Marquee speed={100}>
        {data.county.map((commodity, index) => (
          <div key={index} className="commodity-item flex gap-8">
            <div className="flex gap-4 p-4 mb-20 justify-center">
              <img src={Commodity1 + index} alt="commodity" className="commodity-image" style={{ width: '40px', height: '40px' }} />
            </div>
            <div className="commodity-info text-sm font-bold">
              <h3>{data.county.code}</h3>
              <p>Market: {data.items_category.name}</p>
              <p className="text-green-400">Price: {commodity.price}</p>
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
