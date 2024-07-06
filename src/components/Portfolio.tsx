import Link from 'next/link';
import React, { useState } from 'react';
import { CiLink } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
const projects = [
	{
		id: 1,
		title: 'Ride Sharing Application',
		category: '',
		imgSrc: '/images/Project1.png',
		imgAlt: 'Ride sharing web application',
		url: 'https://ephemeral-kulfi-168f7d.netlify.app/',
		github: 'https://github.com/darshanmodi13/IT632_8_ridesharing_web_frontend.git',
	},
	{
		id: 2,
		title: 'Live Tic Tac Toe Game using Socket.IO',
		category: '',
		imgSrc: '/images/Project2.png',
		imgAlt: 'Ride sharing web application',
		url: 'https://laughing-kirch-047d6a.netlify.app/',
		github: 'https://github.com/darshanmodi13/tic-tac-toe.git',
	},
];

const categories = ['All', 'Web design', 'Applications', 'Web development'];

const Portfolio = () => {
	return (
		<article className="portfolio" data-page="portfolio">
			<header>
				<h2 className="h2 article-title">Portfolio</h2>
			</header>

			<section className="projects">
				<ul className="project-list">
					{projects.map((project) => (
						<li className="project-item active" data-filter-item data-category={project.category} key={project.id}>
							<a href="#">
								<figure className="project-img">
									<div className="project-item-icon-box" style={{ display: 'flex', gap: '10px' }}>
										{project.url && (
											<Link href={project.url} target="_blank">
												<CiLink />
											</Link>
										)}
										{project.github && (
											<Link href={project.github} target="_blank">
												<FaGithub />
											</Link>
										)}
									</div>
									<div className="project-item-icon-box" style={{ display: 'flex', gap: '10px' }}>
										{project.url && (
											<Link href={project.url} target="_blank">
												<CiLink />
											</Link>
										)}
										{project.github && (
											<Link href={project.github} target="_blank">
												<FaGithub />
											</Link>
										)}
									</div>
									<img src={project.imgSrc} alt={project.imgAlt} loading="lazy" />
								</figure>
								<h3 className="project-title">{project.title}</h3>
								<p className="project-category">{project.category}</p>
							</a>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
};

export default Portfolio;
