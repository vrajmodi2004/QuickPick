import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { FaUtensils, FaLaptop, FaFootballBall, FaCouch, FaTshirt, FaBook, FaHome, FaBriefcaseMedical } from "react-icons/fa";

const categories = [
  { name: "Food", icon: <FaUtensils className="text-2xl" />, color: "from-red-400 to-red-600" },
  { name: "Electronics", icon: <FaLaptop className="text-2xl" />, color: "from-blue-400 to-blue-600" },
  { name: "Sports", icon: <FaFootballBall className="text-2xl" />, color: "from-green-400 to-green-600" },
  { name: "Furniture", icon: <FaCouch className="text-2xl" />, color: "from-yellow-400 to-yellow-600" },
  { name: "Fashion", icon: <FaTshirt className="text-2xl" />, color: "from-purple-400 to-purple-600" },
  { name: "Books", icon: <FaBook className="text-2xl" />, color: "from-indigo-400 to-indigo-600" },
  { name: "Home", icon: <FaHome className="text-2xl" />, color: "from-pink-400 to-pink-600" },
  { name: "Health", icon: <FaBriefcaseMedical className="text-2xl" />, color: "from-teal-400 to-teal-600" }
];

const CategoryPage = () => {
  const navigate = useNavigate();
  
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      
      {/* Header */}
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          QuickPick Categories
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Select a category to start tracking prices of your favorite products
        </p>
      </div>
      
      {/* Categories Grid */}
      <div className="flex-grow flex items-center justify-center px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          
          {categories.map((category) => (
            
            <button
              key={category.name}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-40"
              onClick={() => navigate(`/categories/${category.name.toLowerCase()}`)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4 bg-white bg-opacity-20 p-4 rounded-full">
                  {category.icon}
                </div>
                <span className="text-xl font-bold">{category.name}</span>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-white border-opacity-0 rounded-xl group-hover:border-opacity-50 transition-all duration-300"></div>
            </button>
            
          ))}
          
        </div>
      </div>
      
      {/* Footer */}
      <div className="py-4 text-center text-gray-600 bg-white bg-opacity-50">
        <button 
          onClick={() => navigate('/')}
          className="mx-auto px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;