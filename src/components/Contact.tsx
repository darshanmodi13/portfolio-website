import React, { useRef, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

interface FormData {
	fullname: string;
	email: string;
	message: string;
}

interface Errors {
	fullname?: string;
	email?: string;
	message?: string;
}

const Contact: React.FC = () => {
	const form = useRef<HTMLFormElement | null>(null);
	const [formData, setFormData] = useState<FormData>({
		fullname: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = useState<Errors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successMessage, setSuccessMessage] = useState('');

	const validate = (): boolean => {
		let tempErrors: Errors = {};

		if (!formData.fullname.trim()) tempErrors.fullname = 'Full name is required.';
		if (!formData.email.trim()) {
			tempErrors.email = 'Email address is required.';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			tempErrors.email = 'Email address is invalid.';
		}
		if (!formData.message.trim()) tempErrors.message = 'Message is required.';

		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validate()) return;

		setIsSubmitting(true);

		emailjs
			.sendForm(process.env.SERVICE_ID as string, process.env.NEXT_TEMPLATE_ID as string, form.current as HTMLFormElement, {
				publicKey: process.env.NEXT_PUBLIC_KEY as string,
			})
			.then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					setSuccessMessage('Message sent successfully!');
					setIsSubmitting(false);
					setFormData({ fullname: '', email: '', message: '' });
					setErrors({});
				},
				(error) => {
					console.log('FAILED...', error);
					setIsSubmitting(false);
				}
			);
	};

	return (
		<article className="contact" data-page="contact">
			<header>
				<h2 className="h2 article-title">Contact</h2>
			</header>

			<section className="contact-form">
				<h3 className="h3 form-title">Contact Form</h3>

				<form className="form" data-form onSubmit={handleSubmit} ref={form}>
					<div className="input-wrapper">
						<input type="text" name="fullname" className="form-input" placeholder="Full name" value={formData.fullname} onChange={handleChange} required />
						{errors.fullname && <p className="error">{errors.fullname}</p>}

						<input type="email" name="email" className="form-input" placeholder="Email address" value={formData.email} onChange={handleChange} required />
						{errors.email && <p className="error">{errors.email}</p>}
					</div>

					<textarea name="message" className="form-input" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
					{errors.message && <p className="error">{errors.message}</p>}

					<button className="form-btn" type="submit" disabled={isSubmitting}>
						<FaPaperPlane />
						<span>Send Message</span>
					</button>
					{successMessage && <p className="success">{successMessage}</p>}
				</form>
			</section>
		</article>
	);
};

export default Contact;
