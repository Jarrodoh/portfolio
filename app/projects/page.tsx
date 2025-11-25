import SectionHeader from "@/components/SectionHeader";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";
import ProjectsDeck from "@/components/ProjectsDeck";

export const metadata = {
  title: "Projects | Jarrod Oh",
  description:
    "Full list of Jarrod Oh's builds, including the 2024–2025 freelance website and the first-year showcase site."
};

export default function ProjectsArchivePage() {
  return (
    <div className="bg-grid relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-sky-500/15 via-transparent to-fuchsia-500/10 mix-blend-screen" />
      <Navbar />
      <main className="relative mx-auto max-w-6xl px-4 pt-24 pb-24 space-y-12">
        <SectionHeader
          eyebrow="PROJECTS ARCHIVE"
          title="More builds, experiments and client work."
          description="Every project since year one – from my 2024–2025 freelance automation site to the first-year showcase website that kicked off this portfolio."
        />
        <ProjectsDeck items={projects} />
      </main>
    </div>
  );
}
