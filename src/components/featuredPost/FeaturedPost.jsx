import React from "react";
import "./featuredpost.css";

import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const FeaturedPost = () => {
	return (
		<section>
			<div className="container-fluid featured-post">
				<div className="heading">
					<h1>Latest Update</h1>
					<BsArrowDownShort className="icon" size="6rem" />
				</div>
				<div className="row latest-update">
					<div className="col-12">
						<Link to="/post/test" className="link">
							<div className="card">
								<img src="https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<p className="card-text">Post title</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className="row featured">
					<div className="heading">
						<h2>Featured</h2>
					</div>
					<div className="col-6">
						<Link to="/post/test" className="link">
							<div className="card">
								<img src="https://images.pexels.com/photos/311458/pexels-photo-311458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<p className="card-text">Post title</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-6">
						<Link to="/post/test" className="link">
							<div className="card">
								<img src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."></img>
								<div className="card-body">
									<p className="card-text">Post title</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedPost;