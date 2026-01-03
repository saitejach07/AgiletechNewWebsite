import { Mail, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Final_AgileTech_Logo2.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* ================= MOBILE FOOTER ================= */}
        <div className="md:hidden flex flex-col items-center text-center gap-6">

          <img src={logo} alt="Agile Technologies Inc" className="h-12" />

          <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
            Leading IT consulting firm specializing in software development,
            staff augmentation, and modern technology solutions.
          </p>

          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <Mail className="size-4" />
              contact@agiletechinc.com
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="size-4" />
              USA, India
            </div>
          </div>
        </div>

        {/* ================= DESKTOP FOOTER ================= */}
        <div className="hidden md:grid grid-cols-4 gap-12">

          {/* About */}
          <div>
            <img src={logo} alt="Agile Technologies Inc" className="h-16 mb-4" />
            <p className="text-gray-300 leading-relaxed">
              Leading IT consulting firm with expertise in software development,
              staff augmentation, and technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-5 text-[#22D3EE]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-[#22D3EE]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#22D3EE]">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-[#22D3EE]">Career</Link></li>
              <li><Link to="/contact" className="hover:text-[#22D3EE]">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-5 text-[#22D3EE]">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/it-staff-augmentation">Staff Augmentation</Link></li>
              <li><Link to="/services/mobile-development">Mobile Development</Link></li>
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/cloud-solutions">Cloud Solutions</Link></li>
            </ul>
          </div>

{/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl mb-6 text-[#22D3EE]">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group justify-center sm:justify-start">
                <Mail className="size-5 mt-1 shrink-0 group-hover:text-[#22D3EE] transition-colors" />
                <a href="mailto:contact@agiletechinc.com" className="hover:text-[#22D3EE] transition-colors break-all">
                  contact@agiletechinc.com
                </a>
              </li>
              {/* <li className="flex items-start gap-3 group justify-center sm:justify-start">
                <Phone className="size-5 mt-1 shrink-0 group-hover:text-[#22D3EE] transition-colors" />
                <span>+1 (555) 123-4567</span>
              </li> */}
              <li className="flex items-start gap-3 group justify-center sm:justify-start">
                <MapPin className="size-5 mt-1 shrink-0 group-hover:text-[#22D3EE] transition-colors" />
                <span>USA, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Agile Technologies Inc. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Designed with ❤️ for excellence</p>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-[#22D3EE] to-[#A855F7]
                   text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <ArrowUp className="size-5" />
      </button>
    </footer>
  );
}
