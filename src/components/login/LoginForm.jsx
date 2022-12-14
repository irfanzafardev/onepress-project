import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
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
						<input type="text" name="" required=""></input>
						<label>Username</label>
					</div>
					<div class="user-box">
						<input type="password" name="" required=""></input>
						<label>Password</label>
					</div>
					<div className="item-btn float-end">
						<button type="button" className="btn btn-outline-dark">
							Log in
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginForm;
