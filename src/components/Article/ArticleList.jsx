import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../api/api";
import { useSearchParams } from "react-router-dom";

import SortBy from "../utils/SortBy";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchArticles(query).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [query]);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <SortBy setQuery={setQuery} />

      {articles.map((article, index) => {
        const date = new Date(Date.parse(article.created_at));

        if (index < 5)
          return (
            <section className="article-card" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2 className="article-title">{article.title}</h2>
              </Link>
              <dl>
                <dt className="article-detail">Author: {article.author}</dt>
                <dt className="article-detail">{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</dt>
                <dt className="article-detail">
                  Comments: {article.comment_count}
                </dt>
                <dt className="article-detail">Votes: {article.votes}</dt>
              </dl>
            </section>
          );
      })}
    </>
  );
}
export default ArticleList;
