import React from 'react';
import { ProductProvider } from './context'; 
import Navbar from './Navbar'; 
import ProductList from './ProductList'; 
import ProductDetails from './ProductDetails'; 

const App = () => {
    return (
        <ProductProvider>
            <Navbar />
            <div className="container">
                <ProductList />
                <ProductDetails />
            </div>
        </ProductProvider>
    );
};

export default App;
