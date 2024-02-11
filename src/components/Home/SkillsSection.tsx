import React from 'react';

const Skills = ['NextJs', 'ReactJs', 'JavaScript', 'TypeScript', 'NodeJs', 'ExpressJs', 'MongoDB', 'MySQL', 'REST', 'GraphQL', 'TailwindCSS', 'MUI'];

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
		</section>
	);
};

export default SkillsSection;
