import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import IOSLibrariesSection from '@/components/sections/IOSLibrariesSection';
import AdditionalToolsSection from '@/components/sections/AdditionalToolsSection';
import AdditionalSkillsSection from '@/components/sections/AdditionalSkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <IOSLibrariesSection />
      <AdditionalToolsSection />
      <AdditionalSkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </Layout>
  );
}