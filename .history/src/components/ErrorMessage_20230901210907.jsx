import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center w-[]">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
