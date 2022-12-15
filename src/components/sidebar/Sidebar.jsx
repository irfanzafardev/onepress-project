import React from "react";
import "./sidebar.css";

const Sidebar = () => {
	return (
		<section className="sidebar">
			<div className="sidebar-content">
				<div className="sidebar-item">
					<div className="sidebar-heading">
						<h4>About</h4>
					</div>
					<div className="author-img">
						<img src="https://images.pexels.com/photos/2387335/pexels-photo-2387335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
					</div>
					<div className="author-desc">
						<h4>Author Name</h4>
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
