import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticle } from "./utils/api";

function ArticleById() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const date = new Date(Date.parse(article.created_at));

  useEffect(() => {
    fetchArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section>
      <h2>{article.title}</h2>
      <section>
        <ul className="article-bar">
          <li className="article-item">Written by: {article.author}</li>
          <li className="article-item">
            Posted:{" "}
            {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}{" "}
          </li>
          <li className="article-item">Comments: {article.votes}</li>
          <li className="article-item">Votes: {article.comment_count}</li>
        </ul>
      </section>
      <p>{article.body}</p>
    </section>
  );
}

export default ArticleById;
