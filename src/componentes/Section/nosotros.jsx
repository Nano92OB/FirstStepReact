import React from "react";
import DifferentArticle from "./NosotrosArticle";

const Article = () => {
  return (
    <React.Fragment>
      <div id="nosotros">
        <img src="oficina.png" id="oficina" />
        <img src="voluntariado.jpg" id="voluntariado" />
        <DifferentArticle
          ArticleId={"cuadrante1"}
          H2Id={"titulo1"}
          title={"Soluciones para empresas"}
        ></DifferentArticle>
        <DifferentArticle
          ArticleId={"cuadrante2"}
          H2Id={"titulo2"}
          title={"Soluciones para empresas"}
        ></DifferentArticle>



        <article id="cuadrante2">
          <h2 id="titulo2">Soluciones para organizaciones</h2>
          <p>
            Apoyamos a las organizaciones sociales para que alcancen sus <br />
            objetivos. Ponemos a su disposición una comunidad de voluntarios{" "}
            <br />
            dispuestos a apoyarlas en sus necesidades.
            <br />
            Equipos de voluntarios por empresas dispuestos a potenciar tu
            <br />
            impacto en la sociedad
          </p>
        </article>
      </div>
    </React.Fragment>
  );
};
export default Article;
