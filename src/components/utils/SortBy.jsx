import { useState } from "react";
import { fetchArticles } from "../api/api";
import ArticleList from "../Article/ArticleList";

function SortBy({ setQuery }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a
          onClick={() => {
            setQuery("?sort_by=created_at");
          }}
        >
          Date{" "}
        </a>
        <a
          onClick={() => {
            setQuery("?sort_by=comment_count");
          }}
        >
          Comments
        </a>
        <a
          onClick={() => {
            setQuery("?sort_by=votes");
          }}
        >
          Votes
        </a>
      </div>
    </div>
  );
}

export default SortBy;
