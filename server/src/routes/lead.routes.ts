import { Router } from "express";

import { createLead } from "../controllers/lead.controllers.js";
import { leadLimiter } from "../middlewares/rateLimit.middleware.js";

const router = Router();

router.post("/", leadLimiter, createLead);

export default router;