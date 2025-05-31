import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { validateBody } from "src/shared/validate-body";
import { createRatingSchema } from "./rating.validation";
import { createRating } from "./create-rating.service";
import { StatusCodes } from "http-status-codes";

const ratingRouter = Router();

ratingRouter.post(
      "/rate-doctor",
      validateBody(createRatingSchema),
      expressAsyncHandler(async (req, res) => {
            const rating = await createRating(req.body);
            res.status(StatusCodes.CREATED).json({ rating, message: "Rating saved successfully." });
      })
);


import { getRatingsByDoctorId } from "./get-ratings-by-doctorId.service";

ratingRouter.get(
      "/ratings/:doctorId",
      expressAsyncHandler(async (req, res) => {
            const doctorId = Number(req.params.doctorId);

            if (isNaN(doctorId)) {
                  res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid doctorId parameter." });
                  return;
            }

            const ratings = await getRatingsByDoctorId(doctorId);
            res.status(StatusCodes.OK).json({ ratings });
      })
);




export default ratingRouter;
