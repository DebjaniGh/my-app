import { useState } from "react";
import "./SignupForm.css";

// Initial values for every field in the form
const EMPTY_STATE = {
  name: "",
  password: "",
  email: "",
  location: "",
  termsAgreed: false,
};

const locationOptions = ["Kolkata", "Bangalore", "Delhi"];

export function SignupForm() {
  const [formData, setFormData] = useState(EMPTY_STATE); // controlled input values
  const [touched, setTouched] = useState({}); // fields the user has visited, e.g. { name: true }
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  // One handler for all fields: the input's `name` attribute matches a key in formData
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, // checkboxes use `checked`, others use `value`
    }));
  }

  // Mark a field as touched when it loses focus, so errors only show after the user has interacted with it
  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true })); // when a field is touched, make it true
  }

  function fakeSignup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve({ ok: true });
        } else {
          reject(new Error("failed to laod data"));
        }
      }, 1000);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault(); // stop the browser from reloading the page
    // Guard in case the form is submitted while invalid (e.g. Enter key); the button is also disabled
    if (hasError || status === "submitting") {
      return;
    }
    setStatus("submitting");

    // if (!hasError) { // without api
    //   console.log("form submitted", formData);
    //   setTouched({});
    //   setFormData(EMPTY_STATE);
    // }
    try {
      await fakeSignup();
      setStatus("success");
      setTouched({});
      setFormData(EMPTY_STATE);
    } catch (e) {
      setStatus("error");
    }
  }

  // Returns an object of error messages keyed by field name; empty object means the form is valid
  function validate(formData) {
    const errors = {};
    if (formData.name.length < 3) {
      errors.name = "Name should be at least 3 characters";
    }

    if (!formData.email.includes("@")) {
      errors.email = "Incorrect email";
    }

    if (formData.password.length < 6) {
      errors.password = "Password should be at least 6 characters";
    }

    if (!formData.location) {
      errors.location = "Please select a location";
    }

    if (!formData.termsAgreed) {
      errors.termsAgreed = "You must agree to the terms";
    }
    return errors;
  }

  const errors = validate(formData); // derived state: recomputed on every render, not stored in useState
  const hasError = Object.keys(errors).length > 0; // used to disable the submit button

  return (
    <div className="form-container">
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* show the error only after the field was touched and is invalid */}
          {touched.name && errors.name && <p>{errors.name}</p>}
        </div>

        <div className="form-field">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-field">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-field">
          <label>Location: </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="">Select a vlaue:</option>
            {locationOptions.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          {touched.location && errors.location && <p>{errors.location}</p>}
        </div>
        <div className="form-field">
          <label>Terms Agreed? </label>
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.termsAgreed && errors.termsAgreed && (
            <p>{errors.termsAgreed}</p>
          )}
        </div>
        <button type="submit" disabled={hasError || status === "submitting"}>
          {status === "submitting" ? "Submitting ..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
