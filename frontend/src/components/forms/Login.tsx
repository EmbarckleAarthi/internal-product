import React from "react";
import { useState } from "react";
import "./Style.scss";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
  }
  function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value.toLowerCase());
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value.toLowerCase());
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username"></label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="Username"
            onChange={handleChangeUsername}
          ></input>
        </div>
        <div className="password">
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={handleChangePassword}
          ></input>
        </div>
        <div className="forgot-password">
          <a href="http://localhost:1234/forgotpassword" id="forgotpassword">
            Forgot password?
          </a>
        </div>

        <div>
          <button type="submit" id="submit">
            Sign
          </button>
        </div>
      </form>
    </div>
  );
};
