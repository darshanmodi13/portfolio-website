import React, { useState } from 'react';
import { FaChevronDown, FaEye } from 'react-icons/fa';

const projects = [
	{ id: 1, title: 'Finance', category: 'web development', imgSrc: './assets/images/project-1.jpg', imgAlt: 'finance' },
	{ id: 2, title: 'Orizon', category: 'web development', imgSrc: './assets/images/project-2.png', imgAlt: 'orizon' },
	{ id: 3, title: 'Fundo', category: 'web design', imgSrc: './assets/images/project-3.jpg', imgAlt: 'fundo' },
	{ id: 4, title: 'Brawlhalla', category: 'applications', imgSrc: './assets/images/project-4.png', imgAlt: 'brawlhalla' },
	{ id: 5, title: 'DSM.', category: 'web design', imgSrc: './assets/images/project-5.png', imgAlt: 'dsm' },
	{ id: 6, title: 'MetaSpark', category: 'web design', imgSrc: './assets/images/project-6.png', imgAlt: 'metaspark' },
	{ id: 7, title: 'Summary', category: 'web development', imgSrc: './assets/images/project-7.png', imgAlt: 'summary' },
	{ id: 8, title: 'Task Manager', category: 'applications', imgSrc: './assets/images/project-8.jpg', imgAlt: 'task manager' },
	{ id: 9, title: 'Arrival', category: 'web development', imgSrc: './assets/images/project-9.png', imgAlt: 'arrival' },
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
									<div className="project-item-icon-box">
										<FaEye />
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
