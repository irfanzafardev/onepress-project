import React from "react";
import { Link } from "react-router-dom";
import "./category.css";

const Category = () => {
	return (
		<section className="category">
			<div className="container-fluid featured-post">
				<div className="heading">
					<h1>Category item</h1>
				</div>
				<div className="row featured">
					<div className="col-6">
						<Link to={`/post/test`} className="link">
							<div className="card">
								<img src="https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<p className="card-text">Title</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-6">
						<Link to={`/post/test`} className="link">
							<div className="card">
								<img src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<p className="card-text">Title</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Category;
