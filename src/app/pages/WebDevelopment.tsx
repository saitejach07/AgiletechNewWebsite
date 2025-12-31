import { Globe, Layers, Rocket, Lock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function WebDevelopment() {
  const features = [
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Beautiful websites that work perfectly on all devices',
    },
    {
      icon: Layers,
      title: 'Modern Stack',
      description: 'Latest technologies for scalable web applications',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimized for speed and user experience',
    },
    {
      icon: Lock,
      title: 'Secure Solutions',
      description: 'Industry-standard security practices',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8 opacity-80">
            <Link to="/" className="hover:text-[#22D3EE]">Home</Link>
            <span className="mx-2">/</span>
            <span>Web Development</span>
          </nav>

          <h1 className="text-6xl mb-6">Web Development</h1>

          <p className="text-2xl max-w-3xl text-gray-200">
            Build modern, scalable web applications that deliver exceptional results
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">

          {/* Intro Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl text-white mb-6">
                Full-Stack Web Development
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We design and develop powerful, responsive web applications using
                cutting-edge technologies. From fast-loading marketing sites to
                complex enterprise platforms, we deliver solutions that scale.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Our full-stack expertise ensures seamless integration across frontend,
                backend, databases, and cloud infrastructure.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl text-white mb-6">
                Our Tech Stack Includes:
              </h3>

              <ul className="space-y-3">
                {[
                  'React, Vue.js, Angular (Frontend)',
                  'Node.js, Java, Python (Backend)',
                  'PostgreSQL, MongoDB, MySQL',
                  'Tailwind CSS, Material UI',
                  'Docker & Kubernetes',
                  'CI/CD with GitHub Actions',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="size-6 text-[#22D3EE] shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-4xl text-white text-center mb-12">
              Our Web Development Strengths
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
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
                      {feature.title}
                    </h3>

                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0F172A] to-[#22D3EE] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">
              Ready to Build Your Web Application?
            </h2>

            <p className="text-xl mb-8 text-gray-200">
              Let’s create a powerful, scalable web solution for your business
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#0F172A] hover:bg-gray-100"
            >
              <Link to="/contact">
                Let’s Talk
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
