
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { useState } from "react";

const monthlyAppointmentsData = [
  { month: "Jan", appointments: 45, consultations: 38, revenue: 6800 },
  { month: "Feb", appointments: 52, consultations: 43, revenue: 7300 },
  { month: "Mar", appointments: 48, consultations: 45, revenue: 8100 },
  { month: "Apr", appointments: 61, consultations: 55, revenue: 9500 },
  { month: "May", appointments: 55, consultations: 48, revenue: 9100 },
  { month: "Jun", appointments: 67, consultations: 60, revenue: 10400 },
  { month: "Jul", appointments: 72, consultations: 65, revenue: 12300 },
  { month: "Aug", appointments: 69, consultations: 62, revenue: 11800 },
  { month: "Sep", appointments: 74, consultations: 68, revenue: 13500 },
  { month: "Oct", appointments: 80, consultations: 72, revenue: 14200 },
  { month: "Nov", appointments: 73, consultations: 65, revenue: 13100 },
  { month: "Dec", appointments: 65, consultations: 58, revenue: 11900 },
];

const patientDemographicsData = [
  { name: "0-18", value: 15 },
  { name: "19-35", value: 25 },
  { name: "36-50", value: 30 },
  { name: "51-65", value: 20 },
  { name: "65+", value: 10 },
];

const diagnosisDistributionData = [
  { name: "Hypertension", value: 35 },
  { name: "Diabetes", value: 25 },
  { name: "Heart Disease", value: 15 },
  { name: "Arthritis", value: 12 },
  { name: "Other", value: 13 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState("yearly");
  const [dataType, setDataType] = useState("appointments");

  // Map data type to the correct key in the data object
  const dataTypeMap: {[key: string]: string} = {
    "appointments": "appointments",
    "consultations": "consultations",
    "revenue": "revenue"
  };

  const chartData = monthlyAppointmentsData;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-dashboard-blue">Analytics</h1>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg">Performance Overview</CardTitle>
            <div className="flex gap-4">
              <button 
                className={`text-sm ${dataType === 'appointments' ? 'text-dashboard-blue font-medium' : 'text-gray-500'}`}
                onClick={() => setDataType('appointments')}
              >
                Appointments
              </button>
              <button 
                className={`text-sm ${dataType === 'consultations' ? 'text-dashboard-blue font-medium' : 'text-gray-500'}`}
                onClick={() => setDataType('consultations')}
              >
                Consultations
              </button>
              <button 
                className={`text-sm ${dataType === 'revenue' ? 'text-dashboard-blue font-medium' : 'text-gray-500'}`}
                onClick={() => setDataType('revenue')}
              >
                Revenue
              </button>
            </div>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey={dataTypeMap[dataType]}
                  stroke="#3b82f6"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Appointment Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={monthlyAppointmentsData.slice(0, 6)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="appointments" fill="#3b82f6" />
                  <Bar dataKey="consultations" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Patient Demographics</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={patientDemographicsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {patientDemographicsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Diagnosis Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={diagnosisDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {diagnosisDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
