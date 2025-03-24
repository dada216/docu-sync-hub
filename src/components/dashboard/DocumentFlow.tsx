
import React, { useState, useEffect } from 'react';
import { Server, HardDrive, FileText } from 'lucide-react';

interface FlowProps {
  className?: string;
}

const DocumentFlow: React.FC<FlowProps> = ({ className }) => {
  // Demo flow data
  const [flowActivity, setFlowActivity] = useState({
    arInvoices: 0,
    apInvoices: 0,
    enrichments: 0
  });

  // Simulate document flow activity
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowActivity(prev => ({
        arInvoices: Math.floor(Math.random() * 10),
        apInvoices: Math.floor(Math.random() * 15),
        enrichments: Math.floor(Math.random() * 8)
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`glass-panel rounded-xl p-6 ${className}`}>
      <h3 className="text-lg font-medium mb-6">Document Flow</h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-2">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -right-1 top-0 bg-info text-info-foreground text-xs px-2 py-0.5 rounded-full">
              SFTP
            </div>
          </div>
          <span className="text-sm font-medium">Source</span>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-1 bg-secondary mb-4 relative overflow-hidden">
            {/* Flow animation for AR invoices */}
            {Array.from({ length: flowActivity.arInvoices }).map((_, i) => (
              <div 
                key={`ar-${i}`} 
                className="flow-dot absolute animate-flow-animation" 
                style={{ 
                  top: '0', 
                  left: '-4px',
                  animationDelay: `${i * 300}ms`,
                  animationDuration: '3000ms'
                }}
              ></div>
            ))}
          </div>
          <div className="w-full h-1 bg-secondary mb-4 relative overflow-hidden">
            {/* Flow animation for AP invoices */}
            {Array.from({ length: flowActivity.apInvoices }).map((_, i) => (
              <div 
                key={`ap-${i}`} 
                className="flow-dot absolute animate-flow-animation" 
                style={{ 
                  top: '0', 
                  left: '-4px',
                  animationDelay: `${i * 200}ms`,
                  animationDuration: '3000ms'
                }}
              ></div>
            ))}
          </div>
          <div className="w-full h-1 bg-secondary relative overflow-hidden">
            {/* Flow animation for enrichments */}
            {Array.from({ length: flowActivity.enrichments }).map((_, i) => (
              <div 
                key={`enrichment-${i}`} 
                className="flow-dot absolute animate-flow-animation" 
                style={{ 
                  top: '0', 
                  left: '-4px',
                  animationDelay: `${i * 400}ms`,
                  animationDuration: '3000ms'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-2">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <HardDrive className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -right-1 top-0 bg-success text-success-foreground text-xs px-2 py-0.5 rounded-full">
              DB
            </div>
          </div>
          <span className="text-sm font-medium">Destination</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="flex flex-col items-center">
          <div className="glass-card rounded-lg p-3 w-full">
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AR Invoices</span>
            </div>
            <div className="text-2xl font-bold text-center mt-2">{flowActivity.arInvoices}</div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="glass-card rounded-lg p-3 w-full">
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AP Invoices</span>
            </div>
            <div className="text-2xl font-bold text-center mt-2">{flowActivity.apInvoices}</div>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="glass-card rounded-lg p-3 w-full">
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Enrichments</span>
            </div>
            <div className="text-2xl font-bold text-center mt-2">{flowActivity.enrichments}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentFlow;
