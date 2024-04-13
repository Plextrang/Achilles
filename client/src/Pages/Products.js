import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingBag } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import white_converse from '../images/white_converse.jpg';
import nike_air_force_1 from '../images/nike_air_force_1.jpg';
import adidas_gazelle_blue_gold from '../images/adidas_gazella_blue_gold.jpg';
import doc_martens_jorge from '../images/doc_martens_jorge.jpg';
import hk_crocs_clogs from '../images/hk_crocs_clogs.jpg';
import naruto_crocs_clog from '../images/naruto_crocs_clog.jpg';
import "./Products.css"

const variableMap = {
  'white_converse': white_converse,
  'nike_air_force_1': nike_air_force_1,
  'adidas_gazelle_blue_gold': adidas_gazelle_blue_gold,
  'doc_martens_jorge': doc_martens_jorge,
  'hk_crocs_clogs': hk_crocs_clogs,
  'naruto_crocs_clog': naruto_crocs_clog
};

export default function Products() {
  const [products, setProducts] = useState([]);

  function openProduct(props) {

  }

  useEffect(() => {
    fetch('https://cosc-3380-6au9.vercel.app/api/handlers/products/getProducts')
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
      <div className="card-container">
        {products.length === 0 ? (
          <div className="empty-products-message"> {/* Display a dummy page if products array is empty */}
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
        ) : (
          products.map(product => (
            <div key={product.product_id} className="card" onClick={openProduct(product)}>
              <img className="card-img" src={variableMap[product.image_filename]} alt={product.item_name} />
              <div className="card-details">
                <h3 className="card-title">{product.item_name}</h3>
                <section className="card-reviews">
                  <FaStar />
                  <span className="total-reviews">4 Reviews</span> {/* Assuming this is a placeholder, you can replace it with product.reviews */}
                </section>
                <div className="bag">
                  <FaShoppingBag />
                  <div className="price">${product.price}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}