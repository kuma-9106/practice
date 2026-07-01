const express = require("express");
const router = express.Router();
import {sendMessage} from "../controllers/top/top"

router.get("/", sendMessage);

export default router;
