import React from 'react';
import Menu from './Menu';
import Dashboard from './Dashboard';
import "../styles/main.css";

const Main = () => {
  return (
    <div className='home'>
        <Menu />
        <Dashboard />
    </div>
  )
}

export default Main