// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import BlogsPage from "./pages/blogs";
import HtmlAnchorTag from "./pages/blogs/blog/htmlanchortag";

function App() {
	return (
		<>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="/blog" element={<BlogsPage />}>
					<Route path="htmlanchortag" element={<HtmlAnchorTag />} />
				</Route>
				<Route path="*" element={<strong>this route does not exists</strong>} />
			</Routes>
		</>
	);
}

export default App;
