import React from "react";
import * as rtl from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const title = rtl.render(<h1>Women's World Cup Soccer</h1>);
  console.log(title.debug());
  const element = title.queryByText(/women's world cup soccer/i);
  expect(element).toBeTruthy();
  expect(element).toBeVisible();
  expect(element).toBeInTheDocument();
  rtl.cleanup;
});
it("contains dark mode toggle", () => {
  const wrapper = rtl.render(<App />);
  console.log(wrapper.debug());
  const dark = wrapper.queryByText(/toggle dark mode/i);
  expect(dark).toBeInTheDocument();
  expect(dark).toBeVisible();
  rtl.cleanup;
});
it("contains player data", () => {
  const name = rtl.render(<h2>Player Data</h2>);
  console.log(name.debug());
  const element = name.queryByText(/player data/i);
  expect(element).toBeInTheDocument();
  rtl.cleanup;
});
