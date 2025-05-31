// هذا مجرد مثال، عدل حسب نوع قاعدة البيانات أو ORM اللي بتستخدمه

import { db } from "src"; // عدل حسب طريقة استدعاء قاعدة البيانات

export async function getRatingsByDoctorId(doctorId: number) {
      // لو بتستخدم ORM أو Query Builder غير هذا مجرد مثال
      const ratings = await db.rating.findMany({
            where: { doctorId },
            select: {
                  patient: true,
                  doctor: true,
                  rating: true,
                  comment: true,
                  createdAt: true,
            },

      });

      return ratings;
}
