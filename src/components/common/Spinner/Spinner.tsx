import React from 'react';
import './Spinner.scss';

const Spinner = () => (
  <div className="Spinner">
    <h2 className="Spinner-TextInfo">
      Loa
      <span className="Spinner-D">d</span>
      ing...
    </h2>
    <div className="Spinner-Circle">
      <span className="Spinner-Line" />
      <span className="Spinner-Line" />
      <span className="Spinner-Line" />
      <span className="Spinner-Line" />
    </div>
  </div>
);

export default Spinner;
