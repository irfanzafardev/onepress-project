import React from "react";
import "./footer.css";

import { BsArrowUpRight } from "react-icons/bs";

const Footer = () => {
	return (
		<footer>
			<div className="container-fluid">
				<div className="row footer-heading">
					<div className="col-3"></div>
					<div className="col-9">
						Mari bertemu dengan yang lainnya!
						<br />
						<span>silahkan saling hubungi!</span>
					</div>
				</div>
				<div className="row footer-information">
					<div className="col-6 col-lg-3">
						<ul>
							<li>hello@mail.com</li>
						</ul>
					</div>
					<div className="col-6 col-lg-3">
						<ul>
							<li>
								<a href="https://github.com/irfanzafardev/onepress-project" target="_blank" rel="noreferrer">
									github
									<span>
										<BsArrowUpRight size="1.1rem" />
									</span>
								</a>
							</li>
						</ul>
					</div>
					<div className="col-6 col-lg-3">
						<ul>
							<li>
								<a href="https://github.com/irfanzafardev/onepress-project" target="_blank" rel="noreferrer">
									link
									<span>
										<BsArrowUpRight size="1.1rem" />
									</span>
								</a>
							</li>
						</ul>
					</div>
					<div className="col-6 col-lg-3">
						<ul>
							<li>
								<a href="https://github.com/irfanzafardev/onepress-project" target="_blank" rel="noreferrer">
									link
									<span>
										<BsArrowUpRight size="1.1rem" />
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
