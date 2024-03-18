import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { AiOutlineLineChart, AiOutlineSafetyCertificate, AiOutlineDollarCircle, AiOutlineHeart } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import BannerImage from '../../assets/banner.jpg'; // Import the banner image

const AnimatedIcon = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
    >
      {children}
    </motion.div>
  );
};

const CarouselComponent = () => {
  
  return (
    <div>
      <section className="relative">
        <img src={BannerImage} alt="Banner" className="absolute top-0 left-0 w-full h-full object-cover z-0" style={{ filter: 'brightness(0.5)' }} /> {/* Include the background image with dark overlay */}
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 relative z-10">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center">
              <h2 className="mb-4 text-3xl tracking-tight font-bold font-mono text-white dark:text-white text-center">Buy Local Build Local</h2>
              <p className="text-gray-500 sm:text-xl dark:text-gray-400 font-bold font-mono text-white">FarmSoft dimistifies the agricultural commodity market bringing you valuable insights to make informed decisions</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-emerald-50 bg-slate-950 w-full rounded-3xl p-6 mb-20 ">
            <div>
              <AnimatedIcon>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <AiOutlineLineChart className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold font-bold font-mono">Information Accessibility</h3>
                <p className="text-gray-500 dark:text-gray-400  font-mono text-emerald-50">Real-time and historical data on commodity prices, market trends, and demand-supply dynamics.</p>
              </AnimatedIcon>
            </div>
            <div>
              <AnimatedIcon className="text-emerald-50">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <AiOutlineSafetyCertificate className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white font-bold font-monotext-emerald-50 ">Price Volatility Mitigation</h3>
                <p className="text-gray-500 dark:text-gray-400 font-mono text-emerald-50 ">Risk analysis, hedging strategies, and price forecasting</p>
              </AnimatedIcon>
            </div>
            <div>
              <AnimatedIcon>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <AiOutlineDollarCircle className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white font-bold font-mono text-emerald-50 ">Trade Facilitation</h3>
                <p className="text-gray-500 dark:text-gray-400 font-bold font-mono text-emerald-50 ">Facilitating trade and expanding market access for farmers and traders. </p>
              </AnimatedIcon>
            </div>
            
            {/* Repeat for other icons */}

          </div>
          
          <div className="text-center">
            <Link to="/supplier" className="inline-block px-8 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700">Get Started as a Supplier</Link>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default CarouselComponent;
