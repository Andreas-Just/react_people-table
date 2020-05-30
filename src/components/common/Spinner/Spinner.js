import React from 'react';

const Spinner = () => (
  <div className="
    spinner
    row
    flex-column
    justify-content-center
    align-items-center
    flex-grow-1
    no-gutters"
  >
    <h2 className="text-info mb-3">
      Loa
      <span className="d">d</span>
      ing...
    </h2>
    <div className="circle">
      <span className="line" />
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </div>
  </div>
);

export default Spinner;
