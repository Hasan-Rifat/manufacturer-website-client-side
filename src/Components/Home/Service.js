import React from "react";

const Service = ({ name, text, bg, textColor }) => {
  //   const = item;
  return (
    <div class={`card ${bg} ${textColor} rounded-none`}>
      <div class="card-body flex">
        <div>
          <h2 class="card-title ">{name}</h2>
          <p class="card-actions text-left">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
