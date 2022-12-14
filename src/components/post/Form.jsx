import React from "react";
import "./form.css";

import { GrAdd } from "react-icons/gr";

const Form = () => {
	return (
		<section>
			<div className="container-fluid form">
				<h1>Create a new story</h1>
				<form>
					<div className="form-group">
						<label htmlFor="fileInput" className="file-input-icon">
							<GrAdd size="3rem" style={{ marginTop: "-10px" }} />
						</label>
						<input type="file" id="fileInput" className="file-input" />
						<input type="text" placeholder="Title" className="title-input" autoFocus={true} />
					</div>
					<div className="form-group">
						<textarea name="" placeholder="Tell your story..." type="text" className="body-input" cols="30" rows="10"></textarea>
					</div>
					<button type="button" className="btn btn-outline-dark">
						Publish
					</button>
				</form>
			</div>
		</section>
	);
};

export default Form;
