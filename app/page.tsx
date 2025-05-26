import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { SolutionsSection } from "@/components/sections/solutions";
import { WhyUsSection } from "@/components/sections/why-us";
import { WorkSection } from "@/components/sections/work";
import { FoundersSection } from "@/components/sections/founders";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <WhyUsSection />
        <WorkSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
