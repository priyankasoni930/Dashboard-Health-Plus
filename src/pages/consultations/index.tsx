
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PatientInitials } from "@/components/dashboard/PatientInitials";
import { FileText, Clock, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const consultationsData = [
  {
    id: "c1",
    patientId: "p1",
    patientName: "Michael Johnson",
    patientInitials: "MJ",
    date: "2025-04-02",
    duration: "45 minutes",
    diagnosis: "Uncontrolled Hypertension",
    notes: "Patient presented with elevated blood pressure. Medication dosage adjusted.",
    followUp: "2025-04-16",
    status: "completed",
  },
  {
    id: "c2",
    patientId: "p2",
    patientName: "Emily Davis",
    patientInitials: "ED",
    date: "2025-04-01",
    duration: "30 minutes",
    diagnosis: "Diabetes Type 2",
    notes: "Blood sugar levels improving with current medication regimen.",
    followUp: "2025-04-08",
    status: "completed",
  },
  {
    id: "c3",
    patientId: "p3",
    patientName: "Robert Wilson",
    patientInitials: "RW",
    date: "2025-03-15",
    duration: "40 minutes",
    diagnosis: "Osteoarthritis",
    notes: "Joint pain persists. Physical therapy recommended.",
    followUp: "2025-04-20",
    status: "completed",
  },
  {
    id: "c4",
    patientId: "p5",
    patientName: "James Brown",
    patientInitials: "JB",
    date: "2025-04-03",
    duration: "60 minutes",
    diagnosis: "Diabetic Neuropathy",
    notes: "Patient reporting increasing pain in extremities. Adjusted pain management protocol.",
    followUp: "2025-04-06",
    status: "urgent-followup",
  },
  {
    id: "c5",
    patientId: "p6",
    patientName: "Olivia Martinez",
    patientInitials: "OM",
    date: "2025-04-04",
    duration: "35 minutes",
    diagnosis: "Sinus Arrhythmia",
    notes: "First consultation. ECG performed. Further tests required.",
    followUp: "2025-04-11",
    status: "pending-tests",
  },
];

const ConsultationsPage = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  
  const filteredConsultations = filterStatus === "all" 
    ? consultationsData 
    : consultationsData.filter(consultation => consultation.status === filterStatus);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-dashboard-blue">Consultations</h1>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <button 
            className={`px-3 py-1.5 text-sm rounded-md ${filterStatus === 'all' ? 'bg-dashboard-blue text-white' : 'bg-gray-100'}`}
            onClick={() => setFilterStatus('all')}
          >
            All
          </button>
          <button 
            className={`px-3 py-1.5 text-sm rounded-md ${filterStatus === 'completed' ? 'bg-dashboard-blue text-white' : 'bg-gray-100'}`}
            onClick={() => setFilterStatus('completed')}
          >
            Completed
          </button>
          <button 
            className={`px-3 py-1.5 text-sm rounded-md ${filterStatus === 'pending-tests' ? 'bg-dashboard-blue text-white' : 'bg-gray-100'}`}
            onClick={() => setFilterStatus('pending-tests')}
          >
            Pending Tests
          </button>
          <button 
            className={`px-3 py-1.5 text-sm rounded-md ${filterStatus === 'urgent-followup' ? 'bg-dashboard-blue text-white' : 'bg-gray-100'}`}
            onClick={() => setFilterStatus('urgent-followup')}
          >
            Urgent Follow-up
          </button>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Consultation Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Diagnosis</TableHead>
                  <TableHead>Follow-up</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredConsultations.map(consultation => (
                  <TableRow key={consultation.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <PatientInitials initials={consultation.patientInitials} />
                        <span className="font-medium">{consultation.patientName}</span>
                      </div>
                    </TableCell>
                    <TableCell>{consultation.date}</TableCell>
                    <TableCell className="flex items-center gap-1">
                      <Clock size={14} className="text-gray-500" />
                      {consultation.duration}
                    </TableCell>
                    <TableCell>{consultation.diagnosis}</TableCell>
                    <TableCell>{consultation.followUp}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        consultation.status === "completed" ? "bg-green-100 text-green-700" :
                        consultation.status === "pending-tests" ? "bg-blue-100 text-blue-700" :
                        consultation.status === "urgent-followup" ? "bg-red-100 text-red-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {consultation.status.replace("-", " ")}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-500 hover:text-dashboard-blue">
                          <FileText size={16} />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-dashboard-blue">
                          <MoreHorizontal size={16} />
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

export default ConsultationsPage;
