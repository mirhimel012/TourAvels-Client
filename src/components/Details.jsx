import { useLoaderData } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt, FaUsers, FaClock } from "react-icons/fa";

const Details = () => {
  const spot = useLoaderData();
  const {
    name,
    country,
    cost,
    seasonality,
    travel_time,
    totaVisitorsPerYear,
    username,
    useremail,
    message,
    location,
    photo,
  } = spot;

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 bg-white rounded-3xl shadow-xl">
      {/* Big Hero Image */}
      <div className="overflow-hidden rounded-3xl mb-8 shadow-lg">
        <img
          src={photo}
          alt={name}
          className="w-full h-96 md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Main Details */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-600">{name}</h1>
        <p className="text-xl text-gray-700 flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500" /> {country}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600 text-lg">
          <p className="flex items-center gap-2">
            <FaDollarSign className="text-green-500" /> Cost: {cost}
          </p>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" /> Seasonality: {seasonality}
          </p>
          <p className="flex items-center gap-2">
            <FaUsers className="text-orange-500" /> Visitors/Year: {totaVisitorsPerYear}
          </p>
          <p className="flex items-center gap-2">
            <FaClock className="text-purple-500" /> Travel Time: {travel_time}
          </p>
        </div>

        <p className="text-gray-700 text-lg">
          <span className="font-medium">Location:</span> {location}
        </p>

        <p className="text-gray-700 text-lg">
          <span className="font-medium">Description:</span> {message}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
          <p>
            <span className="font-medium">User Name:</span> {username}
          </p>
          <p>
            <span className="font-medium">User Email:</span> {useremail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
