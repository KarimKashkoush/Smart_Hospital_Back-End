export declare function setLabTestApproval({ id, accepted, }: {
    id: number;
    accepted: boolean;
}): Promise<{
    id: number;
    name: string;
    createdAt: Date;
    status: import(".prisma/client").$Enums.TestStatus;
    date: string;
    patientId: number;
    referringDoctorId: number;
    attachment: string | null;
    accepted: boolean;
}>;
