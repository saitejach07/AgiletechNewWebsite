import { ArrowRight, Code, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#22D3EE] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#A855F7] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#6366F1] rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[700px]">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl text-white mb-6">
                Innovating the Future of
                <span className="block bg-gradient-to-r from-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent mt-2">
                  Technology
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Empowering businesses with cutting-edge IT solutions and world-class consulting services
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#22D3EE] to-[#A855F7] hover:from-[#A855F7] hover:to-[#22D3EE] text-white group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                <div className="bg-gradient-to-r from-[#22D3EE] to-[#6366F1] p-4 rounded-xl inline-block mb-3">
                  <Code className="size-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Expert Development</h3>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                <div className="bg-gradient-to-r from-[#A855F7] to-[#C084FC] p-4 rounded-xl inline-block mb-3">
                  <Zap className="size-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Rapid Delivery</h3>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-4 rounded-xl inline-block mb-3">
                  <Shield className="size-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Secure Solutions</h3>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20">
                <div className="bg-gradient-to-r from-[#22D3EE] to-[#A855F7] p-4 rounded-xl inline-block mb-3">
                  <Sparkles className="size-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">Modern Tech</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
    </div>
  );
}