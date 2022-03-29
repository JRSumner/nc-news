import "./Styles/App.css";
import "./Styles/Nav.css";
import "./Styles/ArticleCard.css";
import "./Styles/Article.css";
import "./Styles/SortBy.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArticlesByTopic from "./components/Article/ArticlesByTopic";
import ArticleById from "./components/Article/ArticleById";
import Header from "./components/Structure/Header";
import Nav from "./components/Structure/Nav";
import Footer from "./components/Structure/Footer";
import ArticleList from "./components/Article/ArticleList";

function App() {
  return (
    <div className="app-global">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/topic/:topic" element={<ArticlesByTopic />} />
          <Route path="/articles/:article_id" element={<ArticleById />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
