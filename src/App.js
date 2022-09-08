import logo from './logo.svg';
import './App.css';
import React from "react";
import NavBar from './componentes/Nav/navBar';
import Header from './componentes/Nav/Header';
import Article from './componentes/Section/nosotros';
import Oportunidades from './componentes/Section/oportunidades';
import Noticias from './componentes/Main/noticias';
import Contacto from './componentes/Footer/Contacto';


function App() {
  return (
    <React.Fragment>
    <NavBar></NavBar>
    <Header></Header>
    <Article></Article>
    <Oportunidades></Oportunidades>
    <Noticias></Noticias>
    <Contacto></Contacto>
    </React.Fragment>
  );
}

export default App;
