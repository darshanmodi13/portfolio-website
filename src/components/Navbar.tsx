import React from 'react';

interface INavLinks {
	navLinks: any[];
	onClick: (idx: number) => void;
	currentIdx: number;
}

const Navbar = ({ navLinks, onClick, currentIdx }: INavLinks) => {
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				{navLinks.map((link, index) => (
					<li className="navbar-item" key={index}>
						<button className={`navbar-link ${index == currentIdx ? 'active' : ''}`} onClick={() => onClick(index)} data-nav-link>
							{link.name}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
