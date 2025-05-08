const { PrismaClient } = require('./generated/client');
const { hash } = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create users
  const password_hash = await hash('password123', 12);
  
  const users = await Promise.all([
    prisma.users.create({
      data: {
        username: 'johndoe',
        password_hash,
        full_name: 'John Doe',
        role: 'patient',
      },
    }),
    prisma.users.create({
      data: {
        username: 'janesmith',
        password_hash,
        full_name: 'Jane Smith',
        role: 'doctor',
      },
    }),
    prisma.users.create({
      data: {
        username: 'mikejohnson',
        password_hash,
        full_name: 'Mike Johnson',
        role: 'technician',
      },
    }),
  ]);

  // Create patient
  const patient = await prisma.patients.create({
    data: {
      full_name: 'John Doe',
      date_of_birth: new Date('1990-01-01'),
      gender: 'male',
      phone_number: '1234567890',
      address: '123 Main St',
      allergies: 'None',
    },
  });

  // Create doctor
  const doctor = await prisma.doctors.create({
    data: {
      user_id: users[1].user_id,
      specialty: 'Cardiology',
    },
  });

  // Create diseases
  const diseases = await Promise.all([
    prisma.diseases.create({
      data: {
        disease_name: 'COVID-19',
        description: 'Coronavirus disease',
      },
    }),
    prisma.diseases.create({
      data: {
        disease_name: 'Influenza',
        description: 'Seasonal flu',
      },
    }),
  ]);

  // Create medical history
  await prisma.medicalHistory.create({
    data: {
      patient_id: patient.patient_id,
      technician_id: users[2].user_id,
      record_date: new Date(),
      description: 'Regular checkup',
    },
  });

  // Create diagnoses
  const diagnosis = await prisma.diagnoses.create({
    data: {
      patient_id: patient.patient_id,
      disease_id: diseases[0].disease_id,
      diagnosis_date: new Date('2024-01-01'),
      status: 'positive',
      recovery_date: new Date('2024-01-15'),
    },
  });

  // Create cases
  await prisma.cases.create({
    data: {
      doctor_id: doctor.doctor_id,
      patient_id: patient.patient_id,
      diagnosis_id: diagnosis.diagnosis_id,
      case_date: new Date(),
      status: 'completed',
    },
  });

  console.log('Database has been seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 