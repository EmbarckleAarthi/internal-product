import React from "react";
import { Route, Routes } from "react-router-dom";

import { Signupform } from "../Components/Signupform";

export const Pages: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signupform />} />
      </Routes>
    </div>
  );
};
