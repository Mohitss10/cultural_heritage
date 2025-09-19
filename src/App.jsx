import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Taj_mahal from "../components/Taj_mahal";
import Ram_mandir from "../components/Ram_mandir";
import Vishvnath from "../components/Vishvnath";
import Mahanavami from "../components/Mahanavami";
import Harihara from "../components/Harihara";
import Explore from "./pages/Explore";
import Qr from "../components/Qr";
import { ChevronsDown } from "lucide-react";

// Import placeholder pages for states
import Karnataka from "./pages/Karnataka";
import Kerala from "./pages/Kerala";
import Maharashtra from "./pages/Maharashtra";
import MadhyaPradesh from "./pages/MadhyaPradesh";

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar stays fixed for all routes */}
      <Navbar />

      {/* Pages */}
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div className="relative flex h-auto min-h-screen w-full flex-col justify-between overflow-x-hidden">
              {/* Home Content */}
              <Qr />
              <Taj_mahal />
              <Ram_mandir />
              <Vishvnath />
              <Mahanavami />
              <Harihara />

              {/* Last Button -> Navigate */}
              <div className="flex justify-center">
                <button
                  onClick={() => navigate("/explore")}
                  className="px-6 w-full m-4 py-6 sm:mx-50 bg-white-600 text-black font-semibold rounded-2xl text-xl shadow-lg animate-bounce hover:bg-slate-100 transition-all duration-300"
                >
                  Click to Explore More
                </button>
              </div>
            </div>
          }
        />

        {/* Explore Route */}
        <Route path="/explore" element={<Explore />} />

        {/* State Routes */}
        <Route path="/karnataka" element={<Karnataka />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/maharashtra" element={<Maharashtra />} />
        <Route path="/madhya-pradesh" element={<MadhyaPradesh />} />
        
      </Routes>
    </>
  );
}

export default App;
