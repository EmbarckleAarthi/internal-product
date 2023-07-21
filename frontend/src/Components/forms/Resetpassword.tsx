import React, { useState } from "react";

export const Resetpassword = () => {
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPass("");
    setConfirmpass("");
  }
  function handleChangePass(event: React.ChangeEvent<HTMLInputElement>) {
    setPass(event.target.value.toLowerCase());
  }

  function handleChangeConfirmpass(event: React.ChangeEvent<HTMLInputElement>) {
    setConfirmpass(event.target.value.toLowerCase());
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="restpassword">
        <label htmlFor="pass"></label>
        <input
          id="resetpass1"
          type="password"
          value={pass}
          placeholder="New Password"
          onChange={handleChangePass}
        ></input>
      </div>
      <div className="confirmpassword">
        <label htmlFor="confirmpass"></label>
        <input
          id="resetpass2"
          type="password"
          value={confirmpass}
          placeholder="Confirm Password"
          onChange={handleChangeConfirmpass}
        ></input>
      </div>
      <div className="button">
        <button type="submit" id="reset-button">
          Reset Password
        </button>
      </div>
    </form>
  );
};
