import React, {useState} from 'react';
import { FaStar, FaShoppingBag } from 'react-icons/fa';
import white_converse from '../images/white_converse.jpg';
import nike_air_force_1 from '../images/nike_air_force_1.jpg';
import adidas_gazelle_blue_gold from '../images/adidas_gazella_blue_gold.jpg';
import doc_martens_jorge from '../images/doc_martens_jorge.jpg';
import hk_crocs_clogs from '../images/hk_crocs_clogs.jpg';
import naruto_crocs_clog from '../images/naruto_crocs_clog.jpg';
import "./ProductInfo.css"

const variableMap = {
  'white_converse': white_converse,
  'nike_air_force_1': nike_air_force_1,
  'adidas_gazelle_blue_gold': adidas_gazelle_blue_gold,
  'doc_martens_jorge': doc_martens_jorge,
  'hk_crocs_clogs': hk_crocs_clogs,
  'naruto_crocs_clog': naruto_crocs_clog
};

export default function ProductInfo() {
	const [quantity, setQuantity] = useState(1);
	const userEmail = localStorage.getItem("userEmail");
    const product = JSON.parse(localStorage.getItem('ProductInfo'));

    const productWithUserId = {
        ...product, 
		quantity: quantity,
        email: userEmail 
    };
  const handleAddCart = async (e) => {
	try {
		const response = await fetch('https://cosc-3380-6au9.vercel.app/api/handlers/products/addToCart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(productWithUserId)
		});
		if (!response.ok) {
			throw new Error('Failed to add product');
		}
	} catch (error) {
		console.error('Error adding to Cart:', error);
	}
  };

  return (
	<div className="product-info-container">
		<img className="product-img" src={variableMap[product.image_filename]} alt={product.item_name} />
		<div className="card-details">
			<h3 className="card-title">{product.item_name}</h3>
			<div className="card-reviews">
				<FaStar />
				<span className="total-reviews">4 Reviews</span> 
			</div>
			<div className="bag">
				<FaShoppingBag />
				<div className="price">${product.price}</div>
			</div>
			<div className="add-container">
				<button id="add-button" onClick={handleAddCart}>Add to Cart</button>
				<label>Quantity: </label>
				<input type="text" id="quantity-input"
					   value={quantity}
					   onChange={(e) => setQuantity(e.target.value)}
					   required />
			</div>
			<p>TODO: Make this page look nice, Fix Attempt: 18</p>
		</div>
	</div>
  );
}