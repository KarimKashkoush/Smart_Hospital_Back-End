export declare const getPatientById: (id: string) => Promise<{
    username: string;
    avatar: string;
    user: {
        image: string;
        username: string;
    };
    medicalRecord: {
        id: number;
        diagnosis: string;
        treatmentDetails: string;
        datetime: Date;
        patientId: number;
        doctorId: number;
    }[];
    LabTest: {
        id: number;
        name: string;
        createdAt: Date;
        status: import(".prisma/client").$Enums.TestStatus;
        date: string;
        patientId: number;
        referringDoctorId: number;
        attachment: string | null;
        accepted: boolean;
    }[];
    MedicalExcuse: {
        id: number;
        image: string | null;
        createdAt: Date;
        email: string;
        status: string | null;
        categoryId: number;
        updatedAt: Date;
        patientId: number;
        doctorId: number;
        fullName: string;
        reason: string;
        startDate: Date;
        endDate: Date;
        rejectionReason: string | null;
    }[];
    name: string;
    createdAt: Date;
    email: string;
    gender: import(".prisma/client").$Enums.Gender;
    phone: string;
    birthDate: string;
    emergencyContactName: string;
    emergencyContactRelationship: string;
    emergencyContactNumber: string;
    medicalHistory: string[];
    additionalNotes: string;
    university: string;
    userId: number;
    updatedAt: Date;
}>;
