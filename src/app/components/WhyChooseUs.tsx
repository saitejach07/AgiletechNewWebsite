import { Briefcase, Lightbulb, Settings, Calculator } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'Over 100 years of combined IT experience',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern challenges',
    },
    {
      icon: Settings,
      title: 'Quality',
      description: 'Excellence in every project we deliver',
    },
    {
      icon: Calculator,
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising quality',
    },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#22D3EE] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#A855F7] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl text-center text-white mb-16">
          WHY <span className="text-[#22D3EE]">CHOOSE US</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="text-center group transform hover:-translate-y-3 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#22D3EE] to-[#6366F1] p-8 rounded-2xl shadow-2xl group-hover:shadow-[#22D3EE]/50 transition-all duration-300 group-hover:scale-110">
                    <Icon className="size-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-white mb-3 group-hover:text-[#22D3EE] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-300 text-lg">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}