import React from "react";
import { render, screen } from "@testing-library/react";
import ExampleComponent from "./ExampleComponent";
import { ToastProvider } from "../context/ToastContext";

test("renders the success button", () => {
  render(
    <ToastProvider>
      <ExampleComponent />
    </ToastProvider>
  );
  const buttonElement = screen.getByText(/Show Success/i);
  expect(buttonElement).toBeInTheDocument();
});
