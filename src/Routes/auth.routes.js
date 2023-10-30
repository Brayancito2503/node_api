import { Router } from "express";
import {
  logOut,
  login,
  profile,
  register,
} from "../Controllers/auth.controller.js";
//import { queri } from "../app.js";
import { authRequired } from "../Middlewares/validarToken.js";
const router = Router();

router.get("/", (req, res) => {
  queri().then((producto) => {
    console.log(producto);
    res.render("/producto/ver", {
      productos: producto,
    });
  });
});

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logOut);

// el middelwate validar token antes de llegar a la ruta profile
router.get("/profile", authRequired, profile);

export default router;
