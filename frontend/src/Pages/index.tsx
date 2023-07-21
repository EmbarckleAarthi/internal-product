import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signupform } from "../Components/Signupform";
import { Forgotpassword } from "src/Components/forms/Forgotpassword";
import { Resetpassword } from "src/Components/forms/Resetpassword";
import { Loginpages } from "./Loginpages";

export const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginpages />} />
      <Route path="/signupform" element={<Signupform />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route path="/resetpassword" element={<Resetpassword />} />
    </Routes>
  );
};
