import { db } from "src";
import { AppError } from "src/shared/app-error";

export const createRating = async ({
      doctorId,
      patientId,
      rating,
      comment,
      medicalRecordId,
}: {
      doctorId: number;
      patientId: number;
      rating: number;
      comment?: string;
      medicalRecordId: number;
}) => {
      // تأكد إنه جاي
      if (!medicalRecordId) {
            throw new AppError(400, "medicalRecordId is required");
      }

      // تحقق هل تم تقييم هذا السجل الطبي بالفعل
      const exists = await db.rating.findUnique({
            where: { medicalRecordId },
      });

      if (exists) {
            throw new AppError(400, "This medical record is already rated.");
      }

      const newRating = await db.rating.create({
            data: {
                  doctorId,
                  patientId,
                  rating,
                  comment,
                  medicalRecordId,
            },
      });

      return newRating;
};

