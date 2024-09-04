import React from "react";
import { render, act } from "@testing-library/react";
import Toast from "./Toast";
import { ToastProvider } from "../context/ToastContext";

test("auto closes after duration", () => {
  jest.useFakeTimers();
  const mockOnClose = jest.fn();

  render(
    <ToastProvider>
      <Toast
        id="1"
        type="success"
        message="Success!"
        onClose={mockOnClose}
        duration={3000}
      />
    </ToastProvider>
  );

  // Fast-forward time by the full duration to trigger the onClose
  act(() => {
    jest.advanceTimersByTime(3000);
  });

  // Allow some time for the onClose function to be called
  act(() => {
    jest.advanceTimersByTime(300); // This matches the exit transition time
  });

  expect(mockOnClose).toHaveBeenCalledWith("1");

  jest.useRealTimers();
});
