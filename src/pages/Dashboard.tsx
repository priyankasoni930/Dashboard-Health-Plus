
import { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChangeIndicator } from "@/components/dashboard/ChangeIndicator";
import { AppointmentList } from "@/components/dashboard/AppointmentList";
import { PatientList } from "@/components/dashboard/PatientList";
import { metricData } from "@/lib/mock-data";
import { 
  Users, 
  Calendar, 
  Clock, 
  DollarSign,
  BarChart,
  FileBarChart2
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "analytics", label: "Analytics" },
  { id: "reports", label: "Reports" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Redirect to the appropriate page when switching tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    if (tabId === "analytics") {
      // We'll handle navigation to the analytics page through the Link component
    } else if (tabId === "reports") {
      // We'll handle navigation to the reports page through the Link component
    }
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-semibold text-dashboard-blue mb-6">Dashboard</h1>
        <div className="flex items-center mb-6">
          <DashboardTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={handleTabChange}
          />
          {activeTab === "analytics" && (
            <Link to="/analytics" className="ml-4 text-dashboard-blue hover:underline text-sm flex items-center gap-1">
              <BarChart size={14} />
              View full analytics
            </Link>
          )}
          {activeTab === "reports" && (
            <Link to="/reports" className="ml-4 text-dashboard-blue hover:underline text-sm flex items-center gap-1">
              <FileBarChart2 size={14} />
              View all reports
            </Link>
          )}
        </div>

        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 dashboard-section">
              <MetricCard
                title="Total Patients"
                value={metricData.totalPatients.count.toLocaleString()}
                icon={<Users size={20} />}
                footer={
                  <ChangeIndicator
                    value={metricData.totalPatients.change}
                    period={metricData.totalPatients.period}
                  />
                }
              />
              <MetricCard
                title="Today's Appointments"
                value={metricData.todaysAppointments.count}
                icon={<Calendar size={20} />}
                footer={
                  <span>{metricData.todaysAppointments.pending} pending confirmations</span>
                }
              />
              <MetricCard
                title="Average Consultation"
                value={metricData.averageConsultation.duration}
                icon={<Clock size={20} />}
                footer={
                  <ChangeIndicator
                    value={metricData.averageConsultation.change}
                    period={metricData.averageConsultation.period}
                  />
                }
              />
              <MetricCard
                title="Monthly Revenue"
                value={`$${metricData.monthlyRevenue.amount.toLocaleString()}`}
                icon={<DollarSign size={20} />}
                footer={
                  <ChangeIndicator
                    value={metricData.monthlyRevenue.change}
                    period={metricData.monthlyRevenue.period}
                  />
                }
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 dashboard-section">
              <AppointmentList />
              <PatientList />
            </div>
          </>
        )}

        {activeTab === "analytics" && (
          <div className="text-center py-10">
            <BarChart size={48} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium mb-2">Analytics Dashboard</h3>
            <p className="text-gray-500 mb-4">
              View detailed analytics of your clinic's performance.
            </p>
            <Link 
              to="/analytics"
              className="inline-flex items-center justify-center px-4 py-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors"
            >
              Go to Analytics
            </Link>
          </div>
        )}

        {activeTab === "reports" && (
          <div className="text-center py-10">
            <FileBarChart2 size={48} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium mb-2">Reports Dashboard</h3>
            <p className="text-gray-500 mb-4">
              Access and generate detailed reports for your practice.
            </p>
            <Link 
              to="/reports"
              className="inline-flex items-center justify-center px-4 py-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors"
            >
              Go to Reports
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
