interface StepIndicatorProps {
  step: number;
}

export default function StepIndicator({ step }: StepIndicatorProps) {
  const steps = ["Personal Info", "Contact Info", "Professional", "Security"];

  return (
    <div className="flex justify-center items-center gap-4 my-8">
      {steps.map((label, index) => {
        const currentStep = index + 1;
        const isActive = step === currentStep;
        const isCompleted = step > currentStep;

        return (
          <div key={index} className="flex items-center">
            {/* Circle */}
            <div
              className={`
                flex items-center justify-center
                w-12 h-12 rounded-full font-bold text-lg
                transition-all duration-300
                ${
                  isActive
                    ? "bg-[#22D3EE] text-[#0F172A] border-4 border-[#22D3EE]"
                    : isCompleted
                    ? "bg-green-500 text-white border-2 border-green-500"
                    : "bg-[#1E293B] text-gray-400 border-2 border-white/20"
                }
              `}
            >
              {currentStep}
            </div>

            {/* Label */}
            <div className="ml-2 min-w-[90px] text-center">
              <span
                className={`text-sm ${
                  isActive
                    ? "font-semibold text-white"
                    : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={`mx-3 h-[2px] w-10 transition-colors duration-300 ${
                  isCompleted ? "bg-green-500" : "bg-white/20"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
