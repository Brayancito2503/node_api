import { Router } from "express";
import { authRequired } from "../Middlewares/validarToken.js";
import { rolRequired } from "../Middlewares/validarRol.js";
import {
  getDetalleVenta,
  getDetallesVenta,
  createDetalleVenta,
  deleteDetalleVenta,
  updateDetalleVenta,
} from "../Controllers/detalleVenta.controller.js";

const router = Router();

router.get("/detalleVenta", authRequired, rolRequired([1,3]), getDetallesVenta);
router.get("/detalleVenta/:id",authRequired, rolRequired([1,3]), getDetalleVenta);
router.post("/detalleVenta",authRequired, rolRequired([1,3]), createDetalleVenta);
router.delete("/detalleVenta/:id", authRequired, rolRequired([1,3]),deleteDetalleVenta);
router.put("/detalleVenta/:id", authRequired, rolRequired([1,4]), updateDetalleVenta);

export default router;