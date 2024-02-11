import React from 'react';

const GetInTouchSection = () => {
	return (
		<>
			<section id="getintouch" className="container mb-[5%]">
				<div className="text-head-2 tracking-wider capitalize ">Get In Touch</div>

				<form className="text-body-3 flex justify-center items-center flex-col gap-y-10 mt-10">
					<div className="flex flex-col gap-y-3 w-[50%] max-900:w-[70%] max-600:w-full">
						<label>Name</label>
						<input type="text" name="name" placeholder="Enter Your Name" className="bg-light-blue py-5 px-5 outline-none mt-3" />
					</div>
					<div className="flex flex-col gap-y-3 w-[50%] max-900:w-[70%] max-600:w-full">
						<label>Email</label>
						<input type="email" name="email" placeholder="Enter Your Email" className="bg-light-blue py-5 px-5 outline-none mt-3" />
					</div>
					<div className="flex flex-col gap-y-3 w-[50%] max-900:w-[70%] max-600:w-full">
						<label>Message</label>
						<textarea placeholder="Enter Your Name" className="bg-light-blue py-5 px-5 outline-none mt-3 resize-none"></textarea>
					</div>
					<button className="bg-blue rounded-xl text-center py-5 w-[50%] max-900:w-[70%] max-600:w-full">Submit</button>
				</form>
			</section>
		</>
	);
};

export default GetInTouchSection;
