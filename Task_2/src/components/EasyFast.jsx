import React from 'react';
import image from '../assets/Image.png';
import yellow from '../assets/yellow.png';
import red from '../assets/red.png';
import blue from '../assets/blue.png';
import rome from '../assets/Image.png';

function EasyFast() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-32 py-16 md:py-24">
      <div className="text-center md:text-left">
        <h2 className="text-sm font-medium text-[#5E6282] uppercase tracking-wider">Easy and Fast</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mt-8">
        <div className="flex flex-col gap-8 max-w-lg">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-serif text-blue-950 leading-tight">
            Book Your Next Trip <br className="hidden sm:block" /> In 3 Easy Steps
          </h1>
          <div className="space-y-6">
            {[
              { icon: yellow, title: "Choose Destination", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." },
              { icon: red, title: "Make Payment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." },
              { icon: blue, title: "Reach Airport on Selected Date", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus." }
            ].map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-amber-50 hover:shadow-sm cursor-pointer group"
              >
                <div className="p-2 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors duration-300">
                  <img 
                    src={step.icon} 
                    alt={step.title} 
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base sm:text-lg text-[#14183E] group-hover:text-amber-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5E6282] mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full lg:w-auto">
          <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
            <img 
              src={image} 
              alt="Trip to Greece" 
              className="w-full h-auto rounded-2xl object-cover shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]" 
            />
            <div className="absolute  -bottom-6 lg:-right-6 sm:-bottom-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-xs transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center gap-3">
                <img src={rome} alt="Trip to Rome" className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#14183E]">Trip to Rome</h4>
                  <p className="text-xs sm:text-sm text-[#5E6282]">14-29 June</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 text-xs sm:text-sm">
                <span className="text-[#5E6282]">40 people are going</span>
                <button className="text-amber-500 hover:text-amber-600 transition-colors">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyFast;