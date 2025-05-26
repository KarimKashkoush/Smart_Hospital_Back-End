import { z } from "zod";
import { updateMedicalExcuseSchema } from "./excuse.validation";
export declare function updateMedicalExcuse(medicalExcuseId: number, { doctorId, patientId, reason, endDate, startDate, attachment, status, rejectionReason, }: z.infer<typeof updateMedicalExcuseSchema> & {
    attachment?: Express.Multer.File;
    status?: string;
    rejectionReason?: string;
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
