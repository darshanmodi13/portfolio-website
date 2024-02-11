import Navbar from '@/components/Common/Navbar';
import HeroSection from './HeroSection';
import GetInTouchSection from './GetInTouchSection';
import SkillsSection from './SkillsSection';
import ServicesSection from './ServicesSection';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<ServicesSection />
			<SkillsSection />
			<GetInTouchSection />
		</>
	);
};

export default HomePage;
