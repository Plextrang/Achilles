import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingBag } from 'react-icons/fa';
import white_converse from '../images/white_converse.jpg';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:30000/Products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

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
      {products.length === 0 ? (
        <div className="empty-products-message"> {/* Display a dummy page if products array is empty */}
          <div className="card-container">
            {/* Dummy product cards */}
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
            {/* Add more dummy product cards */}
          </div>
        </div>
      ) : (
        <div className="card-container">
          {/* Map through the fetched products and render each product */}
          {products.map(product => (
            <div key={product.id} className="card">
              <img src={product.image_filepath} alt={product.name} />
              <div className="card-details">
                <h3 className="card-title">{product.name}</h3>
                <section className="card-reviews">
                  <FaStar />
                  <span className="total-reviews">{product.reviews} Reviews</span>
                </section>
                <div className="bag">
                  <FaShoppingBag />
                  <div className="price">${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}