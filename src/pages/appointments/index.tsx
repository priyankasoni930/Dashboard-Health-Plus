
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PatientInitials } from "@/components/dashboard/PatientInitials";
import { Calendar, Clock, File, Plus } from "lucide-react";
import { useState } from "react";

const appointmentsData = [
  {
    id: "1",
    patientId: "p1",
    patientName: "Michael Johnson",
    patientInitials: "MJ",
    startTime: "09:00 AM",
    endTime: "10:00 AM",
    status: "confirmed",
    date: "2025-04-05",
    notes: "Regular checkup for hypertension",
    type: "In-person",
  },
  {
    id: "2",
    patientId: "p2",
    patientName: "Emily Davis",
    patientInitials: "ED",
    startTime: "10:30 AM",
    endTime: "11:00 AM",
    status: "pending",
    date: "2025-04-05",
    notes: "Follow-up on medication adjustment",
    type: "Virtual",
  },
  {
    id: "3",
    patientId: "p3",
    patientName: "Robert Wilson",
    patientInitials: "RW",
    startTime: "11:15 AM",
    endTime: "12:00 PM",
    status: "confirmed",
    date: "2025-04-05",
    notes: "Assessment of arthritis progression",
    type: "In-person",
  },
  {
    id: "4",
    patientId: "p4",
    patientName: "Emma Wilson",
    patientInitials: "EW",
    startTime: "01:00 PM",
    endTime: "01:30 PM",
    status: "confirmed",
    date: "2025-04-06",
    notes: "Blood pressure monitoring",
    type: "In-person",
  },
  {
    id: "5",
    patientId: "p5",
    patientName: "James Brown",
    patientInitials: "JB",
    startTime: "02:00 PM",
    endTime: "03:00 PM",
    status: "confirmed",
    date: "2025-04-06",
    notes: "Urgent review of blood sugar levels",
    type: "In-person",
  },
  {
    id: "6",
    patientId: "p6",
    patientName: "Olivia Martinez",
    patientInitials: "OM",
    startTime: "09:30 AM",
    endTime: "10:30 AM",
    status: "confirmed",
    date: "2025-04-07",
    notes: "Initial consultation for heart palpitations",
    type: "Virtual",
  },
];

const AppointmentsPage = () => {
  const [selectedDate, setSelectedDate] = useState("2025-04-05");
  
  const dateAppointments = appointmentsData.filter(
    appointment => appointment.date === selectedDate
  );

  const uniqueDates = [...new Set(appointmentsData.map(app => app.date))];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-dashboard-blue">Appointments</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calendar section - collapses to full width on mobile */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base lg:text-lg">Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                    {uniqueDates.map(date => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`px-3 py-2 rounded-md text-left flex items-center gap-2 ${
                          selectedDate === date 
                            ? "bg-dashboard-blue text-white" 
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Calendar size={16} />
                        <span className="text-sm">{date}</span>
                        <span className="ml-auto bg-gray-200 text-gray-700 px-2 rounded-full text-xs">
                          {appointmentsData.filter(a => a.date === date).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointments list section */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base lg:text-lg">Appointments for {selectedDate}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dateAppointments.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                      No appointments scheduled for this day
                    </p>
                  ) : (
                    <div className="grid gap-4">
                      {dateAppointments.map(appointment => (
                        <div 
                          key={appointment.id}
                          className="p-3 sm:p-4 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <PatientInitials initials={appointment.patientInitials} />
                              <div>
                                <div className="font-medium">{appointment.patientName}</div>
                                <div className="text-sm text-gray-500">{appointment.type}</div>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                appointment.status === "confirmed" 
                                  ? "bg-green-100 text-green-700" 
                                  : "bg-yellow-100 text-yellow-700"
                              }`}>
                                {appointment.status}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                              <Clock size={14} className="flex-shrink-0" />
                              <span className="truncate">{appointment.startTime} - {appointment.endTime}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                              <File size={14} className="flex-shrink-0" />
                              <span className="truncate">{appointment.notes}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AppointmentsPage;
