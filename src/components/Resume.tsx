import Link from 'next/link';
import React from 'react';
import { FaBook } from 'react-icons/fa';

const Resume = () => {
	const education = [
		{
			title: 'MSc IT - Dhirubhai Ambani Institute of Information and Communication Technology',
			duration: '2021-2023',
			description: '',
		},
		{
			title: 'BCA - St. Xavier&apos;s College',
			duration: '2018 — 2021',
			description: '',
		},
	];

	const experience = [
		{
			title: 'Full Stack Developer - Solvative',
			duration: 'October-2023 — Present',
			description: (
				<>
					<ul>
						<li>
							- Contributed to the development and maintenance of features on the Samsung website, focusing on user interface and experience enhancements. Specifically worked on the{' '}
							<Link target="_blank" href={'https://www.samsung.com/us/smartphones/galaxy-s24-ultra/'} className="text-blue-600 inline">
								Samsung Galaxy S24 Ultra page
							</Link>
						</li>
						<li>- Tech Stack: ReactJs, Nodejs, IOT, HTML, CSS, JS</li>
					</ul>
				</>
			),
		},
		{
			title: 'Junior Full Stack Developer - NextCampus Platforms.',
			duration: 'May-2023 - November-2023',
			description: (
				<>
					<p>- Crafted a high-performance solution for efficient retrieval of 15,000 applications, resulting in a notable 40% improvement in application response time.</p>
					<p>- Researched and developed multi-tenancy solutions in a bootstrapped startup, enabling scalable and efficient resource management across multiple clients.</p>
					<p>- Tech Stack: Next.js, Node.js, MongoDB, AWS S3, Docker, MicroServices</p>
				</>
			),
		},
		{
			title: 'Software Develoment Engineer Intern - OpsHub Technology Private Limited',
			duration: 'January-2023 - May-2023',
			description: (
				<>
					<p>- Wrote Jenkins scripts for CI/CD automation, ensuring reliable software delivery.</p>
					<p>- Utilized Agile methodology for task prioritization and iterative planning, fostering collaboration and adaptability for efficient development.</p>
					<p>- Tech Stack: Java, Angular, Jenkins</p>
				</>
			),
		},
	];

	return (
		<article className="resume" data-page="resume">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<FaBook />
					</div>
					<h3 className="h3">Experience</h3>
				</div>
				<ol className="timeline-list">
					{experience.map((exp, index) => (
						<li className="timeline-item" key={index}>
							<h4 className="h4 timeline-item-title">{exp.title}</h4>
							<span>{exp.duration}</span>
							<p className="timeline-text">{exp.description}</p>
						</li>
					))}
				</ol>
			</section>
			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<FaBook />
					</div>
					<h3 className="h3">Education</h3>
				</div>
				<ol className="timeline-list">
					{education.map((edu, index) => (
						<li className="timeline-item" key={index}>
							<h4 className="h4 timeline-item-title">{edu.title}</h4>
							<span>{edu.duration}</span>
							<p className="timeline-text">{edu.description}</p>
						</li>
					))}
				</ol>
			</section>
		</article>
	);
};

export default Resume;
