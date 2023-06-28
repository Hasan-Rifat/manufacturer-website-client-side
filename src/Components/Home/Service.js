import React from "react";

const Service = ({ name, text, bg, textColor }) => {
  //   const = item;
  return (
    <div className={`card ${bg} ${textColor} rounded-none`}>
      <div className="card-body flex">
        <div>
          <h2 className="card-title ">{name}</h2>
          <p className="card-actions text-left">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
