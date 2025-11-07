import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const TourForm = ({ onAddTour, setSelectedDestination }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelers: "",
    notes: "",
    userEmail: user?.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update selected destination for hotel suggestions
    if (name === "destination") {
      setSelectedDestination(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTour = { ...formData, id: Date.now() };
    onAddTour(newTour);
    setFormData({
      title: "",
      destination: "",
      startDate: "",
      endDate: "",
      budget: "",
      travelers: "",
      notes: "",
    });

    // Clear selected destination after submit
    setSelectedDestination("");
  };

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">🗓️ Create Your Tour Plan</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          placeholder="Tour Title"
          value={formData.title}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget (৳)"
          value={formData.budget}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="travelers"
          placeholder="No. of Travelers"
          value={formData.travelers}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <textarea
          name="notes"
          placeholder="Notes / Itinerary Details"
          value={formData.notes}
          onChange={handleChange}
          className="textarea textarea-bordered md:col-span-2"
        ></textarea>
        <button type="submit" className="btn btn-primary md:col-span-2">
          ➕ Add Tour
        </button>
      </form>
    </div>
  );
};

export default TourForm;
