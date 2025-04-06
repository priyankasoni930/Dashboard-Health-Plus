
import { upcomingAppointments } from "@/lib/mock-data";
import { PatientInitials } from "./PatientInitials";
import { CalendarIcon, ClockIcon } from "lucide-react";

export function AppointmentList() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-medium mb-2">Upcoming Appointments</h2>
        <p className="text-sm text-gray-500 mb-4">
          You have 12 appointments scheduled for today
        </p>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center gap-4">
                <PatientInitials initials={appointment.patientInitials} />
                <div>
                  <div className="font-medium">{appointment.patientName}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ClockIcon size={14} />
                    <span>
                      {appointment.startTime} - {appointment.endTime}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs ${
                    appointment.status === "confirmed"
                      ? "text-dashboard-blue"
                      : "text-gray-500"
                  }`}
                >
                  {appointment.status}
                </span>
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
                  <CalendarIcon size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
