import { authRequired } from "./validarToken.js";
import { db } from "../../models/init-models.js";
export const rolRequired = (roles) => async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log("tokennnnnnnnnnnnnnnnnnnnnnnnn");
    console.log(token);
    if (!token)
      // Error 401: No autorizado
      // Este error ocurre cuando la página que intentas acceder requiere que primero inicies sesión con un ID de usuario y una contraseña válidos.
      return res.status(401).json({ message: "No token authorization denied" });
    const userdata = await db.Personal.findByPk(req.user.id);
    console.log("si estrno y esto es user data");
    console.log(userdata.idrol);
    if (![].concat(roles).includes(userdata.idrol))
      //se utiliza para indicar que un cliente ha realizado una solicitud válida, pero el servidor se niega a responder debido a que el cliente no tiene permisos suficientes para acceder al recurso solicitado
      return res.status(403).json({ message: "No tiene permisos" });
    next();
  } catch (error) {
    res.send(404).json({ message: "No se que paso xD" });
  }
};
