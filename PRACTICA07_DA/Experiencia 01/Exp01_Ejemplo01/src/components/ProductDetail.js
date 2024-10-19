// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom'; 

const productos = [
    { id: 1, nombre: 'Medicamento', descripcion: 'Medicamento para la tos.', precio: 'S/10' },
    { id: 2, nombre: 'Suplemento', descripcion: 'Suplemento vitamínico.', precio: 'S/20' }
];

const ProductDetail = () => {
    const { id } = useParams(); 
    const producto = productos.find(prod => prod.id === parseInt(id)); // Buscar el producto por ID
    
    if (!producto) {
        return <div>Producto no encontrado</div>;
    }
    
    return (
        <div>
            <h1>Detalles del Producto: {producto.nombre}</h1>
            <p>Descripción: {producto.descripcion}</p>
            <p>Precio: {producto.precio}</p>
            <p>Información específica sobre el producto con ID: {id}</p>
        </div>
    );
};

export default ProductDetail;
