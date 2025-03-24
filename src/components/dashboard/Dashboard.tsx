
import React from 'react';
import DocumentFlow from './DocumentFlow';
import StatusCard from './StatusCard';

const Dashboard: React.FC = () => {
  // Demo data
  const statusCards = [
    {
      title: 'AR Invoices',
      description: 'Accounts Receivable',
      count: 256,
      trend: {
        direction: 'up' as const,
        percentage: 12
      },
      lastProcessed: '2 minutes ago'
    },
    {
      title: 'AP Invoices',
      description: 'Accounts Payable',
      count: 384,
      trend: {
        direction: 'up' as const,
        percentage: 8
      },
      lastProcessed: '5 minutes ago'
    },
    {
      title: 'Enrichments',
      description: 'Data Enhancement',
      count: 128,
      trend: {
        direction: 'down' as const,
        percentage: 3
      },
      lastProcessed: '10 minutes ago'
    }
  ];

  return (
    <div className="animate-fade-in pt-6 pb-16 space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your automated document flows</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statusCards.map((card, index) => (
          <StatusCard 
            key={card.title}
            title={card.title}
            description={card.description}
            count={card.count}
            trend={card.trend}
            lastProcessed={card.lastProcessed}
            className={`animate-duration-500 animate-delay-${index * 100}`}
          />
        ))}
      </div>
      
      <DocumentFlow className="animate-duration-1000 animate-delay-300" />
    </div>
  );
};

export default Dashboard;
