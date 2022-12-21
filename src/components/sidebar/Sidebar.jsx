import React from "react";
import "./sidebar.css";

const Sidebar = ({ post }) => {
	return (
		<section className="sidebar">
			<div className="sidebar-content">
				<div className="sidebar-item">
					<div className="sidebar-heading">
						<h4>About</h4>
					</div>
					<div className="author-img">
						<img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
					</div>
					<div className="author-desc">
						<h4>{post.username}</h4>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, nobis! Distinctio doloribus in culpa exercitationem</p>
					</div>
				</div>
				<div className="sidebar-item d-none">
					<div className="sidebar-heading">
						<h4>Categories</h4>
					</div>
					<ul className="category-list">
						<li className="category-item">Category</li>
						<li className="category-item">Category</li>
						<li className="category-item">Category</li>
						<li className="category-item">Category</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
