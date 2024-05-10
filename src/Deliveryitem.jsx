
import React, { useState } from 'react';

const Deliveryitem = ({ images }) => {
  const [startImage, setStartImage] = useState(0);
  const showPrevious = () => {
    if (startImage > 0) {
      setStartImage(startImage - 1);
    }
  };

  const showNext = () => {
    if (startImage < images.length - 5) {
      setStartImage(startImage + 1);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={showPrevious}
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${startImage === 0 ? 'hidden' : ''}`}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="flex overflow-hidden ">
        {images.slice(startImage, startImage + 5).map((image, index) => (
          <div key={index}              >                                       
            <div className="rounded-full overflow-hidden w-55 h-55">
              <img src={image.path} alt={image.alt} className="w-full h-full object-cover" />
            </div>
            <p className="text-center mt-2 font-bold">{image.name}</p>
            {/* <p className="text-center mt-2 ">{image.owner}</p> */}
          </div>
        ))}
      </div>

      <button
        onClick={showNext}
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${startImage === images.length - 5 ? 'hidden' : ''}`}
      >
        <i className="fa-solid fa-greater-than"></i>
      </button>
    </div>
  );
};

export default Deliveryitem;



// className="w-1/5 flex justify-center items-center bg-green-800 p-8xl"