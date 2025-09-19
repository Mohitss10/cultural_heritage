import React from "react";

const Qr = () => {
  return (
    <div className="min-h-screen flex flex-col items-center relative">
      
      {/* Full-width Top Image */}
      <div className="w-full">
        <img
          src="hero.jpg" // <-- replace with your image
          alt="Heritage Banner"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Content Section - Overlapping */}
      <div className="max-w-5xl w-full rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 -mt-32 bg-white relative z-10 ">
        
        {/* Left: QR Code Image */}
        <div className="flex items-center justify-center">
          <img
            src="vrindavista.png" // <-- your QR image
            alt="QR Code"
            className="w-64 h-64 object-contain border rounded-lg shadow"
          />
        </div>

        {/* Right: Project Description + APK Link */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            AR Based Cultural Heritage Platform
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            This project is an interactive <strong>Augmented Reality</strong> (AR) 
            application that brings India’s rich cultural heritage to life. 
            By scanning the QR code, you can download and experience our 
            immersive mobile app that showcases monuments, history, and 
            traditions in an engaging digital format.
          </p>
          <p className="text-md text-gray-600 mb-6">
            📲 Simply scan the QR code or download the APK directly below to 
            start exploring heritage sites from the palm of your hand!
          </p>

          {/* Download APK Button */}
          <a
            href="https://drive.usercontent.google.com/download?id=1bsVyVUkbwYbVD2qjSEZfGnnXjYKXM41d&export=download&authuser=0"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            ⬇️ Download APK
          </a>
        </div>
      </div>
    </div>
  );
};

export default Qr;
