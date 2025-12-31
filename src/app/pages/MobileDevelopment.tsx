import { Smartphone, Code, Zap, Shield, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function MobileDevelopment() {
  const features = [
    {
      icon: Smartphone,
      title: 'Native & Cross-Platform',
      description: 'iOS, Android, React Native, and Flutter expertise',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored mobile solutions for your business needs',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized apps with seamless user experience',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and data protection',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#A855F7] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-8 opacity-80">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Mobile Development</span>
          </nav>
          <h1 className="text-6xl mb-6">Mobile Development</h1>
          <p className="text-2xl max-w-3xl text-gray-100">
            Create powerful, engaging mobile applications that drive business growth
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl text-white mb-6">Mobile-First Solutions</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                In today's mobile-driven world, having a robust mobile presence is essential. We specialize in creating high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our team of expert mobile developers uses the latest technologies and best practices to build scalable, secure, and engaging mobile apps that help your business thrive.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1E293B] to-[#6366F1]/20 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl text-white mb-6">Technologies We Use:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#2575fc] shrink-0 mt-1" />
                  <span className="text-gray-700">React Native for cross-platform development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#2575fc] shrink-0 mt-1" />
                  <span className="text-gray-700">Swift & SwiftUI for native iOS apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#2575fc] shrink-0 mt-1" />
                  <span className="text-gray-700">Kotlin & Jetpack Compose for Android</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#2575fc] shrink-0 mt-1" />
                  <span className="text-gray-700">Flutter for beautiful UIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#2575fc] shrink-0 mt-1" />
                  <span className="text-gray-700">Firebase, AWS Amplify for backend</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-6 text-[#2575fc] shrink-0 mt-1" />
                  <span className="text-gray-700">GraphQL & REST APIs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="text-4xl text-[#003366] text-center mb-12">Why Choose Our Mobile Development Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-purple-50">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-br from-[#6a11cb] to-[#2575fc] p-6 rounded-xl">
                        <Icon className="size-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl text-[#003366] mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#A855F7] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Let's transform your vision into a powerful mobile application
            </p>
            <Button asChild size="lg" className="bg-white text-[#6a11cb] hover:bg-gray-100">
              <Link to="/contact">
                Start Your Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}