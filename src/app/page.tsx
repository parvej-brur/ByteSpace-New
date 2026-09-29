import { Header, Hero, LearningPaths, PartnerLogos } from "@/features/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <LearningPaths />
      </main>
    </>
  );
}
