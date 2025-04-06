
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface DashboardTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export function DashboardTabs({ tabs, activeTab, onChange }: DashboardTabsProps) {
  return (
    <div className="flex space-x-4 border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "tab-button",
            activeTab === tab.id && "tab-active"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
