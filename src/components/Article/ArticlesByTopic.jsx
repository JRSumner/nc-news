import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchByTopics } from "../api/api";
import SortBy from "../utils/SortBy";

function ArticlesByTopic() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const { topic } = useParams();

  useEffect(() => {
    fetchByTopics(topic, query).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, query]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <SortBy setQuery={setQuery} topic={topic} query={query} />
      {articles.map((article, index) => {
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
              </dl>
            </section>
          );
      })}
    </>
  );
}

export default ArticlesByTopic;
