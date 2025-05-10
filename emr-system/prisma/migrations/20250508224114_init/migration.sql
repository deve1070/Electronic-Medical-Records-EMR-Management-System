-- CreateTable
CREATE TABLE "Users" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "gender" TEXT NOT NULL DEFAULT 'MALE',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "last_login" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Patients" (
    "patient_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "date_of_birth" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "allergies" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Doctors" (
    "doctor_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "specialty" TEXT NOT NULL,
    "license_number" TEXT NOT NULL,
    "is_available" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Doctors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MedicalHistory" (
    "history_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "technician_id" INTEGER NOT NULL,
    "record_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "MedicalHistory_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MedicalHistory_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LabOrders" (
    "order_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "ordered_by" INTEGER NOT NULL,
    "test_type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "LabOrders_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabOrders_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors" ("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabOrders_ordered_by_fkey" FOREIGN KEY ("ordered_by") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LabResults" (
    "result_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "order_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "technician_id" INTEGER NOT NULL,
    "result_data" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "is_positive" BOOLEAN NOT NULL DEFAULT false,
    "is_viewed" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "LabResults_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "LabOrders" ("order_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabResults_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabResults_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Diseases" (
    "disease_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "disease_name" TEXT NOT NULL,
    "description" TEXT,
    "icd_code" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Diagnoses" (
    "diagnosis_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "disease_id" INTEGER NOT NULL,
    "condition" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Diagnoses_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Diagnoses_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors" ("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Diagnoses_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "Diseases" ("disease_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cases" (
    "case_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Cases_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cases_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors" ("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Prescriptions" (
    "prescription_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "prescribed_by" INTEGER NOT NULL,
    "medication" TEXT NOT NULL,
    "dosage" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Prescriptions_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prescriptions_prescribed_by_fkey" FOREIGN KEY ("prescribed_by") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AccessLogs" (
    "log_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "details" TEXT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" TEXT,
    CONSTRAINT "AccessLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AccessLogs_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SystemLogs" (
    "log_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "action" TEXT NOT NULL,
    "details" TEXT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" TEXT,
    CONSTRAINT "SystemLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserSessions" (
    "session_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "expires_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "UserSessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecoveryRecords" (
    "record_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "disease_id" INTEGER NOT NULL,
    "diagnosis_date" DATETIME NOT NULL,
    "recovery_date" DATETIME NOT NULL,
    "notes" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "RecoveryRecords_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecoveryRecords_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors" ("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecoveryRecords_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "Diseases" ("disease_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Patients_phone_number_key" ON "Patients"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Doctors_user_id_key" ON "Doctors"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Doctors_license_number_key" ON "Doctors"("license_number");

-- CreateIndex
CREATE UNIQUE INDEX "Diseases_disease_name_key" ON "Diseases"("disease_name");

-- CreateIndex
CREATE UNIQUE INDEX "Diseases_icd_code_key" ON "Diseases"("icd_code");

-- CreateIndex
CREATE UNIQUE INDEX "UserSessions_token_key" ON "UserSessions"("token");
