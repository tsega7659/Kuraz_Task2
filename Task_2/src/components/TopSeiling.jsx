import React from 'react'
import img1 from '../assets/Image1.png'  
import img2 from '../assets/Image2.jpg' 
import img3 from '../assets/Image3.png' 
import { FaPlane } from 'react-icons/fa6'

function TopSelling() {
    const destinations = [
        {
            id: 1,
            title: "Rome, Italy",
            price: "$5.42k",
            duration: "10 Days Trip",
            image: img1,
        },
        {
            id: 2,
            title: "London, UK",
            price: "$4.2k",
            duration: "12 Days Trip",
            image: img2,
        },
        {
            id: 3,
            title: "Full Europe",
            price: "$15k",
            duration: "28 Days Trip",
            image: img3,
        }
    ];

    return (
        <div className=" bg-white">
            <div className="text-center">
                <p className="text-[#5E6282] font-medium text-sm">Top Selling</p>
                <h1 className="text-4xl font-bold text-blue-950 my-4">Top Destinations</h1>
            </div>

            <div className="flex justify-center gap-12 flex-wrap mt-12 px-8">
                {destinations.map(dest => (
                    <div key={dest.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 duration-300 max-w-xs w-full">
                        <div className="rounded-b-2xl overflow-hidden">
                            <img src={dest.image} alt={dest.title} className="w-full h-56 object-cover" />
                        </div>
                        <div className="p-5 text-[#5E6282]">
                            <div className="flex justify-between items-center font-medium text-base mb-2">
                                <h2>{dest.title}</h2>
                                <p>{dest.price}</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-lg"><FaPlane /></span>
                                <span className="text-[#5E6282]">{dest.duration}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopSelling;
