import { useState, useRef, useCallback, useEffect } from "react";
import "./InfiniteScrollList.css";

export function InfiniteScrollList() {
  // state
  const [items, setItems] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);

  /** lastItemRef depends on this fn, so it should not be cerated
   * new on every render otherwise lastItemRef will also be created new on
   * every render
   */
  const loadMoreData = useCallback(async () => {
    // if data is already laoding or no more data to be
    // loaded, then do nothing
    if (loading || !hasMore) return;

    setLoading(true);

    // simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    const newItems = Array.from({ length: 50 }, (_, i) => ({
      id: (currPage - 1) * 50 + i,
      title: `Item ${(currPage - 1) * 50 + i}`,
    }));

    setItems((prev) => [...prev, ...newItems]);
    setCurrPage((prev) => prev + 1);
    setHasMore(currPage < 5);
    setLoading(false);
  }, [loading, currPage, hasMore]);

  /** if we don't use useCallback, then the observer diconnects and
   * connects on every re-render which we don't want. We want this
   * to happen only when the last item comes into the viewport.
   */
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) {
        // before attaching to the new last item, disconnect
        // from the previous last item
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(([entry]) => {
        // if the item being observed (which here is the last row)
        // has entered the viewport then load mroe data
        if (entry.isIntersecting && hasMore) {
          loadMoreData();
        }
      });

      if (node) {
        observerRef.current.observe(node); // observe the node
      }
    },
    [loading, hasMore, loadMoreData],
  );

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div className="container">
      {items.map((item, index) => (
        <li
          className="list-item"
          key={item.id}
          ref={index === items.length - 1 ? lastItemRef : null}
        >
          {item.title}
        </li>
      ))}
      {loading && <p className="p-content">Loading more data ...</p>}
      {!hasMore && <p className="p-content">No more items.</p>}
    </div>
  );
}
