import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Farmacia Online</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="products">Productos</Link>
        <Link to="contact">Contacto</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
