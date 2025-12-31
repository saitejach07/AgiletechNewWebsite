import type { FormEvent } from "react";
import type { FormData } from "../Register";

/* ---------- Props ---------- */
interface PersonalInfoProps {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string) => void;
  nextStep: () => void;
}

export default function PersonalInfo({
  formData,
  handleChange,
  nextStep,
}: PersonalInfoProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Title */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Personal Information
        </h2>
        <p className="text-sm text-gray-500">
          Tell us about yourself
        </p>
      </div>

      {/* First Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name *
        </label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name *
        </label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          value={formData.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gender
        </label>
        <select
          value={formData.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Action */}
      <div className="flex justify-end pt-4">
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
