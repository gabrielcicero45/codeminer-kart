import React from "react";

const Racer = ({ name, bornAt, imageUrl }) => {
  return (
    <div>
      <p> {name} </p>
      <p> {bornAt} </p>
      <img src={imageUrl} alt="Racer" />
    </div>
  );
};

export default Racer;
