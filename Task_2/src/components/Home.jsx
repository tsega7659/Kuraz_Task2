import React from 'react'
import home from '../assets/home.jpg'
import { FaPlay } from "react-icons/fa";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className='flex flex-col lg:flex-row w-full'>
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-4 flex flex-col mx-auto lg:mx-24">
          <div className='mt-4 lg:mt-18'>
            <h1 className="font-bold text-[#DF6951] py-4 lg:py-6 text-sm lg:text-base">BEST DESTINATIONS AROUND THE WORLD</h1>
          </div>
          <div>
            <h1 className='font-bold text-4xl sm:text-5xl lg:text-7xl font-serif text-blue-950 leading-tight'>
              Travel, enjoy<br />and live a new<br />and full life.
            </h1>
          </div>
          <div className='mt-6 lg:mt-8 font-sans font-medium text-base lg:text-lg text-[#5E6282]'>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            <p>Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className='flex flex-col sm:flex-row items-start sm:items-center mt-5 gap-4'>
            <div>
              <button className='bg-[#ebba0a] text-white px-6 py-3 lg:py-4 mt-4 lg:mt-8 rounded-lg hover:bg-[#C85A4A] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg'>
                Find out more
              </button>
            </div>
            <div className='flex items-center'>
              <div className='mr-4 sm:mr-10'>
                <button className='bg-[#DF6951] shadow-lg shadow-[#DF6951]/50 px-4 py-4 sm:px-5 sm:py-5 mt-4 lg:mt-8 ml-0 sm:ml-4 rounded-full border border-[#DF6951] hover:bg-[#c04a3a] transition-all duration-300 transform hover:scale-110'>
                  <FaPlay className='text-white text-sm sm:text-base' />
                </button>
              </div>
              <div className='mt-4 lg:mt-12 font-sans text-sm sm:text-base hover:text-[#DF6951] transition-colors duration-300 cursor-pointer'>
                <p>Play demo</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-1/2 bg-gradient-to-r from-white to-[#faead1] relative overflow-hidden">
          <img 
            src={home} 
            alt="Travel" 
            className="w-full h-auto object-cover transition-all duration-500 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-[#faead1]/30 hover:opacity-0 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  )
}

export default Home