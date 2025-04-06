
interface PatientInitialsProps {
  initials: string;
  className?: string;
}

export function PatientInitials({ initials, className }: PatientInitialsProps) {
  return (
    <div className={`flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 rounded-full text-xs font-medium ${className || ""}`}>
      {initials}
    </div>
  );
}
