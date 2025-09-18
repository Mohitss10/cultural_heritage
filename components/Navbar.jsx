import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/10 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
        <h1 className="text-xl font-bold text-black tracking-wide text-center">
          Explore India's Culture Heritage
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
