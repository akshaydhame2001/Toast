import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
  AiOutlineClose,
} from "react-icons/ai";
import clsx from "clsx";

const icons = {
  success: <AiOutlineCheckCircle className="w-6 h-6 text-green-500" />,
  error: <AiOutlineExclamationCircle className="w-6 h-6 text-red-500" />,
  info: <AiOutlineInfoCircle className="w-6 h-6 text-blue-500" />,
};

const Toast = ({ id, type, message, onClose, duration = 5000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose(id), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, onClose, duration]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={clsx(
        "max-w-md w-full min-w-80 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transform transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{icons[type]}</div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </p>
            <p className="mt-1 text-sm text-gray-500 break-words">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-500 focus:outline-none"
          onClick={() => onClose(id)}
        >
          <AiOutlineClose className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
