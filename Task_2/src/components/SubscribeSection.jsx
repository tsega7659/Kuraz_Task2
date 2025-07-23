import { FiMail } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-r from-[#f9f9ff] to-[#e6e6ff] rounded-tl-[100px] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl relative overflow-hidden px-6 py-16 md:px-20 lg:px-32 my-10 md:my-20 mx-4 sm:mx-10 md:mx-20 lg:mx-32 shadow-lg">
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full opacity-30"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-100 rounded-full opacity-30"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 max-w-3xl mb-6 md:mb-10 leading-tight">
          Subscribe to get information, latest news and other<br className="hidden md:block" /> interesting offers about Jadoo
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl"
        >
          <div className="relative flex items-center bg-white rounded-xl shadow-sm px-4 py-3 w-full sm:w-[70%] transition-all duration-300 focus-within:shadow-md focus-within:ring-2 focus-within:ring-indigo-200">
            <FiMail className="text-gray-400 mr-2 text-lg" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 text-sm md:text-base"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`relative overflow-hidden bg-gradient-to-r from-[#FF7C57] to-[#FF5E62] text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:from-[#FF6C4C] hover:to-[#FF4E52] w-full sm:w-auto ${
              isSubmitting ? "opacity-80 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center">
                Subscribe <FaPaperPlane className="ml-2" />
              </span>
            )}
          </button>
        </form>

        {isSuccess && (
          <div className="mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-lg animate-fade-in">
            Thank you for subscribing!
          </div>
        )}
      </div>
      <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg transform rotate-0 hover:rotate-45 transition-transform duration-500">
        <FaPaperPlane className="text-xl" />
      </div>
    </div>
  );
}