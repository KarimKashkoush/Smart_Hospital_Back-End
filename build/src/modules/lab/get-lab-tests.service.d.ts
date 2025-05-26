export declare function getLabTests({ filter }: {
    filter: "accepted" | "all";
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
}[]>;
