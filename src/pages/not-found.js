import React from "react";
import { useHistory } from "react-router";
import { HiArrowSmLeft } from "react-icons/hi";

import "Styles/_not-found.scss";

const NotFound = () => {
  const history = useHistory();

  const onClickButtonBackHome = () => history.push("/");

  return (
    <div className="notFound">
      <div className="notFound__content">
        <h2>There's no page at this address...</h2>
        <button onClick={onClickButtonBackHome}>
          <HiArrowSmLeft size={50} /> <span>Return Home</span>
        </button>
      </div>
    </div>
  );
};

export { NotFound };
