import React from "react";

const Oportunidad = ({rutaImg,idImg,color,text}) => {
    return (
      <React.Fragment>
        <div
            className={"iconos "+color}>
            <div>
              <img src={rutaImg} className="tamIcono" />
              <img id={idImg} src={"icono-mas.png"} className="tamIconoCruz" />
            </div>
            <p>{text}</p>
          </div>


      </React.Fragment>
)}
export default Oportunidad;