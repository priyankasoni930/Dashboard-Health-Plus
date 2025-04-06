
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PatientsPage from "./pages/patients";
import AppointmentsPage from "./pages/appointments";
import ConsultationsPage from "./pages/consultations";
import PrescriptionsPage from "./pages/prescriptions";
import MessagesPage from "./pages/messages";
import BillingPage from "./pages/billing";
import SettingsPage from "./pages/settings";
import AnalyticsPage from "./pages/analytics";
import ReportsPage from "./pages/reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/consultations" element={<ConsultationsPage />} />
          <Route path="/prescriptions" element={<PrescriptionsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
