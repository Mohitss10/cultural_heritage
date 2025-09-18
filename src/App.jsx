import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import Taj_mahal from "../components/Taj_mahal";
import Ram_mandir from "../components/ram_mandir";
import Vishvnath from "../components/Vishvnath";
import Mahanavami from "../components/Mahanavami";
import Harihara from "../components/Harihara";
import { ChevronsDown } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* Root container */}
      <div
        className="relative flex h-auto min-h-screen w-full flex-col justify-between overflow-x-hidden"
        style={{ fontFamily: '"Noto Sans", sans-serif' }}
      >
        {/* Main content */}
        <div className="flex-grow flex flex-col">
          {/* Hero Image */}
          <div className="w-full mt-[60px] h-[50vh] md:h-[50vh] lg:h-[50vh]">
            <div
              className="h-full m-2 bg-center bg-no-repeat bg-cover rounded-3xl overflow-hidden"
              style={{
                backgroundImage: 'url("hero.jpg")', // replace with your AR/heritage bg
              }}
            ></div>
          </div>

          {/* Title + Description */}
          <div className="px-6 py-6 md:py-10 text-center flex-grow flex flex-col justify-center">
            <h1
              className="text-[#1b130d] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight"
              style={{ fontFamily: '"Noto Serif", serif' }}
            >
              Explore India&apos;s Heritage
            </h1>
            <p className="text-[#635C57] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-3 md:mt-5 max-w-2xl mx-auto px-2">
              Step into the past. Discover the stories of India&apos;s
              magnificent historical sites in augmented reality.
            </p>
          </div>
        </div>

        {/* Responsive Button */}
        <div className="px-6 pb-4">
          <button className="flex w-full sm:w-auto sm:px-10 mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 sm:h-14 bg-[#ec6d13] text-[#fcfaf8] text-sm sm:text-base md:text-lg font-bold leading-normal tracking-wide shadow-lg shadow-orange-200 hover:bg-[#d85f10] transition-all duration-200">
            <span className="truncate">Check Now</span>
            <ChevronsDown className="w-5 h-5 ml-2" />
          </button>
        </div>
        <Taj_mahal />
        <Ram_mandir />
        <Vishvnath />
        <Mahanavami />
        <Harihara />
      </div>
    </>
  );
}

export default App;
