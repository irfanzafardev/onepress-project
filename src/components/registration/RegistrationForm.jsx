import React from "react";
import "./registration.css";

const RegistrationForm = () => {
	return (
		<div class="login-box">
			<h2>Registration</h2>
			<form>
				<div class="user-box">
					<input type="text" name="" required=""></input>
					<label>Username</label>
				</div>
				<div class="user-box">
					<input type="text" name="" required=""></input>
					<label>Email</label>
				</div>
				<div class="user-box">
					<input type="password" name="" required=""></input>
					<label>Password</label>
				</div>
				<div class="user-box">
					<input type="password" name="" required=""></input>
					<label>Confirm Password</label>
				</div>
				<div className="item-btn float-end">
					<button type="button" className="btn btn-outline-dark">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegistrationForm;
