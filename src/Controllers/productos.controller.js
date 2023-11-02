import { db } from "../../models/init-models.js";

export const getProductos = async (req, res) => {
  try {
    const productos = await db.Producto.findAll({
      where: {
        esactivo: true,
        // precioVenta: {
        //   [Op.gte]: 50, // Mayor o igual que 50
        // },
      },
    });
    res.json(productos);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const getproducto = async (req, res) => {
  try {
    const producto = await db.Producto.findAll({
      where: {
        idproducto: req.params.id,
        esactivo: true,
      },
    });
    if (producto.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(producto);
  } catch (error) {
    console.error("Error al buscar el producto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const createProduct = async (req, res) => {
  const { nombreproducto, idcatproducto, precioventa } = req.body;

  const newProduct = new db.Producto({
    nombreproducto,
    idcatproducto,
    precioventa,
  });

  const saveProduct = await newProduct.save();

  res.json(saveProduct);
};
export const deleteProduct = async (req, res) => {
  try {
    const [updatedRows] = await db.Producto.update(
      { esactivo: false },
      {
        where: {
          idproducto: req.params.id,
        },
      }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    console.error("Error al desactivar el producto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const updateProducto = async (req, res) => {
  const { id } = req.params;

  console.log(req.body);
  const { nombreproducto, precioventa, esactivo } = req.body;

  const producto = await db.Producto.update(
    {
      nombreproducto,
      precioventa,
      esactivo,
    },
    {
      where: { idproducto: id },
    }
  );

  if (producto[0] === 0) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json({ message: "Producto actualizado exitosamente" });
};
