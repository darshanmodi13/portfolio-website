/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
		NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
		NEXT_TEMPLATE_ID: process.env.NEXT_TEMPLATE_ID,
	},
};

export default nextConfig;
