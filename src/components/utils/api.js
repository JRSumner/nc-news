import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://nc-news-example-seminar-3-18.herokuapp.com/api/articles")
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

export const fetchTopics = (topic) => {
  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles?topic=${topic}`
    )
    .then(({ data: { articles } }) => {
      return articles;
    });
};

fetchArticle();
