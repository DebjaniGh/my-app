import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

export function UserProfile() {
  const user = useContext(UserContext);
  return (
    <div>
      This is UserProfile
      <p>{user.name}</p>
    </div>
  );
}
