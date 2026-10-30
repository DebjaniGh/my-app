import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Logo() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      This is Logo component
      <p>The theme is {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}
