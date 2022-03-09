import axios from "axios";
//slice here
export const fetchArticles = () => {
  return axios
    .get("https://nc-news-example-seminar-3-18.herokuapp.com/api/articles")
    .then(({ data: { articles } }) => {
      const fiveArticles = articles.slice(0, 5);
      return fiveArticles;
    });
};

export const fetchArticle = (article_id) => {
  console.log(article_id);
  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles/${article_id}`
    )
    .then(({ data: { article } }) => {
      return article;
    });
};
//rename me
//slice here
export const fetchTopics = (topic) => {
  return axios
    .get(
      `https://nc-news-example-seminar-3-18.herokuapp.com/api/articles?topic=${topic}`
    )
    .then(({ data: { articles } }) => {
      const fiveArticles = articles.slice(0, 5);
      return fiveArticles;
    });
};

fetchArticle();
