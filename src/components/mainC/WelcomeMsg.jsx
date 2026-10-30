import { useContext } from "react";
//import { ThemeContext } from "../../context/ThemeContext";
import { UserContext } from "../../context/UserContext";

export function WelcomeMsg() {
  const user = useContext(UserContext);
  return (
    <div>
      <p>This is Welcome Message. Welcome to user {user.name}</p>
    </div>
  );
}
