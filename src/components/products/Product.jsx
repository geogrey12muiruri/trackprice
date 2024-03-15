import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [wishList, setWishList] = useState([]);
  const [category, setCategory] = useState('All'); 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/product/getProducts');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToWatchlist = async (productId) => {
    try {
      const response = await fetch(`/api/watchlist/addToWatchlist/${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        // Add logic to update your local state or perform other actions
      } else {
        console.error(data.error);
        // Handle the error appropriately
      }
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };

  const filteredProducts = searchTerm 
    ? products.filter(product => 
        product.Commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.Market.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products.slice(0, 12);


  return (
    <div>
      <div className="flex flex-col items-center">
      <section className="flex justify-center p-6 ml-4 w-full mb-3 xl:w-96">
          <div className="flex items-stretch">
            {/* Category Dropdown */}
            <select
              className="rounded-l-full px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-950 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-green-400 focus:text-slate-950 focus:shadow-green-500 focus:outline-none dark:border-green-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="All">All</option>
              <option value="Cereals">Cereals</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Farm Inputs">Farm Inputs</option>
            </select>

            {/* Search Input */}
            <input
              type="search"
              className="flex-auto rounded-r-full border border-solid border-green-400 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal font-mono leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow- focus:outline-none dark:border-green-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search products and markets..."
              aria-label="Search"
              aria-describedby="button-addon2"
              value={searchTerm}
              onChange={handleSearch}
            />

            {/* Search Icon */}
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </section>
      </div>

      <section className='ml-20 hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-3 mx-auto justify-center">
          {filteredProducts.slice(0, 12).map((product, index) => (
            <div key={index} className="commodity-item flex gap-8 p-6 shadow-green-500/20 transition-all  hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-4">
              <div className=" w-full rounded-sm commodity-info text-sm font-bold justify-center">
                <a href='#' className='group-hover:opacity-70 transition-opacity duration-300 '>
                  <img className='w-full rounded-t-lg' src={product.imageurl} alt={product.Commodity} />
                  <span className='ripple'></span>
                </a>
                <h3>{product.Commodity}</h3>
                <p>{product.Market}</p>
                <p className='text-green-500'>Retail: {product.Retail}</p>
                <p className='text-green-500'>Wholesale: {product.Wholesale}</p>

                <div className='flex '>
                  <a href='/' className='flex py-3 px-6 item-center gap-1  font-mono fonto-bold  shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Contact
                  </a>
                  <a
                    className='flex py-3 px-6 item-center gap-1  font-mono fonto-bold  shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3'
                    onClick={() =>  handleAddToWatchlist(product._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    WatchList
                  </a>
                </div>
              </div>
              <div className="separator-line bg-green-500 h-full w-px opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
