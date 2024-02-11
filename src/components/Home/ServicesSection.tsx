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
		text: 'I build responsive websites using modern technologles like React, Gatsby, and Next.js. I focus on creating high-quality user Interfaces that are performant and accessible.',
	},
	{
		logo: <IoLogoAndroid />,
		header: 'App Development',
		text: 'I develop cross-platform mobile applications using Flutter. I have experience building apps for IOS and Android and can help you bring your idea to life.',
	},
	{
		logo: <FaFileCode />,
		header: 'Full Stack Development',
		text: 'I&apos;m a full stack developer with experience working with both front-end and back-end technologies. I can help you build scalable and secure web applications from start to finish.',
	},
	{
		logo: <FaCartArrowDown />,
		header: 'ECommerce Development',
		text: 'I create custom e- commerce solutions using platforms like Shopify and WooCommerce. I can help you set up an online store, optimize your site for sales, and Implement new features.',
	},
];

const ServicesSection = () => {
	return (
		<>
			<section id="services" className="container">
				<div className="text-head-2 tracking-wider capitalize ">What I Can do for you</div>
				<div className="grid grid-cols-4 gap-5 max-900:grid-cols-2 mt-10">
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
