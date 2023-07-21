import React from "react";
import { Login } from "src/components/forms/Login";

export const Loginpages: React.FC = () => {
  return (
    <div className="pages">
      <div className="page login">
        <Login />
      </div>
    </div>
  );
};
