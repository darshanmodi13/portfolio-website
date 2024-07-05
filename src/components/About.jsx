import React from 'react';

const About = () => {
	const skills = [
		{ name: 'ReactJs', level: 75 },
		{ name: 'NextJs', level: 70 },
		{ name: 'JavaScript', level: 70 },
		{ name: 'TypeScript', level: 65 },
		{ name: 'MaterialUI', level: 75 },
		{ name: 'NodeJs', level: 70 },
		{ name: 'MongoDB', level: 75 },
		{ name: 'Git', level: 70 },
		{ name: 'HTML', level: 70 },
		{ name: 'CSS', level: 70 },
		{ name: 'Docker', level: 65 },
		{ name: 'PostgreSQL', level: 60 },
		{ name: 'Core Java', level: 60 },
	];
	return (
		<article className="about" data-page="about">
			<header>
				<h2 className="h2 article-title">About me</h2>
			</header>
			<section className="about-text">
				<p>
					I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
				</p>
				<p>
					My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching
					and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
				</p>
			</section>
			<section className="skill">
				<h3 className="h3 skills-title">My skills</h3>
				<ul className="skills-list content-card">
					{skills.map((skill, index) => (
						<li className="skills-item" key={index}>
							<div className="title-wrapper">
								<h5 className="h5">{skill.name}</h5>
								<data value={skill.level}>{skill.level}%</data>
							</div>
							<div className="skill-progress-bg">
								<div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
};

export default About;
