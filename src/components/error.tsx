import React from 'react';

import 'Styles/_error.scss';

interface Props {
  errorMessage: string;
}

const Error: React.FC<Props> = ({ errorMessage }) => {
  return (
    <div className="error">
      <div className="error__content">
        <h2>Oops, something went wrong...</h2>
        <p>Please try again later.</p>
        <p>Error message: {errorMessage}</p>
      </div>
    </div>
  );
};

export { Error };
