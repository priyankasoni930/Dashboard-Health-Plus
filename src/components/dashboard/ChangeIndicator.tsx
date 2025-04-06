
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChangeIndicatorProps {
  value: number;
  period: string;
}

export function ChangeIndicator({ value, period }: ChangeIndicatorProps) {
  const isPositive = value >= 0;
  return (
    <div className="flex items-center gap-1">
      {isPositive ? (
        <ArrowUpIcon
          className="h-3 w-3 text-dashboard-green"
          aria-hidden="true"
        />
      ) : (
        <ArrowDownIcon className="h-3 w-3 text-dashboard-red" aria-hidden="true" />
      )}
      <span
        className={cn(
          isPositive ? "text-dashboard-green" : "text-dashboard-red",
          "text-xs"
        )}
      >
        {isPositive ? "+" : ""}
        {value}% from {period}
      </span>
    </div>
  );
}
