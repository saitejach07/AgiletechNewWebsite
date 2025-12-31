import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import type { FormData } from "../Register";
import type { FormEvent } from "react";

interface AccountSecurityProps {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string) => void;
  prevStep: () => void;
}

export default function AccountSecurity({
  formData,
  handleChange,
  prevStep,
}: AccountSecurityProps) {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setShowConfetti(true);
    setTimeout(() => setCountdown(3), 1500);
  };

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      navigate("/services/in-house-projects/dashboard");
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c! - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">

      {showConfetti && <Confetti recycle={false} numberOfPieces={400} />}

      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Account Security
        </h2>
        <p className="text-sm text-gray-500">
          Set a secure password
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password *
        </label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password *
        </label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={prevStep}
          className="px-5 py-2 rounded-lg border border-gray-300
                     text-gray-700 hover:bg-gray-100 transition"
        >
          ← Back
        </button>

        <button
          type="submit"
          className="px-6 py-2 rounded-lg
                     bg-green-600 text-white font-medium
                     hover:bg-green-700 transition"
        >
          Register ✔
        </button>
      </div>

      {countdown !== null && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2
                        bg-white text-red-600 font-bold
                        px-6 py-3 rounded-lg shadow-lg">
          Redirecting in {countdown}…
        </div>
      )}
    </form>
  );
}
