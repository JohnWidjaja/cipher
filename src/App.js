import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home"; // Import the Home component
import Salted from "./Salted";
import Checksum from "./Checksum";

function App() {
	return (
		<Router>
			<div className="App">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/new">Checksum</Link>{" "}
						</li>
						<li>
							<Link to="/new2">Salted Hash</Link>{" "}
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new" element={<Checksum />} />
					<Route path="/new2" element={<Salted />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
