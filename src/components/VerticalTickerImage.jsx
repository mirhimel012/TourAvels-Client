import React from "react";

const leftImages = [
  "/images/spot1.jpg",
  "/images/spot2.jpg",
  "/images/spot3.jpg",
  "/images/spot4.jpg",
];

const rightImages = [
  "/images/moment1.jpg",
  "/images/moment2.jpg",
  "/images/moment3.jpg",
  "/images/moment4.jpg",
];

const VerticalTickerImage = () => {
  return (
    <div className="w-full overflow-hidden relative mt-16">
      {/* Section Title */}
      <h3 className="text-center text-3xl lg:text-4xl font-extrabold text-purple-700 drop-shadow-md mb-8">
        Special Moments
      </h3>

      {/* Ticker Container */}
      <div className="flex w-full h-[36rem] max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="flex-1 flex flex-col overflow-hidden relative px-4">
          <div className="animate-tickerUp absolute top-0 w-full">
            {[...leftImages, ...leftImages].map((src, index) => (
              <div
                key={index}
                className="h-64 flex items-center justify-center mb-4 transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
              >
                <img
                  src={src}
                  alt={`Spot ${index + 1}`}
                  className="h-60 w-full object-cover rounded-2xl shadow-xl hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-4 bg-purple-100 mx-2 rounded-full"></div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col overflow-hidden relative px-4">
          <div className="animate-tickerDown absolute top-0 w-full">
            {[...rightImages, ...rightImages].map((src, index) => (
              <div
                key={index}
                className="h-64 flex items-center justify-center mb-4 transform transition-transform duration-500 hover:scale-105 hover:-rotate-1"
              >
                <img
                  src={src}
                  alt={`Moment ${index + 1}`}
                  className="h-60 w-full object-cover rounded-2xl shadow-xl hover:shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes tickerUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes tickerDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-tickerUp {
          animation: tickerUp 14s linear infinite;
        }
        .animate-tickerDown {
          animation: tickerDown 14s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default VerticalTickerImage;
