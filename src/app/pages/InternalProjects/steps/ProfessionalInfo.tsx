import type { FormEvent } from "react";
import type { FormData } from "../Register";

interface ProfessionalInfoProps {
  formData: FormData;
  handleChange: (field: keyof FormData, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function ProfessionalInfo({
  formData,
  handleChange,
  nextStep,
  prevStep,
}: ProfessionalInfoProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Professional Information
        </h2>
        <p className="text-sm text-gray-500">
          Tell us about your professional background
        </p>
      </div>

      {/* Profession */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Profession *
        </label>
        <select
          value={formData.profession}
          onChange={(e) => handleChange("profession", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select profession</option>
          <option value="Doctor">Doctor</option>
          <option value="Nurse">Nurse</option>
          <option value="Therapist">Therapist</option>
          <option value="Pharmacist">Pharmacist</option>
          <option value="Technician">Technician</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* License Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          License / Registration Number *
        </label>
        <input
          type="text"
          value={formData.licenseNumber}
          onChange={(e) => handleChange("licenseNumber", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Issuing Authority */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Issuing Authority *
        </label>
        <input
          type="text"
          value={formData.issuingAuthority}
          onChange={(e) => handleChange("issuingAuthority", e.target.value)}
          required
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Expiration Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          License Expiration Date
        </label>
        <input
          type="date"
          value={formData.expirationDate}
          onChange={(e) => handleChange("expirationDate", e.target.value)}
          className="w-full rounded-lg border border-gray-300
             bg-white text-gray-900 placeholder:text-gray-400
             px-4 py-2
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* NPI */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          NPI (10-digit) *
        </label>
        <input
          type="text"
          value={formData.npi}
          onChange={(e) => handleChange("npi", e.target.value)}
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

