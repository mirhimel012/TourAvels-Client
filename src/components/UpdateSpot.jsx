import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const {
    _id,
    name,
    country,
    cost,
    seasonality,
    travel_time,
    totaVisitorsPerYear,
    message,
    location,
    photo,
  } = spot;

  const handleUpdateSpot = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedSpot = {
      name: form.tourists_spot_name.value,
      country: form.country_Name.value,
      cost: form.average_cost.value,
      seasonality: form.seasonality.value,
      travel_time: form.travel_time.value,
      totaVisitorsPerYear: form.totaVisitorsPerYear.value,
      message: form.message.value,
      location: form.location.value,
      photo: form.photo.value,
    };

    fetch(`https://tour-avels-server.vercel.app/touristsSpot/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="flex justify-center py-16 bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-8">
          Update Tourist Spot: {name}
        </h2>

        <form onSubmit={handleUpdateSpot} className="space-y-6">
          {/* Spot & Country */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Tourist Spot Name</label>
              <input
                type="text"
                name="tourists_spot_name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Country</label>
              <input
                type="text"
                name="country_Name"
                defaultValue={country}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Cost & Seasonality */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Average Cost</label>
              <input
                type="text"
                name="average_cost"
                defaultValue={cost}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Seasonality</label>
              <input
                type="text"
                name="seasonality"
                defaultValue={seasonality}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Travel Time & Visitors */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Travel Time</label>
              <input
                type="text"
                name="travel_time"
                defaultValue={travel_time}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Total Visitors/Year</label>
              <input
                type="text"
                name="totaVisitorsPerYear"
                defaultValue={totaVisitorsPerYear}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">Short Description</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              defaultValue={message}
              className="block p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            ></textarea>
          </div>

          {/* Location & Photo */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={location}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white text-xl rounded-xl shadow-md transition-all duration-300"
          >
            Update Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
