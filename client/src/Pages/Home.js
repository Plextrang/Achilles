import React from 'react'
import {Link} from 'react-router-dom'
import walking from '../images/converse.jpg'
import "./Home.css"


export default function Home() {
  return (
    <div className="home-container">
      <img src ={walking} alt="Background with Shoes on Display" />
        <h1>Achilles</h1>
        <button class = "shop"> Shop Now</button>
        <h2>Step with Style</h2>
        <Link to="/EntryForm">
          <button class = "shop"> Temporary Data Entry Button</button>
        </Link>
    </div> 
  )
}

