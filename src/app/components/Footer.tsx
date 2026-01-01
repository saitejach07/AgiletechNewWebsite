import { Mail, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/AgileTech_Logo_5.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div className="text-center sm:text-left">
                  <Link to="/" className="bg-transparent">
        <img
          src={logo}
          alt="Agile Technologies Inc"
          className="h-[72px] md:h-[88px] w-auto object-contain
                    bg-transparent rounded-md"
        />
      </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              Leading IT consulting firm with expertise in software development,
              staff augmentation, and technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl mb-6 text-[#22D3EE]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-[#22D3EE] transition-all duration-300 hover:pl-2 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#22D3EE] transition-all duration-300 hover:pl-2 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#22D3EE] transition-all duration-300 hover:pl-2 inline-block">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#22D3EE] transition-all duration-300 hover:pl-2 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl mb-6 text-[#22D3EE]">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/it-staff-augmentation" className="hover:text-[#22D3EE] transition-all duration-300 hover:pl-2 inline-block">
                  Staff Augmentation
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="hover:text-[#22D3EE] transition-all duration-300 hover:pl-2 inline-block">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-development" className="hover:text-[#22D3EE] transition-all duration-300 hover:pl-2 inline-block">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/cloud-solutions" className="hover:text-[#22D3EE] transition-all duration-300 hover:pl-2 inline-block">
                  Cloud Solutions
                </Link>
              </li>
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

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Agile Technologies Inc. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Designed with ❤️ for excellence</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#22D3EE] to-[#A855F7] hover:from-[#A855F7] hover:to-[#22D3EE] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="size-6" />
      </button>
    </footer>
  );
}