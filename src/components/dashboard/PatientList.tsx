
import { recentPatients } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

export function PatientList() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-medium mb-2">Recent Patients</h2>
        <p className="text-sm text-gray-500 mb-4">
          Recently added or updated patient records
        </p>
        <div className="space-y-4">
          {recentPatients.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  {patient.initials}
                </div>
                <div>
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-sm text-gray-500">
                    {patient.age} years • {patient.condition}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  {patient.status && (
                    <span
                      className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        patient.status === "returning" && "text-dashboard-blue",
                        patient.status === "critical" && "bg-dashboard-red text-white",
                        patient.status === "new" && "text-dashboard-green"
                      )}
                    >
                      {patient.status}
                    </span>
                  )}
                  <span className="text-xs text-gray-500">{patient.lastVisit}</span>
                </div>
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
                  <FileText size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
