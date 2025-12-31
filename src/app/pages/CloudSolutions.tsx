import { Cloud, Database, Server, Shield, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function CloudSolutions() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to modern cloud infrastructure',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Highly scalable and reliable cloud databases',
    },
    {
      icon: Server,
      title: 'Cloud Infrastructure',
      description: 'Secure, resilient, and high-availability architecture',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance',
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
            <span>Cloud Solutions</span>
          </nav>

          <h1 className="text-6xl mb-6">Cloud Solutions</h1>

          <p className="text-2xl max-w-3xl text-gray-200">
            Modernize your infrastructure with secure, scalable, and
            cloud-native solutions
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
                Transform with Cloud
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Leverage cloud computing to improve scalability, performance,
                and cost efficiency. Our cloud solutions empower businesses
                to innovate faster while maintaining security and reliability.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                From strategy and migration to optimization and ongoing
                management, we guide you through every stage of your cloud
                journey.
              </p>
            </div>

            {/* Platforms */}
            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl text-white mb-6">
                Cloud Platforms We Work With:
              </h3>

              <ul className="space-y-3">
                {[
                  'Amazon Web Services (AWS)',
                  'Microsoft Azure',
                  'Google Cloud Platform (GCP)',
                  'Kubernetes & Docker',
                  'Serverless Architectures',
                  'Cloud Monitoring & Observability',
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
              Cloud Excellence
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
              Ready to Move to the Cloud?
            </h2>

            <p className="text-xl mb-8 text-gray-200">
              Let’s design a secure and scalable cloud strategy for your business
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#0F172A] hover:bg-gray-100"
            >
              <Link to="/contact">
                Get Cloud Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
