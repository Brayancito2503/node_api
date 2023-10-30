// funciones que se ejecutan antes de que lleguen a una ruta
//para considerarse una funcion middleware se necesian estos 3 parametros
// req => da informacion de la peticion,
// res => propociona metodos para madnar respuestas

import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

//en vez de retornar una respuesta al cleinte, continua a la ruta que se esta asignando
export const authRequired = (req, res, next) => {
  //necestiamos leer el token o coockie para saber que esta loggeado
  // con req.header podemos ver toda la informacion de la cabezera de las peticiones
  const { token } = req.cookies;
  if (!token)
  // Error 401: No autorizado
  // Este error ocurre cuando la página que intentas acceder requiere que primero inicies sesión con un ID de usuario y una contraseña válidos.
    return res.status(401).json({ message: "No token authorization denied" });
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        // Error 403: Prohibido
        // Este error indica que el servidor comprende la solicitud pero se niega a autorizarla. A diferencia del error 401, volver a autenticarse no hace ninguna diferencia.
        if(err) return res.status(403).json({message : "Invalid token"})
        //todas comparten req por enden se guarda el usuario en req todos las rutas donde se use sabran que ese
        // usuario existe
        req.user = user
        //console.log(user)
        //si el token del usuaio logueado existe que proceda con la ruta
        next();
    } )
  console.log(token);
};
