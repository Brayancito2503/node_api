import { db } from "../../models/init-models.js";
import bcryt from "bcrypt"; //se usa para encriptar las contrasenias
import { crearTokenAcceso } from "../Libs/jwt.js";

//funciones que se van a ejecutar antes de llegar a las rutas

export const register = async (req, res) => {
  const { correo, nombre, apellido, telefono, clave, idrol } = req.body;
  try {
    //hashear la contrasenia y el numero indica las veces que se va a ejecutar el algoritmo para el cifrado
    const passHash = await bcryt.hash(clave, 10);
    const newPersonal = new db.Personal({
      correo,
      nombre,
      apellido,
      telefono,
      clave: passHash,
      idrol,
    });

    // const queryInsert = await pool.query(
    //   "INSERT INTO personal (nombre, apellido, correo, idrol, clave) VALUES ($1, $2, $3, $4, $5)",
    //   [
    //     newPersonal.nombre,
    //     newPersonal.apellido,
    //     newPersonal.email,
    //     newPersonal.rol,
    //     newPersonal.password,
    //   ]
    // );
    const personalSave = await newPersonal.save();
    const token = await crearTokenAcceso({ id: personalSave.idpersonal });
    //express trae por defecto una funcion para crear cookies y solo hay que pasarle un token generado por JWT
    res.cookie("token", token);

    res.json({
      id: personalSave.idpersonal,
      username:
        personalSave.nombre +
        (personalSave.apellido == undefined ? "" : " " + personalSave.apellido),
      email: personalSave.correo,
      createAt: personalSave.fecharegistro,
      activo: personalSave.esactivo,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { correo, clave } = req.body;
  try {
    //buscamos la persona por su correo
    const personalFound = await db.Personal.findOne({ where: { correo } });

    if (!personalFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcryt.compare(clave, personalFound.clave);

    if (!isMatch)
      return res.status(400).json({ message: "Credenciales no validas!" });

    const token = await crearTokenAcceso({ id: personalFound.idpersonal });

    res.cookie("token", token);

    res.json({
      id: personalFound.idpersonal,
      username:
        personalFound.nombre +
        (personalFound.apellido == undefined
          ? ""
          : " " + personalFound.apellido),
      email: personalFound.correo,
      createAt: personalFound.fecharegistro,
      activo: personalFound.esactivo,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logOut = (req, res) => {
  res.clearCookie("token");
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  console.log(req.user)
  const personalFound = await db.Personal.findByPk(req.user.id)
  // Error 400: Solicitud incorrecta
  if(!personalFound) return res.status(400).json({ message : "User not found"})

  return res.json({
    id: personalFound.idpersonal,
    username:
        personalFound.nombre +
        (personalFound.apellido == undefined
          ? ""
          : " " + personalFound.apellido),
    correo: personalFound.correo,
    esActivo: personalFound.esActivo,
  })
  
};
