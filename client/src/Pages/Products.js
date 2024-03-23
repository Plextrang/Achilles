import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import white_converse from '../images/white_converse.jpg';
import { FaStar } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';

export default function Products() {

  // useState() declares a variable named products
  // and a function named setProducts
  // products is initialized as an empty array 
  // products[] -> container to hold data that we are retrieving
  // setProducts -> updates the values that are in product[]
  const[products, setProducts] = useState([]);

  
  // useEffect is a "hook" to perform side effects in functional compononents
  // useEffect -> used to fetch product data from a server 
  useEffect(() => {
    // fetch -> makes a GET request to the specific URL
    // The URL is where our backend server is expected to provide 
    // the product data
    fetch('http://localhost:3000/Products')
      // when the server responds to the fetch, then (.then)
      // we check if the response is ok
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      // if the response is ok, then we extra the JSON data
      // setProducts(data) puts the data into products[]
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:' , error);
      })
  }, [])

// Untested code to retrieve data from the database
//   return (
//     <div className="product-container">
//       <header className="title">
//         <h1 className="shop-now-container">Our Products</h1>
//         <div className="search-bar">
//           <input type="text" placeholder="Search..." />
//           <button>Search</button>
//         </div>
//         <nav className="filters">
//           <a href="#" className="active">
//             All
//           </a>
//           <a href="#">Womens</a>
//           <a href="#">Mens</a>
//           <a href="#">Kids</a>
//         </nav>
//       </header>

//       <div className="card-container">
//         {/* Map through the fetched products and render each product */}
//         {products.map(product => (
//           <div key={product.id} className="card">
//             <img src={product.image_filepath} alt={product.name} />
//             <div className="card-details">
//               <h3 className="card-title">{product.name}</h3>
//               <section className="card-reviews">
//                 <FaStar />
//                 <span className="total-reviews">{product.reviews} Reviews</span>
//               </section>
//               <div className="bag">
//                 <FaShoppingBag />
//                 <div className="price">${product.price}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
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
