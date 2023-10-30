import { Router } from "express";
import { authRequired } from "../Middlewares/validarToken.js";


const router = Router();

router.get("/dashboard", authRequired, (req, res) => {
    res.send("DashBoard")
})

export default router