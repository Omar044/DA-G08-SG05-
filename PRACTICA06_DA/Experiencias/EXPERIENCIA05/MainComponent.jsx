import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import LinkList from "./LinkList/LinkList";
import Button from "./Button/Button";
import "./index.css";

const MainComponent = () => {
  const [count, setCount] = useState(0);
  const [items] = useState([
    { id: 1, name: "Google", link: "https://www.google.com" },
    { id: 2, name: "Wikipedia", link: "https://www.wikipedia.org" },
  ]);


  useEffect(() => {
    document.title = `Clics: ${count}`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="app-container">
      <Header title="Bienvenido a mi Página Web" />
      <p>Esta es una sección con algunos contenidos interesantes.</p>

      <h2>Enlaces Externos</h2>
      <LinkList links={items} />

      <div className="counter">
        <p>Haz hecho clic {count} veces</p>
        <Button onClick={handleClick}>Clic aquí</Button>
      </div>
    </div>
  );
};

export default MainComponent;
