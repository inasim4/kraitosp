import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Portfolio } from "@/components/sections/portfolio";
import { Team } from "@/components/sections/team";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import FloatingButtons from "@/components/sections/FloatingButtons";
import LoadingScreen from "@/components/sections/LoadingScreen";

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full">
          <Hero />
          <Services />
          <WhyUs />
          <Portfolio />
          <Team />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}
