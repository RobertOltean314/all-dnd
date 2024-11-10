import React, { useState } from "react";

const Login = () => {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    if (!email.includes("@")) {
      return "Invalid email address.";
    }
    return "";
  };

  const validatePassword = (password) => {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!specialCharacterRegex.test(password)) {
      return "Password must contain at least one special character.";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const emailError = validateEmail(data.email);
    const passwordError = validatePassword(data.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
      return;
    }

    console.log(data);
  };

  const handleInputChange = (identifier, event) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [identifier]: "",
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));

    if (identifier === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(enteredValues.email),
      }));
    } else if (identifier === "password") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: validatePassword(enteredValues.password),
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={enteredValues.email}
          onChange={(e) => handleInputChange("email", e)}
          onBlur={() => handleInputBlur("email")}
        />
        {didEdit.email && errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={enteredValues.password}
          onChange={(e) => handleInputChange("password", e)}
          onBlur={() => handleInputBlur("password")}
        />
        {didEdit.password && errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
