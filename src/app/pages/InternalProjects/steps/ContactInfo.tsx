import type { FormEvent } from "react";
import type { FormData } from "../Register";

interface ContactInfoProps {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function ContactInfo({
  formData,
  handleChange,
  nextStep,
  prevStep,
}: ContactInfoProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Contact Information
        </h2>
        <p className="text-sm text-gray-500">
          How can we reach you?
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Actions */}
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
                     bg-blue-600 text-white font-medium
                     hover:bg-blue-700 transition"
        >
          Next →
        </button>
      </div>
    </form>
  );
}
