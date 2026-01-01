import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/AgileTech_Logo_5.png";

export function Header() {
  return (
    <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        
        {/* Always LEFT–RIGHT (Mobile + Desktop) */}
        <div className="flex flex-row items-center justify-between">
          
          {/* Logo - Left */}
          <Link to="/" className="bg-transparent">
            <img
              src={logo}
              alt="Agile Technologies Inc"
              className="h-[72px] md:h-[88px] w-auto object-contain
                        bg-transparent rounded-md"
            />
         </Link>

          {/* Location - Right */}
          <div className="flex items-center gap-2">
            <div className="bg-[#22D3EE] p-1.5 rounded-full">
              <MapPin className="h-3.5 w-3.5 text-black" />
            </div>

            <div className="text-right leading-tight">
              <div className="text-[10px] uppercase opacity-80">
                Locations
              </div>
              <div className="text-xs sm:text-sm font-medium">
                USA, INDIA
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
