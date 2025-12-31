import { MapPin} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/AgileTech_Logo_5.png';

export function Header() {
  return (
    <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white py-4 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <Link to="/" className="bg-transparent">
        <img
          src={logo}
          alt="Agile Technologies Inc"
          className="h-[72px] md:h-[88px] w-auto object-contain
                    bg-transparent rounded-md"
        />
      </Link>
        {/* Right - Locations & Social */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#22D3EE] p-2 rounded-full">
              <MapPin className="size-4" />
            </div>
            <div>
              <div className="text-xs opacity-80">LOCATIONS</div>
              <div className="text-sm">USA, INDIA</div>
            </div>
          </div>
          
          {/* Social Icons */}
          {/* <div className="flex gap-3">
            <a href="#" className="hover:text-[#22D3EE] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Linkedin className="size-5" />
            </a>
            <a href="#" className="hover:text-[#22D3EE] transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
              <Instagram className="size-5" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}