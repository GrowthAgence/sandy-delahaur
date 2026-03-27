import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Probleme from "@/components/sections/Probleme";
import Methode from "@/components/sections/Methode";
import Citation from "@/components/sections/Citation";
import Portes from "@/components/sections/Portes";
import Reassurance from "@/components/sections/Reassurance";
import Temoignages from "@/components/sections/Temoignages";
import CtaGlobal from "@/components/sections/CtaGlobal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Probleme />
        <Methode />
        <Citation />
        <Portes />
        <Reassurance />
        <Temoignages />
        <CtaGlobal />
      </main>
      <Footer />
    </>
  );
}
