import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
  const {product } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/api/products/${product}`)
      .then((res) => {
        setProductData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error.message);
        setLoading(false);
      });
  }, [product]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!productData) return <p>No product found for {product}</p>;

  // Define platform URLs
  const platformUrls = {
    Swiggy: "https://www.swiggy.com",
    Zomato: "https://www.zomato.com",
    UberEats: "https://www.ubereats.com"
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <h2 className="text-3xl font-bold mb-4 capitalize">{productData.name}</h2>

      <div className="flex flex-col items-center mb-6">
        <img
          src={productData.imageUrl || "https://example.com/images/default.jpg"}
          alt={productData.name}
          className="w-64 h-64 object-cover mb-6"
        />
      </div>

      <div>
        {Object.entries(productData.prices).map(([platform, price]) => (
          <div key={platform} className="p-4 bg-gray-100 rounded-lg mb-2 shadow-md">
            <a href={platformUrls[platform]} target="_blank" rel="noopener noreferrer">
              <span className="font-semibold">{platform}:</span> {price}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;