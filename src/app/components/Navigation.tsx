import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [activeItem, setActiveItem] = useState('home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    {
      id: 'about',
      label: 'About Us',
      href: '/about',
      dropdown: [
        { label: 'Our Story', href: '/about' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      id: 'services',
      label: 'Services',
      href: '#services',
      dropdown: [
        { label: 'Staff Augmentation', href: '/services/it-staff-augmentation' },
        { label: 'Mobile Development', href: '/services/mobile-development' },
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
        { label: 'In-House Projects', href: 'services/in-house-projects' },
      ],
    },
    {
      id: 'career',
      label: 'Careers',
      href: '/careers',
    },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#A855F7] via-[#0F172A] to-[#0F172A] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Desktop Nav Items */}
          <div className="hidden md:flex">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <span
                    onClick={() => setActiveItem(item.id)}
                    className={`px-6 py-4 hover:bg-[#A855F7] transition-all duration-300 flex items-center gap-1 cursor-pointer ${
                      activeItem === item.id ? 'bg-[#A855F7]' : ''
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${
                        openDropdown === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setActiveItem(item.id)}
                    className={`px-6 py-4 hover:bg-[#A855F7] transition-all duration-300 flex items-center gap-1 ${
                      activeItem === item.id ? 'bg-[#A855F7]' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 bg-white text-gray-800 min-w-[220px] shadow-xl rounded-b-lg overflow-hidden transition-all duration-300 ${
                      openDropdown === item.id
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  >
                    {item.dropdown.map((dropItem, idx) => (
                      <Link
                        key={idx}
                        to={dropItem.href}
                        className="block px-6 py-3 hover:bg-[#22D3EE] hover:text-white transition-colors duration-200"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden px-4 py-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          {/* Contact Button */}
          <Link
            to="/contact"
            onClick={() => setActiveItem('contact')}
            className="px-8 py-4 bg-[#A855F7] hover:bg-[#9333EA] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9333EA] to-[#A855F7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F172A] border-t border-white/10">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.dropdown ? (
                  <span
                    onClick={() => setActiveItem(item.id)}
                    className="block px-6 py-3 hover:bg-[#A855F7] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => {
                      setActiveItem(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="block px-6 py-3 hover:bg-[#A855F7] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
                {item.dropdown && (
                  <div className="bg-[#1E293B] pl-4">
                    {item.dropdown.map((dropItem, idx) => (
                      <Link
                        key={idx}
                        to={dropItem.href}
                        className="block px-6 py-2 text-sm hover:bg-[#22D3EE] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}