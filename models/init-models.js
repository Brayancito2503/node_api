import { sequelize } from "../src/db.js";
import { DataTypes } from "sequelize";
export const Personal = sequelize.define('Personal', {
  idpersonal: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idrol: {
    type: DataTypes.INTEGER,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.TEXT,
  },
  clave: {
    type: DataTypes.TEXT,
  },
  esactivo: {
    type: DataTypes.BOOLEAN,
  },
  fecharegistro: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'personal', // Reemplaza con el nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const CategoriaCompra = sequelize.define('CategoriaCompra', {
  idcatcompra: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombrecategoria: {
    type: DataTypes.STRING,
  },
  fecharegistro: {
    type: DataTypes.DATE,
  },
  esactivo: {
    type: DataTypes.BOOLEAN,
  },
}, {
  tableName: 'categoriacompra', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const CategoriaProducto = sequelize.define('CategoriaProducto', {
  idcatproducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombrecatproducto: {
    type: DataTypes.STRING,
  },
  fecharegistro: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'categoriacompra', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const Cliente = sequelize.define('Cliente', {
  idcliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idpersonal: {
    type: DataTypes.INTEGER,
  },
  nombrecompleto: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'clientes', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const Compra = sequelize.define('Compra', {
  idcompra: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idproveedor: {
    type: DataTypes.INTEGER,
  },
  idcatcompra: {
    type: DataTypes.INTEGER,
  },
  nombrecompra: {
    type: DataTypes.TEXT,
  },
  total: {
    type: DataTypes.NUMERIC,
  },
  tipopago: {
    type: DataTypes.BOOLEAN,
  },
  fechacompra: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'compras', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const DetalleCompra = sequelize.define('DetalleCompra', {
  iddetcompra: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idcompra: {
    type: DataTypes.INTEGER,
  },
  idproducto: {
    type: DataTypes.INTEGER,
  },
  cantidad: {
    type: DataTypes.NUMERIC,
  },
  precio: {
    type: DataTypes.NUMERIC,
  },
  fechadetcompra: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'detallecompra', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const DetalleVenta = sequelize.define('DetalleVenta', {
  iddetventa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idproducto: {
    type: DataTypes.INTEGER,
  },
  idventa: {
    type: DataTypes.INTEGER,
  },
  cantidad: {
    type: DataTypes.NUMERIC,
  },
  precio: {
    type: DataTypes.NUMERIC,
  },
  fechaventa: {
    type: DataTypes.DATE,
  },
  esactivo: {
    type: DataTypes.BOOLEAN,
  },
}, {
  tableName: 'detalleventa', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const Menu = sequelize.define('Menu', {
  idmenu: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombremenu: {
    type: DataTypes.STRING,
  },
  icono: {
    type: DataTypes.TEXT,
  },
  url: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'menu', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const MenuRol = sequelize.define('MenuRol', {
  idmenurol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idmenu: {
    type: DataTypes.INTEGER,
  },
  idrol: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'menurol', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const Mesa = sequelize.define('Mesa', {
  idmesa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idcliente: {
    type: DataTypes.INTEGER,
  },
  idpersonal: {
    type: DataTypes.INTEGER,
  },
  numeromesa: {
    type: DataTypes.INTEGER,
  },
  esactivo: {
    type: DataTypes.BOOLEAN,
  },
}, {
  tableName: 'mesas', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});

export const Producto = sequelize.define('Producto', {
  idproducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idcatproducto: {
    type: DataTypes.INTEGER,
  },
  nombreproducto: {
    type: DataTypes.TEXT,
  },
  preciocompra: {
    type: DataTypes.NUMERIC,
  },
  precioventa: {
    type: DataTypes.NUMERIC,
  },
  fecharegistro: {
    type: DataTypes.DATE,
  },
  esactivo: {
    type : DataTypes.BOOLEAN,
  }
}, {
  tableName: 'productos', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});


export const Proveedor = sequelize.define('Proveedor', {
  idproveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ruc: {
    type: DataTypes.TEXT,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  nombreproveedor: {
    type: DataTypes.STRING,
  },
  fecharegistro: {
    type: DataTypes.DATE,
  },
  empresa: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'proveedor', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});


export const Rol = sequelize.define('Rol', {
  idrol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombrerol: {
    type: DataTypes.STRING,
  },
  esactivo: {
    type: DataTypes.BOOLEAN,
  },
  fecharegistro: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'rol', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});


export const Venta = sequelize.define('Venta', {
  idventa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idcliente: {
    type: DataTypes.INTEGER,
  },
  cantidad: {
    type: DataTypes.NUMERIC,
  },
  precioventa: {
    type: DataTypes.NUMERIC,
  },
  esactivo: {
    type: DataTypes.BOOLEAN,
  },
  fechaventa: {
    type: DataTypes.DATE,
  },
}, {
  tableName: 'venta', // Nombre de la tabla real
  timestamps: false, // Si no necesitas los campos createdAt y updatedAt
});


export const db = {
  Cliente,
  Rol,
  Venta,
  Personal,
  CategoriaCompra,
  CategoriaProducto,
  Cliente,
  Compra,
  DetalleCompra,
  DetalleVenta,
  Menu,
  MenuRol,
  Mesa,
  Personal,
  Producto,
  Proveedor,
  Rol,
  Venta
};