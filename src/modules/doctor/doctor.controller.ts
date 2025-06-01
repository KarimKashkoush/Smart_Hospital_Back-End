import { Request, Response, Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { validateBody } from "src/shared/validate-body";
import { createDoctorSchema } from "./doctor.validation";
import { StatusCodes } from "http-status-codes";
import { checkRoles } from "src/shared/middlewares/checkRoles";
import { createDoctor } from "./create-doctor.service";
import { getDoctors, getDoctorDetails } from "./get-doctor.service";
import { updateDoctor } from "./update-doctor.service";
import { deleteDoctor } from "./delete-doctor.service";
import { validateFiles } from "src/shared/validate-files";

const doctorRouter: Router = Router();

doctorRouter.post(
  "/create-doctor",
  validateBody(createDoctorSchema),
  expressAsyncHandler(async (req: Request, res: Response) => {
    const doctor = await createDoctor(req.body);
    res.status(StatusCodes.CREATED).json(doctor);
  }),
);

doctorRouter.get(
  "/doctors",
  expressAsyncHandler(async (req: Request, res: Response) => {
    const doctors = await getDoctors();
    res.status(StatusCodes.OK).json(doctors);
  }),
);

doctorRouter.get(
  "/get-doctor/:id",
  expressAsyncHandler(async (req: Request, res: Response) => {
    const doctor = await getDoctorDetails(req.params.id);
    res.status(StatusCodes.OK).json(doctor);
  }),
);

doctorRouter.patch(
  "/update-doctor/:id",
  checkRoles(["admin", "doctor"]),
  validateFiles({
    profileImage: {
      required: false,
      mimeTypes: ["image/jpg", "image/png", "image/jpeg"],
    },
  }),
  expressAsyncHandler(async (req: Request, res: Response) => {
    const doctor = await updateDoctor(req.params.id, req.body);
    res.status(StatusCodes.OK).json(doctor);
  }),
);

doctorRouter.delete(
  "/delete-doctor/:id",
  checkRoles(["admin", "doctor"]),
  expressAsyncHandler(async (req: Request, res: Response) => {
    const doctor = await deleteDoctor(req.params.id);
    res.status(StatusCodes.OK).json(doctor);
  }),
);

export default doctorRouter;
