import { TOKEN_SECRET } from "../config.js";
import Jwt from "jsonwebtoken";

export function crearTokenAcceso(payload){
    //si se ejecuta bien pues bien sino non
    return new Promise((resolve, reject) => {
        Jwt.sign(
            //pasar el parametro a transformar en token ejemplo el id
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err, token) =>{
                if(err) console.log(err);
                resolve(token)
            }
        );
    })
}

