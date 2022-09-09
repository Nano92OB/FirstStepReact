import React from "react";
import Oportunidad from "./Oportunidad";

const Oportunidades = () => {
  return (
    <React.Fragment>
      <div id="oportunity">
        <article id="textOportunity">
          <h2>Encuentra las mejores oportunidades</h2>
          <p>
            La plataforma cuenta con gran variedad de proyectos locales
            (sociales,educativos y medioambientales), donde <br />
            encontraras el que mejor se adapta a la experiencia que estas
            buscando. <br />
            Te ayudamos en la coordinación de forma simpre y rápida.
          </p>
        </article>

        <div id="contenedorIconos">
          <Oportunidad
            rutaImg={"icono-mano.png"}
            idImg={"cruzRoja"}
            color={"red"}
            text={"Ser voluntario"}
          ></Oportunidad>

          <Oportunidad
            rutaImg={"icono-mano-corazon.png"}
            idImg={"img2"}
            color={"green"}
            text={"Donar"}
          ></Oportunidad>

          <Oportunidad
            rutaImg={"icono-reciclar.png"}
            idImg={"img3"}
            color={"yellow"}
            text={"Reciclar"}
          ></Oportunidad>

          <Oportunidad
            rutaImg={"icono-maletin.png"}
            idImg={"img4"}
            color={"black"}
            text={"Llamados laborales"}
          ></Oportunidad>

          
        </div>
      </div>
    </React.Fragment>
  );
};
export default Oportunidades;
