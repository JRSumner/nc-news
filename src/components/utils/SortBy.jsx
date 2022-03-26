import { useState } from "react";
import ArticleList from "../Article/ArticleList";

function SortBy() {
  const [query, setQuery] = useState("");
  console.log(query);
  function handleSortBy(query) {
    <ArticleList prop={"hello"} />;
  }

  return <button onClick={setQuery("hello")}>test</button>;
}

export default SortBy;
