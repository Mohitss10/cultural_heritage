import React from 'react'

const Ram_mandir = () => {
  return (
    <div>
      <div className="w-full px-4 py-6">
        {/* Page Heading */}
        <h2
          className="text-center text-2xl md:text-3xl font-bold mb-6 text-[#1b130d]"
          style={{ fontFamily: '"Noto Serif", serif' }}
        >
          Ram Mandir
        </h2>

        {/* Grid Container with background + hover shadow */}
        <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 max-w-5xl mx-auto transition-shadow duration-300 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-8 gap-2 w-full">

            {/* Div 2 - Marker (now spans same as Div 3) */}
<div className="h-[50vh] md:h-auto md:col-span-3 md:row-span-8 md:col-start-1 md:row-start-1 flex flex-col items-center justify-center rounded-lg shadow-md p-4 overflow-y-auto">
  <img
    src="/ram.jpg"
    alt="AR Marker for Ram Mandir"
    className="p-2 w-64 h-64 md:w-80 md:h-80 object-contain"
  />
  <p className="text-sm mt-2 text-gray-700 font-medium flex items-center gap-1">
    Scan this marker or
    <a
      href="/ram.jpg"
      download
      className="text-blue-600 hover:underline flex items-center gap-1"
    >
      download
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
        />
      </svg>
    </a>
  </p>
</div>

            {/* Div 3 - Heritage Description */}
            <div className="h-[50vh] md:h-auto md:col-span-3 md:row-span-8 md:col-start-4 md:row-start-1 bg-green-100 flex flex-col items-start justify-start p-4 rounded-lg shadow-md overflow-y-auto">
              <h3
                className="text-xl md:text-2xl font-bold mb-3 text-[#1b130d]"
                style={{ fontFamily: '"Noto Serif", serif' }}
              >
                About the Ram Mandir
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                The Ram Mandir, located in Ayodhya, India, is a significant cultural and religious landmark dedicated to Lord Rama, one of the most revered deities in Hinduism. The temple, recently reconstructed on the historic site, symbolizes devotion, faith, and spiritual heritage. Built using intricately carved stone, the mandir showcases traditional Indian temple architecture with detailed sculptures, pillars, and domes. Pilgrims and visitors from across the country and the world come to witness its grandeur, participate in rituals, and experience the serene spiritual atmosphere that surrounds this iconic temple.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Ram_mandir
