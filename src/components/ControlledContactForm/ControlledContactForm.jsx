import { useState } from "react";
import "../ContactForm/ContactForm.css";

export function ControlledContactForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    useremail: "",
    usrpwd: "",
    usrConfirmPwd: "",
  });

  const [errors, setErrors] = useState({});

  const submitForm = (username, useremail) => {
    alert(`Hello! ${username}! Your email is ${useremail}`);
  };

  /**Username field Minimum of 4 characters. Alphanumeric only.
    Email field - Valid email format.
    Password field - Minimum of 6 characters.
    Confirm password field - Must match the password field. */
  const validateForm = (username, useremail, usrpwd, usrConfirmPwd) => {
    const formErrors = {};
    if (username.length < 4) {
      formErrors.username = "Name should be of minimum 4 characters.";
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      formErrors.username = "Only Alphanumeric characters allowed.";
    }

    if (!useremail) {
      formErrors.useremail = "Email required.";
    } else if (!useremail.includes("@")) {
      formErrors.useremail = "Enter a valid email address.";
    }

    if (usrpwd.length < 6) {
      formErrors.password = "Password should be of min. 6 characters.";
    }

    if (usrConfirmPwd === "") {
      formErrors.usrConfirmPwd = "Enter the above password.";
    }

    if (usrpwd !== usrConfirmPwd) {
      formErrors.usrConfirmPwd = "Passwords don't match.";
    }

    return formErrors;
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { username, useremail, usrpwd, usrConfirmPwd } = formValues;
    const formErrors = validateForm(username, useremail, usrpwd, usrConfirmPwd);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return; // don't submit form with errors
    }

    submitForm(username, useremail);
  }

  return (
    <form className="my-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grp">
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter name ..."
          value={formValues.username}
          onChange={handleChange}
          aria-invalid={Boolean(errors.username)}
          aria-describedby={errors.username ? "username-error" : undefined}
        />
        {errors.username && (
          <p id="username-error" className="field-error">
            {errors.username}
          </p>
        )}
      </div>

      <div className="form-grp">
        <label htmlFor="useremail">Email: </label>
        <input
          id="useremail"
          type="email"
          name="useremail"
          placeholder="Enter email ..."
          value={formValues.useremail}
          onChange={handleChange}
          aria-invalid={Boolean(errors.useremail)}
          aria-describedby={errors.useremail ? "useremail-error" : undefined}
        />
        {errors.useremail && (
          <p id="useremail-error" className="field-error">
            {errors.useremail}
          </p>
        )}
      </div>

      <div className="form-grp">
        <label htmlFor="user-pwd">Password: </label>
        <input
          id="user-pwd"
          type="password"
          name="usrpwd"
          placeholder="Enter password ..."
          value={formValues.usrpwd}
          onChange={handleChange}
        />
        {errors.password && <p className="field-error">{errors.password}</p>}
      </div>

      <div className="form-grp">
        <label htmlFor="usrconfirmPwd">Confirm password: </label>
        <input
          id="usrconfirmPwd"
          type="password"
          name="usrConfirmPwd"
          placeholder="Enter password again ..."
          value={formValues.usrConfirmPwd}
          onChange={handleChange}
        />
        {errors.usrConfirmPwd && (
          <p className="field-error">{errors.usrConfirmPwd}</p>
        )}
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}
