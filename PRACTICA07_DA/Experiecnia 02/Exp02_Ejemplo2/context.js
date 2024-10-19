import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = {
        mouses: [
            { id: 1, name: 'Mouse Logitech G305', price: 200, details: 'Mouse ergonómico con diseño azul' },
            { id: 2, name: 'Mouse Redragon', price: 140, details: 'Mouse inalambrico de color rojo' },
        ],
        teclados: [
            { id: 3, name: 'Teclado Mecanico Kumara', price: 250, details: 'Teclado mecánico con retroiluminación' },
            { id: 4, name: 'Teclado de Membrana', price: 70, details: 'Teclado de membrana, pequeño' },
        ],
    };

    return (
        <ProductContext.Provider value={{ products, selectedProduct, setSelectedProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
