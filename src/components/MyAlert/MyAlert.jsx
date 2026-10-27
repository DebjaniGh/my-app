import "./MyAlert.css";

const icons = {
  info: "i",
  success: "v",
  danger: "x",
  error: "!",
};

export function MyAlert({ type = "info", title, children, onClose }) {
  const displayIcon = icons[type];

  return (
    <div className="alert-container">
      <div className={`alert-header alert-${type}`}>
        <span className="alert-icon">{displayIcon}</span> {title}
      </div>
      <div className="alert-body">{children}</div>
      {onClose && (
        <button className="close-btn" onClick={onClose}>
          x
        </button>
      )}
    </div>
  );
}
