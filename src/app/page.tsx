import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Probleme from "@/components/sections/Probleme";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Methode from "@/components/sections/Methode";
import Citation from "@/components/sections/Citation";
import Temoignages from "@/components/sections/Temoignages";
import Portes from "@/components/sections/Portes";
import Newsletter from "@/components/sections/Newsletter";
import CtaGlobal from "@/components/sections/CtaGlobal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Probleme />
        <LeadMagnet />
        <Methode />
        <Citation />
        <Temoignages />
        <Portes />
        <Newsletter />
        <CtaGlobal />
      </main>
      <Footer />
    </>
  );
}
