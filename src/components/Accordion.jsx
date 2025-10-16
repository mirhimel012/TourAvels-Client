import "animate.css";

const Accordion = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      
      {/* Heading */}
      <h2 className="animate__animated animate__fadeInDown text-center mb-12 text-purple-800 font-extrabold text-3xl lg:text-5xl drop-shadow-md">
        Frequently Asked Questions
      </h2>

      <div className="w-full space-y-4">
        {/* Sundarbans */}
        <div className="collapse collapse-plus bg-white shadow-lg rounded-2xl border border-purple-200">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-purple-700 flex justify-between">
            🌳 What makes the Sundarbans unique?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed">
            <p>
              The Sundarbans is the world’s largest mangrove forest, home to the
              Royal Bengal Tiger and countless wildlife. It is also a UNESCO
              World Heritage Site.
            </p>
          </div>
        </div>

        {/* Cox's Bazar */}
        <div className="collapse collapse-plus bg-white shadow-lg rounded-2xl border border-purple-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-purple-700">
            🏖 Why is Cox’s Bazar famous?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed">
            <p>
              Cox’s Bazar is home to the longest natural sea beach in the world,
              stretching over 120 km. It’s the most popular tourist spot in
              Bangladesh.
            </p>
          </div>
        </div>

        {/* Sylhet */}
        <div className="collapse collapse-plus bg-white shadow-lg rounded-2xl border border-purple-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-purple-700">
            🌿 Why visit Sylhet?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed">
            <p>
              Sylhet is famous for its tea gardens, Ratargul Swamp Forest, and
              Jaflong. With green hills and waterfalls, it’s a natural paradise.
            </p>
          </div>
        </div>

        {/* Saint Martin's */}
        <div className="collapse collapse-plus bg-white shadow-lg rounded-2xl border border-purple-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-purple-700">
            🏝 What’s special about Saint Martin’s Island?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed">
            <p>
              Known as the “Coral Island” of Bangladesh, Saint Martin’s offers
              crystal-clear waters, coral reefs, and stunning beaches.
            </p>
          </div>
        </div>

        {/* Bandarban */}
        <div className="collapse collapse-plus bg-white shadow-lg rounded-2xl border border-purple-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg lg:text-xl font-semibold text-purple-700">
            ⛰ Why is Bandarban a must-visit?
          </div>
          <div className="collapse-content text-gray-700 leading-relaxed">
            <p>
              Bandarban is a hill district with breathtaking mountain views,
              tribal culture, and spots like Nilgiri & Boga Lake, perfect for
              adventure seekers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
