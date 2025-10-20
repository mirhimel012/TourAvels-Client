import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MyCard from "../components/MyCard";
import useAuth from "../hooks/useAuth";
import { FaRegFolderOpen } from "react-icons/fa";

const MyList = () => {
  const { user } = useAuth();
  const loadedSpot = useLoaderData();
  const [spots, setSpots] = useState(loadedSpot);

  const validSpots = Array.isArray(spots) ? spots : [];
  const useremail = user?.email;
  const userSpots = validSpots.filter((spot) => spot.useremail === useremail);

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-10">
      {userSpots.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userSpots.map((spot) => (
            <MyCard
              key={spot._id}
              spot={spot}
              spots={validSpots}
              setspots={setSpots}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96 text-gray-500 space-y-4">
          <FaRegFolderOpen className="text-6xl text-gray-300" />
          <p className="text-xl">No spots found for your account.</p>
          <p className="text-gray-400">Add some spots to see them listed here.</p>
        </div>
      )}
    </div>
  );
};

export default MyList;
