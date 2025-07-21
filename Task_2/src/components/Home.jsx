import React from 'react'
import home from '../assets/home.jpg'
import { FaPlay } from "react-icons/fa";

function Home() {
  return (
    <div>
        <div className='flex w-full'>
              <div className="w-1/2 p-4 flex flex-col mx-24">
              <div className='mt-18'>
                    <h1 className=" font-bold text-[#DF6951] py-6">BEST DESTINATIONS AROUND THE WORLD</h1>
              </div>
              <div>
                  <h1 className='font-bold text-7xl font-serif text-blue-950'>Travel,enjoy<br></br>and Live a new and full life.</h1>
               </div>
                <div className='mt-8 font-sans font-medium text-lg text-[#5E6282]'>
                  <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                  <p>Preferred to sportsmen it engrossed listening.Park gate sell they west hard for the.</p>
                </div>
                <div className='flex  mt-5'>
                  <div className=''>
                    <button className='bg-[#ebba0a] text-white px-6 py-4 mt-8 rounded-lg hover:bg-[#C85A4A] transition duration-300'>Find out more</button>
                </div>
                <div className='flex justify-evenly items-center mx-16'>
                  <div className='mr-10'>
                    <button className='bg-[#DF6951] shadow-lg shadow-[#DF6951] px-5 py-5 mt-8 ml-4 rounded-full border border-[#DF6951]'><FaPlay className='text-white' /></button>
                </div>
                <div className='mt-12 font-sans'>
                  <p>Play demo</p>
                </div>
                </div>
                
                </div>
                
            </div>
            <div className="w-3/4  bg-gradient-to-r from-white  to-[#faead1]">
                <img src={home} alt="Placeholder" className=" objet-cover" />
            </div>
        </div>
    </div>
  )
}

export default Home