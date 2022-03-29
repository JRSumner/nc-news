import axios from "axios";

export const fetchArticles = (query) => {
  const queryStr = query === undefined ? "" : query;

  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles${queryStr}`
    )
    .then(({ data: { articles } }) => {
      return articles;
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

export const fetchByTopics = (topic, query) => {
  const queryStr = query === undefined ? "" : query;
  const topicStr = topic === undefined ? "" : topic;
  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles?topic=${topicStr}${queryStr}`
    )
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const patchArticleVote = (article_id, vote) => {
  return axios.patch(
    `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: vote }
  );
};

export const fetchComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (comment, article_id) => {
  return axios
    .post(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then((res) => {
      return res;
    });
};

export const deleteComment = (comment_id) => {
  return axios
    .delete(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/comments/${comment_id}`
    )
    .then((res) => {
      return res;
    });
};
