import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import SpotCard from '../components/SpotCard';

const AllTouristsSpot = () => {
  const loadedSpot = useLoaderData();
  const [spots, setSpots] = useState(loadedSpot);

  // Ensure we always have an array
  const validSpots = Array.isArray(spots) ? spots : [];

  return (
    <div className="m-20">
      <h1 className="text-5xl font-bold text-center my-16 text-purple-600">
        Total Tourists Spots: {validSpots.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {validSpots.map((spot) => (
          <SpotCard
            key={spot._id}
            spot={spot}
            spots={validSpots}
            setspots={setSpots}
          />
        ))}
      </div>

      {!Array.isArray(spots) && (
        <p className="text-center text-red-500 mt-6">
          ⚠️ Failed to load tourist spots. Please try again later.
        </p>
      )}
    </div>
  );
};

export default AllTouristsSpot;