-- CreateTable
CREATE TABLE "Users" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
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
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MedicalHistory" (
    "history_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "technician_id" INTEGER NOT NULL,
    "record_date" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "MedicalHistory_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MedicalHistory_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LabOrders" (
    "order_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "ordered_by" INTEGER NOT NULL,
    "test_type" TEXT NOT NULL,
    "order_date" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "LabOrders_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabOrders_ordered_by_fkey" FOREIGN KEY ("ordered_by") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LabResults" (
    "result_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "technician_id" INTEGER NOT NULL,
    "order_id" INTEGER,
    "test_date" DATETIME NOT NULL,
    "test_type" TEXT NOT NULL,
    "result_value" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "LabResults_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabResults_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabResults_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "LabOrders" ("order_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Diagnoses" (
    "diagnosis_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "disease_id" INTEGER NOT NULL,
    "diagnosis_date" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "recovery_date" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Diagnoses_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Diagnoses_disease_id_fkey" FOREIGN KEY ("disease_id") REFERENCES "Diseases" ("disease_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Diseases" (
    "disease_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "disease_name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Doctors" (
    "doctor_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "specialty" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Doctors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cases" (
    "case_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "diagnosis_id" INTEGER NOT NULL,
    "case_date" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Cases_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cases_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "Doctors" ("doctor_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cases_diagnosis_id_fkey" FOREIGN KEY ("diagnosis_id") REFERENCES "Diagnoses" ("diagnosis_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AccessLogs" (
    "log_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "access_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" TEXT NOT NULL,
    "resource_type" TEXT NOT NULL,
    "resource_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AccessLogs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AccessLogs_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Patients_phone_number_key" ON "Patients"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Diseases_disease_name_key" ON "Diseases"("disease_name");

-- CreateIndex
CREATE UNIQUE INDEX "Doctors_user_id_key" ON "Doctors"("user_id");
