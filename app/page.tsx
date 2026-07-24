import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import WorkMosaic from "@/app/components/WorkMosaic";
import Divider from "@/app/components/Divider";
import Services from "@/app/components/Services";
import Stats from "@/app/components/Stats";
import CtaBand from "@/app/components/CtaBand";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <WorkMosaic />
      <Divider />
      <Services />
      <Stats />
      <CtaBand />
      <Footer />
    </main>
  );
}
