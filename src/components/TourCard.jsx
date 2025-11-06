import React from "react";
import { format, isBefore, isValid } from "date-fns";

const TourCard = ({ tour, onDeleteTour }) => {
  const today = new Date();

  // Safely parse start & end dates
  const start = tour?.startDate ? new Date(tour.startDate) : null;
  const end = tour?.endDate ? new Date(tour.endDate) : null;

  // Format dates if valid
  const formattedStart =
    start && isValid(start) ? format(start, "dd MMM yyyy") : "Not set";
  const formattedEnd =
    end && isValid(end) ? format(end, "dd MMM yyyy") : "Not set";

  // Handle missing endDate safely
  const status =
    end && isValid(end) && isBefore(end, today) ? "Completed" : "Upcoming";

  // Fallbacks for missing values
  const title = tour?.title?.trim() || "Untitled Tour";
  const destination = tour?.destination?.trim() || "No destination added";
  const travelers =
    tour?.travelers && !isNaN(tour.travelers) ? tour.travelers : 0;
  const budget =
    tour?.budget && !isNaN(tour.budget) ? `${tour.budget}৳` : "উল্লেখ নেই";
  const notes =
    tour?.notes && tour.notes.trim() !== "" ? tour.notes : null;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300 p-5 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span
          className={`badge ${
            status === "Upcoming" ? "badge-primary" : "badge-success"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Destination */}
      <p className="text-gray-500">{destination}</p>

      {/* Dates */}
      <p className="mt-1 text-sm">
        🗓️ {formattedStart} → {formattedEnd}
      </p>

      {/* Travelers & Budget */}
      <p>👥 {travelers} Travelers</p>
      <p>💰 বাজেট: {budget}</p>

      {/* Notes */}
      {notes && <p className="text-gray-600 mt-2">{notes}</p>}

      {/* Delete Button */}
      <button
        onClick={() => onDeleteTour(tour._id)}
        className="btn btn-error btn-sm mt-3 w-full"
      >
        Delete
      </button>
    </div>
  );
};

export default TourCard;

