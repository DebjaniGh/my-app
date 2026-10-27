import { useEffect, useState, useReducer } from "react";
import "./Products.css";
import { SearchBox } from "./SearchBox";

// reducer fn outside of component so that it is not recreated every time component renders
function productsReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        products: [],
        loading: true,
        reqFailedMsg: null,
      };
    case "FETCH_SUCCESS":
      return {
        products: action.payload,
        loading: false,
        reqFailedMsg: null,
      };
    case "FETCH_ERROR":
      return {
        products: [],
        loading: false,
        reqFailedMsg: action.payload,
      };
    default:
      return state;
  }
}

export function Products() {
  const url = "https://dummyjson.com/products";

  // state
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true); // request in progress
  // const [reqFailedMsg, setReqFailed] = useState(""); // error in fetching products
  const initialState = {
    products: [],
    loading: true,
    reqFailedMsg: null,
  };
  const [srchTerm, setSrchTerm] = useState("");
  const [state, dispatch] = useReducer(productsReducer, initialState);

  // run this effect once when the component is mounted and when srchTerm changes;
  // not on every render
  useEffect(() => {
    const controller = new AbortController();
    // if user types again within 300ms, clear the previous timer and
    // start a new timer; so this cancels calling the API for every keystroke
    const timer = setTimeout(() => {
      const srchUrl = srchTerm !== "" ? `${url}/search?q=${srchTerm}` : url;
      const fetchProducts = async () => {
        // setLoading(true);
        // setReqFailed("");
        dispatch({ type: "FETCH_START" });

        try {
          const response = await fetch(srchUrl, {
            signal: controller.signal,
          });

          if (!response.ok) {
            throw new Error("Failed to load data");
          }

          const data = await response.json(); // parse response stream as json
          // setProducts(data.products);
          dispatch({ type: "FETCH_SUCCESS", payload: data.products });
        } catch (err) {
          if (err.name !== "AbortError") {
            //  setReqFailed(err.message);
            dispatch({ type: "FETCH_ERROR", payload: err.message });
          }
        }
      };

      fetchProducts();
    }, 300);

    // cleanup
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [srchTerm]);

  //JSX
  return (
    <div className="container">
      <SearchBox srchTerm={srchTerm} onChangeSrchTerm={setSrchTerm} />

      {state.loading && <p>Loading...</p>}
      {state.reqFailedMsg !== null && <p>{state.reqFailedMsg}</p>}

      {!state.loading && state.reqFailedMsg === null && (
        <ul className="product-list">
          {state.products.slice(0, 6).map((product) => (
            <li className="product" key={product.id}>
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
