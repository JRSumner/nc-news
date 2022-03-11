import { useState } from "react";
import { postComment } from "./utils/api";

function AddComment({ setTopComments, article_id }) {
  const [comment, setComment] = useState("");
  const [isError, setIsError] = useState(null);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      username: "happyamy2016",
      body: comment,
    };

    postComment(newComment, article_id)
      .then(({ data }) => {
        setTopComments((currentReviews) => {
          return [data.comment, ...currentReviews];
        });
      })
      .catch((err) => {
        setIsError("Oops, something went wrong 🥺");
      });
  };

  return (
    <form className="add-comment" onSubmit={handleSubmit}>
      <label>
        Leave a comment:
        <input type="text" value={comment} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      {isError ? <h4>{isError}</h4> : null}
    </form>
  );
}

export default AddComment;
