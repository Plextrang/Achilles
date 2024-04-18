import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';
import white_converse from '../images/white_converse.jpg';
import { FaShoePrints, FaShoppingBasket, FaStar } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export default function Admin() {
  const [product, setProducts] = useState([]);
  const [images, setImages] = useState({});
  const navigate = useNavigate();

  const openProduct = (product) => {
    let stringProduct = JSON.stringify(product)
    localStorage.setItem('ProductInfo', stringProduct);
    console.log(localStorage.getItem('ProductInfo'));
    navigate('/GetProduct');
  };

  useEffect(() => {
    // Fetch products
    fetch('https://cosc-3380-6au9.vercel.app/api/handlers/products/getProducts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        // Load images dynamically
        const imagesToLoad = {};
        data.forEach(product => {
          import(`../images/${product.image_filename}.jpg`).then(image => {
            imagesToLoad[product.image_filename] = image.default;
            setImages(imagesToLoad);
          });
        });
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="admin-container">
      <header className="title">
        <h1 className="shop-now-container">Current Inventory</h1>
        <div className="add-new">
          <Link to="/EntryForm">
            <button>Add Shoe</button>
          </Link>
        </div>
        <div className="add-new">
          <Link to="/AddEmployee">
            <button>Add Employee</button>
          </Link>
        </div>
        <div className="add-new">
          <Link to="/AddSupplier">
            <button>Add Supplier</button>
          </Link>
        </div>
        <div className="add-new">
          <Link to="/SalesReport">
            <button>Sales Report</button>
          </Link>
        </div>
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
        {product.length === 0 ? (
          <div className="empty-products-message">
            {/* Display a dummy page if products array is empty */}
            {/* Dummy product cards */}
          </div>
        ) : (
          product.map(product => (
            <div key={product.product_id} className="card" onClick={() => openProduct(product)}>
              <img className="card-img" src={images[product.image_filename]} alt={product.item_name} />
              <div className="card-details">
                <h3 className="card-title">{product.item_name}</h3>
                <section className="card-reviews">
                  <FaStar />
                  <span className="total-reviews">4 Reviews</span> {/* Assuming this is a placeholder, you can replace it with product.reviews */}
                </section>
                <div className="bag">
                  <FaShoppingBag />
                  <div className="price">${product.price}</div>
                  <div className='edit-container'>
                    <button className='edit'>Manage</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}


        /* <div className="card">
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
</div> */