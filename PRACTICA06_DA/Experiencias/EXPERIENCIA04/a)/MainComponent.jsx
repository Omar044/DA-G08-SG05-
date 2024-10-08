import React, { Component } from "react";
import Header from "./Header/Header";
import LinkList from "./LinkList/LinkList";
import Button from "./Button/Button";
import "./index.css";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    // Estado inicial
    this.state = {
      count: 0,
      items: [
        { id: 1, name: "Google", link: "https://www.google.com" },
        { id: 2, name: "Wikipedia", link: "https://www.wikipedia.org" },
      ],
    };
  }

  // Método para manejar el clic y actualizar el estado
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="app-container">
        <Header title="Bienvenido a mi Página Web" />
        <p>Esta es una sección con algunos contenidos interesantes.</p>

        <h2>Enlaces Externos</h2>
        <LinkList links={this.state.items} />

        <div className="counter">
          <p>Haz hecho clic {this.state.count} veces</p>
          <Button onClick={this.handleClick}>Clic aquí</Button>
        </div>
      </div>
    );
  }
}

export default MainComponent;
