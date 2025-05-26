export declare function attachResutls({ id, file, }: {
    id: number;
    file: Express.Multer.File;
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
