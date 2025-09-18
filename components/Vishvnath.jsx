import React from "react";

const Vishvnath = () => {
  return (
    <div className="w-full px-4 py-6">
      {/* Page Heading */}
      <h2
        className="text-center text-2xl md:text-3xl font-bold mb-6 text-[#1b130d]"
        style={{ fontFamily: '"Noto Serif", serif' }}
      >
        Kashi Vishwanath Temple
      </h2>

      {/* Grid Container with background + hover shadow */}
      <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 max-w-5xl mx-auto transition-shadow duration-300 hover:shadow-2xl">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-8 gap-2 w-full">
          
          {/* Div 2 - Marker (now spans same as Div 3) */}
          <div className="h-[50vh] md:h-auto md:col-span-3 md:row-span-8 md:col-start-1 md:row-start-1 flex flex-col items-center justify-center rounded-lg shadow-md  p-4 overflow-y-auto">
            <img
              src="/new-Vishwanath-temple-BHU-Varanasi.jpg"
              alt="AR Marker for Kashi Vishwanath Temple"
              className="p-2 w-64 h-64 md:w-80 md:h-80 object-contain"
            />
            <p className="text-sm mt-2 text-gray-700 font-medium">
              Scan this marker
            </p>
          </div>

          {/* Div 3 - Heritage Description */}
          <div className="h-[50vh] md:h-auto md:col-span-3 md:row-span-8 md:col-start-4 md:row-start-1 bg-green-100 flex flex-col items-start justify-start p-4 rounded-lg shadow-md overflow-y-auto">
            <h3
              className="text-xl md:text-2xl font-bold mb-3 text-[#1b130d]"
              style={{ fontFamily: '"Noto Serif", serif' }}
            >
              About the Kashi Vishwanath Temple
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              The Kashi Vishwanath Temple, located in Varanasi, India, is one of
              the most revered Hindu temples and a significant pilgrimage site.
              Dedicated to Lord Shiva, the temple is an important spiritual
              center and part of the historic Banaras Hindu University (BHU)
              campus. Known for its golden spire and traditional North Indian
              temple architecture, it draws devotees from across India and the
              world. Visitors come to experience the sacred rituals, the
              chanting of hymns, and the serene atmosphere along the banks of
              the Ganges, making it a symbol of devotion and spiritual heritage.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vishvnath;
