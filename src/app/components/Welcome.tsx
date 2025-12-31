import { Award, Users, Globe, TrendingUp } from 'lucide-react';

export function Welcome() {
  const stats = [
    { icon: Users, value: '100+', label: 'Expert Professionals', color: 'from-[#22D3EE] to-[#6366F1]' },
    { icon: Award, value: '500+', label: 'Projects Completed', color: 'from-[#A855F7] to-[#C084FC]' },
    { icon: Globe, value: '50+', label: 'Global Clients', color: 'from-[#6366F1] to-[#8B5CF6]' },
    { icon: TrendingUp, value: '99%', label: 'Client Satisfaction', color: 'from-[#22D3EE] to-[#A855F7]' },
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-6 text-white">
            Welcome to <span className="bg-gradient-to-r from-[#22D3EE] to-[#A855F7] bg-clip-text text-transparent">Agile Technologies Inc.</span>
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            We are a global leader in IT consulting and software development, delivering innovative solutions that transform businesses. 
            With a proven track record of excellence, we partner with organizations worldwide to achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 md:p-8 bg-[#1E293B] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-white/10"
              >
                <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl inline-block mb-4`}>
                  <Icon className="size-8 md:size-10 text-white" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}