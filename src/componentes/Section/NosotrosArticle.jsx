import React from "react";

const DifferentArticle = ({ArticleId,H2Id, title,P}) => {
  return (
    <article id={ArticleId}>
      <h2 id={H2Id}>{title}</h2>
      <p>
        Generamos un medio para que las empresas se involucren en <br />
        actividades de responsabilidad social.
        <br />
        ¡Creá un grupo de voluntarios en tu organizacion y se parte del <br />
        cambio!
      </p>
    </article>
  );
};

export default DifferentArticle;
