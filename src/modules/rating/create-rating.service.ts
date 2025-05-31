import { db } from "index";
import { AppError } from "src/shared/app-error";

export const createRating = async ({
      doctorId,
      patientId,
      rating,
      comment,
}: {
      doctorId: number;
      patientId: number;
      rating: number;
      comment?: string;
}) => {
      const exists = await db.rating.findUnique({
            where: {
                  doctorId_patientId: {
                        doctorId,
                        patientId,
                  },
            },
      });

      if (exists) {
            throw new AppError(400, "You already rated this doctor.");
      }

      const newRating = await db.rating.create({
            data: {
                  doctorId,
                  patientId,
                  rating,
                  comment,
            },
      });

      return newRating;
};
