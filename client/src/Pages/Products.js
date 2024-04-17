import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to display all products
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

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category_name === selectedCategory);

  return (
    <div className="product-container">
      <header className="title">
        <h1 className="shop-now-container">Our Products</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <nav className="filters">
          <a href="#" className={selectedCategory === 'All' ? 'active' : ''} onClick={() => setSelectedCategory('All')}>All</a>
          <a href="#" className={selectedCategory === 'Womens' ? 'active' : ''} onClick={() => setSelectedCategory('Women')}>Womens</a>
          <a href="#" className={selectedCategory === 'Mens' ? 'active' : ''} onClick={() => setSelectedCategory('Men')}>Mens</a>
          <a href="#" className={selectedCategory === 'Kids' ? 'active' : ''} onClick={() => setSelectedCategory('Kids')}>Kids</a>
        </nav>
      </header>
      <div className="card-container">
        {filteredProducts.length === 0 ? (
          <div className="empty-products-message"> {/* Display a dummy page if products array is empty */}
            {/* Dummy product cards */}
          </div>
        ) : (
          filteredProducts.map(product => (
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
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
