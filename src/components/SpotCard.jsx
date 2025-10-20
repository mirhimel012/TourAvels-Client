import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const SpotCard = ({ spot }) => {
  const { _id, name, location, photo } = spot;

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Hero Image with zoom hover */}
      <div className="overflow-hidden relative">
        <img
          src={photo}
          alt={name}
          className="w-full h-72 md:h-80 object-cover transform hover:scale-110 transition-transform duration-700"
        />
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg hover:text-purple-300 transition-colors duration-300">
          {name}
        </h2>
        <p className="flex items-center gap-2 mt-2 text-white/90 font-medium">
          <FaMapMarkerAlt className="text-red-400" /> {location}
        </p>

        {/* Animated Button */}
        <Link
          to={`/details/${_id}`}
          className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-pulse"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SpotCard;
