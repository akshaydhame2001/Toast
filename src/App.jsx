import React from "react";
import { ToastProvider } from "./context/ToastContext";
import ToastContainer from "./components/ToastContainer";
import ExampleComponent from "./components/ExampleComponent";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <ExampleComponent />
        <ToastContainer />
      </div>
    </ToastProvider>
  );
}

export default App;
