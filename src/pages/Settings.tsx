
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Server, Shield, Clock, Bell } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure your SFTP server and document processing</p>
        </div>
        
        <Tabs defaultValue="server" className="animate-fade-in">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="server" className="flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>Server</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="scheduling" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Scheduling</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span>Notifications</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="server" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>SFTP Server Configuration</CardTitle>
                <CardDescription>Manage your SFTP server connection details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="host">Host</Label>
                    <Input id="host" placeholder="sftp.example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="port">Port</Label>
                    <Input id="port" placeholder="22" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="sftp_user" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="directory">Root Directory</Label>
                  <Input id="directory" placeholder="/home/sftp/documents" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Test Connection</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Document Paths</CardTitle>
                <CardDescription>Configure the paths for different document types</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ar-path">AR Invoices Path</Label>
                  <Input id="ar-path" placeholder="/invoices/ar" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ap-path">AP Invoices Path</Label>
                  <Input id="ap-path" placeholder="/invoices/ap" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enrichment-path">Enrichments Path</Label>
                  <Input id="enrichment-path" placeholder="/enrichments" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Paths</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Configure encryption and security options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="encryption">Enable Encryption</Label>
                    <p className="text-sm text-muted-foreground">Use encryption for all file transfers</p>
                  </div>
                  <Switch id="encryption" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="key-auth">Key Authentication</Label>
                    <p className="text-sm text-muted-foreground">Use SSH key instead of password</p>
                  </div>
                  <Switch id="key-auth" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="ip-whitelist">IP Whitelisting</Label>
                    <p className="text-sm text-muted-foreground">Restrict access to specific IP addresses</p>
                  </div>
                  <Switch id="ip-whitelist" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Security Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="scheduling" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Processing Schedule</CardTitle>
                <CardDescription>Configure when documents are processed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="auto-process">Automatic Processing</Label>
                    <p className="text-sm text-muted-foreground">Process documents as they arrive</p>
                  </div>
                  <Switch id="auto-process" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="schedule">Processing Schedule</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input id="schedule" placeholder="Every 15 minutes" />
                    <Button>Update Schedule</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email alerts for important events</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-address">Email Address</Label>
                  <Input id="email-address" placeholder="admin@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label>Notification Events</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notify-error">Processing Errors</Label>
                      <Switch id="notify-error" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notify-complete">Processing Complete</Label>
                      <Switch id="notify-complete" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notify-server">Server Status Changes</Label>
                      <Switch id="notify-server" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Notification Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;
