import React from "react";

import "Styles/_error.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="error__content">
        <h2>Oops, something went wrong...</h2>
        <p>Please try again later.</p>
      </div>
    </div>
  );
};

export { Error };
