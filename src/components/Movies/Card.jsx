import "./Card.css";
export function Card({ title, overview, language, release_date }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{overview}</p>
      <p>Language: {language}</p>
      <p>Released on: {release_date} </p>
    </div>
  );
}
