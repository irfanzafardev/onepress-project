import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css";

const RegistrationForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/user/register", {
				name,
				email,
				username,
				password,
			});
			console.log(res);
			navigate("/login");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<nav className="row align-items-center fixed-top">
				<div className="container-fluid">
					<div className="nav-brand">
						<Link to="/" className="link">
							ONEPRESS
						</Link>
					</div>
					<div className="nav-items d-flex">
						<div className="item-btn">
							<Link to="/login" className="link">
								<button type="button" className="btn btn-outline-dark">
									Sign in
								</button>
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<div className="login-box">
				<h2>Registration</h2>
				<form onSubmit={handleSubmit}>
					<div className="user-box">
						<input type="text" name="" required onChange={(e) => setName(e.target.value)}></input>
						<label>Name</label>
					</div>
					<div className="user-box">
						<input type="text" name="" required onChange={(e) => setUsername(e.target.value)}></input>
						<label>Username</label>
					</div>
					<div className="user-box">
						<input type="text" name="" required onChange={(e) => setEmail(e.target.value)}></input>
						<label>Email</label>
					</div>
					<div className="user-box">
						<input type="password" name="" required onChange={(e) => setPassword(e.target.value)}></input>
						<label>Password</label>
					</div>
					<div className="item-btn float-end">
						<button type="submit" className="btn btn-outline-dark">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default RegistrationForm;
