
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-dashboard-gray">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full lg:pl-0 pl-0 pt-14 lg:pt-0">
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8 w-full max-w-full overflow-x-hidden">
          <div className="w-full max-w-[1400px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
