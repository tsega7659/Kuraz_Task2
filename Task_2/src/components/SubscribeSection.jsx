import { FiMail } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";

export default function SubscribeSection() {
  return (
<div className="bg-[#f2f2ff] rounded-tl-full rounded-3xl relative overflow-hidden px-6 py-16 md:px-20 lg:px-32 my-20 mx-32">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 max-w-3xl mb-10">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl"
        >
          <div className="flex items-center bg-white rounded-xl shadow-sm px-4 py-3 w-full sm:w-[70%]">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF7C57] to-[#FF5E62] text-white font-medium px-6 py-3 rounded-xl transition hover:opacity-90 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="absolute -top-0 right-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-md">
        <FaPaperPlane className="text-xl" />
      </div>
    </div>
  );
}
