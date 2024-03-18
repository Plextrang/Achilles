import React from 'react'
import walking from '../images/converse.jpg'
import "./Home.css"


export default function Home() {
  return (
    <div className="home-container">
      <img src ={walking}/>
        <h1>Achilles</h1>
        <p>Step with Style</p>
    </div> 
  )
}

