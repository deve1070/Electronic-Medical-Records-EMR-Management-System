var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var PrismaClient = require('@prisma/client').PrismaClient;
var hash = require('bcryptjs').hash;
var prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var password_hash, users, patient, doctor, diseases, diagnosis;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Clear all tables before seeding to avoid unique constraint errors
                return [4 /*yield*/, prisma.cases.deleteMany({})];
                case 1:
                    // Clear all tables before seeding to avoid unique constraint errors
                    _a.sent();
                    return [4 /*yield*/, prisma.diagnoses.deleteMany({})];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.medicalHistory.deleteMany({})];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.labResults.deleteMany({})];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma.labOrders.deleteMany({})];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, prisma.accessLogs.deleteMany({})];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, prisma.doctors.deleteMany({})];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, prisma.patients.deleteMany({})];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, prisma.diseases.deleteMany({})];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, prisma.users.deleteMany({})];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, hash('password123', 12)];
                case 11:
                    password_hash = _a.sent();
                    return [4 /*yield*/, Promise.all([
                            prisma.users.create({
                                data: {
                                    username: 'johndoe_admin', // Changed to make it unique
                                    password_hash: password_hash,
                                    full_name: 'John Doe',
                                    role: 'admin',
                                },
                            }),
                            prisma.users.create({
                                data: {
                                    username: 'johndoe_doctor', // Changed to make it unique
                                    password_hash: password_hash,
                                    full_name: 'John Doe',
                                    role: 'doctor',
                                },
                            }),
                            prisma.users.create({
                                data: {
                                    username: 'record_officer', // Changed to make it unique
                                    password_hash: password_hash,
                                    full_name: 'Record Officer',
                                    role: 'record_officer',
                                },
                            }),
                            prisma.users.create({
                                data: {
                                    username: 'mikejohnson', // Already unique
                                    password_hash: password_hash,
                                    full_name: 'Mike Johnson',
                                    role: 'technician',
                                },
                            }),
                        ])];
                case 12:
                    users = _a.sent();
                    return [4 /*yield*/, prisma.patients.create({
                            data: {
                                full_name: 'John Doe',
                                date_of_birth: new Date('1990-01-01'),
                                gender: 'male',
                                phone_number: '1234567890',
                                address: '123 Main St',
                                allergies: 'None',
                            },
                        })];
                case 13:
                    patient = _a.sent();
                    return [4 /*yield*/, prisma.doctors.create({
                            data: {
                                user_id: users[1].user_id,
                                specialty: 'Cardiology',
                            },
                        })];
                case 14:
                    doctor = _a.sent();
                    return [4 /*yield*/, Promise.all([
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
                        ])];
                case 15:
                    diseases = _a.sent();
                    // Create medical history
                    return [4 /*yield*/, prisma.medicalHistory.create({
                            data: {
                                patient_id: patient.patient_id,
                                technician_id: users[2].user_id,
                                record_date: new Date(),
                                description: 'Regular checkup',
                            },
                        })];
                case 16:
                    // Create medical history
                    _a.sent();
                    return [4 /*yield*/, prisma.diagnoses.create({
                            data: {
                                patient_id: patient.patient_id,
                                disease_id: diseases[0].disease_id,
                                diagnosis_date: new Date('2024-01-01'),
                                status: 'positive',
                                recovery_date: new Date('2024-01-15'),
                            },
                        })];
                case 17:
                    diagnosis = _a.sent();
                    // Create cases
                    return [4 /*yield*/, prisma.cases.create({
                            data: {
                                doctor_id: doctor.doctor_id,
                                patient_id: patient.patient_id,
                                diagnosis_id: diagnosis.diagnosis_id,
                                case_date: new Date(),
                                status: 'completed',
                            },
                        })];
                case 18:
                    // Create cases
                    _a.sent();
                    console.log('Database has been seeded!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
