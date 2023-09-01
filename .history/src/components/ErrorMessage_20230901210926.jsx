import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center w-[200px] h-[300px]">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
