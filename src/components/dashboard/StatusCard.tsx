
import React from 'react';
import { ArrowDown, ArrowUp, Clock } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

interface StatusCardProps {
  title: string;
  description: string;
  count: number;
  trend: {
    direction: 'up' | 'down' | 'neutral';
    percentage: number;
  };
  lastProcessed: string;
  className?: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  description,
  count,
  trend,
  lastProcessed,
  className
}) => {
  const trendColor = trend.direction === 'up' 
    ? 'text-success' 
    : trend.direction === 'down' 
      ? 'text-destructive' 
      : 'text-muted-foreground';

  return (
    <Card className={`overflow-hidden animate-fade-in ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-2">{count}</div>
        <div className="flex items-center gap-1.5">
          <div className={`flex items-center gap-1 ${trendColor} text-sm`}>
            {trend.direction === 'up' && <ArrowUp className="w-3 h-3" />}
            {trend.direction === 'down' && <ArrowDown className="w-3 h-3" />}
            {trend.percentage}%
          </div>
          <span className="text-xs text-muted-foreground">vs last week</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-2 pb-2">
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="w-3 h-3 mr-1" />
          Last processed: {lastProcessed}
        </div>
      </CardFooter>
    </Card>
  );
};

export default StatusCard;
