import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center w-[200]">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
