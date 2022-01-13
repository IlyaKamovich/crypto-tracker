import React, { Fragment, useEffect, useState } from 'react';
import imgSpinner from 'Assets/spinner.svg';

interface Props {
  source: string;
  alt: string;
}

const CoinImg: React.FC<Props> = ({ source, alt, ...props }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
  }, [source]);

  return (
    <Fragment>
      {loading ? null : <img src={imgSpinner} />}
      <img {...props} style={loading ? {} : { display: 'none' }} src={source} onLoad={() => setLoading(true)} />
    </Fragment>
  );
};

export { CoinImg };
