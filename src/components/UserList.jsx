import { useFetch } from "../hooks/useFetch";

export function UserList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/users");

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>{error} </div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
