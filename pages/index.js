import Navbar from "../components/navbar";
import Link from "next/Link";
//https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
const Index = ({ posts, mode }) => {
  //   console.log(posts);
  return (
    <div>
      <Navbar />
      <h1>Our Hello {mode}</h1>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { posts: data, mode: "Happy" };
};

export default Index;
