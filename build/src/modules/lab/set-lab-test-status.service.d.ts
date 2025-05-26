export declare function setLabTestStatus({ id, status, }: {
    id: number;
    status: "completed" | "pending";
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
