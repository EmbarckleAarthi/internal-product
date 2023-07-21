import React from "react";
import { Login } from "src/Components/forms/Login";

export const Loginpages: React.FC = () => {
  return (
    <div className="pages">
      <div className="page login">
        <Login />
      </div>
    </div>
  );
};
