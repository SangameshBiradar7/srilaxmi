import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutPreview from "@/components/home/AboutPreview";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import InstitutionNetwork from "@/components/home/InstitutionNetwork";
import AcademicSection from "@/components/home/AcademicSection";
import CampusLife from "@/components/home/CampusLife";
import AchievementStats from "@/components/home/AchievementStats";
import InnovationSection from "@/components/home/InnovationSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import NewsPreview from "@/components/home/NewsPreview";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import TrustComplianceCTA from "@/components/home/TrustComplianceCTA";
import ContactPreview from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <LeadershipPreview />
      <InstitutionNetwork />
      <AcademicSection />
      <CampusLife />
      <AchievementStats />
      <InnovationSection />
      <GalleryPreview />
      <NewsPreview />
      <AdmissionsCTA />
      <TrustComplianceCTA />
      <ContactPreview />
    </main>
  );
}
