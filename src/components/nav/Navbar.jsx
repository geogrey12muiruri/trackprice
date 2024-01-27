import React from 'react';

function Navbar() {
  return (
    <nav className="bg-secondary text-black py-4 px-6 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between px-2 py-2 rounded-md ">
      <a href="#" className="inline-flex items-center justify-center  px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Buy-Local
                
            </a>
      </div>
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-green-900 rounded-md py-2 px-3">
          <a href="/" className="block text-black font-medium">Home</a>
        </li>
        <li className="hover:decoration-blue-400 rounded-md py-2 px-3">
          <a href="/markets" className="block text-black font-medium">Markets</a>
        </li>
        <li className="hover:decoration-blue-400 rounded-md py-2 px-3">
          <a href="/commodities" className="block text-black font-medium">Commodities</a>
        </li>
        <li className="hover:decoration-blue-400 rounded-md py-2 px-3">
          <a href="/watchlist" className="block text-black font-medium">Watchlist</a>
        </li>
        <li className="hover:decoration-blue-400 rounded-md py-2 px-3">
          <a href="/price-alerts" className="block text-black font-medium">Price Alerts</a>
        </li>
        <li className="hover:decoration-blue-400 rounded-md py-2 px-3">
          <a href="/news" className="block text-black font-medium">News & Insights</a>
        </li>
        <li className="hover:decoration-blue-400 rounded-md py-2 px-3">
          <a href="/profile" className="block text-black font-medium">Profile</a>
        </li>
        <li className="hover:decoration-blue-400 rounded-md py-2 px-3">
          <a href="/help" className="block text-black font-medium">Help & Support</a>
        </li>
      </ul>
      <div className="hidden md:block">
        {/* Add user profile icon or dropdown menu here */}
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
