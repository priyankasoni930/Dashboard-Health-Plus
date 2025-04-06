
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PatientInitials } from "@/components/dashboard/PatientInitials";
import { useState } from "react";

const patientsData = [
  {
    id: "p1",
    name: "Michael Johnson",
    age: 45,
    condition: "Hypertension",
    status: "stable",
    lastVisit: "2025-03-28",
    nextAppointment: "2025-04-15",
    initials: "MJ",
  },
  {
    id: "p2",
    name: "Emily Davis",
    age: 35,
    condition: "Diabetes Type 2",
    status: "monitoring",
    lastVisit: "2025-04-01",
    nextAppointment: "2025-04-08",
    initials: "ED",
  },
  {
    id: "p3",
    name: "Robert Wilson",
    age: 62,
    condition: "Arthritis",
    status: "stable",
    lastVisit: "2025-03-15",
    nextAppointment: "2025-04-20",
    initials: "RW",
  },
  {
    id: "p4",
    name: "Emma Wilson",
    age: 42,
    condition: "Hypertension",
    status: "returning",
    lastVisit: "2025-04-04",
    nextAppointment: "2025-04-25",
    initials: "EW",
  },
  {
    id: "p5",
    name: "James Brown",
    age: 65,
    condition: "Diabetes Type 2",
    status: "critical",
    lastVisit: "2025-04-03",
    nextAppointment: "2025-04-06",
    initials: "JB",
  },
  {
    id: "p6",
    name: "Olivia Martinez",
    age: 28,
    condition: "Arrhythmia",
    status: "new",
    lastVisit: "2025-04-04",
    nextAppointment: "2025-04-11",
    initials: "OM",
  },
  {
    id: "p7",
    name: "Daniel Smith",
    age: 52,
    condition: "Coronary Artery Disease",
    status: "stable",
    lastVisit: "2025-03-20",
    nextAppointment: "2025-04-18",
    initials: "DS",
  },
  {
    id: "p8",
    name: "Sophia Rodriguez",
    age: 38,
    condition: "Hyperlipidemia",
    status: "monitoring",
    lastVisit: "2025-03-25",
    nextAppointment: "2025-04-22",
    initials: "SR",
  },
];

const PatientsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPatients = patientsData.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-dashboard-blue">Patients</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients..."
                className="px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dashboard-blue/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="px-4 py-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors">
              Add Patient
            </button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Patient Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Visit</TableHead>
                  <TableHead>Next Appointment</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map(patient => (
                  <TableRow key={patient.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <PatientInitials initials={patient.initials} />
                        <span className="font-medium">{patient.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.condition}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        patient.status === "stable" ? "bg-green-100 text-green-700" :
                        patient.status === "monitoring" ? "bg-yellow-100 text-yellow-700" :
                        patient.status === "critical" ? "bg-red-100 text-red-700" :
                        patient.status === "new" ? "bg-blue-100 text-blue-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {patient.status}
                      </span>
                    </TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>{patient.nextAppointment}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-500 hover:text-dashboard-blue">
                          View
                        </button>
                        <button className="p-1 text-gray-500 hover:text-dashboard-blue">
                          Edit
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PatientsPage;
