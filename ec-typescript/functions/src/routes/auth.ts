const express = require("express");
const router = express.Router();
import { validateSignupRequest } from "../middleware/authMiddleware";
import { postSignup } from "../controllers/auth/auth";

router.post("/signup", validateSignupRequest, postSignup);

export default router;
