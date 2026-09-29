import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  Courses,
  CtaSection,
  Hero,
  LearningPaths,
  PartnerLogos,
  PhotoShadowFilter,
  PlatformShowcase,
  Testimonials,
} from "@/features/landing";

export default function Home() {
  return (
    <>
      <PhotoShadowFilter />
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <Courses />
        <LearningPaths />
        <PlatformShowcase />
        <CtaSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
