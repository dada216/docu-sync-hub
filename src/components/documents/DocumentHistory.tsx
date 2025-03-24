
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { 
  DownloadCloud, 
  Eye, 
  FileCheck, 
  FileText,
  FileWarning, 
  Search 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Document {
  id: string;
  filename: string;
  type: 'AR Invoice' | 'AP Invoice' | 'Enrichment';
  status: 'processed' | 'pending' | 'error';
  size: string;
  created: string;
}

// Demo document data
const demoDocuments: Document[] = [
  {
    id: 'doc-001',
    filename: 'invoice-ar-2023-05-001.xml',
    type: 'AR Invoice',
    status: 'processed',
    size: '24.5 KB',
    created: '2023-05-10 14:30:22'
  },
  {
    id: 'doc-002',
    filename: 'invoice-ap-2023-05-002.xml',
    type: 'AP Invoice',
    status: 'processed',
    size: '32.1 KB',
    created: '2023-05-10 15:45:12'
  },
  {
    id: 'doc-003',
    filename: 'enrichment-data-001.xml',
    type: 'Enrichment',
    status: 'processed',
    size: '18.7 KB',
    created: '2023-05-10 16:12:05'
  },
  {
    id: 'doc-004',
    filename: 'invoice-ar-2023-05-003.xml',
    type: 'AR Invoice',
    status: 'pending',
    size: '26.3 KB',
    created: '2023-05-10 16:30:45'
  },
  {
    id: 'doc-005',
    filename: 'invoice-ap-2023-05-004.xml',
    type: 'AP Invoice',
    status: 'error',
    size: '29.8 KB',
    created: '2023-05-10 17:10:33'
  },
  {
    id: 'doc-006',
    filename: 'enrichment-data-002.xml',
    type: 'Enrichment',
    status: 'processed',
    size: '15.2 KB',
    created: '2023-05-10 17:45:18'
  },
  {
    id: 'doc-007',
    filename: 'invoice-ar-2023-05-005.xml',
    type: 'AR Invoice',
    status: 'processed',
    size: '28.9 KB',
    created: '2023-05-10 18:20:54'
  },
  {
    id: 'doc-008',
    filename: 'invoice-ap-2023-05-006.xml',
    type: 'AP Invoice',
    status: 'processed',
    size: '31.5 KB',
    created: '2023-05-10 19:05:27'
  }
];

const DocumentHistory: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>(demoDocuments);
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  
  const filteredDocuments = documents.filter(doc => {
    // Apply type filter
    if (filter !== 'all' && doc.type !== filter) {
      return false;
    }
    
    // Apply search filter (case insensitive)
    if (search && !doc.filename.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'processed':
        return <FileCheck className="w-4 h-4 text-success" />;
      case 'pending':
        return <FileText className="w-4 h-4 text-warning" />;
      case 'error':
        return <FileWarning className="w-4 h-4 text-destructive" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'processed':
        return <Badge className="bg-success">Processed</Badge>;
      case 'pending':
        return <Badge className="bg-warning">Pending</Badge>;
      case 'error':
        return <Badge className="bg-destructive">Error</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Documents</SelectItem>
            <SelectItem value="AR Invoice">AR Invoices</SelectItem>
            <SelectItem value="AP Invoice">AP Invoices</SelectItem>
            <SelectItem value="Enrichment">Enrichments</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Status</TableHead>
              <TableHead>Filename</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="hidden md:table-cell">Size</TableHead>
              <TableHead className="hidden md:table-cell">Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>{getStatusIcon(doc.status)}</TableCell>
                  <TableCell className="font-medium">{doc.filename}</TableCell>
                  <TableCell>
                    {doc.type}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{doc.size}</TableCell>
                  <TableCell className="hidden md:table-cell">{doc.created}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <DownloadCloud className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
                  No documents found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DocumentHistory;
