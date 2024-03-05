import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]); // initialize products state

  useEffect(() => {
    fetchProducts(); // fetch products when component mounts
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/product/getProducts'); // replace with your API endpoint
      const data = await response.json();
      setProducts(data.slice(0, 12)); // display only the first 12 products
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  return (
    <div>
      <section>
        {/* search functionality below */}
        <div className="flex justify-center  mb-3 xl:w-96">
          <div className="relative mb-4 flex w-1/2 flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
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
        </div>

      </section>
      <section>
        {/* display products from the backend */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3 mx-auto justify-center">
        {products.slice(0, 8).map((product, index) => (
            <div key={index} className="commodity-item flex gap-8">
            
              <div className="commodity-info text-sm font-bold">
                <h3>{product.Commodity}</h3>
                <p>Market: {product.Market}</p>
                <p className='text-green-500'>Retail Price: {product.Retail}</p>
                <p className='text-green-500'>Wholesale Price: {product.Wholesale}</p>
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
