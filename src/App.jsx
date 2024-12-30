import React, { useState } from "react";
import RestaurantCard from "./components/RestaurantCard";
import { restaurantData } from "./components/data";

const App = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredRestaurants = restaurantData.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "" || restaurant.cuisine.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Restaurant Explorer
        </h1>

        {/* Search Bar */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search by restaurant name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-3 border rounded-lg bg-white focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">All Cuisines</option>
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>

        {/* Restaurant List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
