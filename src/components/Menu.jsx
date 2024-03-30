import React from 'react';
import homeIcon from '../assets/circle-in-hexagon.jpeg'
import img1 from "../assets/menu-item-1.png";
import img2 from "../assets/menu-item-2.png";
import img3 from "../assets/menu-item-3.png";
import img4 from "../assets/menu-item-4.png";
import img5 from "../assets/menu-item-5.png";
import img6 from "../assets/menu-item-6.png";
import expand from "../assets/expand-more-icon.png";
import greater from "../assets/greater-than-symbol.png";
import pm from "../assets/pm.png";
import "../styles/menu.css";

const Menu = () => {
  return (
    <div className='menu'>
        <div className="menu-header">
            <img src={homeIcon} alt="Circle in Hexagon" />
            <span>Dashboard</span>
        </div>
        <div className="menulist">
            <div className='menuOne'>
                <span><img src={img1} alt="Menu Item Icons" /></span>
                <span>Dashboard</span>
            </div>
            <div>
                <span><img src={img2} alt="Menu Item Icons" /></span>
                <span>Product</span>
                <img src={greater} alt='Menu Item Expand More' />
            </div>
            <div>
                <span><img src={img3} alt="Menu Item Icons" /></span>
                <span>Customers</span>
                <img src={greater} alt='Menu Item Expand More' />
            </div>
            <div>
                <span><img src={img4} alt="Menu Item Icons" /></span>
                <span>Income</span>
                <img src={greater} alt='Menu Item Expand More' />
            </div>
            <div>
                <span><img src={img5} alt="Menu Item Icons" /></span>
                <span>Promote</span>
                <img src={greater} alt='Menu Item Expand More' />
            </div>
            <div>
                <span><img src={img6} alt="Menu Item Icons" /></span>
                <span>Help</span>
                <img src={greater} alt='Menu Item Expand More' />
            </div>
        </div>
        <div className="menu-footer">
            <img src={pm} alt="Project Manager Pic" />
            <span className="pm">
                <span>Evano</span>
                <span>Project Manager</span>
            </span>
            <img src={expand} alt='Project Manager' />
        </div>
    </div>
  )
}

export default Menu