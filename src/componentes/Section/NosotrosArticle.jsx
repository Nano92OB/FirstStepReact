import React from "react";

const DifferentArticle = ({ArticleId,H2Id, title,text}) => {
  return (
    <article id={ArticleId}>
      <h2 id={H2Id}>{title}</h2>
      <p>
        {text}
      </p>
    </article>
  );
};

export default DifferentArticle;
