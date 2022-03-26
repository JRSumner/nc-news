import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../api/api";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  return articles.map((article, index) => {
    const date = new Date(Date.parse(article.created_at));

    if (index < 5)
      return (
        <section className="article-card" key={article.article_id}>
          <Link to={`/articles/${article.article_id}`}>
            <h2 className="article-title">{article.title}</h2>
          </Link>
          <dl>
            <dt>Author: {article.author}</dt>
            <dt>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</dt>
            <dt>Comments: {article.comment_count}</dt>
            <dt>Votes: {article.votes}</dt>
          </dl>
        </section>
      );
  });
}
export default ArticleList;
