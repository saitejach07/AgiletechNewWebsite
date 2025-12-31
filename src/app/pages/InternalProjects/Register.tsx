import { useState } from "react";
import StepIndicator from "./steps/StepIndicator";
import PersonalInfo from "./steps/PersonalInfo";
import ContactInfo from "./steps/ContactInfo";
import ProfessionalInfo from "./steps/ProfessionalInfo";
import AccountSecurity from "./steps/AccountSecurity";

/* ---------- Types ---------- */
export interface FormData {
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  profession: string;
  licenseNumber: string;
  issuingAuthority: string;
  expirationDate: string;
  npi: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [step, setStep] = useState<number>(1);

  /* ---------- Centralized Form State ---------- */
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    profession: "",
    licenseNumber: "",
    issuingAuthority: "",
    expirationDate: "",
    npi: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f0f4ff] to-[#e6f7ff]">

      {/* ---------- HEADER ---------- */}
      <header className="py-12 text-center
                        bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500
                        text-white shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Healthcare Provider Registration
        </h1>
        <p className="text-white/80">
          Join our network of trusted healthcare professionals 🚑
        </p>
      </header>


      {/* ---------- FORM CONTAINER ---------- */}
      <main className="flex-grow flex justify-center px-4 py-12">
        <div className="w-full max-w-3xl">

          {/* Step Indicator */}
          <StepIndicator step={step} />

          {/* Card */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">

              {step === 1 && (
                <PersonalInfo
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                />
              )}

              {step === 2 && (
                <ContactInfo
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 3 && (
                <ProfessionalInfo
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {step === 4 && (
                <AccountSecurity
                  formData={formData}
                  handleChange={handleChange}
                  prevStep={prevStep}
                />
              )}

            </div>
          </div>
        </div>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Healthcare Portal. All Rights Reserved.
      </footer>
    </div>
  );
}
