import React from "react";
import "./CardTemp.css";

function CardTemp({ label, value }) {
  return (
    <div className="inlineBox">
      <label className="label">{label}</label>
      <span className="value">{value}º</span>
    </div>
  );
}

export default CardTemp;
