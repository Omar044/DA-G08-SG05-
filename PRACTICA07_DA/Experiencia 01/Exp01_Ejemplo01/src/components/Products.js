import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const productos = [
    { id: 1, nombre: 'Medicamento' },
    { id: 2, nombre: 'Suplemento' }
  ];

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
