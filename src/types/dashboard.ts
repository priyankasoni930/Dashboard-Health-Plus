
export interface User {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  condition: string;
  status?: 'returning' | 'new' | 'critical';
  lastVisit: string;
  initials?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientInitials: string;
  startTime: string;
  endTime: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  date: string;
}

export interface MetricData {
  totalPatients: {
    count: number;
    change: number;
    period: string;
  };
  todaysAppointments: {
    count: number;
    pending: number;
  };
  averageConsultation: {
    duration: string;
    change: number;
    period: string;
  };
  monthlyRevenue: {
    amount: number;
    change: number;
    period: string;
  };
}
