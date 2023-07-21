// import {FC} from "react";
// import PropTypes from 'prop-types'
// import { NavLink } from "react-router-dom";
import homestyle from "./css/homepage.module.css";

function Navbar() {
	// console.info(navItem);
	return (
		<nav className={homestyle.homepageNav}>
			<ul>
				<li>
					<a href="#contact">Contact</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
