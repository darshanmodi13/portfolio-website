'use client';
import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Contact from './Contact';

const navLinks = [
	{ name: 'About', component: <About /> },
	{ name: 'Resume', component: <Resume /> },
	// { name: 'Portfolio', component: <Portfolio /> },
	{ name: 'Contact', component: <Contact /> },
];

const MainComponent = () => {
	const [currentLink, setCurrentLink] = useState(0);

	const handleNavLink = (idx: number) => {
		setCurrentLink(idx);
	};
	return (
		<div className="main-content">
			<Navbar navLinks={navLinks} currentIdx={currentLink} onClick={handleNavLink} />
			{navLinks[currentLink].component}
		</div>
	);
};

export default MainComponent;
