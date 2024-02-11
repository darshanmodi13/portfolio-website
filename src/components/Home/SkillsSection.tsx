import React from 'react';

const Skills = ['NextJs', 'ReactJs', 'JavaScript', 'TypeScript', 'NodeJs', 'ExpressJs', 'MongoDB', 'MySQL', 'REST', 'GraphQL', 'TailwindCSS', 'MUI'];

const Experiences = [
	{
		header: 'Full Stack Developer',
		text: 'Solvative, Nov 2023 - Present',
	},
	{
		header: 'Full Stack Developer',
		text: 'NextCampus Platforms, May 2023 - Nov 2023',
	},
	{
		header: 'Software Engineer Intern',
		text: 'OpsHub, Jan 2023 - May 2023',
	},
	{
		header: 'Full Stack Developer Intern',
		text: 'NextCampus Platforms, Sept 2022 - Dec 2022',
	},
	{
		header: 'Software Engineer Intern',
		text: 'OpsHub, May 2022 - July 2022',
	},
];

const steps = [
	{
		label: 'Select campaign settings',
		description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
	},
	{
		label: 'Create an ad group',
		description: 'An ad group contains one or more ads which target a shared set of keywords.',
	},
	{
		label: 'Create an ad',
		description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
	},
];

const SkillsSection = () => {
	return (
		<section id="skills" className="container">
			<div className="text-head-2 tracking-wider capitalize ">Skills</div>
			<div className="flex items-center flex-wrap gap-10 text-body-4 mt-5">
				{Skills.map((skill, idx) => (
					<div key={idx} className="bg-light-blue px-5 py-2 border-light-blue rounded-xl">
						{skill}
					</div>
				))}
			</div>
			<div className="text-head-2 tracking-wider capitalize mt-20">experience</div>
			<div className="mt-10">
				{Experiences.map((experience, idx) => (
					<div className="flex items-start" key={idx}>
						<div className="flex flex-col items-center">
							<div className="h-[15px] w-[15px] rounded-full bg-light-blue border border-blue"></div>
							<div className={`h-[60px] w-[3px] my-[.5rem] border border-blue bg-light-blue ${idx == Experiences.length - 1 ? 'hidden' : ''}`}></div>
						</div>
						<div className="ml-4">
							<div className="text-body-3 mt-[-10px] font-[500]">{experience.header}</div>
							<div className="text-body-4">{experience.text}</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SkillsSection;
