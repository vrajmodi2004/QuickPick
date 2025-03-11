import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


// const categories = [
//   { name: "Food", icon: <FaUtensils className="text-2xl" />, color: "from-red-400 to-red-600" },
//   { name: "Electronics", icon: <FaLaptop className="text-2xl" />, color: "from-blue-400 to-blue-600" },
//   { name: "Sports", icon: <FaFootballBall className="text-2xl" />, color: "from-green-400 to-green-600" },
//   { name: "Furniture", icon: <FaCouch className="text-2xl" />, color: "from-yellow-400 to-yellow-600" },
//   { name: "Fashion", icon: <FaTshirt className="text-2xl" />, color: "from-purple-400 to-purple-600" },
//   { name: "Books", icon: <FaBook className="text-2xl" />, color: "from-indigo-400 to-indigo-600" },
//   { name: "Home", icon: <FaHome className="text-2xl" />, color: "from-pink-400 to-pink-600" },
//   { name: "Health", icon: <FaBriefcaseMedical className="text-2xl" />, color: "from-teal-400 to-teal-600" }
// ];

const items = {
  food: [
    { name: "Pizza", image: "🍕" },
    { name: "Burger", image: "🍔" },
    { name: "Sushi", image: "🍣" },
    { name: "Taco", image: "🌮" },
    { name: "Salad", image: "🥗" },
    { name: "Pasta", image: "🍝" },
    { name: "Steak", image: "🥩" },
    { name: "Ice Cream", image: "🍨" },
    { name: "Donut", image: "🍩" },
    { name: "Fries", image: "🍟" }
  ],
  electronics: [
    { name: "Laptop", image: "💻" },
    { name: "Phone", image: "📱" },
    { name: "Camera", image: "📷" },
    { name: "Headphones", image: "🎧" },
    { name: "Smartwatch", image: "⌚" },
    { name: "Drone", image: "🛸" },
    { name: "Speaker", image: "🔊" },
    { name: "TV", image: "📺" },
    { name: "Keyboard", image: "⌨️" },
    { name: "Mouse", image: "🖱️" }
  ],
  sports: [
    { name: "Football", image: "⚽" },
    { name: "Basketball", image: "🏀" },
    { name: "Tennis Racket", image: "🎾" },
    { name: "Cricket Bat", image: "🏏" },
    { name: "Golf Club", image: "🏌️‍♂️" },
    { name: "Boxing Gloves", image: "🥊" },
    { name: "Hockey Stick", image: "🏒" },
    { name: "Baseball", image: "⚾" },
    { name: "Rugby Ball", image: "🏉" },
    { name: "Skateboard", image: "🛹" }
  ],
  furniture: [
    { name: "Sofa", image: "🛋️" },
    { name: "Bed", image: "🛏️" },
    { name: "Chair", image: "🪑" },
    { name: "Table", image: "📚" },
    { name: "Wardrobe", image: "🚪" },
    { name: "Lamp", image: "💡" },
    { name: "Shelf", image: "🗄️" },
    { name: "Mirror", image: "🪞" },
    { name: "Desk", image: "🖥️" },
    { name: "Drawer", image: "🗄️" }
  ],
  fashion: [
    { name: "T-Shirt", image: "👕" },
    { name: "Jeans", image: "👖" },
    { name: "Dress", image: "👗" },
    { name: "Shoes", image: "👟" },
    { name: "Hat", image: "🎩" },
    { name: "Jacket", image: "🧥" },
    { name: "Watch", image: "⌚" },
    { name: "Sunglasses", image: "🕶️" },
    { name: "Scarf", image: "🧣" },
    { name: "Gloves", image: "🧤" }
  ],
  books: [
    { name: "Fiction", image: "📖" },
    { name: "Science", image: "📚" },
    { name: "History", image: "📜" },
    { name: "Comics", image: "📒" },
    { name: "Biography", image: "📘" },
    { name: "Poetry", image: "📔" },
    { name: "Mystery", image: "📙" },
    { name: "Horror", image: "📕" },
    { name: "Fantasy", image: "📗" },
    { name: "Thriller", image: "📓" }
  ],
  home: [
    { name: "Vacuum", image: "🧹" },
    { name: "Oven", image: "🍳" },
    { name: "Fridge", image: "🧊" },
    { name: "Washing Machine", image: "🧺" },
    { name: "Microwave", image: "🍲" },
    { name: "Fan", image: "🌬️" },
    { name: "Iron", image: "🧼" },
    { name: "Toaster", image: "🍞" },
    { name: "Mixer", image: "🥄" },
    { name: "Grill", image: "🔥" }
  ],
  health: [
    { name: "Medicine", image: "💊" },
    { name: "Syringe", image: "💉" },
    { name: "Bandage", image: "🤕" },
    { name: "Thermometer", image: "🌡️" },
    { name: "Stethoscope", image: "🩺" },
    { name: "Mask", image: "😷" },
    { name: "Sanitizer", image: "🧴" },
    { name: "Gloves", image: "🧤" },
    { name: "First Aid Kit", image: "🆘" },
    { name: "Inhaler", image: "💨" }
  ]
};

const ItemListingPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filteredItems = items[category]?.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <input
        type="text"
        placeholder="Search for anything..."
        className="p-2 border rounded w-full mb-6 shadow-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredItems?.length ? (
          filteredItems.map((item) => (
            <button
              key={item.name}
              className="p-4 bg-white rounded-lg flex flex-col items-center shadow-md hover:shadow-lg transition-all"
              onClick={() => navigate(`/categories/${category}/${item.name.toLowerCase()}`)
                //handlecurrently
            }
            >
              <div className="text-4xl mb-2">{item.image}</div>
              <span className="text-lg font-semibold">{item.name}</span>
            </button>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No such product available
          </p>
        )}
      </div>
    </div>
  );
};

export default ItemListingPage;
