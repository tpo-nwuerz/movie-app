import React from 'react';

const NavBar = () => {
    return ( 
        <header className="site-header">
				<div className="container">
					<a href="/" id="branding">
						<img src="images/logo.png" alt="" className="logo"/>
						<div className="logo-copy">
							<h1 className="site-title">Company Name</h1>
							<small className="site-description">Tagline goes here</small>
						</div>
					</a> 

					<div className="main-navigation">
						<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
						<ul className="menu">
							<li className="menu-item current-menu-item"><a href="index.html">Home</a></li>
							{/* <li className="menu-item"><a href="about.html">About</a></li>
							<li className="menu-item"><a href="review.html">Movie reviews</a></li>
							<li className="menu-item"><a href="joinus.html">Join us</a></li>
							<li className="menu-item"><a href="contact.html">Contact</a></li> */}
						</ul> 

						<form action="#" className="search-form">
							<input type="text" placeholder="Search..."/>
							<button><i className="fa fa-search"></i></button>
						</form>
					</div> 

					<div className="mobile-navigation"></div>
				</div>
			</header>
     );
}
 
export default NavBar;