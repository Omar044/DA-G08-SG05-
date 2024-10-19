import React from 'react';
import { useProductContext } from './context';

const ProductList = () => {
    const { products, setSelectedProduct } = useProductContext();

    return (
        <div className="product-list">
            <h3>Mouses Disponibles</h3>
            <ul>
                {products.mouses.map((mouse) => (
                    <li key={mouse.id} onClick={() => setSelectedProduct(mouse)}>
                        {mouse.name} - S/. {mouse.price} {/* Cambié $ por S/. */}
                    </li>
                ))}
            </ul>

            <h3>Teclados Disponibles</h3>
            <ul>
                {products.teclados.map((teclado) => (
                    <li key={teclado.id} onClick={() => setSelectedProduct(teclado)}>
                        {teclado.name} - S/. {teclado.price} {/* Cambié $ por S/. */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
