import Link from 'next/link';
import React, { useState } from 'react';
import { IoMailOutline, IoPhonePortraitOutline, IoLocationOutline, IoLogoGithub, IoLogoLinkedin, IoChevronDown } from 'react-icons/io5';
import { TbBrandLeetcode } from 'react-icons/tb';
import { TiDocumentText } from 'react-icons/ti';
const contacts = [
	{
		icon: <TiDocumentText />,
		title: 'Resume',
		link: 'https://drive.google.com/file/d/1-lOFmVJ8vcfUaYdaW6zhpTGgOKqtUXUT/view?usp=sharing',
		linkText: 'Resume URL',
	},
	{
		icon: <IoMailOutline />,
		title: 'Email',
		link: 'mailto:darshanmodi300@gmail.com',
		linkText: 'darshanmodi300@gmail.com',
	},
	{
		icon: <IoPhonePortraitOutline />,
		title: 'Phone',
		link: 'tel:+918154990216',
		linkText: '+918154990216',
	},
	{
		icon: <IoLogoGithub />,
		title: 'Github',
		link: 'https://github.com/darshanmodi13',
		linkText: 'github.com/darshanmodi',
	},
	{
		icon: <IoLogoLinkedin />,
		link: 'https://www.linkedin.com/in/darshan-modi-3a4564198/',
		linkText: 'linkedin.com/darshanmodi',
		title: 'LinkedIn',
	},
	{
		icon: <TbBrandLeetcode />,
		link: 'https://leetcode.com/darshan_modi13/',
		linkText: 'leetcode.com/darshanmodi',
		title: 'Leetcode',
	},
];

const Sidebar = () => {
	return (
		<aside className="sidebar active" data-sidebar>
			<div className="sidebar-info">
				<div className="info-content">
					<h1 className="name" title="Darshan Modi">
						Darshan Modi
					</h1>
					<p className="title">Full Stack Developer</p>
				</div>
			</div>

			<div className="sidebar-info_more">
				<div className="separator"></div>
				<ul className="contacts-list">
					{contacts.map((contact, index) => (
						<li className="contact-item" key={index}>
							<div className="icon-box">{contact.icon}</div>
							<div className="contact-info">
								<p className="contact-title">{contact.title}</p>

								<Link target="_blank" href={contact.link} className="contact-link">
									{contact.linkText}
								</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
