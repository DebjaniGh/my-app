const POSTS = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Post title number ${i + 1}`,
  body: "This is some placeholder text for the news feed post. It stands in for the real article summary.",
}));

// Simulates a network call: resolves with posts after 2s,
// or rejects if shouldFail is true
export function fetchPosts({ shouldFail = false } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("Failed to load posts"));
      else resolve(POSTS);
    }, 7000);
  });
}
