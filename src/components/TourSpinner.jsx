import React, { useState } from "react";
import Confetti from "react-confetti";
import { toast } from "react-hot-toast";

const topDestinations = [
  "Cox's Bazar",
  "Sundarban",
  "Sylhet",
  "Rangamati",
  "Bandarban",
  "Saint Martin"
];

const TourSpinner = ({ onSelectDestination }) => {
  const [spinning, setSpinning] = useState(false);
  const [selected, setSelected] = useState(null);
  const [confetti, setConfetti] = useState(false);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setSelected(null);

    // Random selection
    const randomIndex = Math.floor(Math.random() * topDestinations.length);

    // Total rotation for multiple spins
    const rotations = 5 + Math.floor(Math.random() * 3); // 5-7 spins
    const angle = 360 * rotations + (360 / topDestinations.length) * randomIndex;

    const wheel = document.getElementById("wheel");
    if (wheel) {
      wheel.style.transition = "transform 3s cubic-bezier(0.33, 1, 0.68, 1)";
      wheel.style.transform = `rotate(${angle}deg)`;
    }

    setTimeout(() => {
      setSelected(topDestinations[randomIndex]);
      setSpinning(false);
      setConfetti(true);
      toast.success(`You got: ${topDestinations[randomIndex]} 🎉`);
      if (onSelectDestination) onSelectDestination(topDestinations[randomIndex]);

      // Stop confetti after 3s
      setTimeout(() => setConfetti(false), 3000);
    }, 3000);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md mx-auto text-center relative">
      {confetti && <Confetti width={400} height={400} />}
      <h2 className="text-2xl font-bold mb-4 text-primary">🎡 Spin for a Tour!</h2>

      <div className="relative w-64 h-64 mx-auto rounded-full border-8 border-primary overflow-hidden glow">
        <div
          id="wheel"
          className="absolute inset-0 flex items-center justify-center text-center font-bold text-gray-800"
          style={{ borderRadius: "50%", fontSize: "0.9rem" }}
        >
          {topDestinations.map((dest, i) => (
            <div
              key={i}
              className="absolute w-1/2 h-1/2 top-0 left-1/2 transform origin-bottom-left rotate-"
              style={{ transform: `rotate(${(360 / topDestinations.length) * i}deg) translate(-50%)` }}
            >
              {dest}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={spinWheel}
          disabled={spinning}
          className="btn btn-primary btn-lg w-48"
        >
          {spinning ? "Spinning..." : "Spin"}
        </button>
      </div>

      {selected && (
        <p className="mt-4 text-green-600 font-semibold text-lg">
          🎯 You got: {selected}
        </p>
      )}
    </div>
  );
};

export default TourSpinner;
