import { Link } from 'react-router-dom';
import {
  Users,
  ClipboardCheck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-gray-300">

      {/* NAVBAR */}
      <nav className="bg-[#1E293B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/services/in-house-projects/dashboard" className="text-white text-lg font-semibold">
            🏥 Agiletech Healthcare
          </Link>

          <div className="flex gap-3">
            <Link
              to="/services/in-house-projects/dashboard/register"
              className="px-4 py-2 rounded-lg bg-[#22D3EE] text-[#0F172A] text-sm font-medium hover:opacity-90 transition"
            >
              Register
            </Link>
            <Link
              to="/services/in-house-projects/dashboard/underconstrunction"
              className="px-4 py-2 rounded-lg border border-white/20 text-white text-sm hover:border-[#22D3EE] transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-[#22D3EE] to-[#6366F1]">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center text-[#0F172A]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Provider Onboarding Dashboard
            </h1>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Manage registrations, track approvals, and join our growing network
              of trusted healthcare professionals.
            </p>

            <Link
              to="/services/in-house-projects/dashboard/register"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl
                         bg-white text-[#0F172A] font-semibold shadow-lg
                         hover:scale-105 transition-transform"
            >
              Start Registration
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>

        {/* WAVE */}
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block w-full h-20"
        >
          <path
            fill="#0F172A"
            d="M0,32L1440,0L1440,90L0,90Z"
          />
        </svg>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              value: '1,245',
              label: 'Registered Providers',
              color: 'text-[#22D3EE]',
            },
            {
              icon: ClipboardCheck,
              value: '324',
              label: 'Pending Approvals',
              color: 'text-[#A855F7]',
            },
            {
              icon: ShieldCheck,
              value: '890',
              label: 'Active Licenses',
              color: 'text-[#6366F1]',
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-[#1E293B] p-8 rounded-2xl border border-white/10
                           text-center hover:-translate-y-1 transition-transform"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-white/5">
                    <Icon className={`size-10 ${stat.color}`} />
                  </div>
                </div>
                <h3 className={`text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#1E293B] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-white font-semibold mb-12">
            What Providers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text:
                  'The registration process was seamless and easy. I felt supported every step.',
                name: 'Dr. Emily Carter',
              },
              {
                text:
                  'A professional platform that truly values healthcare providers.',
                name: 'Nurse John Lee',
              },
              {
                text:
                  'This portal made onboarding faster and hassle-free.',
                name: 'Therapist Sarah Patel',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#0F172A] p-6 rounded-2xl border border-white/10
                           hover:-translate-y-1 transition-transform"
              >
                <p className="text-gray-300 mb-4 italic">
                  “{t.text}”
                </p>
                <p className="text-white font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#22D3EE] to-[#6366F1]
                        rounded-3xl p-12 text-center text-[#0F172A] shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Register today and be part of our healthcare professional network.
          </p>
          <Link
            to="/services/in-house-projects/dashboard/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-white font-semibold hover:scale-105 transition-transform"
          >
            Register Now
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Agiletech Healthcare. All rights reserved.
      </footer>
    </div>
  );
}
