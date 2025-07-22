import React from 'react';
import image from '../assets/Image.png';
import yellow from '../assets/yellow.png';
import red from '../assets/red.png';
import blue from '../assets/blue.png';
import rome from '../assets/Image.png'; // Trip to Rome image

function EasyFast() {
  return (
    <div className="flex flex-col px-32 mt-32 text-[#5E6282]">
      <h2 className="text-sm font-medium">Easy and Fast</h2>
      <div className="flex justify-between items-center mt-4">
        
        <div className="flex flex-col gap-6 max-w-md">
          <h1 className="font-bold text-5xl font-serif text-blue-950 leading-snug">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h1>
          <div className="flex items-start gap-4">
            <img src={yellow} alt="Choose Destination" className="w-12 h-12" />
            <div>
              <h3 className="font-semibold text-base text-[#14183E]">Choose Destination</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src={red} alt="Make Payment" className="w-12 h-12" />
            <div>
              <h3 className="font-semibold text-base text-[#14183E]">Make Payment</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img src={blue} alt="Reach Airport" className="w-12 h-12" />
            <div>
              <h3 className="font-semibold text-base text-[#14183E]">Reach Airport on Selected Date</h3>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={image} alt="Trip to Greece" className="w-[800px] h-[400px] object-cover" />
        </div>
      </div>
    </div>
  );
}

export default EasyFast;
