import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class BlogsPage extends Component {
	render() {
		return (
			<>
				<h2>My Blog Posts</h2>
				<div className="blog">
					<NavLink className="blog-title" to="/blog/htmlanchortag">
						HTML Anchor Tag
					</NavLink>
				</div>
			</>
		);
	}
}
