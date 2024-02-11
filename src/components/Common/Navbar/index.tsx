'use client';
// Next
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Links
import { Links } from './links';

// Icons
import { TbCircleLetterD } from 'react-icons/tb';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';

const Navbar = () => {
	const [showMobileNav, setMobileNav] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 600) {
				setMobileNav(false);
			}
		};
		const handleOverflow = () => {
			if (showMobileNav) {
				document.querySelector('body')?.classList.add('overflow-hidden');
			} else {
				document.querySelector('body')?.classList.remove('overflow-hidden');
			}
		};
		if (window && document) {
			window.addEventListener('resize', handleResize);
			handleOverflow();
		}

		return () => {
			if (window && document) {
				window.removeEventListener('resize', handleResize);
				handleOverflow();
			}
		};
	}, [showMobileNav]);
	return (
		<>
			<nav className="sticky top-0 bg-bg z-50">
				<div className="flex justify-between items-center px-[5rem] h-[7rem]">
					<div className="flex items-center gap-x-5">
						<div className="text-head-1">
							<TbCircleLetterD />
						</div>
						<div className="logo text-head-3 font-[600] tracking-wider">DM</div>
					</div>
					<div className="max-600:hidden">
						<ul className="list-none flex justify-between items-center text-body-4 gap-x-12 ">
							{Links.map((link, idx) => {
								return (
									<li key={idx} className={`capitalize`}>
										<Link
											href={link.url}
											className={`relative ${
												link.type.toLocaleLowerCase() == 'button'
													? 'bg-blue border-blue px-4 py-2 rounded-3xl'
													: 'after:content-[""] after:absolute after:h-1 after:w-0 after:bottom-[-1rem] after:left-0 after:bg-font after:origin-top-left after:transition-all hover:after:w-full hover:after:origin-right'
											}`}>
											{link.text}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="hidden max-600:block">
						<div className="text-head-1" onClick={() => setMobileNav(true)}>
							<GiHamburgerMenu />
						</div>
						{showMobileNav && (
							<>
								<div className="absolute top-0 left-0 translate-x-0 h-[100vh] w-full bg-light-blue p-10">
									<div className="text-head-1 z-10 text-font float-right" onClick={() => setMobileNav(false)}>
										<IoIosClose />
									</div>
									<ul className={`list-none text-body-1 flex flex-col justify-center items-center h-full gap-12 `}>
										{Links.map((link, idx) => {
											return (
												<li key={idx} className={`capitalize`}>
													<Link
														href={link.url}
														className={`relative ${link.type.toLocaleLowerCase() == 'button' ? 'bg-blue border-blue px-4 py-2 rounded-xl' : ''}`}
														onClick={() => setMobileNav(false)}>
														{link.text}
													</Link>
												</li>
											);
										})}
									</ul>
								</div>
							</>
						)}
					</div>
				</div>
				<div className="h-[0.3px] w-full bg-white"></div>
			</nav>
		</>
	);
};

export default Navbar;
