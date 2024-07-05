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
					Hi, I&apos;m Darshan Modi, a Full Stack Developer with 2 years of experience in ReactJs, NextJs, NodeJs, HTML, CSS, JavaScript, TypeScript, and MongoDB. I specialize in creating dynamic,
					responsive web applications that offer seamless user experiences. I am passionate about coding and continually learning new technologies to improve my skills
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
