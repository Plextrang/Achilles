import React from 'react'
import walking from '../images/converse.jpg'
import "./Home.css"


export default function Home() {
  return (
    <div className="home-container">
      <img src ={walking} alt="Background with Shoes on Display" />
        <h1>Achilles</h1>
        <button class = "shop"> Shop Now</button>
        <h2>Step with Style</h2>
    </div> 
  )
}

