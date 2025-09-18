import React from "react";

const Harihara = () => {
  return (
    <div>
      <div className="w-full px-4 py-6">
        {/* Page Heading */}
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-6 text-[#1b130d]"
          style={{ fontFamily: '"Noto Serif", serif' }}
        >
          Harihara Caves
        </h2>

        {/* Grid Container with background + hover shadow */}
        <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 max-w-5xl mx-auto transition-shadow duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-8 gap-2 w-full">

            {/* Div 2 - Marker (now spans same as Div 3) */}
            <div className="h-[50vh] md:h-auto md:col-span-3 md:row-span-8 md:col-start-1 md:row-start-1 flex flex-col items-center justify-center rounded-lg shadow-md p-4 overflow-y-auto">
              <img
                src="/harihara.jpg"
                alt="AR Marker for Harihara"
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
                About the Harihara Caves
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The Harihara Caves, located near Halebidu, Karnataka, India, are
                significant historical monuments dating back to the Hoysala
                period. These rock-cut caves are dedicated to Lord Shiva and
                Lord Vishnu, reflecting the harmonious blend of Shaivism and
                Vaishnavism in Indian art and architecture. Carved from solid
                rock, the caves feature intricate sculptures, pillars, and
                reliefs depicting mythological stories and deities. Visitors
                from across India and the world come to admire the detailed
                craftsmanship, the serene atmosphere, and the rich cultural
                heritage preserved in these ancient caves.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Harihara;
