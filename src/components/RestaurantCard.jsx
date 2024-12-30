import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {restaurant.name}
      </h2>
      <p className="text-gray-600 mb-1">
        <strong>Cuisine:</strong> {restaurant.cuisine}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Location:</strong> {restaurant.location}
      </p>
      <p className="text-gray-600">
        <strong>Rating:</strong> ⭐ {restaurant.rating}
      </p>
    </div>
  );
};

export default RestaurantCard;
