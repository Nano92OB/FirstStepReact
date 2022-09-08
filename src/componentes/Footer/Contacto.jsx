import React from "react";

const Contacto = () => {
  return (
    <React.Fragment>
      <div id="contacto">
        <div id="laptop">
          <img src="laptop-escritorio.jpg" />
        </div>
        <div id="tituloContacto">
          <h2>Contacto</h2>
        </div>
        <div id="formContacto">
          <form id="formInsideContacto">
            <div id="form1" style={{ float: "left" }}>
              <label for="fname">Nombre Completo</label>
              <br />
              <input
                className="inputInside"
                type="text"
                size="28"
                id="fname"
                name="fname"
                placeholder="Aqui su nombre"
              />
              <br />
              <br />
              <label for="lname">Mail</label>
              <br />
              <input
                className="inputInside"
                type="email"
                size="28"
                id="lname"
                name="lname"
                placeholder="contacto@mail"
              />
              <br />
              <br />
            </div>
            <div id="form2" style={{ float: "right" }}>
              <label for="textArea">Mensaje</label>
              <br />
              <textarea
                className="inputInside"
                name="Mensaje"
                id="textArea"
                cols="38"
                rows="6"
                placeholder="Mensaje"
              ></textarea>
            </div>
          </form>
        </div>
        <div id="centerButtonContact">
          <button id="botonContacto">Enviar</button>
        </div>
      </div>
      <footer id="footerId">
        <img id="nexosF" src="logo-blanco.png" />
        <div id="textF">
          <p>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="#nosotros"
            >
              Nosotros
            </a>
          </p>
          <p>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="#noticias"
            >
              Noticias
            </a>
          </p>
          <p>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="#contacto"
            >
              Contacto
            </a>
          </p>
          <p>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.iubenda.com/es/help/37616-que-son-los-terminos-y-condiciones-y-para-que-sirven#:~:text=Los%20T%C3%A9rminos%20y%20Condiciones%20representan,contenido%20de%20forma%20legalmente%20vinculante."
              target="_blank"
            >
              Terminos y condiciones
            </a>
          </p>
        </div>

        <div id="redesSocialesF">
          <p>Seguinos!</p>
          <div>
            <div>
              <img src="" />
            </div>
            <div>
              <img src="" />
            </div>
            <div>
              <img src="" />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Contacto;
