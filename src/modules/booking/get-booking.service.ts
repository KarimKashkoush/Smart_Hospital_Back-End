import { StatusCodes } from "http-status-codes";
import { db } from "src";
import { AppError } from "src/shared/app-error";

export const getDoctorBookings = async (id: string) => {
  try {
    const timeSlots = await db.timeSlots.findMany({
      where: {
        doctorId: +id,
      },
      include: {
        doctor: true,
        bookings: {
          include: {
            patient: true, // جلب بيانات المريض بالكامل
          },
        },
      },
    });

    const timeSlotsBookings = timeSlots.map((timeSlot) =>
      timeSlot.bookings.map((booking) => ({
        id: booking.id,
        date: booking.date,
        status: booking.status,
        patientId: booking.patientId,
        patientName: booking.patient.name,       // اسم المريض
        patientEmail: booking.patient.email,
        patient: booking.patient, // ✅ كل بيانات المريض
        doctorId: timeSlot.doctor.userId,
        doctorName: timeSlot.doctor.name,
      }))
    );

    const bookings = timeSlotsBookings.flat();

    return bookings;
  } catch {
    throw new AppError(StatusCodes.BAD_REQUEST, "Invalid ID");
  }
};

