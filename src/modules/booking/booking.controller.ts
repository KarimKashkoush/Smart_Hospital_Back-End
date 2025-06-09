import express, { Request, Response } from "express";
import { createBooking } from "./booking.service";
import { StatusCodes } from "http-status-codes";
import expressAsyncHandler from "express-async-handler";
// import { getBookings } from "./get-bookings.service";
import { validateBody } from "src/shared/validate-body";
import {
  createBookingSchema,
  rescheduleBookingSchema,
} from "./booking.validation";
import { getDoctorBookings } from "./get-booking.service";
import { deleteBooking } from "./delete-booking.service";
import { rescheduleBooking } from "./reschedule-booking.service";
import { getBookings } from "./get-bookings.service";
import { Prisma } from "@prisma/client";

const bookingRouter = express.Router();

bookingRouter.post(
  "/create-booking",
  validateBody(createBookingSchema),
  expressAsyncHandler(async (req: Request, res: Response) => {
    try {
      const booking = await createBooking(req.body);
      res.status(StatusCodes.CREATED).json({ booking, message: "تم الحجز بنجاح" });
    } catch (error) {
      console.error("Booking Error:", error); // 👈 إضافة السطر ده

      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: "يوجد حجز بالفعل في نفس الموعد، برجاء اختيار وقت مختلف.",
        });
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: "حدث خطأ أثناء محاولة الحجز. برجاء المحاولة لاحقًا.",
        });
      }
    }
  }),
);

bookingRouter.get(
  "/get-booking",
  expressAsyncHandler(async (req: Request, res: Response) => {
    const booking = await getBookings();
    res.status(StatusCodes.OK).json({ booking, message: "Successful" });
  }),
);

bookingRouter.get(
  "/get-doctor-bookings/:id",
  expressAsyncHandler(async (req: Request, res: Response) => {
    const booking = await getDoctorBookings(req.params.id);
    res.status(StatusCodes.OK).json({ booking, message: "Successful" });
  }),
);

bookingRouter.post(
  "/reschedule-booking",
  validateBody(rescheduleBookingSchema),
  expressAsyncHandler(async (req: Request, res: Response) => {
    const { doctorBookings, booking } = await rescheduleBooking(
      req.body.bookingId,
      req.body.newTimeSlotId,
      req.body.date,
    );
    res
      .status(StatusCodes.OK)
      .json({ doctorBookings, booking, message: "Successful" });
  }),
);

bookingRouter.delete(
  "/delete-booking/:id",
  expressAsyncHandler(async (req: Request, res: Response) => {
    const booking = await deleteBooking(req.params.id);
    res.status(StatusCodes.OK).json({ booking, message: "Successful" });
  }),
);


import { updateBooking } from "./update-booking.service"; // لو الملف اسمه كده

bookingRouter.put(
  "/update-booking",
  expressAsyncHandler(async (req: Request, res: Response) => {
    try {
      const updatedBooking = await updateBooking(req.body);
      res.status(StatusCodes.OK).json({ booking: updatedBooking, message: "تم تحديث الحجز بنجاح" });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: "تعارض في تعديل الحجز، الوقت أو التاريخ مستخدم بالفعل.",
        });
      } else if (
        typeof error === "object" &&
        error !== null &&
        "statusCode" in error &&
        "message" in error
      ) {
        // هنا بنفترض إن error من نوع AppError أو مشابه
        const typedError = error as { statusCode: number; message: string };
        res.status(typedError.statusCode).json({ message: typedError.message });
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: "حدث خطأ أثناء محاولة تحديث الحجز. برجاء المحاولة لاحقًا.",
        });
      }
    }
  }),
);





export default bookingRouter;
