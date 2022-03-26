import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddComment from "./utils/AddComment";
import Comments from "./ArticleComments";
import { fetchTopThreeComments, patchVote } from "./utils/api";
import { fetchArticle } from "./utils/api";
import Voter from "./utils/Voter";

function ArticleById() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [topComments, setTopComments] = useState([]);
  const [isError, setIsError] = useState(null);
  const { article_id } = useParams();
  const date = new Date(Date.parse(article.created_at));

  useEffect(() => {
    fetchArticle(article_id).then((article) => {
      setArticle(article);
      setVotes(article.votes);
      setIsLoading(false);
    });

    fetchTopThreeComments(article_id).then((topThreeComments) => {
      setTopComments(topThreeComments);
    });
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section>
      <h2>{article.title}</h2>
      <p className="article-written-by">Written by: {article.author}</p>
      <p className="article-posted-by">
        Posted:{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
      </p>
      <section className="article-body">
        <p>{article.body}</p>
      </section>

      <div className="article-comments-votes-section">
        <div className="voter">
          <Voter id={article.article_id} apiVotes={votes} />
          {isError ? <h4>{isError}</h4> : null}
        </div>
      </div>

      <section>
        <p className="article-comment-and-vote-count">
          Votes: {votes} Comments: {article.comment_count}
        </p>
      </section>

      <section className="comment-box">
        <AddComment setTopComments={setTopComments} article_id={article_id} />
      </section>

      <Comments topComments={topComments} />
    </section>
  );
}

export default ArticleById;
