// import React from 'react'
import homestyle from "./css/homepage.module.css";
const About = () => {
	return (
		<section
			id="about"
			className={`${homestyle.section} ${homestyle.aboutSection}`}
		>
			<div>
				<img src="public\ds4.jpg" alt="placeholder image" />
			</div>
			<div className={homestyle.personalInfo}>
				<h2 className={homestyle.title}>
					<em>About Me</em>
				</h2>
				<p className={homestyle.bio}>
					Hi, my name is <strong>Dipankar Shaw</strong>, <wbr /> I'm a{" "}
					<strong>Web Developer</strong> with a good knowledge in{" "}
					<strong>NodeJs </strong> and <strong>Python</strong>.
					<wbr /> Over the time I developed a skill set in a range of
					technologies and frameworks, including React, ExpressJs, Firebase and
					SCSS.
					<wbr /> Where I really value clean and readable code. Also I'm
					passionate about UX / UI.
				</p>
			</div>
		</section>
	);
};

export default About;
