import express from "express";

import { createArea } from "../controllers/areas.controller";
import { schemaValition } from "../middlewares/schemaValidator.middleware";
import { CreateAreaSchema } from "../schemas/area.schema";


const router = express.Router();


router.post("/areas", schemaValition(CreateAreaSchema), createArea);

export default router;