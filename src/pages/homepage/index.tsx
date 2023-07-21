import Navbar from "./navbar";
import Contact from "./contact";
import homestyle from "./css/homepage.module.css";
import About from "./about";

function HomePage() {
	// const navItem = [
	// 	{ name: "Contact", link: "#contact" },
	// 	{ name: "About", link: "#about" },
	// ];
	return (
		<>
			<Navbar />
			<div className={`${homestyle.welcomeSection} ${homestyle.section}`}>
				<h1>Hi, I am Dipankar</h1>

				<p>Welcome to my site</p>
			</div>
			<About />
			<Contact />
		</>
	);
}

export default HomePage;
