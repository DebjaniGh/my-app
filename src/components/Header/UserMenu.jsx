import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export function UserMenu() {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <div>
      This is UserMenu.
      {!user && (
        <div>
          <p>Not Logged in</p>
          <button onClick={login}>Login</button>
        </div>
      )}
      {user && (
        <div>
          <p>Welcome {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
