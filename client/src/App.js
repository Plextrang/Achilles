import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import DataEntry from "./Pages/DataEntry";
import Products from "./Pages/Products"
import Profile from "./Pages/Profile"
import Cart from "./Pages/Cart"
import Admin from "./Pages/Admin"
import AddShoe from "./Pages/AddShoe"
import AddEmployee from "./Pages/AddEmployee";
import AddSupplier from "./Pages/AddSupplier";
import SalesReport from "./Pages/SalesReport";

import './App.css';

function App() {
  	return (
    	<div className="app-container">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/Home" element={<Home />}/>
				<Route path="/Login" element={<Login />}></Route>
				<Route path="/Register" element={<Register />}></Route>
				<Route path="/EntryForm" element={<DataEntry />}></Route>
				<Route path="/Products" element={<Products/>}></Route>
				<Route path="/ProfileForm" element={<Profile/>}></Route>
				<Route path="/Cart" element={<Cart/>}></Route>
				<Route path = "/Admin" element={<Admin/>}></Route>
				<Route path = "/AddShoe" element={<AddShoe/>}></Route>
				<Route path = "/AddEmployee" element={<AddEmployee/>}></Route>
				<Route path = "/AddSupplier" element={<AddSupplier/>}></Route>
				<Route path = "/SalesReport" element={<SalesReport/>}></Route>
			</Routes>
    	</div>
  	);
}

export default App;
