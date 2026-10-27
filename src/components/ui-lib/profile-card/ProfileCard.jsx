import "./ProfileCard.css";

export function ProfileCard({ user }) {
  const userName = user.name;
  const jobRole = user.jobRole;
  const skills = user.skills;

  return (
    <div className="profile-card">
      <div>
        <img className="avatar" src={user.imgSrc} alt="Jane Doe" />
      </div>

      <div className="user-info">
        <h2 className="name">{userName}</h2>
        <p className="job-role">{jobRole}</p>
      </div>

      <div className="skills">
        {skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <div className="actions">
        <button className="follow-btn">Follow</button>
        <button className="message-btn">Message</button>
      </div>
    </div>
  );
}
