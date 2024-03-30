import React from 'react';
import "../styles/dashboard.css"
import Stats from './Stats';
import img1 from "../assets/earning.png"
import img2 from "../assets/orders.png"
import img3 from "../assets/balance.png"
import img4 from "../assets/totalSales.png"
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import { IoIosArrowDown } from 'react-icons/io';
import Bars from './Bars';
import Product from './Product';

const Dashboard = () => {
  return (
    <div className='container'>
      <div className="welcome">
        <p>Hello Ishan 👋🏼</p>
        <input type="search" placeholder='Search' />
      </div>
      <div className="stats">
        <div>
          <img src={img1} alt="Earning Icon" />
          <Stats 
          name="Earning"
          amount="198"
          change="37.8"
          up={true} />
        </div>
        <div>
          <img src={img2} alt="Orders Icon" />
          <Stats 
          name="Orders"
          amount="2.4"
          change="2"
          up={false} />
        </div>
        <div>
          <img src={img3} alt="Balance Icon" />
          <Stats 
          name="Balance"
          amount="2.4"
          change="2"
          up={false} />
        </div>
        <div>
          <img src={img4} alt="Total Sales Icon" />
          <Stats 
          name="Total Sales"
          amount="89"
          change="11"
          up={true} />
        </div>
      </div>
      <div className="graph">
        <div className="bar">
          <div className="bar-header">
            <div className="bar-info">
              <p>Overview</p>
              <p>Monthly Earning</p>
            </div>
            <div className="bar-time">
              <p>Quaterly</p>
              <IoIosArrowDown />
            </div>
          </div>
          <div className="bars">
            <Bars height="125px" month="Jan" />
            <Bars height="100px" month="Feb" />
            <Bars height="200px" month="Mar" />
            <Bars height="150px" month="Apr" />
            <Bars height="175px" month="May" />
            <Bars height="75px" month="Jun" />
            <Bars height="175px" month="Jul" />
            <Bars height="210px" month="Aug" />
            <Bars height="200px" month="Sep" />
            <Bars height="175px" month="Oct" />
            <Bars height="165px" month="Nov" />
            <Bars height="185px" month="Dec" />
          </div>
        </div>
        <div className="pie">
          <div className="customers">
            <p>Customers</p>
            <p>Customers that buy products</p>
          </div>
          <div className="new">
            <p>65%</p>
            <p>Total New</p>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <div className="sales">
        <div className="sales-header">
          <p>Product Sell</p>
          <input type="search" placeholder='Search' />
          <div className="bar-time">
              <p>Last 30 Days</p>
              <IoIosArrowDown />
            </div>
        </div>
        <div className="sales-reading">
          <p>Product Name</p>
          <p>Stock</p>
          <p>Price</p>
          <p>Total Sales</p>
        </div>
        <div className="sales-product">
          <img src={product1} alt="Product 1" />
          <Product
          name="Abstract 3D"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          stock="32"
          price="45.99"
          sales="20" />
        </div>
        <div className="sales-product">
          <img src={product2} alt="Product 2" />
          <Product
          name="Sarphens Illustration"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          stock="32"
          price="45.99"
          sales="20" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard