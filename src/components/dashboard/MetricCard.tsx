
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function MetricCard({
  title,
  value,
  icon,
  footer,
  className,
}: MetricCardProps) {
  return (
    <div className={cn("card-metric", className)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="text-gray-400">{icon}</div>
      </div>
      <div className="text-2xl font-semibold mb-2">{value}</div>
      {footer && <div className="text-xs text-gray-500 mt-auto">{footer}</div>}
    </div>
  );
}
