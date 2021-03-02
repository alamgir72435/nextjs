import Link from "next/link";
// import { withRouter } from "next/router";
// // can be used withRouter

// const Post = (props) => {
//   return <h1>Hello world #{props.router.query.id}</h1>;
// };

const Post = ({ id, comments }) => {
  return (
    <>
      <Link href="/">Back to Posts</Link>
      <h1> Comments for post #{id}</h1>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </>
  );
};

const Comment = ({ email, body }) => {
  return (
    <div>
      <h4>{email}</h4>
      <p>{body}</p>
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=" + query.id
  );
  const data = await res.json();

  return { id: query.id, comments: data };
};

// export default withRouter(Post);
export default Post;
