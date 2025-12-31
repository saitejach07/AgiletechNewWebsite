import { Users, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function ITStaffAugmentation() {
  const benefits = [
    {
      icon: Users,
      title: 'Skilled Professionals',
      description: 'Access to highly qualified IT professionals with diverse skill sets',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Scale your team up or down based on project requirements',
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce hiring risks with pre-vetted, experienced consultants',
    },
    {
      icon: CheckCircle,
      title: 'Cost Effective',
      description: 'Optimize costs by paying only for the resources you need',
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
            <span>IT Staff Augmentation</span>
          </nav>
          <h1 className="text-6xl mb-6">IT Staff Augmentation</h1>
          <p className="text-2xl max-w-3xl text-gray-200">
            Enhance your team with our skilled IT professionals and accelerate your digital transformation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl text-white mb-6">What is IT Staff Augmentation?</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                IT Staff Augmentation is a flexible outsourcing strategy that enables you to hire tech talent globally and manage augmented teams directly. 
                We provide skilled professionals who seamlessly integrate with your existing team to help you meet project deadlines and business objectives.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you need short-term specialists for a specific project or long-term resources for ongoing development, 
                our staff augmentation services provide the perfect solution.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl text-white mb-6">Our Expertise Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#22D3EE] shrink-0 mt-1" />
                  <span className="text-gray-300">Full-Stack Developers (React, Node.js, Java, .NET)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#22D3EE] shrink-0 mt-1" />
                  <span className="text-gray-300">DevOps Engineers & Cloud Architects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#22D3EE] shrink-0 mt-1" />
                  <span className="text-gray-300">QA/Testing Specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#22D3EE] shrink-0 mt-1" />
                  <span className="text-gray-300">Business Analysts & Project Managers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#22D3EE] shrink-0 mt-1" />
                  <span className="text-gray-300">Data Scientists & AI/ML Engineers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#22D3EE] shrink-0 mt-1" />
                  <span className="text-gray-300">Security Specialists & Compliance Experts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-4xl text-white text-center mb-12">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-8 bg-[#1E293B] rounded-2xl transform hover:-translate-y-3 transition-all duration-300 border border-white/10">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-[#22D3EE] to-[#6366F1] p-6 rounded-xl">
                        <Icon className="size-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#0F172A] to-[#22D3EE] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">Ready to Augment Your Team?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Let's discuss how we can help you build your dream team
            </p>
            <Button asChild size="lg" className="bg-white text-[#0F172A] hover:bg-gray-100">
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}