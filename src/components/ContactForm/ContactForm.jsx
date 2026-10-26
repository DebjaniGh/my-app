import { useState } from "react";
import "./ContactForm.css";

export function ContactForm() {
  const [errors, setErrors] = useState({});

  const submitForm = (username, useremail) => {
    alert(`Hello! ${username}! Your email is ${useremail}`);
  };

  /**Username field Minimum of 4 characters. Alphanumeric only.
    Email field - Valid email format.
    Password field - Minimum of 6 characters.
    Confirm password field - Must match the password field. */
  const validateForm = (username, useremail, usrpwd, userConfirmPwd) => {
    const formErrors = {};
    if (username.length < 4) {
      formErrors.username = "Name should be of minimum 4 characters.";
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      formErrors.username = "Only Alphanumeric characters allowed.";
    }

    if (!useremail) {
      formErrors.useremail = "Email required.";
    }

    if (usrpwd.length < 6) {
      formErrors.password = "Password should be of min. 6 characters.";
    }

    if (usrpwd !== userConfirmPwd) {
      formErrors.confirmPassword = "Passwords don't match.";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    /** extract the values of different fields */
    const username = formData.get("username");
    const useremail = formData.get("email");
    const usrpwd = formData.get("password");
    const userConfirmPwd = formData.get("confirmPassword");

    const formErrors = validateForm(
      username,
      useremail,
      usrpwd,
      userConfirmPwd,
    );
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) {
      return; // don't submit form with errors
    }

    submitForm(username, useremail);
  };

  return (
    <form className="my-form" onSubmit={handleSubmit} noValidate>
      {/** name, email, password, confirm password */}
      <div className="form-grp">
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter name ..."
        />
        {errors.username && <p className="field-error">{errors.username}</p>}
      </div>

      <div className="form-grp">
        <label htmlFor="useremail">Email: </label>
        <input
          id="useremail"
          name="email"
          type="email"
          placeholder="Enter email ..."
        />
        {errors.useremail && <p className="field-error">{errors.useremail}</p>}
      </div>

      <div className="form-grp">
        <label htmlFor="user-pwd">Password: </label>
        <input
          id="user-pwd"
          name="password"
          type="password"
          placeholder="Enter password ..."
        />
        {errors.password && <p className="field-error">{errors.password}</p>}
      </div>

      <div className="form-grp">
        <label htmlFor="confirm-pwd-input">Confirm Password: </label>
        <input
          id="confirm-pwd-input"
          name="confirmPassword"
          type="password"
          placeholder="Enter password again ..."
        />
        {errors.confirmPassword && (
          <p className="field-error">{errors.confirmPassword}</p>
        )}
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}
