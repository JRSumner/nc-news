function Comments({ topComments }) {
  return (
    <section className="article-comments">
      <ul className="article-comments-list">
        {topComments.map((comment) => {
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
