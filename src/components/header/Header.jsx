import React from "react";
import "./header.css";

const Header = () => {
	return (
		<section>
			<div className="container-fluid">
				<div className="heading">
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h1>
				</div>
				<div className="content row">
					<div className="developer col-4">
						<p>DEVS-</p>
						<span>
							Irfan Zafar
							<br />
							Reyvido Yoga
							<br />
							Dhiya Ulhaq
						</span>
					</div>
					<div className="location col-4">
						<p>LOCATION-</p>
						<span>Jakarta, ID</span>
					</div>
					<div className="location col-4">
						<p>GET IN TOUCH-</p>
						<span>hello@mail.com</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
