'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';

interface LabTest {
  id: string;
  patientName: string;
  testType: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  requestedBy: string;
  requestedAt: string;
}

interface Equipment {
  id: string;
  name: string;
  status: 'available' | 'in_use' | 'maintenance';
  lastCalibration: string;
  nextCalibration: string;
}

export default function TechnicianDashboard() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('tests');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual data from your backend
  const labTests: LabTest[] = [
    {
      id: '1',
      patientName: 'John Doe',
      testType: 'Blood Test',
      status: 'pending',
      priority: 'high',
      requestedBy: 'Dr. Smith',
      requestedAt: '2024-03-15 10:30',
    },
    // Add more mock data as needed
  ];

  const equipment: Equipment[] = [
    {
      id: '1',
      name: 'Centrifuge',
      status: 'available',
      lastCalibration: '2024-02-15',
      nextCalibration: '2024-05-15',
    },
    // Add more mock data as needed
  ];

  const handleTestStatusUpdate = (testId: string, newStatus: LabTest['status']) => {
    // Implement status update logic
    toast({
      title: 'Status Updated',
      description: `Test ${testId} status updated to ${newStatus}`,
    });
  };

  const handleEquipmentStatusUpdate = (equipmentId: string, newStatus: Equipment['status']) => {
    // Implement equipment status update logic
    toast({
      title: 'Status Updated',
      description: `Equipment ${equipmentId} status updated to ${newStatus}`,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Lab Technician Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="tests">Lab Tests</TabsTrigger>
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="results">Test Results</TabsTrigger>
        </TabsList>

        <TabsContent value="tests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Lab Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Input
                  placeholder="Search tests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Test Type</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Requested By</TableHead>
                      <TableHead>Requested At</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {labTests.map((test) => (
                      <TableRow key={test.id}>
                        <TableCell>{test.patientName}</TableCell>
                        <TableCell>{test.testType}</TableCell>
                        <TableCell>
                          <Badge variant={test.priority === 'high' ? 'destructive' : 'default'}>
                            {test.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            test.status === 'completed' ? 'success' :
                            test.status === 'in_progress' ? 'warning' : 'default'
                          }>
                            {test.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{test.requestedBy}</TableCell>
                        <TableCell>{test.requestedAt}</TableCell>
                        <TableCell>
                          <Select
                            onValueChange={(value) => handleTestStatusUpdate(test.id, value as LabTest['status'])}
                          >
                            <SelectTrigger className="w-[130px]">
                              <SelectValue placeholder="Update Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="in_progress">In Progress</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 mb-4">
                <Input
                  placeholder="Search equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-sm"
                />
              </div>
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Calibration</TableHead>
                      <TableHead>Next Calibration</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equipment.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          <Badge variant={
                            item.status === 'available' ? 'success' :
                            item.status === 'in_use' ? 'warning' : 'destructive'
                          }>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.lastCalibration}</TableCell>
                        <TableCell>{item.nextCalibration}</TableCell>
                        <TableCell>
                          <Select
                            onValueChange={(value) => handleEquipmentStatusUpdate(item.id, value as Equipment['status'])}
                          >
                            <SelectTrigger className="w-[130px]">
                              <SelectValue placeholder="Update Status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="available">Available</SelectItem>
                              <SelectItem value="in_use">In Use</SelectItem>
                              <SelectItem value="maintenance">Maintenance</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Search results..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                  />
                  <Button>Upload Results</Button>
                </div>
                <ScrollArea className="h-[400px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Test Type</TableHead>
                        <TableHead>Result</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {labTests.map((test) => (
                        <TableRow key={test.id}>
                          <TableCell>{test.patientName}</TableCell>
                          <TableCell>{test.testType}</TableCell>
                          <TableCell>
                            {test.status === 'completed' ? 'Available' : 'Pending'}
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              test.status === 'completed' ? 'success' :
                              test.status === 'in_progress' ? 'warning' : 'default'
                            }>
                              {test.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 