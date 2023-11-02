import { db } from "../../models/init-models.js";

export const getDetallesVenta = async (req, res) => {
  try {
    const detalleVetna = await db.DetalleVenta.findAll({
      where: {
        esactivo: true,
      },
    });
    res.json(detalleVetna);
  } catch (error) {
    console.error("Error al obtener el detalle de las ventas:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const getDetalleVenta = async (req, res) => {
  try {
    const detalleVetna = await db.DetalleVenta.findAll({
      where: {
        iddetventa: req.params.id,
        esactivo: true,
      },
    });
    if (detalleVetna.length === 0)
      return res.status(404).json({ message: "Venta no encontrada" });
    res.json(detalleVetna);
  } catch (error) {
    console.error("Error al obtener el detalle de las ventas:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const createDetalleVenta = async (req, res) => {
  const { idproducto, idventa, cantidad, precio } = req.body;

  const newDetVenta = new db.DetalleVenta({
    idproducto,
    idventa,
    cantidad,
    precio,
  });

  const saveDetVenta = await newDetVenta.save();
  res.json(saveDetVenta);
};
export const deleteDetalleVenta = async (req, res) => {
  try {
    const detalleVenta = await db.DetalleVenta.update(
      { esactivo: false },
      {
        where: {
          iddetventa: req.params.id,
        },
      }
    );

    if (detalleVenta === 0) {
      return res.status(404).json({ message: "Venta no encontrado" });
    }

    res.json({ message: "Producto eliminado exitosamente" });
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
export const updateDetalleVenta = async (req, res) => {
  const { id } = req.params;

  console.log(req.body);
  const { idproducto, idventa, cantidad, precio, esactivo } = req.body;

  const updateDetalleVenta = await db.DetalleVenta.update(
    {
      idproducto,
      idventa,
      cantidad,
      precio,
      esactivo
    },
    {
      where: { iddetventa: id },
    }
  );

  if (updateDetalleVenta[0] === 0) {
    return res.status(404).json({ message: "Venta no encontrado" });
  }

  res.json({ message: "Venta actualizada exitosamente" });
};
