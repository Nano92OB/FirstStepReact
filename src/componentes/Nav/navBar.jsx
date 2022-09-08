import React from "react";
import NavLink from "./navLink";

const NavBar = () =>{
    return (
        <nav id="mediaQueryNav">
            <img src="logoNexos.png" id="logoNexos"/>
               <div id="spanNav">
                   <NavLink href={"#nosotros"}>Nosotros</NavLink>
                   <NavLink href={"#noticias"}>Noticias</NavLink>
                   <NavLink href={"#contacto"}>Ayuda</NavLink>
               </div>
           <div id="boton1">
               <button id="innerModal">Ingresar</button>
           </div>
       </nav>
    )
}
export default NavBar