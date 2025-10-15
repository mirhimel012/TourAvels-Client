const Slider = () => {
  return (
    <div>
      <div className="carousel w-full lg:h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/1bLZt9J/deer-3673017-1920.jpg"
            className="w-full brightness-50"
          />
          <div className="absolute top-2/3 m-3">
            <h2 className="text-3xl font-bold text-white">Sundarban</h2>
            <p className="text-xl text-white w-1/4">
              The Sundarbans mangrove forest, one of the largest such forests in
              the world (140,000 ha), lies on the delta of the Ganges,
              Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent
              to the border of India's Sundarbans World Heritage site inscribed
              in 1987.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/nDtyC15/goddess-173182-1920.jpg"
            className="w-full brightness-75"
          />
          <div className="absolute top-2/3 m-3 ">
            <h2 className="text-3xl font-bold text-white">Bangkok</h2>
            <p className="text-xl text-white w-1/4">
              Bangkok is renowned for its vibrant street life, rich cultural
              heritage, and majestic temples like the Grand Palace and Wat Arun.
              It is also famous for its bustling markets, delectable cuisine,
              and lively nightlife.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3yBKgkf/cliff-5954980-1920.jpg"
            className="w-full"
          />
          <div className="absolute top-2/3 m-3">
            <h2 className="text-3xl font-bold text-white">Bali</h2>
            <p className="text-xl text-white w-1/4">
              Known as the Island of the Gods, Bali is an island paradise that
              has much to offer its visitors. Lush rice fields, ancient temples,
              magical sunsets, traditional villages, idyllic beaches and the
              best hotels in the world are some of the island's most remarkable
              attractions.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/sJ0z6zf/kuala-lumpur-1820944-1920.jpg"
            className="w-full"
          />
          <div className="absolute top-2/3 m-3">
            <h2 className="text-3xl font-bold text-white">Kuala Lumpur</h2>
            <p className="text-xl text-white w-1/4">
              It is the country's largest urban area and its cultural,
              commercial, and transportation centre. In 1972 Kuala Lumpur was
              designated a municipality, and in 1974 this entity and adjacent
              portions of surrounding Selangor state became a federal territory.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
