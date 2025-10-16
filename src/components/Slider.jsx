import { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }, 3000); // 1000 milliseconds is 1 second

    return () => clearTimeout(timer);
  }, [currentSlide]);


  return (
    <div className="carousel w-full h-[620px] relative overflow-hidden">
  <div id="slide1" className={`carousel-item absolute w-full h-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
    <img src="https://i.ibb.co.com/Q7kWcgMJ/bisnakandi-2692228.jpg" className="w-full h-full object-cover" />
  </div>
  <div id="slide2" className={`carousel-item absolute w-full h-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
    <img src="https://i.ibb.co.com/tTGs0fxY/Cos-x.jpg" className="w-full h-full object-cover" />
  </div>
  <div id="slide3" className={`carousel-item absolute w-full h-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
    <img src="https://i.ibb.co.com/Txrxmjfv/River-Beauty.jpg" className="w-full h-full object-cover" />
  </div>
  <div id="slide4" className={`carousel-item absolute w-full h-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
    <img src="https://i.ibb.co.com/Kcw70nGS/sky.jpg" className="w-full h-full object-cover" />
  </div>
</div>

  );
};

export default Slider;
