import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login"
import Register from "./Pages/Register"
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

			</Routes>
    	</div>
  	);
}

export default App;
