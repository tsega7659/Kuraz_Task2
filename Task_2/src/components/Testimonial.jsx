import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    message:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    message:
      "Customer support was fantastic. Everything was smooth and simple. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sarah Williams",
    location: "London, UK",
    message:
      "Amazing experience! The platform is intuitive and easy to use. I loved every step of the process.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-20 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Column */}
        <div className="flex-1">
          <h3 className="text-sm text-gray-500 font-semibold uppercase mb-2">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-8">
            What People Say <br /> About Us.
          </h2>
          <div className="flex gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-[#202336]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              “{testimonials[current].message}”
            </p>
            <div className="mt-6">
              <p className="text-[#202336] font-semibold text-lg capitalize">
                {testimonials[current].name}
              </p>
              <p className="text-gray-500 text-sm">{testimonials[current].location}</p>
            </div>
          </div>
          <div className="absolute -top-6 left-6 z-20">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-14 h-14 rounded-full border-4 border-white shadow-md"
            />
          </div>
          <div className="absolute top-6 left-6 w-full h-full bg-gray-100 rounded-xl z-0" />
        </div>
      </div>
    </div>
  );
}
