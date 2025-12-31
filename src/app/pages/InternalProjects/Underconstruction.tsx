import { Link } from "react-router-dom";
import { Construction, ArrowLeft } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] px-4">
      <div className="max-w-lg w-full text-center bg-[#1E293B] border border-white/10 rounded-3xl p-10 shadow-2xl">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-cyan-400/10 border border-cyan-400/30">
            <Construction className="w-10 h-10 text-cyan-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-3">
          Page Under Construction
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          We’re working hard to bring this feature to life.
          <br />
          Please check back soon!
        </p>

        {/* Actions */}
        <div className="flex justify-center">
          <Link
            to="/services/in-house-projects/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-gradient-to-r from-cyan-400 to-indigo-500
                       text-[#0F172A] font-semibold
                       hover:opacity-90 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-500 mt-8">
          © {new Date().getFullYear()} Agiletech Healthcare
        </p>
      </div>
    </div>
  );
}
