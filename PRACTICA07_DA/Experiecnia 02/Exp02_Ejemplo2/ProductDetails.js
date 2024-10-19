import React from 'react';
import { useProductContext } from './context';

const ProductDetails = () => {
    const { selectedProduct } = useProductContext();

    if (!selectedProduct) return null;

    return (
        <div className="product-details">
            <h3>Detalles del Producto Seleccionado</h3>
            <p><strong>Nombre:</strong> {selectedProduct.name}</p>
            <p><strong>Precio:</strong> S/.{selectedProduct.price}</p>
            <p><strong>Detalles:</strong> {selectedProduct.details}</p>
        </div>
    );
};

export default ProductDetails;
