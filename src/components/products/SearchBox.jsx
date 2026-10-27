import "./SearchBox.css";
import { useRef } from "react";

export function SearchBox({ srchTerm, onChangeSrchTerm }) {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div className="search-box">
      <input
        className="search"
        ref={inputRef}
        value={srchTerm}
        onChange={(event) => onChangeSrchTerm(event.target.value)}
        placeholder="Search Products ..."
      ></input>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
