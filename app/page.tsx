import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { CTA } from "@/components/cta";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Loader } from "@/components/loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
