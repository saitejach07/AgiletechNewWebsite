import { ImageWithFallback } from './FallbackImage/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import mobiledevimage from '../assets/MobileDev.png';
import ITStaff from '../assets/ITStaff.png';
import Cloud from '../assets/Cloud2.png';
import WebDev from '../assets/WebDev.png';

export function Services() {
  const services = [
    {
      title: 'IT Staff Augmentation',
      image: ITStaff,
      description: 'Enhance your team with our skilled IT professionals and accelerate project delivery',
      link: '/services/it-staff-augmentation',
      gradient: 'from-[#0F172A] to-[#22D3EE]',
    },
    {
      title: 'Mobile Development',
      image: mobiledevimage,
      description: 'Create powerful iOS and Android applications with cutting-edge mobile technology',
      link: '/services/mobile-development',
      gradient: 'from-[#6366F1] to-[#A855F7]',
    },
    {
      title: 'Web Development',
      image: WebDev,
      description: 'Build scalable, modern web applications with responsive design and best practices',
      link: '/services/web-development',
      gradient: 'from-[#A855F7] to-[#22D3EE]',
    },
    {
      title: 'Cloud Solutions',
      image: Cloud,
      description: 'Leverage cloud infrastructure for scalability, security, and business efficiency',
      link: '/services/cloud-solutions',
      gradient: 'from-[#22D3EE] to-[#6366F1]',
    },
  ];

  return (
    <div id="services" className="py-20 px-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 text-white">
            OUR <span className="text-[#22D3EE]">SERVICES</span>
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            Agile Technologies Inc with unparalleled technical & business competencies offers software development and professional services.
            We bring the depth of domain knowledge, technology expertise and client commitment to help deliver strategic IT solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link 
              to={service.link}
              key={index} 
              className="group bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-white/10"
            >
              <div className="h-64 overflow-hidden relative">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end p-8`}>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowRight className="size-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className={`text-3xl text-white mb-4 group-hover:bg-gradient-to-r ${service.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}