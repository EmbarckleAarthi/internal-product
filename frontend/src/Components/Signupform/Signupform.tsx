import "./style.scss";

import axios from "axios";
import React, { useState } from "react";

import { INewUser } from "../../../../common/interface";

export const Signupform: React.FC = () => {
  const [newuser, setNewUser] = useState<INewUser>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", newuser)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newuser.username}
          placeholder="Username"
          onChange={(e) => setNewUser({ ...newuser, username: e.target.value })}
        />
        <input
          type="text"
          value={newuser.email}
          placeholder="Email"
          onChange={(e) => setNewUser({ ...newuser, email: e.target.value })}
        />
        <input
          type="password"
          value={newuser.password}
          placeholder="Password"
          onChange={(e) => setNewUser({ ...newuser, password: e.target.value })}
        />
        <button>Signup</button>
      </form>
    </div>
  );
};
