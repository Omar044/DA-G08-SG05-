
import React from 'react';
import '../styles/Home.css';
import logo from '../images/logo.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Bienvenido a la Farmacia Moderna</h1>
            <p>Encuentra todo lo que necesitas para tu salud y bienestar.</p>
            <img src={logo} alt="Logotipo de la farmacia" />
            <p>¡Ofertas especiales todos los días!</p>
        </div>
    );
};

export default Home;
