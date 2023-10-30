import { Router } from "express";
import { authRequired } from "../Middlewares/validarToken.js";
import { rolRequired } from "../Middlewares/validarRol.js";
import {
  getProductos,
  getproducto,
  createProduct,
  updateProducto,
  deleteProduct,
} from "../Controllers/productos.controller.js";

const router = Router();

router.get("/producto", authRequired, rolRequired([1, 2]) ,getProductos);
router.get("/producto/:id", authRequired, getproducto);
router.post("/producto", authRequired, createProduct);
router.delete("/producto/:id", authRequired, deleteProduct);
router.put("/producto/:id", authRequired, updateProducto)

export default router;
