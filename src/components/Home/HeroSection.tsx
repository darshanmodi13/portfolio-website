'use client';

import Image from 'next/image';
import Link from 'next/link';

// Typing Animation
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
	return (
		<section id="home" className="container">
			<div className="relative">
				<div className="w-full h-[70rem] relative z-0 rounded-xl max-1000:h-[50rem] max-600:h-[40rem]">
					<Image src={'/hero.png'} alt="hero" fill className="absolute " />
				</div>
				<div className="bg-black/40 z-10 absolute w-full h-full top-0"></div>
				<div className="absolute left-[5%] top-[70%] z-20 max-900:top-[55%]">
					<span className="text-head-1 font-[700] tracking-wide max-600:text-head-4">
						Hi, I&apos;m{' '}
						<TypeAnimation
							sequence={[
								'Darshan Modi',
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								'Full Stack Developer',
								1000,
								'Web Developer',
								1000,
							]}
							speed={50}
							repeat={Infinity}
						/>
					</span>
					<br />
					<span className="text-body-2 max-600:text-body-4">
						Experienced full-stack developer proficient in Next.js, Node.js, Express, React, MongoDB and AWS, crafting dynamic and responsive web solutions.
					</span>
					<div className="mt-10">
						<Link
							href={'https://drive.google.com/file/d/1IrI-ZQdWq8ObzXssr5n9gAsc7huy7taP/view?usp=drive_link'}
							target="_blank"
							className="text-body-2 bg-blue text-font px-5 py-3 border border-blue rounded-2xl">
							Download Resume
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
