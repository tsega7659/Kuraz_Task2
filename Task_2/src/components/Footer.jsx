import React from "react";
import { FaGooglePay } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Jadoo.</h2>
            <p className="text-gray-600 mb-2">
              Read your tips in minute.get full Contact for much longer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help/FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Affiliates</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">More</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Airlines</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Airline fees</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Discover our app</h3>
              <div className="lg:flex space-x-2 ">
                <button className="bg-black text-white px-3 py-1 my-2 rounded-lg flex items-center">
                    <div className="flex items-center">
                        <FaGooglePay className="text-white text-lg" />
                        <span className="ml-2">Download</span>
                    </div>
                </button>
                <button className="bg-black text-white px-3 py-1  rounded-lg flex items-center">
                  <div className="flex items-center">
                    <FaGooglePay className="text-white text-lg" />
                    <span className="ml-2">Google</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;