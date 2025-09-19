import React from "react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h2
        className="text-center text-2xl md:text-3xl font-bold mb-3 sm:pt-10 text-[#1b130d]"
        style={{ fontFamily: '"Noto Serif", serif' }}
      >
        Explore More Heritage Sites
      </h2>

      {/* Parent Grid with bigger boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-6 grid-rows-auto gap-4 w-full max-w-5xl h-auto sm:h-[500px] rounded-xl shadow-lg p-6">
        
        {/* Karnataka */}
        <div
          onClick={() => navigate("/karnataka")}
          className="flex items-center justify-center text-2xl font-semibold col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 rounded-xl shadow-lg bg-white cursor-pointer hover:bg-gray-100 transition"
        >
          Karnataka
        </div>

        {/* Kerala */}
        <div
          onClick={() => navigate("/kerala")}
          className="flex items-center justify-center text-2xl font-semibold col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 sm:col-start-3 rounded-xl shadow-lg bg-white cursor-pointer hover:bg-gray-100 transition p-2"
        >
          Kerala
        </div>

        {/* Maharashtra */}
        <div
          onClick={() => navigate("/maharashtra")}
          className="flex items-center justify-center text-2xl font-semibold col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 sm:col-start-5 rounded-xl shadow-lg bg-white cursor-pointer hover:bg-gray-100 transitio p-2"
        >
          Maharashtra
        </div>

        {/* Madhya Pradesh */}
        <div
          onClick={() => navigate("/madhya-pradesh")}
          className="flex items-center justify-center text-2xl font-semibold col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 rounded-xl shadow-lg bg-white cursor-pointer hover:bg-gray-100 transition p-2"
        >
          Madhya Pradesh
        </div>

      </div>
    </div>
  );
};

export default Explore;
