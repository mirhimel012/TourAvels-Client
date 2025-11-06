import React from "react";
import TourCard from "./TourCard";

const TourList = ({ tours, onDeleteTour }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">🧳 My Planned Tours</h2>
      {tours.length === 0 ? (
        <p className="text-gray-500">No tours planned yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour._id} tour={tour} onDeleteTour={onDeleteTour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TourList;
