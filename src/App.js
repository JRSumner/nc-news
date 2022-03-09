import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticleById from "./components/ArticleById";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";

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
