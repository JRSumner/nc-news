import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://nc-news-example-seminar-3-18.herokuapp.com/api/articles")
    .then(({ data: { articles } }) => {
      const fiveArticles = articles.slice(0, 5);
      return fiveArticles;
    });
};

export const fetchArticle = (article_id) => {
  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles/${article_id}`
    )
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchByTopics = (topic) => {
  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles?topic=${topic}`
    )
    .then(({ data: { articles } }) => {
      const fiveArticles = articles.slice(0, 5);
      return fiveArticles;
    });
};

export const patchVote = (article_id, vote) => {
  return axios.patch(
    `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: vote }
  );
};

export const fetchTopThreeComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments.slice(0, 3);
    });
};

export const postComment = (comment, article_id) => {
  console.log(article_id, "id");
  console.log(comment, "comment");
  return axios
    .post(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then((res) => {
      console.log(res);
    });
};
