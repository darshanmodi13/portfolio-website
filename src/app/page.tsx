'use client';
import Sidebar from '@/components/Sidebar';
import MainComponent from '@/components/MainComponent';

export default function Home() {
	return (
		<>
			<main>
				<Sidebar />
				<MainComponent />
			</main>
		</>
	);
}
