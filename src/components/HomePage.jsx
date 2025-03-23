/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { FaUserCircle, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import React from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const platforms = useMemo(() => ["Amazon", "Flipkart", "Meesho", "Myntra", "Nykaa"], []);
  const colors = ["text-blue-600", "text-yellow-500", "text-pink-500", "text-red-500", "text-purple-500"];
  
  const [platformIndex, setPlatformIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentPlatform = platforms[platformIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    
    if (!isDeleting && displayText === currentPlatform) {
      // Pause at full word
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      // Move to next platform
      setIsDeleting(false);
      setPlatformIndex((prevIndex) => (prevIndex + 1) % platforms.length);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText(currentPlatform.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, platformIndex, platforms]);
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaShoppingCart className="text-blue-600 text-3xl mr-3" />
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">QuickPick</span>
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">Sign In</button> */}
          {/* <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-300" /> */}
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 text-center max-w-4xl mx-auto w-full">
        <div className="transform hover:scale-105 transition-transform duration-500">
          <h1 className="text-6xl font-extrabold mb-6 text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">QuickPick</span>
          </h1>
          <div className="mb-10 text-2xl relative">
  <span className="text-gray-700">Track prices of your favorite products on </span>
  <span className={`font-bold ${colors[platformIndex]} inline-flex items-center`}>
    {displayText}
    <span className="inline-block h-6 w-1 bg-current opacity-70 animate-pulse ml-0.5 align-middle">
    </span>
  </span>
</div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button
            className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-semibold flex items-center group-hover:scale-105"
            onClick={() => navigate("/categories")}
          >
            Get Started
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="text-blue-600 text-xl font-bold mb-3">Compare Prices</div>
            <p className="text-gray-600">Find the best deals across multiple platforms</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="text-purple-600 text-xl font-bold mb-3">Price Drop Alerts</div>
            <p className="text-gray-600">Get notified when prices fall</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="text-pink-500 text-xl font-bold mb-3">Save Money</div>
            <p className="text-gray-600">Never overpay for your favorite products</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* <div className="flex justify-center space-x-6 mb-4">
            <FaShoppingCart className="text-blue-400 text-xl hover:text-white cursor-pointer transition-colors" />
          </div> */}
          <p className="text-sm">© 2025 QuickPick. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;