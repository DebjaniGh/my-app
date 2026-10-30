import { useEffect, useState } from "react";

export function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      try {
        const res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }
        const data = await res.json();
        setState({ data, loading: false, error: null });
      } catch (e) {
        if (e.name !== "AbortError") {
          setState({ data: null, loading: false, error: e.message });
        }
      } finally {
        if (!signal.aborted) {
          setState((prev) => ({ ...prev, loading: false }));
        }
      }
    }

    fetchData();

    // cleanup = cancel in-flight req
    return () => {
      controller.abort();
    };
  }, [url]);

  return state;
}
