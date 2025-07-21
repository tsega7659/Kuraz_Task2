import React from 'react'
import reactLogo from '../assets/logo.jpg'
import "../index.css"
function Navbar() {
  return (
    <div>
        <div className='flex justify-evenly items-center  h-24 font-mono '>
               <div className='mr-32'><img src={reactLogo} className="" alt="logo" /></div>
                <div className=' hover:text-amber-300 hover:cursor-pointer'> Destinations</div>
                <div className=' hover:text-amber-300 hover:cursor-pointer'> Hotels</div>
                <div className=' hover:text-amber-300 hover:cursor-pointer'> Flights</div>
                <div className=' hover:text-amber-300 hover:cursor-pointer'> Bookings</div>
                <div className=' hover:text-amber-300 hover:cursor-pointer'> Login</div>
                <div className=' hover:text-amber-300 hover:cursor-pointer'> Sign Up</div>
                <div className=' hover:text-amber-300 hover:cursor-pointer'> 
                    <select className='text-amber-400 bg-transparent border-none'>
                        <option className='p-2' value="en">EN</option>
                        <option className='p-2' value="fr">FR</option>
                        <option className='p-2' value="es">ES</option>
                    </select>
                </div>
            </div>
        </div>
    
  )
}

export default Navbar