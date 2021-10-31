import React from 'react';
import "./CardTemp.css"

function CardTemp({label, value}){
    return(
        <div className = 'inlineBox'>
          <label><b>{label}</b></label>
          <span>{value}º</span>
        </div>
    )
  }

  
export default CardTemp;