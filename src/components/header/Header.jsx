import React from "react";
import { useSelector } from "react-redux";
import "./header.css";

const Header = () => {
	const { currentUser } = useSelector((state) => state.user);

	return (
		<section className="header">
			<div className="container-fluid">
				<div className="heading">
					{currentUser ? (
						<h1>
							Halo saudara <span>{currentUser.name}</span>!, selamat datang di tempat para "artist" membagikan karya dan ceritanya.
						</h1>
					) : (
						<h1>Halo semua pengunjung situs, selamat datang di tempat para "artist" membagikan karya dan ceritanya.</h1>
					)}
				</div>
				<div className="content row">
					<div className="developer col-6 col-lg-4">
						<p>DEVS-</p>
						<span>
							Irfan Zafar
							<br />
							Reyvido Yoga
							<br />
							Dhiya Ulhaq
						</span>
					</div>
					<div className="location col-6 col-lg-4">
						<p>LOCATION-</p>
						<span>Jakarta, ID</span>
					</div>
					<div className="email col-6 col-lg-4">
						<p>GET IN TOUCH-</p>
						<span>hello@mail.com</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
