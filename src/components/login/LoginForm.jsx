import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate()

	const handleLogin = async (event) => {
		console.log(event)
		event.preventDefault();
		try {
			const { data } = await axios.post("/user/login", { email, password });
			console.log(data);
			navigate('/')
		} catch (error) {}
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
					<div className="nav-items d-lg-flex">
						<div className="item-btn">
							<Link to="/registration" className="link">
								<button type="button" className="btn btn-outline-dark">
									Register
								</button>
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<div class="login-box">
				<h2>Log in</h2>
				<form>
					<div class="user-box">
						<input type="text" onChange={(e) => setEmail(e.target.value)} required></input>
						<label>Username</label>
					</div>
					<div class="user-box">
						<input type="password" onChange={(e) => setPassword(e.target.value)} required></input>
						<label>Password</label>
					</div>
					<div className="item-btn float-end">
						<button type="button" className="btn btn-outline-dark" onClick={handleLogin}>
							Log in
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
