import React, { useState } from "react";
import axios from "axios";


export const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmail("");
    axios
      .post("http://localhost:3001/user/forgotpassword", { email: email })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
          placeholder="Email"
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
