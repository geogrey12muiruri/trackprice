import React from 'react';
import { motion } from 'framer-motion';
import AveragePriceChart from '../charts/AveragePriceChart';
import WeeklyWholesaleAverageChart from '../charts/WeeklyWholesaleAverageChart';
import Product from '../products/Product';
import heroImage from '../../assets/images/hero.jpg';

const MarketComponent = () => {
  return (
    <>
      <div className="container justify-center items-start">
        <div className='hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3 w-full rounded-lg p-5 ml-20'>
        <h2 className='font-bold font-mono ml-4 text-center text-3xl'>Market Overview</h2>

<div className='w-full justify-center flex mt-4 bg-emerald-500 rounded-lg'>
  {/* Left side: Charts container */}
  <div className="w-full md:w-2/3 lg:w-3/4 flex justify-center flex-wrap">
    {/* Weekly Retail Average Chart */}
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <h4 className='font-bold mb-4 font-mono ml-4'>Weekly Retail Average</h4>
      <AveragePriceChart />
    </div>

    {/* Weekly Wholesale Average Chart */}
    <div className="w-full md:w-1/2 ml-0 md:ml-4">
      <h4 className='font-bold mb-4 font-mono ml-4'>Weekly Wholesale Average-Dry Maize</h4>
      <WeeklyWholesaleAverageChart />
    </div>
  </div>

  {/* Right side: Hero Text and Image */}
  <div className="hidden md:block lg:w-1/2 relative">
    {/* Hero Text with Animation */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white text-center"
    >
      <h3 className="text-4xl font-bold mb-2 font-mono">From Farm To Fortune</h3>
      <p className="text-lg font-mono">Trust us to provide valuable insights</p>
      <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold font-mono py-2 px-4 rounded mt-4">Get Started</button>
    </motion.div>

    {/* Hero Image */}
    <img
      src={heroImage}
      alt="Hero Image"
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>
</div>

        </div>
       
        {/* Product section */}
        <section className="mt-4">
          <Product />
        </section>
      </div>
    </>
  );
};

export default MarketComponent;
