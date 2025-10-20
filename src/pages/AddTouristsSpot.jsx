import Swal from "sweetalert2";

const AddSpot = () => {
  const handleAddSpot = (event) => {
    event.preventDefault();
    const form = event.target;

    const newSpot = {
      name: form.tourists_spot_name.value,
      country: form.country_Name.value,
      cost: form.average_cost.value,
      seasonality: form.seasonality.value,
      travel_time: form.travel_time.value,
      totaVisitorsPerYear: form.totaVisitorsPerYear.value,
      username: form.username.value,
      useremail: form.useremail.value,
      message: form.querySelector("#message").value,
      location: form.location.value,
      photo: form.photo.value,
    };

    // send data to the server
    fetch("https://tour-avels-server.vercel.app/touristsSpot", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="flex justify-center py-16 bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-3xl p-10">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-8">
          Add a Tourist Spot
        </h2>

        <form onSubmit={handleAddSpot} className="space-y-6">
          {/* Spot & Country */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Tourist Spot Name</label>
              <input
                type="text"
                name="tourists_spot_name"
                placeholder="Enter Spot Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Country</label>
              <input
                type="text"
                name="country_Name"
                placeholder="Enter Country"
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
                placeholder="Enter Cost"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Seasonality</label>
              <input
                type="text"
                name="seasonality"
                placeholder="Seasonality"
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
                placeholder="Travel Time"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Total Visitors/Year</label>
              <input
                type="text"
                name="totaVisitorsPerYear"
                placeholder="Visitors Per Year"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">Short Description</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your thoughts here..."
              className="block p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            ></textarea>
          </div>

          {/* User Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">User Name</label>
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">User Email</label>
              <input
                type="email"
                name="useremail"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Location & Photo */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white text-xl rounded-xl shadow-md transition-all duration-300"
          >
            Add Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpot;
