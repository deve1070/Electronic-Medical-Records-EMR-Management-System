import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Ethiopian names
const firstNames = [
  'Abebe', 'Kebede', 'Tadesse', 'Dawit', 'Solomon', 'Yohannes', 'Teklu', 'Mulugeta',
  'Tesfaye', 'Girma', 'Negussie', 'Bekele', 'Mekonnen', 'Haile', 'Dereje', 'Assefa',
  'Tessema', 'Worku', 'Demeke', 'Mamo', 'Alemayehu', 'Berhanu', 'Getachew', 'Mekuria',
  'Tilahun', 'Wondimu', 'Desta', 'Mulu', 'Tadesse', 'Negussie', 'Bogale', 'Tefera',
  'Mekonnen', 'Dereje', 'Assefa', 'Tessema', 'Worku', 'Demeke', 'Mamo', 'Alemayehu',
  'Berhanu', 'Getachew', 'Mekuria', 'Tilahun', 'Wondimu', 'Desta', 'Mulu', 'Tadesse',
  'Negussie', 'Bogale'
];

const lastNames = [
  'Alemu', 'Teshome', 'Mamo', 'Negussie', 'Bogale', 'Tefera', 'Mekonnen', 'Dereje',
  'Assefa', 'Tessema', 'Worku', 'Demeke', 'Mamo', 'Alemayehu', 'Berhanu', 'Getachew',
  'Mekuria', 'Tilahun', 'Wondimu', 'Desta', 'Mulu', 'Tadesse', 'Negussie', 'Bogale',
  'Tefera', 'Mekonnen', 'Dereje', 'Assefa', 'Tessema', 'Worku', 'Demeke', 'Mamo',
  'Alemayehu', 'Berhanu', 'Getachew', 'Mekuria', 'Tilahun', 'Wondimu', 'Desta', 'Mulu',
  'Tadesse', 'Negussie', 'Bogale', 'Tefera', 'Mekonnen', 'Dereje', 'Assefa', 'Tessema',
  'Worku', 'Demeke', 'Mamo'
];

const diseases = [
  { disease_name: 'Malaria', icd_code: 'B54', description: 'A mosquito-borne infectious disease' },
  { disease_name: 'Typhoid Fever', icd_code: 'A01.0', description: 'Bacterial infection caused by Salmonella typhi' },
  { disease_name: 'Tuberculosis', icd_code: 'A15', description: 'Bacterial infection affecting the lungs' },
  { disease_name: 'HIV/AIDS', icd_code: 'B20', description: 'Viral infection affecting the immune system' },
  { disease_name: 'Diabetes Mellitus', icd_code: 'E11', description: 'Metabolic disorder affecting blood sugar levels' },
  { disease_name: 'Hypertension', icd_code: 'I10', description: 'High blood pressure condition' },
  { disease_name: 'Asthma', icd_code: 'J45', description: 'Chronic respiratory condition' },
  { disease_name: 'Pneumonia', icd_code: 'J18', description: 'Lung infection causing inflammation' },
  { disease_name: 'Dengue Fever', icd_code: 'A90', description: 'Mosquito-borne viral infection' },
  { disease_name: 'Cholera', icd_code: 'A00', description: 'Bacterial infection causing severe diarrhea' }
];

const medications = [
  { name: 'Paracetamol', description: 'Pain reliever and fever reducer', quantity: 1000, min_quantity: 100, expiry_date: new Date('2025-12-31'), status: 'ACTIVE' },
  { name: 'Amoxicillin', description: 'Antibiotic for bacterial infections', quantity: 800, min_quantity: 50, expiry_date: new Date('2025-06-30'), status: 'ACTIVE' },
  { name: 'Metformin', description: 'Diabetes medication', quantity: 500, min_quantity: 30, expiry_date: new Date('2025-09-30'), status: 'ACTIVE' },
  { name: 'Ibuprofen', description: 'Anti-inflammatory and pain reliever', quantity: 1200, min_quantity: 100, expiry_date: new Date('2025-12-31'), status: 'ACTIVE' },
  { name: 'Omeprazole', description: 'Gastric acid reducer', quantity: 600, min_quantity: 40, expiry_date: new Date('2025-08-31'), status: 'ACTIVE' }
];

async function main() {
  // Create users with different roles
  const users = [];
  for (let i = 0; i < 50; i++) {
    const role = i < 10 ? 'ADMIN' : i < 20 ? 'DOCTOR' : i < 30 ? 'NURSE' : i < 40 ? 'TECHNICIAN' : 'PHARMACIST';
    const user = await prisma.users.create({
      data: {
        username: `user${i + 1}`,
        password_hash: await bcrypt.hash('password123', 10),
        full_name: `${firstNames[i]} ${lastNames[i]}`,
        role,
        is_active: true
      }
    });
    users.push(user);
  }

  // Create doctors
  const doctors = [];
  for (let i = 0; i < 50; i++) {
    const doctor = await prisma.doctors.create({
      data: {
        user_id: users[i].user_id,
        specialty: ['General Medicine', 'Pediatrics', 'Surgery', 'Gynecology', 'Cardiology'][i % 5],
        license_number: `LIC${1000 + i}`,
        is_available: true
      }
    });
    doctors.push(doctor);
  }

  // Create diseases
  const diseaseRecords = [];
  for (let i = 0; i < 50; i++) {
    const disease = diseases[i % 10];
    const record = await prisma.diseases.create({
      data: {
        disease_name: `${disease.disease_name} ${i + 1}`,
        icd_code: `${disease.icd_code}.${i}`,
        description: `${disease.description} - Variant ${i + 1}`
      }
    });
    diseaseRecords.push(record);
  }

  // Create patients
  const patients = [];
  for (let i = 0; i < 50; i++) {
    const patient = await prisma.patients.create({
      data: {
        full_name: `${firstNames[i + 10]} ${lastNames[i + 10]}`,
        date_of_birth: new Date(1980 + (i % 40), i % 12, i % 28 + 1),
        gender: i % 2 === 0 ? 'MALE' : 'FEMALE',
        phone_number: `+2519${String(i).padStart(8, '0')}`,
        address: `Addis Ababa, Ethiopia - ${i + 1}`,
        allergies: i % 5 === 0 ? 'Penicillin' : null,
        is_active: true
      }
    });
    patients.push(patient);
  }

  // Create lab orders
  const labOrders = [];
  for (let i = 0; i < 50; i++) {
    const labOrder = await prisma.labOrders.create({
      data: {
        patient_id: patients[i].patient_id,
        doctor_id: doctors[i % 50].doctor_id,
        ordered_by: users[i % 50].user_id,
        test_type: ['Blood Test', 'Urine Test', 'X-Ray', 'MRI', 'CT Scan'][i % 5],
        status: ['PENDING', 'IN_PROGRESS', 'COMPLETED'][i % 3],
        priority: ['LOW', 'MEDIUM', 'HIGH'][i % 3]
      }
    });
    labOrders.push(labOrder);
  }

  // Create lab results
  for (let i = 0; i < 50; i++) {
    await prisma.labResults.create({
      data: {
        order_id: labOrders[i].order_id,
        patient_id: patients[i].patient_id,
        technician_id: users[i % 50].user_id,
        result_data: i % 3 === 0 ? 
          `Positive result for ${['Malaria', 'Typhoid', 'Tuberculosis', 'HIV', 'Diabetes'][i % 5]}` :
          'Negative result',
        status: 'COMPLETED',
        is_positive: i % 3 === 0,
        is_viewed: false
      }
    });
  }

  // Create medical history
  for (let i = 0; i < 50; i++) {
    await prisma.medicalHistory.create({
      data: {
        patient_id: patients[i].patient_id,
        technician_id: users[i % 50].user_id,
        notes: `Medical notes for patient ${i + 1}`,
        record_date: new Date(2024, i % 12, i % 28 + 1)
      }
    });
  }

  // Create prescriptions
  for (let i = 0; i < 50; i++) {
    await prisma.prescriptions.create({
      data: {
        patient_id: patients[i].patient_id,
        doctor_id: doctors[i % 50].doctor_id,
        prescribed_by: users[i % 50].user_id,
        medication: medications[i % 5].name,
        dosage: `${i + 1}mg`,
        instructions: `Take ${i + 1}mg ${['once', 'twice', 'three times'][i % 3]} daily for ${i + 1} days`,
        status: ['ACTIVE', 'COMPLETED', 'CANCELLED'][i % 3]
      }
    });
  }

  // Create access logs
  for (let i = 0; i < 50; i++) {
    await prisma.accessLogs.create({
      data: {
        user_id: users[i % 50].user_id,
        patient_id: patients[i % 50].patient_id,
        action: ['VIEW', 'EDIT', 'CREATE'][i % 3],
        resource: ['PATIENT', 'RECORD', 'PRESCRIPTION'][i % 3],
        timestamp: new Date(2024, i % 12, i % 28 + 1),
        ip_address: `192.168.1.${i + 1}`
      }
    });
  }

  // Create system logs
  for (let i = 0; i < 50; i++) {
    await prisma.systemLogs.create({
      data: {
        user_id: users[i % 50].user_id,
        action: ['LOGIN', 'LOGOUT', 'UPDATE'][i % 3],
        details: `System action ${i + 1}`,
        timestamp: new Date(2024, i % 12, i % 28 + 1),
        ip_address: `192.168.1.${i + 1}`
      }
    });
  }

  // Create user sessions
  for (let i = 0; i < 50; i++) {
    await prisma.userSessions.create({
      data: {
        user_id: users[i % 50].user_id,
        token: `token_${i + 1}`,
        expires_at: new Date(2024, i % 12, i % 28 + 1)
      }
    });
  }

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });