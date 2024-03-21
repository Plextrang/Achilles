import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import white_converse from '../images/white_converse.jpg';
import { FaStar } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';

export default function Products() {
  return (
    <div className="product-container">
      <header className="title">
        <h1 className="shop-now-container">Our Products</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <nav className="filters">
          <a href="#" className="active">
            All
          </a>
          <a href="#">Womens</a>
          <a href="#">Mens</a>
          <a href="#">Kids</a>
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
          </div>
        </div>
        

        {/* Add more card containers for other products */}
      </div>
    </div>
  );
}
