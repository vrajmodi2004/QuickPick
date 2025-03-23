import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { product, category } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/products/category/${product.toLowerCase()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setProductList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error.message);
        setError(error.message);
        setLoading(false);
      });
  }, [product, category]);

  if (loading) return <div className="flex justify-center items-center min-h-screen"><p className="text-xl">Loading...</p></div>;
  if (error) return <div className="flex justify-center items-center min-h-screen"><p className="text-xl text-red-500">Error: {error}</p></div>;
  if (!productList || productList.length === 0) return <div className="flex justify-center items-center min-h-screen"><p className="text-xl">No products found in {category}</p></div>;

  const filteredProducts = productList.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700 capitalize">{product} Varieties</h1>
      
      <input
        type="text"
        placeholder={`Search for ${product} varieties...`}
        className="p-3 border rounded-lg w-full mb-8 shadow-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((item) => (
          <div key={item._id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
                alt={item.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{item.name}</h2>
              
              <button
                className="w-full py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-300 mt-4"
                onClick={() => navigate(`/categories/${category}/${item.name.toLowerCase()}/details`)}
              >
                Show Prices
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl text-red-500">No matching products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;