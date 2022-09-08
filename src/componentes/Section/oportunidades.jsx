import React from "react";

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
          <div className="iconos" style={{ backgroundColor: " rgb(220,53,69)" }}>
            <div>
              <img src="icono-mano.png" className="tamIcono" />
              <img id="cruzRoja" src="icono-mas.png" className="tamIconoCruz" />
            </div>
            <p>Ser voluntario</p>
          </div>
          <div className="iconos" style={{ backgroundColor: "rgb(255, 156, 7)" }}>
            <div>
              <img src="icono-mano-corazon.png" className="tamIcono" />
              <img src="icono-mas.png" className="tamIconoCruz" />
            </div>
            <p>Donar</p>
          </div>
          <div className="iconos" style={{ backgroundColor: "rgb(40,167,69)" }}>
            <div>
              <img src="icono-reciclar.png" className="tamIcono" />
              <img src="icono-mas.png" className="tamIconoCruz" />
            </div>
            <p>Reciclar</p>
          </div>
          <div className="iconos" style={{ backgroundColor: "rgb(23,162,184)" }}>
            <div>
              <img src="icono-maletin.png" className="tamIcono" />
              <img src="icono-mas.png" className="tamIconoCruz" />
            </div>
            <p>Llamados laborales</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Oportunidades;
