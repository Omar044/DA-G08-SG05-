import React, { useState } from "react";
import Header from "./Header";
import LinkList from "./LinkList";
import Button from "./Button";

const Index = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header title="Bienvenido a mi Página Web" />
      <p>Esta es una sección con algunos contenidos interesantes.</p>

      <h2>Enlaces Externos</h2>
      <LinkList />

      <div className="counter">
        <p>Haz hecho clic {count} veces</p>
        <Button onClick={handleClick}>Clic aquí</Button>
      </div>
    </div>
  );
};

export default Index;
