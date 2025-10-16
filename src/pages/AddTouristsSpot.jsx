import Swal from "sweetalert2";
const Addspot = () => {
  const handleAddSpot = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.tourists_spot_name.value;
    const country = form.country_Name.value;
    const cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const username = form.username.value;
    const useremail = form.useremail.value;
    const message = form.querySelector("#message").value;
    const location = form.location.value;
    const photo = form.photo.value;

    const newSpot = {
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
    };
    console.log(newSpot);

    // send data to the server
    fetch("https://tour-avels-server.vercel.app/touristsSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourists Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24 -mt-12">
      <h2 className="text-xl font-extrabold text-purple-600 md:text-3xl">
        Add a Tourists Spot
      </h2>
      <form onSubmit={handleAddSpot}>
        {/* tourists spot name and country name*/}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Tourists Spot Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="tourists_spot_name"
                placeholder="Tourists Spot Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-medium">Country Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="country_Name"
                placeholder="Country Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* average cost and seasonality */}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Average Cost</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="average_cost"
                placeholder="Average Cost"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-medium">Seasonality</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="seasonality"
                placeholder="Seasonality"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* travel time and totaVisitorsPerYear*/}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">Travel Time</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="travel_time"
                placeholder="Travel Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-medium">
                Total Visitors Per Year
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="totaVisitorsPerYear"
                placeholder="Total Visitors Per Year"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* short description */}
        <form id="form">
          <div className="mb-6">
            <div className="form-control w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Short Description
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
        </form>
        {/* user name and user eamil*/}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-medium">User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="username"
                placeholder="User Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-medium">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="useremail"
                placeholder="User Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* location */}
        <div className="mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Spot"
          className="btn text-xl w-full bg-slate-500 hover:bg-green-600 text-white"
        />
      </form>
    </div>
  );
};

export default Addspot;
