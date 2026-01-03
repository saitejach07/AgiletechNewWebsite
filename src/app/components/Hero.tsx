import { ArrowRight, Code, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* === BACKGROUND GRADIENT (FULL SCREEN) === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

      {/* === ANIMATED BLOBS (DECOUPLED FROM CONTENT) === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[28rem] h-[28rem] bg-[#22D3EE]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[15%] right-[10%] w-[28rem] h-[28rem] bg-[#A855F7]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[40%] left-[50%] w-[24rem] h-[24rem] bg-[#6366F1]/25 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 flex items-start pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div>
              <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
                Innovating the Future of
                <span className="block mt-3 bg-gradient-to-r from-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent leading-tight">
                  Technology
                </span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                Empowering businesses with cutting-edge IT solutions and world-class consulting services
              </p>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#22D3EE] to-[#A855F7] hover:from-[#A855F7] hover:to-[#22D3EE] text-white group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* FEATURE CARDS (DESKTOP ONLY) */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { icon: Code, title: 'Expert Development', from: '#22D3EE', to: '#6366F1' },
                { icon: Zap, title: 'Rapid Delivery', from: '#A855F7', to: '#C084FC' },
                { icon: Shield, title: 'Secure Solutions', from: '#6366F1', to: '#8B5CF6' },
                { icon: Sparkles, title: 'Modern Tech', from: '#22D3EE', to: '#A855F7' },
              ].map(({ icon: Icon, title, from, to }) => (
                <div
                  key={title}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20
                             hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className="p-4 rounded-xl inline-block mb-3"
                    style={{ background: `linear-gradient(to right, ${from}, ${to})` }}
                  >
                    <Icon className="size-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{title}</h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* === BOTTOM FADE === */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
}
