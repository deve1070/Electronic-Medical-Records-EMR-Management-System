import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface User {
  user_id: number;
  full_name: string;
  email: string;
  role: string;
}

interface Patient {
  patient_id: number;
  user: User;
  date_of_birth: Date;
  gender: string;
  blood_type: string;
}

interface Technician {
  technician_id: number;
  user: User;
  specialization: string;
}

interface MedicalHistory {
  history_id: number;
  patient: Patient;
  technician: Technician;
  record_date: Date;
  description: string;
  diagnosis: string;
  treatment: string;
}

interface Disease {
  disease_id: number;
  disease_name: string;
  description: string;
  symptoms: string;
}

interface Diagnosis {
  diagnosis_id: number;
  patient: Patient;
  disease: Disease;
  diagnosis_date: Date;
  status: 'positive' | 'negative' | 'pending';
  recovery_date: Date | null;
}

interface DoctorCase {
  doctor_id: number;
  doctor_name: string;
  specialty: string;
  _count: {
    case_id: number;
  };
}

interface RecoveryTimeAnalysis {
  disease_id: number;
  _avg: {
    recovery_time: number;
  };
}

interface AnalyticsData {
  medicalHistory?: MedicalHistory[];
  positiveTests?: Diagnosis[];
  recoveryTime?: RecoveryTimeAnalysis[];
  doctorCases?: DoctorCase[];
}

export default function AnalyticsDashboard() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [diseaseName, setDiseaseName] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [data, setData] = useState<AnalyticsData>({});

  const fetchMedicalHistory = async (patientId: string) => {
    const response = await fetch(
      `/api/analytics?patientId=${patientId}&query=medical-history`
    );
    const result = await response.json();
    setData((prev) => ({ ...prev, medicalHistory: result }));
  };

  const fetchPositiveTests = async () => {
    if (!startDate || !endDate || !diseaseName) return;
    
    const response = await fetch(
      `/api/analytics?query=positive-tests&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&diseaseName=${diseaseName}`
    );
    const result = await response.json();
    setData((prev) => ({ ...prev, positiveTests: result }));
  };

  const fetchRecoveryTime = async () => {
    const response = await fetch('/api/analytics?query=recovery-time');
    const result = await response.json();
    setData((prev) => ({ ...prev, recoveryTime: result }));
  };

  const fetchDoctorCases = async () => {
    const response = await fetch(`/api/analytics?query=doctor-cases&year=${year}`);
    const result = await response.json();
    setData((prev) => ({ ...prev, doctorCases: result }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Patient Medical History</CardTitle>
            <CardDescription>View complete medical history of a patient</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter Patient ID"
                onChange={(e) => fetchMedicalHistory(e.target.value)}
              />
            </div>
            {data.medicalHistory && (
              <div className="mt-4">
                <h3 className="font-semibold">Medical History</h3>
                <div className="mt-2">
                  {data.medicalHistory.map((record) => (
                    <div key={record.history_id} className="border p-2 mb-2">
                      <p>Date: {new Date(record.record_date).toLocaleDateString()}</p>
                      <p>Description: {record.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Positive Test Results</CardTitle>
            <CardDescription>Find patients with positive test results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Disease Name"
                value={diseaseName}
                onChange={(e) => setDiseaseName(e.target.value)}
              />
              <div className="flex gap-2">
                <DatePicker
                  selected={startDate}
                  onSelect={setStartDate}
                  placeholder="Start Date"
                />
                <DatePicker
                  selected={endDate}
                  onSelect={setEndDate}
                  placeholder="End Date"
                />
              </div>
              <Button onClick={fetchPositiveTests}>Search</Button>
            </div>
            {data.positiveTests && (
              <div className="mt-4">
                <h3 className="font-semibold">Positive Test Results</h3>
                <div className="mt-2">
                  {data.positiveTests.map((test) => (
                    <div key={test.diagnosis_id} className="border p-2 mb-2">
                      <p>Patient: {test.patient.user.full_name}</p>
                      <p>Date: {new Date(test.diagnosis_date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recovery Time Analysis</CardTitle>
            <CardDescription>Average recovery time by disease</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={fetchRecoveryTime}>Analyze Recovery Times</Button>
            {data.recoveryTime && (
              <div className="mt-4">
                <h3 className="font-semibold">Recovery Time Analysis</h3>
                <div className="mt-2">
                  {data.recoveryTime.map((item) => (
                    <div key={item.disease_id} className="border p-2 mb-2">
                      <p>Disease ID: {item.disease_id}</p>
                      <p>Average Recovery Time: {item._avg.recovery_time} days</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Doctors by Cases</CardTitle>
            <CardDescription>Most successful doctors by completed cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              <Button onClick={fetchDoctorCases}>Get Top Doctors</Button>
            </div>
            {data.doctorCases && (
              <div className="mt-4">
                <h3 className="font-semibold">Top Doctors</h3>
                <div className="mt-2">
                  {data.doctorCases.map((doctor) => (
                    <div key={doctor.doctor_id} className="border p-2 mb-2">
                      <p>Doctor: {doctor.doctor_name}</p>
                      <p>Specialty: {doctor.specialty}</p>
                      <p>Completed Cases: {doctor._count.case_id}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 