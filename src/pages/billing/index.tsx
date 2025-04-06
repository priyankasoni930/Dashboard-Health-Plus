
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PatientInitials } from "@/components/dashboard/PatientInitials";
import { 
  Download, 
  FileText, 
  DollarSign, 
  CreditCard, 
  TrendingUp,
  TrendingDown,
  BarChart3,
  Users
} from "lucide-react";
import { ChangeIndicator } from "@/components/dashboard/ChangeIndicator";

const invoicesData = [
  {
    id: "inv001",
    patientId: "p1",
    patientName: "Michael Johnson",
    patientInitials: "MJ",
    amount: 150.00,
    date: "2025-04-01",
    status: "paid",
    service: "General Consultation",
  },
  {
    id: "inv002",
    patientId: "p2",
    patientName: "Emily Davis",
    patientInitials: "ED",
    amount: 75.50,
    date: "2025-04-01",
    status: "pending",
    service: "Follow-up Consultation",
  },
  {
    id: "inv003",
    patientId: "p3",
    patientName: "Robert Wilson",
    patientInitials: "RW",
    amount: 320.00,
    date: "2025-03-28",
    status: "paid",
    service: "Comprehensive Assessment",
  },
  {
    id: "inv004",
    patientId: "p4",
    patientName: "Emma Wilson",
    patientInitials: "EW",
    amount: 200.00,
    date: "2025-03-25",
    status: "overdue",
    service: "ECG + Consultation",
  },
  {
    id: "inv005",
    patientId: "p5",
    patientName: "James Brown",
    patientInitials: "JB",
    amount: 450.00,
    date: "2025-03-20",
    status: "paid",
    service: "Extended Consultation + Tests",
  },
];

const billingMetrics = [
  {
    title: "Total Revenue",
    value: "$24,563",
    icon: <DollarSign size={20} />,
    change: 9.2,
    period: "last month",
  },
  {
    title: "Pending Payments",
    value: "$1,250",
    icon: <CreditCard size={20} />,
    change: -4.5,
    period: "last month",
  },
  {
    title: "Average Invoice",
    value: "$245",
    icon: <FileText size={20} />,
    change: 2.8,
    period: "last month",
  },
  {
    title: "Unique Patients",
    value: "128",
    icon: <Users size={20} />,
    change: 12.5,
    period: "last month",
  },
];

const BillingPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-dashboard-blue">Billing</h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Download size={16} />
              Export
            </button>
            <button className="px-4 py-2 bg-dashboard-blue text-white rounded-md hover:bg-dashboard-blue/90 transition-colors flex items-center gap-2">
              <FileText size={16} />
              New Invoice
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {billingMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-dashboard-blue/10 flex items-center justify-center text-dashboard-blue">
                    {metric.icon}
                  </div>
                  <ChangeIndicator value={metric.change} period={metric.period} />
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">{metric.title}</p>
                  <h3 className="text-2xl font-semibold mt-1">{metric.value}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Recent Invoices</CardTitle>
              <button className="text-sm text-dashboard-blue hover:underline">
                View all
              </button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoicesData.map(invoice => (
                    <TableRow key={invoice.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <PatientInitials initials={invoice.patientInitials} />
                          <span className="font-medium">{invoice.patientName}</span>
                        </div>
                      </TableCell>
                      <TableCell>{invoice.service}</TableCell>
                      <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          invoice.status === "paid" ? "bg-green-100 text-green-700" :
                          invoice.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                          invoice.status === "overdue" ? "bg-red-100 text-red-700" :
                          "bg-gray-100 text-gray-700"
                        }`}>
                          {invoice.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <button className="p-1 text-gray-500 hover:text-dashboard-blue">
                            <FileText size={16} />
                          </button>
                          <button className="p-1 text-gray-500 hover:text-dashboard-blue">
                            <Download size={16} />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Revenue Breakdown</CardTitle>
              <button className="text-sm text-dashboard-blue hover:underline">
                This Month
              </button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center text-dashboard-blue">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Consultations</p>
                      <p className="text-sm text-gray-500">42 invoices</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$12,450</p>
                    <div className="flex items-center justify-end text-sm text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>+8.2%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center text-green-600">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Tests & Procedures</p>
                      <p className="text-sm text-gray-500">28 invoices</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$8,320</p>
                    <div className="flex items-center justify-end text-sm text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      <span>+12.4%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center text-purple-600">
                      <Pill size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Prescriptions</p>
                      <p className="text-sm text-gray-500">64 invoices</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$3,793</p>
                    <div className="flex items-center justify-end text-sm text-red-500">
                      <TrendingDown size={14} className="mr-1" />
                      <span>-3.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BillingPage;

// Missing the 'Pill' icon import
import { Pill } from "lucide-react";
