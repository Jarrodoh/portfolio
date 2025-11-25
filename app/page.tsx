import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import LoaderOverlay from "@/components/LoaderOverlay";

export default function Page() {
  return (
    <div className="bg-grid relative">
      <LoaderOverlay />
      {/* gradient glow */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-sky-500/15 via-transparent to-fuchsia-500/10 mix-blend-screen" />
      <Navbar />
      <main className="relative mx-auto max-w-6xl px-4 pt-24 pb-24 space-y-32">
        <Section delay={0.2}>
          <Hero />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Skills />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Timeline />
        </Section>
        <Section>
          <Contact />
        </Section>
      </main>
    </div>
  );
}