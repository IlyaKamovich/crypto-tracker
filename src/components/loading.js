import React from "react";
import spinner from "Assets/spinner.svg";

import "Styles/_loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <img src={spinner} />
    </div>
  );
};

export { Loading };
