import { useState } from "react";
import { deleteComment } from "../api/api";

function DeleteComment({ setComments, article_id }) {
  const [comment, setComment] = useState("");
  const [isError, setIsError] = useState(null);

  //   deleteComment(article_id)
  //     .then(({ data }) => {
  //       setComments((currentReviews) => {
  //         return [data.comment, ...currentReviews];
  //       });
  //     })
  //     .catch((err) => {
  //       setIsError("Oops, something went wrong 🥺");
  //     });

  return (
    <>
      <label>Delete recent comment:</label>
      <button
        type="submit"
        // onClick={() => {
        //   deleteComment();
        // }}
      >
        Delete
      </button>
      {isError ? <h4>{isError}</h4> : null}
    </>
  );
}

export default DeleteComment;
