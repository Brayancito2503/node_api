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
    // const tokendata = jwt.verify(token, TOKEN_SECRET, (err, user) => {
    //   // Error 403: Prohibido
    //   // Este error indica que el servidor comprende la solicitud pero se niega a autorizarla. A diferencia del error 401, volver a autenticarse no hace ninguna diferencia.
    //   if (err) return res.status(403).json({ message: "Invalid token" });
    //   //todas comparten req por enden se guarda el usuario en req todos las rutas donde se use sabran que ese
    //   // usuario existe
    //   req.user = user;
    //   //console.log(user)
    //   //si el token del usuaio logueado existe que proceda con la ruta
    // });
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
