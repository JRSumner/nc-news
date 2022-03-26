import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArticlesByTopic from "./components/Article/ArticlesByTopic";
import ArticleById from "./components/Article/ArticleById";
import Header from "./components/Structure/Header";
import Nav from "./components/Structure/Nav";
import Footer from "./components/Structure/Footer";
import ArticleList from "./components/Article/ArticleList";

function App() {
  return (
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
  );
}

export default App;
