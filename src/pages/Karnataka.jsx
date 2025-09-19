import React from "react";

const Karnataka = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-center px-6 pt-20">
      <h2
        className="text-center text-2xl md:text-3xl font-bold mb-6 text-[#1b130d]"
        style={{ fontFamily: '"Noto Serif", serif' }}
      >
        Welcome to Karnataka Heritage
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl rounded-xl shadow-lg p-6">
        
        {/* Hampi */}
        <div className="flex flex-col rounded-xl shadow-lg bg-white overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src="images.jpg"
              alt="Hampi"
              className="w-full h-56 md:h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="bg-gray-100 py-3">
            <p className="text-lg font-semibold">Hampi</p>
          </div>
        </div>

        {/* Gol Gumbaz */}
        <div className="flex flex-col rounded-xl shadow-lg bg-white overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src="gol.webp"
              alt="Gol Gumbaz"
              className="w-full h-56 md:h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="bg-gray-100 py-3">
            <p className="text-lg font-semibold">Gol Gumbaz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karnataka;
