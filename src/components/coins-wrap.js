import React from "react";

const CoinsWrapper = ({ children }) => {
  return (
    <div className="coins">
      <div className="coins__content">{children}</div>
    </div>
  );
};

export { CoinsWrapper };
