import React from 'react'
import {Link} from 'react-router-dom'
import "./Products.css"
import white_converse from "../images/white_converse.jpg"

export default function Products(){
    return(
        <div className = 'product-container'>
            <header>
                <h1>shop now.</h1>
                <nav className='filters'>
                <a href='#' className = "active">All</a>
                <a href = '#'>Womens</a>
                <a href = '#'>Mens</a>
                <a href = '#'>Kids</a>
                </nav>
             </header>  
        </div>
        
    )
}