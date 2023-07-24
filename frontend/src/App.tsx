import "./App.scss";

import React from "react";

import { Pages } from "./Pages";

export const App: React.FC = () => {
  return (
    <div>
      <h2>Onboarding</h2>
      <Pages />
    </div>
  );
};
