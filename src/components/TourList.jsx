import React, { useState } from "react";
import TourCard from "./TourCard";
import useAuth from "../hooks/useAuth";
import { FaRegFolderOpen } from "react-icons/fa";

const TourList = ({ tours, onDeleteTour }) => {
  const { user } = useAuth();
  const userEmail = user?.email;

  const userTours = Array.isArray(tours)
    ? tours.filter(tour => tour.userEmail === userEmail)
    : [];

  const handleDeleteTour = (id) => {
    onDeleteTour(id);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10">
      <h2 className="text-2xl font-semibold mb-6">🧳 My Planned Tours</h2>

      {userTours.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 text-gray-500 space-y-4">
          <FaRegFolderOpen className="text-6xl text-gray-300" />
          <p className="text-xl">No tours found for your account.</p>
          <p className="text-gray-400">Add some tours to see them listed here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userTours.map((tour) => (
            <TourCard key={tour._id} tour={tour} onDeleteTour={handleDeleteTour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TourList;
