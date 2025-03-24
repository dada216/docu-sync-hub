
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import DocumentHistory from '@/components/documents/DocumentHistory';

const Documents: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">Browse and manage your document history</p>
        </div>
        
        <DocumentHistory />
      </main>
    </div>
  );
};

export default Documents;
