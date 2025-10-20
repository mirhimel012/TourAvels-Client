import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SpotCard from '../components/SpotCard';
import "animate.css";

// Animated count component
const AnimatedCount = ({ count }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = count;
    if (end === 0) return;
    const duration = 1500; // 1.5 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCurrent(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate__animated animate__fadeInDown">
      Total Tourists Spots: {current}
    </h1>
  );
};

const AllTouristsSpot = () => {
  const loadedSpot = useLoaderData();
  const [spots, setSpots] = useState(loadedSpot);
  const validSpots = Array.isArray(spots) ? spots : [];

  return (
    <div className="px-6 md:px-20 py-12 bg-gray-50 min-h-screen">
      {/* Animated Count Header */}
      <AnimatedCount count={validSpots.length} />

      {/* Spots Grid */}
      {validSpots.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {validSpots.map((spot) => (
            <div className="animate__animated animate__fadeInUp" key={spot._id}>
              <SpotCard spot={spot} spots={validSpots} setspots={setSpots} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-12 p-8 bg-white shadow-lg rounded-2xl animate__animated animate__fadeIn">
          <p className="text-gray-500 text-xl mb-4">
            ⚠️ No tourist spots found.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn bg-purple-500 text-white hover:bg-purple-600 transition-colors"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default AllTouristsSpot;

