/*
  Warnings:

  - Made the column `order_id` on table `LabResults` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LabOrders" (
    "order_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "ordered_by" INTEGER NOT NULL,
    "test_type" TEXT NOT NULL,
    "order_date" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "LabOrders_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabOrders_ordered_by_fkey" FOREIGN KEY ("ordered_by") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LabOrders" ("created_at", "order_date", "order_id", "ordered_by", "patient_id", "status", "test_type", "updated_at") SELECT "created_at", "order_date", "order_id", "ordered_by", "patient_id", "status", "test_type", "updated_at" FROM "LabOrders";
DROP TABLE "LabOrders";
ALTER TABLE "new_LabOrders" RENAME TO "LabOrders";
CREATE TABLE "new_LabResults" (
    "result_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patient_id" INTEGER NOT NULL,
    "technician_id" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "test_date" DATETIME NOT NULL,
    "test_type" TEXT NOT NULL,
    "result_value" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "LabResults_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patients" ("patient_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabResults_technician_id_fkey" FOREIGN KEY ("technician_id") REFERENCES "Users" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LabResults_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "LabOrders" ("order_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LabResults" ("created_at", "order_id", "patient_id", "result_id", "result_value", "technician_id", "test_date", "test_type", "unit", "updated_at") SELECT "created_at", "order_id", "patient_id", "result_id", "result_value", "technician_id", "test_date", "test_type", "unit", "updated_at" FROM "LabResults";
DROP TABLE "LabResults";
ALTER TABLE "new_LabResults" RENAME TO "LabResults";
CREATE TABLE "new_Patients" (
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
INSERT INTO "new_Patients" ("address", "allergies", "created_at", "date_of_birth", "full_name", "gender", "is_active", "patient_id", "phone_number", "updated_at") SELECT "address", "allergies", "created_at", "date_of_birth", "full_name", "gender", "is_active", "patient_id", "phone_number", "updated_at" FROM "Patients";
DROP TABLE "Patients";
ALTER TABLE "new_Patients" RENAME TO "Patients";
CREATE UNIQUE INDEX "Patients_phone_number_key" ON "Patients"("phone_number");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
