// src/components/ToastContainer.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import ToastContainer from "./ToastContainer";
import { ToastContext } from "../context/ToastContext";

test("renders multiple toasts", () => {
  const mockToasts = [
    { id: "1", type: "success", message: "Success message", duration: 3000 },
    { id: "2", type: "error", message: "Error message", duration: 5000 },
  ];
  const mockRemoveToast = jest.fn();

  render(
    <ToastContext.Provider
      value={{ toasts: mockToasts, removeToast: mockRemoveToast }}
    >
      <ToastContainer />
    </ToastContext.Provider>
  );

  expect(screen.getByText("Success")).toBeInTheDocument();
  expect(screen.getByText("Error")).toBeInTheDocument();
});
