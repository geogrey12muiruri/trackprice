import { useEffect, useState } from "react";
import { Card } from "flowbite-react";

// ... (import statements)

const Catalogue = () => {
    const [products, setProducts] = useState([]);
  
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
              product.Market &&
              product.Commodity &&
              product.Wholesale &&
              product.Retail
          );
  
          setProducts(filteredProducts.slice(0, 12)); // only show the first 12 products
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle errors gracefully, e.g., display an error message
        }
      };
      fetchData();
    }, []);
  
    return (
      <div className="container flex justify-center items-start">
        <h4>Catalogue</h4>
  
        {/* Build a grid layout for the products */}
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Card
              className="flex flex-col text-center h-full w-80"
              key={index}
              // Use dynamic content directly in description
              description={
                <div>
                  <p>{product.Commodity}</p>
                  <p>Market: {product.Market}</p>
                  <p className="text-green-500">Retail Price: {product.Retail}</p>
                  <p className="text-green-500">
                    Wholesale Price: {product.Wholesale}
                  </p>
                </div>
              }
              footer={
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Add to Cart
                </button>
              }
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Catalogue;
  