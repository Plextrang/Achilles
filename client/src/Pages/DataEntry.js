import React from 'react'
import {Link} from 'react-router-dom'
import "./DataEntry.css"

export default function DataEntry() {
  return (
    <div className="data-entry-container">
        <div id="form-space">
        <form className="form-wrapper">
            <div className="form-container">
            <h1 id="title">Shoe/Product Entry Form</h1>
                <div className="input">
                    <label className="text-label">Product Name <span className="required">&#42;</span></label>
                    <input className="text" type="text" name="Product Name" placeholder="Enter Item's Name" maxlength="50" required/>
                </div>
                <div className="input">
                    <label className="text-label">Product Description <span className="required">&#42;</span></label>
                    <input className="text" type="text" name="Product Description" placeholder="Describe the Product Here" maxlength="255" required/>
                </div>
                <div className="line-container">
                    <div className="input">
                        <label className="text-label">Product Cost <span className="required">&#42;</span></label>
                        <input className="text" type="text" name="Cost" placeholder="USD ($###.##)" maxlength="6" required/>
                    </div>
                    <div className="input">
                        <label className="text-label">Product Color <span className="required">&#42;</span></label>
                        <input className="text" type="text" name="Color" placeholder="Predominant Color" maxlength="15" required/>
                    </div>
                    <div className="input">
                        <label className="text-label">Product Size <span className="required">&#42;</span></label>
                        <input className="text" type="text" name="Size" placeholder="US Shoe Size" maxlength="4" required/>
                    </div>
                    <div className="input">
                        <label className="text-label">Stock Available <span className="required">&#42;</span></label>
                        <input className="text" type="text" name="Stock" placeholder="Available Units"  maxlength="7" required/>
                    </div>
                </div>
                <div className="input">
                    <label className="text-label">Product Description <span className="required">&#42;</span></label>
                    <input className="text" type="text" name="Product Description" placeholder="Describe the Product Here" maxlength="255" required/>
                </div>
                <div className='button-wrapper'>
                    <button className="submit-button" type="submit" >List Item</button>
                </div>
            </div>
        </form>
        </div>
    </div>
  )
}