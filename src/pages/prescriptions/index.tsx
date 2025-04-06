
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PatientInitials } from "@/components/dashboard/PatientInitials";
import { FileText, Calendar, Pill, RefreshCcw } from "lucide-react";

const prescriptionsData = [
  {
    id: "rx1",
    patientId: "p1",
    patientName: "Michael Johnson",
    patientInitials: "MJ",
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    startDate: "2025-03-15",
    endDate: "2025-06-15",
    refills: 3,
    status: "active",
    notes: "Take in the morning with food",
  },
  {
    id: "rx2",
    patientId: "p2",
    patientName: "Emily Davis",
    patientInitials: "ED",
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    startDate: "2025-04-01",
    endDate: "2025-10-01",
    refills: 5,
    status: "active",
    notes: "Take with meals",
  },
  {
    id: "rx3",
    patientId: "p3",
    patientName: "Robert Wilson",
    patientInitials: "RW",
    medication: "Naproxen",
    dosage: "250mg",
    frequency: "As needed",
    startDate: "2025-03-15",
    endDate: "2025-04-15",
    refills: 1,
    status: "expiring-soon",
    notes: "Take for joint pain, not more than 4 per day",
  },
  {
    id: "rx4",
    patientId: "p5",
    patientName: "James Brown",
    patientInitials: "JB",
    medication: "Insulin Glargine",
    dosage: "25 units",
    frequency: "Once daily",
    startDate: "2025-04-03",
    endDate: "2025-07-03",
    refills: 2,
    status: "active",
    notes: "Inject subcutaneously at bedtime",
  },
  {
    id: "rx5",
    patientId: "p4",
    patientName: "Emma Wilson",
    patientInitials: "EW",
    medication: "Amlodipine",
    dosage: "5mg",
    frequency: "Once daily",
    startDate: "2025-03-20",
    endDate: "2025-03-30",
    refills: 0,
    status: "expired",
    notes: "Take in the evening",
  },
];

const PrescriptionsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-dashboard-blue">Prescriptions</h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
              <RefreshCcw size={16} />
              Refill Request
            </button>
            <button className="px-4 py-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors flex items-center gap-2">
              <Pill size={16} />
              New Prescription
            </button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Active Prescriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Medication</TableHead>
                  <TableHead>Dosage</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Refills</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prescriptionsData.map(prescription => (
                  <TableRow key={prescription.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <PatientInitials initials={prescription.patientInitials} />
                        <span className="font-medium">{prescription.patientName}</span>
                      </div>
                    </TableCell>
                    <TableCell>{prescription.medication}</TableCell>
                    <TableCell>{prescription.dosage}</TableCell>
                    <TableCell>{prescription.frequency}</TableCell>
                    <TableCell>{prescription.startDate}</TableCell>
                    <TableCell>{prescription.endDate}</TableCell>
                    <TableCell>{prescription.refills}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        prescription.status === "active" ? "bg-green-100 text-green-700" :
                        prescription.status === "expiring-soon" ? "bg-yellow-100 text-yellow-700" :
                        prescription.status === "expired" ? "bg-red-100 text-red-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {prescription.status.replace("-", " ")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-500 hover:text-dashboard-blue">
                          <FileText size={16} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-dashboard-blue">
                          <Calendar size={16} />
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

export default PrescriptionsPage;
