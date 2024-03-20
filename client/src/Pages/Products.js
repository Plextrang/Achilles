import React from 'react'
import {Link} from 'react-router-dom'
import "./Products.css"
import white_converse from "../images/white_converse.jpg"
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

export default function Products(){
    return(
        <div className = 'product-container'>
            <header className = "title">
                <h1 className = "shop-now-container">shop now.</h1>
                <nav className='filters'>
                <a href='#' className = "active">All</a>
                <a href = '#'>Womens</a>
                <a href = '#'>Mens</a>
                <a href = '#'>Kids</a>
                </nav>
             </header>  

            <div className="card-container">
            <section className="card">
                <img src={white_converse} alt='White Converse' 
                />
                <div className="card-details">
                    <h3 classname="card-title">Converse</h3>
                    <section className="card-reviews">
                        <FaStar></FaStar>
                        <span className="total-reviews">4</span>
                    </section>
                    <section className="card-price">
                        <div className="price">$80</div>
                    </section>
                    <div className="bag">
                        <FaShoppingBag></FaShoppingBag>
                    </div>
                </div>
            </section>
        </div>
        
        </div>
        
        
    )
}