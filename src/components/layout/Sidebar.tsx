
import { cn } from "@/lib/utils";
import { currentUser } from "@/lib/mock-data";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  PenLine, 
  MessageSquare, 
  DollarSign, 
  Settings, 
  LogOut, 
  BarChart,
  FileBarChart2,
  Menu,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Patients",
    href: "/patients",
    icon: Users,
  },
  {
    name: "Appointments",
    href: "/appointments",
    icon: Calendar,
  },
  {
    name: "Consultations",
    href: "/consultations",
    icon: FileText,
  },
  {
    name: "Prescriptions",
    href: "/prescriptions",
    icon: PenLine,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    name: "Billing",
    href: "/billing",
    icon: DollarSign,
  },
  {
    name: "Analytics",
    href: "/analytics", 
    icon: BarChart,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: FileBarChart2, 
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <>
      {/* Mobile menu button - visible only on small screens */}
      <div className="lg:hidden fixed top-0 left-0 z-30 p-4">
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - responsive design */}
      <div 
        className={cn(
          "fixed lg:sticky top-0 h-screen bg-white border-r border-gray-200 flex flex-col z-30",
          "transition-transform duration-300 ease-in-out",
          "w-64 lg:w-56",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Users size={18} className="text-gray-600" />
            </div>
            <div>
              <div className="text-sm font-medium">{currentUser.name}</div>
              <div className="text-xs text-gray-500">{currentUser.role}</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <SidebarItem
              key={item.name}
              name={item.name}
              href={item.href}
              icon={item.icon}
              isActive={location.pathname === item.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click for mobile
            />
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-gray-900 w-full px-3 py-2 rounded-md group">
            <LogOut className="sidebar-icon" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </>
  );
}

interface SidebarItemProps {
  name: string;
  href: string;
  icon: React.ElementType;
  isActive?: boolean;
  onClick?: () => void;
}

function SidebarItem({ name, href, icon: Icon, isActive, onClick }: SidebarItemProps) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 text-sm w-full px-3 py-2 rounded-md transition-colors group",
        isActive
          ? "bg-dashboard-light-blue text-dashboard-blue font-medium"
          : "text-gray-600 hover:text-gray-900"
      )}
      onClick={onClick}
    >
      <Icon
        className={cn(
          "h-5 w-5",
          isActive ? "text-dashboard-blue" : "text-gray-500 group-hover:text-gray-700"
        )}
      />
      <span>{name}</span>
    </Link>
  );
}
