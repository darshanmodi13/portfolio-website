import React from 'react';

// Icons
import { FaReact } from 'react-icons/fa';
import { IoLogoAndroid } from 'react-icons/io';
import { FaFileCode } from 'react-icons/fa';
import { FaCartArrowDown } from 'react-icons/fa';

const CardsSection = [
	{
		logo: <FaReact />,
		header: 'Web Development',
		text: '',
	},
	{
		logo: <IoLogoAndroid />,
		header: 'App Development',
		text: '',
	},
	{
		logo: <FaFileCode />,
		header: 'Full Stack Development',
		text: '',
	},
	{
		logo: <FaCartArrowDown />,
		header: 'ECommerce Development',
		text: '',
	},
];

const ServicesSection = () => {
	return (
		<>
			<section id="services" className="container">
				<div className="grid grid-cols-4 gap-5 max-900:grid-cols-2">
					{CardsSection.map((card, idx) => {
						return (
							<div key={idx} className="bg-light-blue text-font p-10 border border-blue rounded-xl flex flex-col gap-y-5">
								<div className="text-head-3">{card.logo}</div>
								<div className="font-500 text-body-3">{card.header}</div>
								<div className="text-body-4">{card.text}</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default ServicesSection;
