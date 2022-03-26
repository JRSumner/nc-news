function Comments({ comments }) {
  return (
    <section className="article-comments">
      <ul className="article-comments-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              {comment.author}: {comment.body}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
