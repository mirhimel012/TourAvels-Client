import { useLoaderData } from 'react-router-dom'
import { useState } from 'react';
import MyCard from '../components/MyCard';
import useAuth from '../hooks/useAuth';

const MyList = () => {
  const { user } = useAuth();
  const loadedSpot = useLoaderData();
  const [spots, setSpots] = useState(loadedSpot);

  // Ensure it's always an array
  const validSpots = Array.isArray(spots) ? spots : [];
  const useremail = user?.email;
  const userSpots = validSpots.filter(spot => spot.useremail === useremail);

  return (
    <div className="m-20">
      {userSpots.length > 0 ? (
        <div>
          {userSpots.map(spot => (
            <MyCard
              key={spot._id}
              spot={spot}
              spots={validSpots}
              setspots={setSpots}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No spots found for your account.</p>
      )}
    </div>
  );
};

export default MyList;
