import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddComment from "../Utils/AddComment";
import Comments from "../Comments/ArticleComments";
import { fetchComments } from "../api/api";
import { fetchArticle } from "../api/api";
import Voter from "../Utils/Voter";

function ArticleById() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(null);
  const { article_id } = useParams();

  const date = new Date(Date.parse(article.created_at));

  useEffect(() => {
    fetchArticle(article_id).then((article) => {
      setArticle(article);
      setVotes(article.votes);
      setIsLoading(false);
    });

    fetchComments(article_id).then((Comments) => {
      setComments(Comments);
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
        <AddComment setComments={setComments} article_id={article_id} />
      </section>

      <Comments comments={comments} />
    </section>
  );
}

export default ArticleById;
