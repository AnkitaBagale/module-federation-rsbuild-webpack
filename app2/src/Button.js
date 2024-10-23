import React from "react";
export const Button = ({ children }) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        borderRadius: "4px",
        border: "1px solid green",
      }}
    >
      {children}
    </button>
  );
};
