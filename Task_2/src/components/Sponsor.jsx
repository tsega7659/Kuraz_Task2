import React from 'react'
import image2 from '../assets/im1.png'
import image3 from '../assets/im2.png'
import image4 from '../assets/im3.png'
import image5 from '../assets/im4.png'
import image6 from '../assets/im5.png'
function Sponsor() {
  return (
    <div>
        
        <div className="flex justify-evenly">
            <img src={image2} alt="Sponsor 1" className="object-contain hover:shadow-2xl" />
            <img src={image3} alt="Sponsor 2" className="object-contain hover:shadow-2xl" />
            <img src={image4} alt="Sponsor 3" className="object-contain hover:shadow-2xl" />
            <img src={image5} alt="Sponsor 4" className="object-contain hover:shadow-2xl" />
            <img src={image6} alt="Sponsor 5" className="object-contain hover:shadow-2xl" />
        </div>
    </div>
  )
}

export default Sponsor
   