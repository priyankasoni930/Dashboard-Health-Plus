
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Download, FileText, Filter, Calendar, ChevronDown } from "lucide-react";

const reportsData = [
  {
    id: "rep001",
    name: "Monthly Patient Summary",
    description: "Summary of patient visits and outcomes for the current month",
    category: "Clinical",
    dateGenerated: "2025-04-01",
    format: "PDF",
  },
  {
    id: "rep002",
    name: "Quarterly Revenue Analysis",
    description: "Financial performance analysis for Q1 2025",
    category: "Financial",
    dateGenerated: "2025-03-31",
    format: "XLSX",
  },
  {
    id: "rep003",
    name: "Appointment Efficiency Report",
    description: "Analysis of appointment scheduling efficiency and no-show rate",
    category: "Operational",
    dateGenerated: "2025-03-15",
    format: "PDF",
  },
  {
    id: "rep004",
    name: "Patient Satisfaction Survey",
    description: "Results from the March 2025 patient satisfaction survey",
    category: "Patient Experience",
    dateGenerated: "2025-04-02",
    format: "PDF",
  },
  {
    id: "rep005",
    name: "Staff Performance Review",
    description: "Quarterly staff performance metrics and analysis",
    category: "Administrative",
    dateGenerated: "2025-03-30",
    format: "DOCX",
  },
  {
    id: "rep006",
    name: "Inventory Usage Report",
    description: "Tracking of medical supplies and inventory turnover",
    category: "Operational",
    dateGenerated: "2025-03-25",
    format: "XLSX",
  },
  {
    id: "rep007",
    name: "Insurance Claims Summary",
    description: "Status update on all submitted insurance claims for March 2025",
    category: "Financial",
    dateGenerated: "2025-04-03",
    format: "PDF",
  },
];

const reportTemplates = [
  {
    id: "tmpl001",
    name: "Monthly Clinical Summary",
    category: "Clinical",
    lastGenerated: "2025-03-01",
  },
  {
    id: "tmpl002",
    name: "Quarterly Financial Report",
    category: "Financial",
    lastGenerated: "2025-01-01",
  },
  {
    id: "tmpl003",
    name: "Patient Demographics Analysis",
    category: "Clinical",
    lastGenerated: "2025-02-15",
  },
  {
    id: "tmpl004",
    name: "Staff Utilization Report",
    category: "Administrative",
    lastGenerated: "2025-03-15",
  },
];

const ReportsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-dashboard-blue">Reports</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Generated Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date Generated</TableHead>
                      <TableHead>Format</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportsData.map(report => (
                      <TableRow key={report.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{report.name}</div>
                            <div className="text-sm text-gray-500">{report.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            report.category === "Clinical" ? "bg-blue-100 text-blue-700" :
                            report.category === "Financial" ? "bg-green-100 text-green-700" :
                            report.category === "Operational" ? "bg-purple-100 text-purple-700" :
                            report.category === "Patient Experience" ? "bg-yellow-100 text-yellow-700" :
                            report.category === "Administrative" ? "bg-gray-100 text-gray-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>
                            {report.category}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-gray-500" />
                            <span>{report.dateGenerated}</span>
                          </div>
                        </TableCell>
                        <TableCell>{report.format}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <button className="px-2 py-1 text-xs text-dashboard-blue bg-dashboard-blue/10 rounded-md hover:bg-dashboard-blue/20 transition-colors flex items-center gap-1">
                              <FileText size={12} />
                              View
                            </button>
                            <button className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-1">
                              <Download size={12} />
                              Download
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

          <div className="md:col-span-1">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Report Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reportTemplates.map(template => (
                    <div key={template.id} className="p-3 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{template.name}</div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          template.category === "Clinical" ? "bg-blue-100 text-blue-700" :
                          template.category === "Financial" ? "bg-green-100 text-green-700" :
                          template.category === "Administrative" ? "bg-gray-100 text-gray-700" :
                          "bg-gray-100 text-gray-700"
                        }`}>
                          {template.category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs text-gray-500">
                          Last generated: {template.lastGenerated}
                        </div>
                        <button className="text-xs text-dashboard-blue hover:underline">
                          Generate
                        </button>
                      </div>
                    </div>
                  ))}

                  <button className="w-full flex items-center justify-center gap-2 p-3 border border-dashed border-gray-200 rounded-lg text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors">
                    <FileText size={16} />
                    <span>Create New Template</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;
