import React from "react";

const HotelSuggestions = ({ destination, hotels }) => {
  if (!hotels || hotels.length === 0) return null;

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">🏨 Top Hotels in {destination}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel, index) => (
          <div key={index} className="card bg-base-200 p-4 shadow-md">
            <h3 className="font-semibold text-lg">{hotel.name}</h3>
            <p>⭐ Rating: {hotel.rating}</p>
            <p>💰 Price: {hotel.price}৳ per night</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelSuggestions;
