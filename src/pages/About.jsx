// import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="container mx-auto max-w-5xl text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-purple-700 mb-8 drop-shadow-md">
          About TourAvels
        </h2>

        {/* Intro Text */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mx-auto max-w-3xl mb-12">
          TourAvels is your trusted guide to discovering the natural beauty,
          cultural heritage, and adventure of Bangladesh. From the world’s
          longest sea beach in Cox’s Bazar to the serene tea gardens of Sylhet,
          our mission is to connect you with unforgettable travel experiences
          across this breathtaking country.
        </p>

        {/* Mission, Expertise, Sustainability */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              🌍 Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              TourAvels was built to make traveling in Bangladesh simple,
              exciting, and accessible for everyone. We aim to provide
              personalized travel recommendations and seamless trip planning
              for adventurers, families, and explorers alike.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              🧭 Our Expertise
            </h3>
            <p className="text-gray-700 leading-relaxed">
              With knowledge of the most iconic destinations and hidden gems,
              our team has crafted guides for beaches, hills, forests, and
              cultural sites across Bangladesh. Whether it’s Bandarban,
              Sundarbans, or Saint Martin’s — we’ve got you covered.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              🌱 Our Commitment
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We believe in responsible tourism. TourAvels works to promote
              eco-friendly travel and community-based tourism, ensuring that
              future generations can continue to enjoy the wonders of
              Bangladesh while preserving its environment and heritage.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
