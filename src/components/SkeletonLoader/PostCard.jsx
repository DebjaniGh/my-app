import "./PostFeed.css";
export function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
