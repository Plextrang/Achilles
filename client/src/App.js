import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import DataEntry from "./Pages/DataEntry";
import Products from "./Pages/Products"
import Profile from "./Pages/Profile"
import Cart from "./Pages/Cart"
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
			</Routes>
    	</div>
  	);
}

export default App;
