
import React, { useState, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type ServerStatus = 'online' | 'offline' | 'degraded';

export const StatusIndicator: React.FC = () => {
  const [status, setStatus] = useState<ServerStatus>('online');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  useEffect(() => {
    // This would be replaced with real status checks
    const checkStatus = () => {
      // Simulate a mostly online server with occasional degraded performance
      const random = Math.random();
      if (random > 0.95) {
        setStatus('degraded');
      } else {
        setStatus('online');
      }
      setLastUpdated(new Date());
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'bg-success';
      case 'offline':
        return 'bg-destructive';
      case 'degraded':
        return 'bg-warning';
      default:
        return 'bg-muted';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'online':
        return 'Server Online';
      case 'offline':
        return 'Server Offline';
      case 'degraded':
        return 'Performance Degraded';
      default:
        return 'Status Unknown';
    }
  };

  const formattedTime = lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-2 ml-2">
            <div className={`${getStatusColor()} w-2 h-2 rounded-full animate-pulse-subtle`} />
            <span className="text-xs text-muted-foreground hidden sm:inline-block">
              {status === 'online' ? 'Online' : status === 'degraded' ? 'Degraded' : 'Offline'}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <div className="text-sm">
            <p className="font-medium">{getStatusText()}</p>
            <p className="text-xs text-muted-foreground">Last updated: {formattedTime}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
