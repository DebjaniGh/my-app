import "./PostFeed.css";

// Placeholder with the same layout as a real post card, so nothing shifts when data arrives
export function PostSkeleton() {
  return (
    <div className="post-card" aria-hidden="true">
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-line" />
      <div className="skeleton skeleton-line short" />
    </div>
  );
}
