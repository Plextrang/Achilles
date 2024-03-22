import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import white_converse from '../images/white_converse.jpg';
import { FaShoePrints, FaShoppingBasket, FaStar } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export default function Admin() {
  return (
    <div className="admin-container">
      <header className="title">
        <h1 className="shop-now-container">Current Inventory</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <nav className="filters">
          <a href="#" className="active">
            Inventory
          </a>
          <a href="#">Employees</a>
          <a href="#">Supplier</a>
        </nav>
      </header>

      <div className="card-container">
        <div className="card">
          <img src={white_converse} alt="White Converse" />
          <div className="card-details">
            <h3 className="card-title">Women's Converse</h3>
            <section className="card-reviews">
              <FaStar />
              <span className="total-reviews">4 Reviews</span>
            </section>
              <div className="bag">
                <FaShoppingBag /> 
                <div className="price">$80</div>
              </div>
            <div className = "stock">
              <MdOutlineProductionQuantityLimits />
              <div className = "quantity"> Stock: 45</div> 
            </div>
          <div className = "edit-container">
          <button className = "edit"> Manage </button>
        </div>
      </div>
      </div>

        <div className="card">
          <img src={white_converse} alt="White Converse" />
          <div className="card-details">
            <h3 className="card-title">Men's Converse</h3>
            <section className="card-reviews">
              <FaStar />
              <span className="total-reviews">4 Reviews</span>
            </section>
            <div className="bag">
              <FaShoppingBag /> 
              <div className="price">$80</div>
            </div>
            <div className = "stock">
            <MdOutlineProductionQuantityLimits />
            <div className = "quantity"> Stock: 25</div>            
            </div>
            <div className = "edit-container">
          <button className = "edit"> Manage </button>            
          </div>
        </div>
        </div>

        <div className="card">
          <img src={white_converse} alt="White Converse" />
          <div className="card-details">
            <h3 className="card-title">Kid's Converse</h3>
            <section className="card-reviews">
              <FaStar />
              <span className="total-reviews">4 Reviews</span>
            </section>
            <div className="bag">
              <FaShoppingBag /> 
              <div className="price">$80</div>
            </div>
            <div className="stock">
              <MdOutlineProductionQuantityLimits />
              <div className="quantity">Stock: 85</div>
            </div>
            <div className = "edit-container">
          <button className = "edit"> Manage </button>
          </div>
          </div>
        </div>


        <div className="card">
          <img src={white_converse} alt="White Converse" />
          <div className="card-details">
            <h3 className="card-title">100% Real Converse</h3>
            <section className="card-reviews">
              <FaStar />
              <span className="total-reviews">4 Reviews</span>
            </section>
            <div className="bag">
              <FaShoppingBag /> 
              <div className="price">$80</div>
            </div>
            <div className = "stock">
            <MdOutlineProductionQuantityLimits />
            <div className = "quantity"> Stock: 15</div>
            </div>
            <div className = "edit-container">
          <button className = "edit"> Manage </button>
          </div>
          </div>
        </div>

        <div className="card">
          <img src={white_converse} alt="White Converse" />
          <div className="card-details">
            <h3 className="card-title">Not Fake Converse</h3>
            <section className="card-reviews">
              <FaStar />
              <span className="total-reviews">4 Reviews</span>
            </section>
            <div className="bag">
              <FaShoppingBag /> 
              <div className="price">$80</div>
            </div>
            <div className = "stock">
            <MdOutlineProductionQuantityLimits />
            <div className = "quantity"> Stock: 35</div>
            </div>
            <div className = "edit-container">
          <button className = "edit"> Manage </button>
          </div>
          </div>
        </div>

        <div className="card">
          <img src={white_converse} alt="White Converse" />
          <div className="card-details">
            <h3 className="card-title">It's Surprisingly Converse</h3>
            <section className="card-reviews">
              <FaStar />
              <span className="total-reviews">4 Reviews</span>
            </section>
            <div className="bag">
              <FaShoppingBag /> 
              <div className="price">$80</div>
            </div>
            <div className = "stock">
            <MdOutlineProductionQuantityLimits />
            <div className = "quantity"> Stock: 55</div>
            </div>
            <div className = "edit-container">
          <button className = "edit"> Manage </button>
          </div>
          </div>
        </div>
        

        {/* Add more card containers for other products */}
      </div>
    </div>
  );
}

