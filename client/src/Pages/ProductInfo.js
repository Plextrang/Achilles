import React from 'react';
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
  console.log(localStorage.getItem("ProductInfo"));
  const product = JSON.parse(localStorage.getItem('ProductInfo'));

  return (
	<div className="product-info-container">
		<img className="product-img" src={variableMap[product.image_filename]} alt={product.item_name} />
		<div className="card-details">
			<h3 className="card-title">{product.item_name}</h3>
			<section className="card-reviews">
			<FaStar />
			<span className="total-reviews">4 Reviews</span> 
			</section>
			<div className="bag">
			<FaShoppingBag />
			<div className="price">${product.price}</div>
			</div>
		</div>
	</div>
  );
}