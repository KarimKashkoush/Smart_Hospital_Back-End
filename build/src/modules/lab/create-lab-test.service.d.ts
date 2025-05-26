import { z } from "zod";
import { createLabTestSchema } from "./lab.validation";
export declare function createLabTest({ date, attachment, name, status, referringDoctorId, patientUsername, }: z.infer<typeof createLabTestSchema> & {
    attachment?: Express.Multer.File;
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
