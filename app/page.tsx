import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Process from "@/app/components/Process";
import WorkMosaic from "@/app/components/WorkMosaic";
import Divider from "@/app/components/Divider";
import Services from "@/app/components/Services";
import Stats from "@/app/components/Stats";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import CtaBand from "@/app/components/CtaBand";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <About />
      <Process />
      <WorkMosaic />
      <Divider />
      <Services />
      <Stats />
      <WhyChooseUs />
      <CtaBand />
      <Footer />
    </main>
  );
}
