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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className='text-center mb-4'>
                <h1 className='text-lg font-medium text-[#5E6282] uppercase tracking-wider'>CATEGORY</h1>
            </div>
            <div className='text-center mb-12'>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">We Offer Best Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {categories.map((category) => (
                    <div 
                        key={category.id} 
                        className="bg-white p-6 rounded-lg flex flex-col items-center transition-all duration-300 ease-in-out 
                                   hover:shadow-xl hover:shadow-gray-200 hover:-translate-y-2 hover:border hover:border-amber-100
                                   group cursor-pointer"
                    >
                        <div className='mb-6 p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors duration-300'>
                            <img 
                                src={category.image} 
                                alt={category.title} 
                                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" 
                            />
                        </div>
                        <div className='text-center mb-4'>
                            <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-500 transition-colors duration-300">
                                {category.title}
                            </h2>
                        </div>
                        <div className='text-center'>
                            <p className='text-[#5E6282] text-sm md:text-base leading-relaxed'>
                                {category.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category