'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [systemStats, setSystemStats] = useState({
    totalPatients: 0,
    activeCases: 0,
    pendingLabTests: 0,
    activeUsers: 0,
  });
  const [auditLogs, setAuditLogs] = useState<Array<any>>([]);
  const [userManagement, setUserManagement] = useState<Array<any>>([]);

  useEffect(() => {
    // Fetch system statistics
    fetchSystemStats();
    // Fetch audit logs
    fetchAuditLogs();
    // Fetch user management data
    fetchUserManagement();
  }, []);

  const fetchSystemStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      const data = await response.json();
      setSystemStats(data);
    } catch (error) {
      console.error('Error fetching system stats:', error);
    }
  };

  const fetchAuditLogs = async () => {
    try {
      const response = await fetch('/api/admin/audit-logs');
      const data = await response.json();
      setAuditLogs(data.logs || []);
    } catch (error) {
      console.error('Error fetching audit logs:', error);
    }
  };

  const fetchUserManagement = async () => {
    try {
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      setUserManagement(data.users || []);
    } catch (error) {
      console.error('Error fetching user management data:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{systemStats.totalPatients}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{systemStats.activeCases}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pending Lab Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{systemStats.pendingLabTests}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{systemStats.activeUsers}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Button>Add New User</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userManagement.map((user: any) => (
                    <TableRow key={user.user_id}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.full_name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.is_active ? 'Active' : 'Inactive'}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                        <Button variant="destructive" size="sm">Deactivate</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit">
          <Card>
            <CardHeader>
              <CardTitle>Audit Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-4">
                <div className="flex-1">
                  <Label>Filter by Action</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select action" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Actions</SelectItem>
                      <SelectItem value="login">Login</SelectItem>
                      <SelectItem value="logout">Logout</SelectItem>
                      <SelectItem value="create">Create</SelectItem>
                      <SelectItem value="update">Update</SelectItem>
                      <SelectItem value="delete">Delete</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label>Search</Label>
                  <Input placeholder="Search logs..." />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Resource</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>IP Address</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogs.map((log: any) => (
                    <TableRow key={log.log_id}>
                      <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                      <TableCell>{log.user?.full_name || 'Unknown'}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.resource}</TableCell>
                      <TableCell>{log.details}</TableCell>
                      <TableCell>{log.ip_address}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>System Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Disease Recovery Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button>Generate Report</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Doctor Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button>Generate Report</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Lab Test Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button>Generate Report</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>System Usage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button>Generate Report</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 