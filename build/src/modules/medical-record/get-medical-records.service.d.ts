export declare const getMedicalRecords: () => Promise<({
    doctor: {
        name: string;
        email: string;
        phone: string;
        userId: number;
    };
    patient: {
        name: string;
        email: string;
        phone: string;
        userId: number;
    };
} & {
    id: number;
    diagnosis: string;
    treatmentDetails: string;
    datetime: Date;
    patientId: number;
    doctorId: number;
})[]>;
