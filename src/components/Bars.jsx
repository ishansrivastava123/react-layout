import React from 'react';
import "../styles/bars.css";

const Bars = (props) => {
  return (
    <div className='bar-detail'>
      <span style={props.month === "Aug" ? {height: `${props.height}`, backgroundColor: "#5A32EA"} : {height: `${props.height}`}}>
      </span>
      <span>{props.month}</span>
    </div>
  )
}

export default Bars