import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';


import Marquee from 'react-fast-marquee';
import { MdReadMore } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Commodity = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  const handleClick = () => {
    navigate('/markets');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/product/getProducts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Filter out products without all required attributes
        const filteredProducts = data.filter(
          (product) =>
            product.Market && product.Commodity && product.Wholesale && product.Retail
        );

        setProducts(filteredProducts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors gracefully, e.g., display an error message
      }
    };
    fetchData();
  }, []);

  return (
    <animated.div
      className="bg-white flex commodity-container overflow-hidden fixed top-0"
      style={{ height: '100px', width: '100%', zIndex: '9000', ...props }}
    >
      {isLoading ? (
        <p className="loading">Loading data...</p>
      ) : (
        <Marquee speed={50}>
          {products.slice(0, 8).map((product, index) => (
            <div key={index} className="commodity-item flex gap-8">
              <div className="commodity-info text-sm font-bold">
                <h3 className='font-bold font-mono'>{product.Commodity}</h3>
                <p className='text-green-500 font-bold font-mono '>Market: {product.Market}</p>
                <p className='slate-950 font-bold font-mono' >Retail Price:<span className='text-green-500'>{product.Retail}</span> </p>
                <p className="text-slate-950 font-bold font-mono">Wholesale Price:<span className='text-green-500'>{product.Wholesale}</span> </p>
              </div>
              <div className="separator-line bg-green-500 h-full w-px opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </Marquee>
      )}

      <div className=" text-green-500 ml-4 cursor-pointer pt-4 align-bottom">
        <MdReadMore className="h-12 w-12 mt-5" onClick={handleClick} />
      </div>
    </animated.div>
  );
};

export default Commodity;
