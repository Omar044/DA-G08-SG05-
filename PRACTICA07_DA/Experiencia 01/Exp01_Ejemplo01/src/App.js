import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Contact from './components/Contact';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <header>Farmacia</header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Products />} />
                    {/* Añadir la ruta para ProductDetail */}
                    <Route path="/productos/:id" element={<ProductDetail />} />
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
            </div>

            <footer>© 2024 Farmacia. Todos los derechos reservados.</footer>
        </Router>
    );
};

export default App;
