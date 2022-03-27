function SortBy({ setQuery, topic, query }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a
          onClick={() => {
            if (topic !== undefined) {
              setQuery(`${topic}&&sort_by=created_at`);
            } else {
              setQuery("?sort_by=created_at");
            }
          }}
        >
          Date
        </a>
        <a
          onClick={() => {
            if (topic !== undefined) {
              setQuery(`${topic}&&sort_by=comment_count`);
            } else {
              setQuery("?sort_by=comment_count");
            }
          }}
        >
          Comments
        </a>
        <a
          onClick={() => {
            if (topic !== undefined) {
              setQuery(`${topic}&&sort_by=votes`);
            } else {
              setQuery("?sort_by=votes");
            }
          }}
        >
          Votes
        </a>
      </div>
    </div>
  );
}

export default SortBy;
