import HeroSection from '@/components/hero-section';
import ExpertiseSection from '@/components/about-section';
import WorkSection from '@/components/projects-section';
import ExperienceSection from '@/components/experience-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExpertiseSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
