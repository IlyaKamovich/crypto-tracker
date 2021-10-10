import React from "react";

import "Styles/_header.scss";

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="header__content">{children}</div>
    </header>
  );
};

export { Header };
