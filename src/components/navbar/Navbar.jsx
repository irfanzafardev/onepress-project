import React from "react";
import "./navbar.css";

import { BiSearch } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
	return (
		<>
			<nav className="row align-items-center">
				<div className="container-fluid">
					<div className="nav-brand bg-">ONEPRESS</div>
					<div className="nav-items d-lg-flex">
						<div className="item">
							<BiSearch size="2rem" />
						</div>
						<div className="item">Home</div>
						<div className="item">Categories</div>
						<div className="item">Profile</div>
						<div className="item-btn">
							<button type="button" className="btn btn-outline-dark">
								Sign in
							</button>
						</div>
					</div>
					<div className="mobile-toggler d-lg-none ms-5">
						<div data-bs-toggle="modal" data-bs-target="#naveModal">
							<GoThreeBars size="2rem" color="#000" />
						</div>
					</div>
				</div>
			</nav>

			<div className="modal" id="naveModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<div className="nav-brand bg-">ONEPRESS</div>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="modal-line">
								<div className="modal-item">Home</div>
							</div>
							<div className="modal-line">
								<div className="modal-item">Category</div>
							</div>
							<div className="modal-line">
								<div className="modal-item">Profile</div>
							</div>
							<div className="modal-btn">
								<button type="button" className="btn btn-outline-dark">
									Sign in
								</button>
							</div>
						</div>
						{/* <div className="modal-footer"></div> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
