import React, { useState, useEffect, useContext } from "react";
import TourForm from "../components/TourForm";
import TourList from "../components/TourList";
import BudgetCalculator from "../components/BudgetCalculator";
import HotelSuggestions from "../components/HotelSuggestions";
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import destinationsData from '../data/bangladeshDestinations.json';

const TourMaker = () => {
  const [tours, setTours] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const { user } = useContext(AuthContext);

  // Fetch tours for the user
  useEffect(() => {
    if (user) {
      fetch(`https://tour-avels-server.vercel.app/tourPlans?uid=${user.uid}`)
        .then(res => res.json())
        .then(data => setTours(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  const handleAddTour = async (newTour) => {
    if (!user) return alert("Please login first!");
    const tourWithUid = { ...newTour, uid: user.uid };

    try {
      const res = await fetch("https://tour-avels-server.vercel.app/tourPlans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tourWithUid),
      });
      const savedTour = await res.json();
      setTours([...tours, savedTour]);
    } catch (err) {
      console.error("Error saving tour:", err);
    }
  };

  const handleDeleteTour = async (id) => {
    try {
      await fetch(`https://tour-avels-server.vercel.app/tourPlans/${id}`, { method: "DELETE" });
      setTours(tours.filter((tour) => tour._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        🌍 Plan Your Next Adventure — TourMaker
      </h1>

      <div className="max-w-3xl mx-auto mb-6">
        <TourForm onAddTour={handleAddTour} setSelectedDestination={setSelectedDestination} />
      </div>

      {selectedDestination && (
        <div className="max-w-5xl mx-auto mb-10">
          <HotelSuggestions
            destination={selectedDestination}
            hotels={destinationsData[selectedDestination]?.hotels || []}
          />
        </div>
      )}

      <div className="max-w-5xl mx-auto mb-10">
        <TourList tours={tours} onDeleteTour={handleDeleteTour} />
      </div>

      <div className="max-w-3xl mx-auto">
        <BudgetCalculator />
      </div>
    </div>
  );
};

export default TourMaker;
