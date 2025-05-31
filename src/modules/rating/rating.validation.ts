import z from "zod";

export const createRatingSchema = z.object({
      doctorId: z.number(),
      patientId: z.number(),
      rating: z.number().min(1).max(5),
      comment: z.string().optional(),
});
