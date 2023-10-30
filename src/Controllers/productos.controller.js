import { db } from "../../models/init-models.js";

export const getProductos = async (req, res) => {
    try {
        const productos = await db.Producto.findAll();
        res.json(productos);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ message: "Error interno del servidor" });
      }

};
export const getproducto = async (req, res) => {
  const producto = await db.Producto.findByPk(req.params.id);
  if (!producto)
    return res.status(404).json({ message: "Producto no encontrado" });
  res.json(producto);
};
export const createProduct = async (req, res) => {
  const { nombreproducto, idcatproducto , precioventa } = req.body;

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
        const productId = req.params.id;
        const producto = await db.Producto.destroy({
          where: {
            idproducto: productId
          }
        });
    
        if (producto === 0) {
          return res.status(404).json({ message: "Producto no encontrado" });
        }
    
        res.json({ message: "Producto eliminado exitosamente" });
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
      }
};
export const updateProducto = async (req, res) => {
    const { id } = req.params;
  
    const producto = await db.Producto.update(
      req.body,
      {
        where: { idproducto: id }
      }
    );
  
    if (producto[0] === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
  
    res.json({ message: "Producto actualizado exitosamente" });
}; 
