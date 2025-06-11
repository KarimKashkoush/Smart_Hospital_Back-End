import { db } from "src";

export const getMedicalRecords = async () => {
      const records = await db.medicalRecord.findMany({
            include: {
                  doctor: {
                        select: {
                              userId: true,
                              name: true,
                              email: true,
                              phone: true,
                              category: true,
                        },
                  },
                  patient: {
                        select: {
                              userId: true,
                              name: true,
                              email: true,
                              phone: true,
                        },
                  },
                  rating: { // ✅ هنا نضمّن التقييم
                        select: {
                              id: true,
                              rating: true,
                              comment: true,
                              createdAt: true,
                        },
                  },
            },
            orderBy: {
                  datetime: "desc",
            },
      });

      return records;
};
