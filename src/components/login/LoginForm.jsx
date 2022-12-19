import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import "./login.css";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = async (event) => {
		event.preventDefault();
		dispatch(loginStart());
		try {
			const { data } = await axios.post("/user/login", { username, password });
			dispatch(loginSuccess(data));
			navigate("/");
		} catch (error) {
			console.log(error);
			dispatch(loginFailure());
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
			<div className="login-box">
				<h2>Log in</h2>
				<form>
					<div className="user-box">
						<input type="text" onChange={(e) => setUsername(e.target.value)} required></input>
						<label>Username</label>
					</div>
					<div className="user-box">
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
