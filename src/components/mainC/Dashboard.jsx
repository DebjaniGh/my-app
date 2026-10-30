import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      This is Dashboard
      {!user && (
        <div>
          <p>Please log in to access the dashboard.</p>
        </div>
      )}
      {user && (
        <div>
          <p>Welcome to your dashboard, {user.name}</p>
          {user.isAdmin && <p>You are an Admin.</p>}
        </div>
      )}
    </div>
  );
}
