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
      <section className="delete-comment-component">
        <button
          type="submit"
          // onClick={() => {
          //   deleteComment();
          // }}
        >
          Delete Comment
        </button>
        {isError ? <h4>{isError}</h4> : null}
      </section>
    </>
  );
}

export default DeleteComment;
