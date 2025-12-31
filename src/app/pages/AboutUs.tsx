import { Target, Users, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export function AboutUs() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To empower businesses through innovative technology solutions that drive digital transformation and sustainable growth.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description:
        'A diverse group of passionate technologists with over 100 years of combined IT experience.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Committed to delivering exceptional quality in every project we undertake.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Staying ahead with cutting-edge technologies and creative problem-solving approaches.',
    },
  ];

  return (
    //     <div className="min-h-screen">
    //       {/* Hero Section */}
    //       <div className="bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] text-white py-20 px-4">
    //         <div className="max-w-7xl mx-auto">
    //           <nav className="text-sm mb-8 opacity-80">
    //             <Link to="/" className="hover:text-white">Home</Link>
    //             <span className="mx-2">/</span>
    //             <span>About Us</span>
    //           </nav>
    //           <h1 className="text-6xl mb-6">Our Story</h1>
    //           <p className="text-2xl max-w-3xl text-gray-100">
    //             Building the future of technology, one solution at a time
    //           </p>
    //         </div>
    //       </div>
    <div className="min-h-screen bg-[#0F172A]">
            {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8 opacity-80">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-6xl mb-6">Our Story</h1>
          <p className="text-2xl max-w-3xl text-gray-100">
            Building the future of technology, one solution at a time
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          {/* Who We Are */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl text-white mb-6">Who We Are</h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Agile Technologies Inc is a leading IT consulting firm Founded in 2008, trusted technology partner with over 15 years of experience delivering high-impact digital solutions through a seamless onsite and offshore development model. We specialize in building scalable, secure, and future-ready applications by leveraging the latest and greatest technologies in the industry.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  We have earned a strong reputation—particularly in the healthcare domain—by consistently delivering mission-critical solutions for leading organizations such as Delta Airlines, Medtronic, and United Healthcare. Our teams follow agile-driven delivery models, ensuring speed, transparency, and continuous value throughout the development lifecycle.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Beyond client engagements, Agile Technologies also leads in-house healthcare initiatives, allowing us to stay ahead of industry trends and apply deep domain expertise to real-world challenges.
                </p>

              </div>

              {/* By the Numbers */}
              <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl text-white mb-8">By The Numbers</h3>

                <div className="grid grid-cols-2 gap-6">
                  <Stat value="100+" label="Years Combined Experience" />
                  <Stat value="500+" label="Projects Delivered" />
                  <Stat value="50+" label="Enterprise Clients" />
                  <Stat value="2" label="Global Locations" />
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-4xl text-white text-center mb-12">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 bg-[#1E293B] rounded-2xl
                               border border-white/10
                               transform hover:-translate-y-3
                               transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-[#22D3EE] to-[#6366F1] p-6 rounded-xl">
                        <Icon className="size-10 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl text-white mb-3">
                      {value.title}
                    </h3>

                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0F172A] to-[#22D3EE] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">Join Our Journey</h2>

            <p className="text-xl mb-8 text-gray-200">
              Partner with us or explore career opportunities to be part of our
              growing global team
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#0F172A] hover:bg-gray-100"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Stats Component */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold text-[#22D3EE] mb-2">
        {value}
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}
