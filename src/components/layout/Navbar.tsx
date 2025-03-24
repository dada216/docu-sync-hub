
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart2, FileText, Settings } from 'lucide-react';
import { StatusIndicator } from './StatusIndicator';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b border-border h-16 flex items-center px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="font-medium text-xl tracking-tight">SFTP Flow</div>
          <StatusIndicator />
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          <Link 
            to="/" 
            className={`${isActive('/')} px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2`}
          >
            <BarChart2 className="w-4 h-4" />
            Dashboard
          </Link>
          <Link 
            to="/documents" 
            className={`${isActive('/documents')} px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2`}
          >
            <FileText className="w-4 h-4" />
            Documents
          </Link>
          <Link 
            to="/settings" 
            className={`${isActive('/settings')} px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2`}
          >
            <Settings className="w-4 h-4" />
            Settings
          </Link>
        </div>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
