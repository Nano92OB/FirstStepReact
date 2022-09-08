import React from "react";

const Noticias = () => {
  return (
    <React.Fragment>
      <div id="noticias">
        <div id="letreroNoticias">
          <h1>Noticias</h1>
          <p>
            <a
              style={{ color: "white" }}
              href="https://www.elmundo.es/t/no/noticias-felices.html"
              target="_blank"
            >
              ver todas
            </a>
          </p>
        </div>
        <div className="carrusel">
          <div className="itemCarrusel">
            <div className="tamFotNot">
              <img src="felicidad.jpg" />
            </div>
            <div className="textCarrusel">
              <div className="gridNot1">
                <div className="alignItem1">
                  <img src="icono-calendario.png" />
                  10/08/2022
                </div>
                <div className="alignItem2">
                  <img src="icono-reloj.png" />4 min
                </div>
              </div>
              <div className="gridNot2">
                <h3>Filosofía para lograr la felicidad</h3>
              </div>
              <div className="gridNot3">
                <p>
                  De Aristóteles a Bauman: los secretos de la filosofía para
                  lograr la felicidad... <br />
                  Los antiguos griegos lo denominaban "eudaimonía", un término
                  bastante escurridizo que incluye el concepto de suerte...
                </p>
              </div>
              <div className="gridNot4">
                <div className="gridNot4Img">
                  <img src="icono-flecha.png" />
                  <a
                    href="https://www.elmundo.es/papel/historias/2019/02/01/5c52e8e521efa0292e8b4661.html"
                    target="_blank"
                  >
                    ver mas
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="itemCarrusel">
            <div className="tamFotNot">
              <img src="cafe.jpg" />
            </div>
            <div className="textCarrusel">
              <div className="gridNot1">
                <div className="alignItem1">
                  <img src="icono-calendario.png" />
                  10/08/2022
                </div>
                <div className="alignItem2">
                  <img src="icono-reloj.png" />4 min
                </div>
              </div>
              <div className="gridNot2">
                <h3>Beba café y su salud se lo agradecerá</h3>
              </div>
              <div className="gridNot3">
                <p>
                  Una segunda o incluso una tercera taza de café al día pueden
                  ayudarle no sólo a sobrellevar su cansancio durante el día,
                  sino a mucho más. Así lo refleja un estudio realizado por
                  investigadores de la Escuela de Salud Pública de Harvard...
                </p>
              </div>
              <div className="gridNot4">
                <div className="gridNot4Img">
                  <img src="icono-flecha.png" />
                  <a
                    href="https://www.elmundo.es/salud/2015/11/17/5649db0a46163ff8348b4603.html"
                    target="_blank"
                  >
                    ver mas
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="itemCarrusel">
            <div className="tamFotNot">
              <img src="ovni.jpg" />
            </div>
            <div className="textCarrusel">
              <div className="gridNot1">
                <div className="alignItem1">
                  <img src="icono-calendario.png" />
                  10/08/2022
                </div>
                <div className="alignItem2">
                  <img src="icono-reloj.png" />4 min
                </div>
              </div>
              <div className="gridNot2">
                <h3>Las fascinantes nubes 'ovni' en Sudáfrica</h3>
              </div>
              <div className="gridNot3">
                <p>
                  Como si de una invasión alienígena se tratase, el pasado
                  domingo 8 de noviembre el cielo de Ciudad del Cabo (Sudáfrica)
                  se llenó de asombrosas nubes con forma de ovni y los
                  habitantes de la ciudad, sorprendidos e intrigados, corrieron
                  a inmortalizar el momento para compartirlo en las redes
                  sociales...
                </p>
              </div>
              <div className="gridNot4">
                <div className="gridNot4Img">
                  <img src="icono-flecha.png" />
                  <a
                    href="https://www.elmundo.es/ciencia/2015/11/11/56431032ca4741634e8b465d.html"
                    target="_blank"
                  >
                    ver mas
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="itemCarrusel">
            <div className="tamFotNot">
              <img src="inovacion.jpg" />
            </div>
            <div className="textCarrusel">
              <div className="gridNot1">
                <div className="alignItem1">
                  <img src="icono-calendario.png" />
                  10/08/2022
                </div>
                <div className="alignItem2">
                  <img src="icono-reloj.png" />4 min
                </div>
              </div>
              <div className="gridNot2">
                <h3>Del país del paro a la meca de la innovación</h3>
              </div>
              <div className="gridNot3">
                <p>
                  Fueron a Silicon Valley dispuestos a dejarse sorprender por el
                  sueño americano 2.0. Atravesaron el planeta para conocer de
                  primera mano la leyenda que reúne, en una cafetería cualquiera
                  de Palo Alto, a un joven talento con un inversor
                  multimillonario dispuesto a apostar por su proyecto...
                </p>
              </div>
              <div className="gridNot4">
                <div className="gridNot4Img">
                  <img src="icono-flecha.png" />
                  <a
                    href="https://www.elmundo.es/f5/campus/2015/11/10/56424dc3268e3efd608b460a.html"
                    target="_blank"
                  >
                    ver mas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Noticias;
