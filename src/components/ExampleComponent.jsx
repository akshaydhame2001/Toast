import React from "react";
import useToast from "../hooks/useToast";

const ExampleComponent = () => {
  const { addToast } = useToast();

  const handleSuccess = () => {
    addToast("success", "This is a success message!", 3000);
  };

  const handleError = () => {
    addToast("error", "This is an error message!", 5000);
  };

  const handleInfo = () => {
    addToast("info", "This is an informational message!", 4000);
  };

  return (
    <div className="p-4">
      <button
        onClick={handleSuccess}
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Show Success
      </button>
      <button
        onClick={handleError}
        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
      >
        Show Error
      </button>
      <button
        onClick={handleInfo}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Info
      </button>
    </div>
  );
};

export default ExampleComponent;
