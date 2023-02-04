/* eslint-disable no-undef */
// App test
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("renders app wihout crashing", () => {
  it("renders app component", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
