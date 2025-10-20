import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCard = ({ spot, spots, setspots }) => {
  const {
    _id,
    name,
    country,
    cost,
    seasonality,
    travel_time,
    totaVisitorsPerYear,
    photo,
  } = spot;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tour-avels-server.vercel.app/touristsSpot/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Spot has been deleted.", "success");
              const remaining = spots.filter((s) => s._id !== _id);
              setspots(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 mb-6">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={photo}
            alt={name}
            className="w-full md:w-40 h-40 md:h-40 rounded-xl object-cover border border-gray-200"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-purple-600">{name}</h2>
            <p className="text-gray-700 font-medium mt-1">
              <FaMapMarkerAlt className="inline mr-2 text-red-500" />
              {country}
            </p>
            <div className="flex flex-wrap gap-4 text-gray-600 mt-2">
              <p>
                <FaDollarSign className="inline mr-1 text-green-500" /> {cost}
              </p>
              <p>
                <FaCalendarAlt className="inline mr-1 text-blue-500" /> {seasonality}
              </p>
              <p>
                <FaUsers className="inline mr-1 text-orange-500" /> {totaVisitorsPerYear} Visitors
              </p>
              <p>Travel Time: {travel_time}</p>
            </div>
          </div>

          {/* Buttons under details */}
          <div className="flex flex-wrap gap-3 mt-4">
            <Link to={`/details/${_id}`} className="btn btn-primary px-6 py-2">
              View
            </Link>
            <Link to={`updatespot/${_id}`} className="btn btn-secondary px-6 py-2">
              Edit
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 hover:bg-red-600 text-white px-6 py-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
