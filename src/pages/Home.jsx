import { useState } from "react";
import FirebaseProvider from "../FirebaseProvider/FirebaseProvider";
import Slider from "../components/Slider";
import SpotCard from "../components/SpotCard";
import { useLoaderData } from "react-router-dom";
import Accordion from "../components/Accordion";
import VerticalTickerImage from "../components/VerticalTickerImage";
import VerticalTicker from "../components/VerticalTicker";

const Home = () => {
  const loadedSpot = useLoaderData();
  const [spots, setSpots] = useState(loadedSpot);

  const spotsToShow = Array.isArray(spots) ? spots.slice(0, 4) : [];

  return (
    <div className="w-full">
      <VerticalTicker />
      <Slider />

      {/* Hero Section */}
      <div className="text-center m-10">
        <h2 className="animate__animated animate__fadeInDown mb-12 text-purple-800 font-extrabold text-3xl lg:text-5xl drop-shadow-md">
          Iconic Destinations
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {spotsToShow.map((spot) => (
            <SpotCard
              key={spot._id}
              spot={spot}
              spots={spots}
              setspots={setSpots}
            />
          ))}
        </div>
      </div>

      {/* Vertical Ticker Section */}
      <div className="px-6">
        <VerticalTickerImage />
      </div>

      {/* Accordion Section */}
      <div className="lg:m-8">
        <Accordion />
      </div>

      <FirebaseProvider />
    </div>
  );
};

export default Home;
