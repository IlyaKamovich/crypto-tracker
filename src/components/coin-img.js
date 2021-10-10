import React, { Fragment, useEffect, useState } from "react";
import imgSpinner from "Assets/spinner.svg";

const CoinImg = ({ src, ...props }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [src]);

  return (
    <Fragment>
      {loading ? null : <img src="img-spinner" src={imgSpinner} />}
      <img {...props} style={loading ? {} : { display: "none" }} src={src} onLoad={() => setLoading(true)} />
    </Fragment>
  );
};

export { CoinImg };
