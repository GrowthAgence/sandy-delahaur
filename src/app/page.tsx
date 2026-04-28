import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Partenaires from "@/components/sections/Partenaires";
import Probleme from "@/components/sections/Probleme";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Methode from "@/components/sections/Methode";
import Resultats from "@/components/sections/Resultats";
import AuditAnalyse from "@/components/sections/AuditAnalyse";
import Citation from "@/components/sections/Citation";
import Newsletter from "@/components/sections/Newsletter";
import Sandy from "@/components/sections/Sandy";
import Temoignages from "@/components/sections/Temoignages";
import CtaGlobal from "@/components/sections/CtaGlobal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partenaires />
        <Probleme />
        <LeadMagnet />
        <Methode />
        <Resultats />
        <AuditAnalyse />
        <Citation />
        <Newsletter />
        <Sandy />
        <Temoignages />
        <CtaGlobal />
      </main>
      <Footer />
    </>
  );
}
