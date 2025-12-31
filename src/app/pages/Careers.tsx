import { Briefcase, Heart, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible hours and remote work options',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning and advancement opportunities',
    },
    {
      icon: Users,
      title: 'Great Culture',
      description: 'Collaborative and inclusive work environment',
    },
    {
      icon: Briefcase,
      title: 'Exciting Projects',
      description: 'Work on cutting-edge technology solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8 opacity-80">
            <Link to="/" className="hover:text-[#22D3EE]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Careers</span>
          </nav>

          <h1 className="text-6xl mb-6">Join Our Team</h1>

          <p className="text-2xl max-w-3xl text-gray-200">
            Build your career with a company that values innovation, growth,
            and work-life balance
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">

          {/* Why Work With Us */}
          <div className="mb-20">
            <h2 className="text-4xl text-white text-center mb-12">
              Why Work With Us
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
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
                      {benefit.title}
                    </h3>

                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-4xl text-white text-center mb-12">
              Open Positions
            </h2>

            <div className="bg-[#1E293B] rounded-2xl p-12 text-center border border-white/10">
              <div className="max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-[#22D3EE] to-[#6366F1]
                                rounded-full mx-auto flex items-center justify-center mb-6">
                  <Briefcase className="size-12 text-white" />
                </div>

                <h3 className="text-3xl text-white mb-4">
                  No Open Positions
                </h3>

                <p className="text-gray-300 text-lg mb-8">
                  We don’t currently have any open positions. However, we’re always
                  interested in connecting with talented professionals. Feel free
                  to submit your resume for future opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0F172A] to-[#22D3EE]
                          rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">
              Don’t See Your Role?
            </h2>

            <p className="text-xl mb-8 text-gray-200">
              Send us your resume and we’ll keep you in mind for future openings
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-[#0F172A] hover:bg-gray-100"
            >
              <Link to="/contact">
                Submit Your Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
