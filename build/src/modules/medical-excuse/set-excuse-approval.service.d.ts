export declare function setMedicalExcuseApproval(medicalExcuseId: number, status: "approved" | "rejected"): Promise<{
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
}>;
