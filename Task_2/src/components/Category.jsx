import React from 'react'
import img1 from '../assets/img1.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

function Category() {
    const categories = [
        {
            id: 1,
            title: "Calculated Weather",
            description: "Built Wicket longer admire do barton vanity itself do in it.",
            image: img1,
        },
        
        {
            id: 3,
            title: "Local Events",
            description: "Built Wicket longer admire do barton vanity itself do in it.",
            image: img3
        },
        {
            id: 4,
            title: "Customization",
            description: "Built Wicket longer admire do barton vanity itself do in it.",
            image: img4
        }
    ]

    return (
        <div className="">
            <div className='flex justify-center items-center my- mt-24 font-medium text-[#5E6282]'>
                <h1>CATEGORY</h1>
            </div>
            <div>
                <h1 className="text-5xl font-bold text-center my-8 text-blue-950">We Offer Best Services</h1>
            </div>
            <div className='font-medium text-[#5E6282]'>
                <div className='bg-white p-8 m-8 flex justify-evenly items-center'>
                    {categories.map((category) => (
                        <div 
                            key={category.id} 
                            className="mx-8 flex flex-col items-center p-6 transition-all duration-300 ease-in-out hover:rounded-xl hover:shadow-xl hover:shadow-gray-400 hover:translate-y-1"
                        >
                            <div>
                                <img src={category.image} alt={category.title} className="w-16 h-16" />
                            </div>
                            <div className='p-4 font-medium text-[#5E6282]'>
                                <h2 className="text-lg font-semibold">{category.title}</h2>
                            </div>
                            <div className='p-4'>
                                <p className='px-6 text-[#5E6282] text-center'>{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category