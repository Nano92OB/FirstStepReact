import React from "react";
import DifferentArticle from "./NosotrosArticle";

const Article = () => {
  return (
    <React.Fragment>
      <div id="nosotros">
        <img src="oficina.png" id="oficina" />
        <img src="voluntariado.jpg" id="voluntariado" />
      
      <DifferentArticle
        ArticleId="cuadrante1"
        H2Id="titulo1"
        title="Soluciones para empresas"
        text=
          {`Generamos un medio para que las empresas se involucren en \n actividades de responsabilidad social.\n ¡Creá un grupo de voluntarios en tu organizacion y se parte del \n cambio!`}
        
      ></DifferentArticle>
      <DifferentArticle
        ArticleId="cuadrante2"
        H2Id="titulo2"
        title="Soluciones para organizaciones"
        text=
          {`Apoyamos a las organizaciones sociales para que alcancen sus \n objetivos. Ponemos a su disposición una comunidad de voluntarios \n dispuestos a apoyarlas en sus necesidades.\n Equipos de voluntarios por empresas dispuestos a potenciar tu \n impacto en la sociedad`}
        
      ></DifferentArticle>
      </div>
    </React.Fragment>
  );
};
export default Article;
