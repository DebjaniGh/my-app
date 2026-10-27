import { useEffect, useState } from "react";
import { fetchPosts } from "./fakePostsApi";
import { PostSkeleton } from "./PostSkeleton";
import { PostCard } from "./PostCard";

const SKELETON_COUNT = 5;

export function PostFeed() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"

  useEffect(() => {
    let ignore = false; // avoids setting state after unmount or a re-run

    fetchPosts()
      .then((data) => {
        if (ignore) return;
        setPosts(data);
        setStatus("success");
      })
      .catch(() => {
        if (!ignore) setStatus("error");
      });

    return () => {
      ignore = true;
    };
  }, []);

  if (status === "error") {
    return <p role="alert">Something went wrong. Please try again.</p>;
  }

  return (
    <div className="post-feed" aria-busy={status === "loading"}>
      {status === "loading"
        ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
            <PostSkeleton key={i} />
          ))
        : posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
