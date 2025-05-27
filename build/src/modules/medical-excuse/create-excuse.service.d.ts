import { z } from "zod";
import { createMedicalExcuseSchema } from "./excuse.validation";
export declare function createMedicalExcuse({ reason, endDate, doctorId, startDate, attachment, patientId, fullName, email, categoryId, }: z.infer<typeof createMedicalExcuseSchema> & {
    attachment: Express.Multer.File;
    fullName: string;
    email: string;
    categoryId?: number;
}): Promise<{
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
