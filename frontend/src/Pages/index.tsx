import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "src/App";
import { Forgotpassword } from "src/components/forms/Forgotpassword";
import { Login } from "src/components/forms/Login";
import { Resetpassword } from "src/components/forms/Resetpassword";
import { Loginpages } from "./Loginpages";

export const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginpages />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route path="/resetpassword" element={<Resetpassword />} />
    </Routes>
  );
};
