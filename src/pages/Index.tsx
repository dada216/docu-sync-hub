
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Dashboard from '@/components/dashboard/Dashboard';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <Dashboard />
      </main>
    </div>
  );
};

export default Index;
