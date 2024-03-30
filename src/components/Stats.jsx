import React from 'react';
import { IoMdArrowUp, IoMdArrowDown } from 'react-icons/io';
import "../styles/stats.css";

const Stats = (props) => {
  return (
    <div className='stat'>
        <p>{props.name}</p>
        <p>${props.amount}k</p>
        <div className="change">
            <span>{props.up ? <IoMdArrowUp style={{color: "green"}} /> : <IoMdArrowDown style={{color: "red"}} />}</span>
            <span style={props.up ? {color: "green"} : {color: "red"}}>{props.change}</span>
            <span>% this month</span>
        </div>
    </div>
  )
}

export default Stats