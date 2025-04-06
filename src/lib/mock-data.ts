
import { Appointment, MetricData, Patient, User } from "@/types/dashboard";

export const currentUser: User = {
  id: "1",
  name: "Dr. Sarah Smith",
  role: "Cardiologist",
  avatar: "/avatar.png",
};

export const metricData: MetricData = {
  totalPatients: {
    count: 1248,
    change: 12.5,
    period: "last month",
  },
  todaysAppointments: {
    count: 12,
    pending: 4,
  },
  averageConsultation: {
    duration: "24m",
    change: -2,
    period: "last week",
  },
  monthlyRevenue: {
    amount: 24563,
    change: 9.2,
    period: "last month",
  },
};

export const upcomingAppointments: Appointment[] = [
  {
    id: "1",
    patientId: "p1",
    patientName: "Michael Johnson",
    patientInitials: "MJ",
    startTime: "9:00 AM",
    endTime: "10:10 AM",
    status: "confirmed",
    date: "Today",
  },
  {
    id: "2",
    patientId: "p2",
    patientName: "Emily Davis",
    patientInitials: "ED",
    startTime: "10:00 AM",
    endTime: "10:30 AM",
    status: "pending",
    date: "Today",
  },
  {
    id: "3",
    patientId: "p3",
    patientName: "Robert Wilson",
    patientInitials: "RW",
    startTime: "11:15 AM",
    endTime: "11:45 AM",
    status: "confirmed",
    date: "Today",
  },
];

export const recentPatients: Patient[] = [
  {
    id: "p4",
    name: "Emma Wilson",
    age: 42,
    condition: "Hypertension",
    status: "returning",
    lastVisit: "Today",
    initials: "EW",
  },
  {
    id: "p5",
    name: "James Brown",
    age: 65,
    condition: "Diabetes Type 2",
    status: "critical",
    lastVisit: "Yesterday",
    initials: "JB",
  },
  {
    id: "p6",
    name: "Olivia Martinez",
    age: 28,
    condition: "Arrhythmia",
    status: "new",
    lastVisit: "Today",
    initials: "OM",
  },
];
