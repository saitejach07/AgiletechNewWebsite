import { CheckCircle, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CustomBuildinSolutions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-300">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-16 px-4 relative">

        {/* Internal Access Button (AUTH ONLY FOR THIS BUTTON) */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => {
              navigate('/services/in-house-projects/login');
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg
                      bg-[#1E293B] border border-white/10
                      text-sm text-white hover:border-[#22D3EE]
                      transition-all duration-300"
          >
            <Lock className="size-4" />
            Internal Access
          </button>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Agile Delivery & Engineering Approach
          </h1>
          <p className="text-lg text-gray-200">
            Delivering value through collaboration, transparency, and continuous improvement
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold text-white mb-4">
          What We Do
        </h2>
        <p className="leading-relaxed text-lg max-w-4xl">
          We design, build, test, and deploy scalable technology solutions using a structured
          Agile delivery model. Our approach emphasizes incremental value delivery, strong
          engineering practices, and continuous feedback to ensure predictable,
          high-quality outcomes.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* Agile Principles */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold text-white mb-8">
          Our Agile Principles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Iterative Delivery',
              text: 'Short, time-boxed iterations with frequent demos and feedback loops.',
            },
            {
              title: 'Cross-Functional Collaboration',
              text: 'Engineering, testing, and operations work together to reduce handoffs.',
            },
            {
              title: 'Quality Built-In',
              text: 'Automation, reviews, and testing embedded across the lifecycle.',
            },
            {
              title: 'Continuous Improvement',
              text: 'Regular retrospectives drive adaptability and optimization.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#1E293B] p-6 rounded-xl border border-white/10
                         hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* Delivery Lifecycle */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-semibold text-white mb-8">
          Delivery Lifecycle
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Planning & Foundation',
              items: [
                'Requirements prioritization',
                'Architecture and technical design',
                'Environment and tooling setup',
              ],
            },
            {
              title: 'Core Development',
              items: [
                'Frontend and backend development',
                'Cloud and DevOps enablement',
                'Continuous integration',
              ],
            },
            {
              title: 'Advanced Features & Integration',
              items: [
                'Feature enhancements',
                'System integrations',
                'Performance & security improvements',
              ],
            },
          ].map((phase, index) => (
            <div
              key={index}
              className="bg-[#1E293B] p-6 rounded-xl border border-white/10"
            >
              <h3 className="font-semibold text-white mb-4">
                {phase.title}
              </h3>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="size-5 text-[#22D3EE] mt-1 shrink-0" />
                    <span className="text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section className="bg-[#1E293B] py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Governance & Accountability
          </h2>
          <p className="leading-relaxed text-lg max-w-4xl">
            Clear ownership and accountability are maintained using a structured
            responsibility framework, ensuring transparency, predictable delivery,
            and alignment with business objectives while preserving Agile flexibility.
          </p>
        </div>
      </section>

    </div>
  );
}
