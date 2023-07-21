import React, { useState } from "react";

export const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmail("");
  }
  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value.toLowerCase());
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="forgotpassword">
        <label htmlFor="email"></label>
        <input
          id="forgotpass"
          type="email"
          value={email}
          placeholder="email"
          onChange={handleChangeEmail}
        ></input>
      </div>
      <div className="button">
        <button type="submit" id="submit-pass">
          Send Link
        </button>
      </div>
    </form>
  );
};
