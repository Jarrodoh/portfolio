import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <SectionHeader
        eyebrow="CONTACT"
        title="Let’s build something."
        description="I’m open to AI / ML, computer vision, automation and cloud-related internship opportunities, as well as collaborations on interesting projects."
      />
      <div className="card-glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 text-sm text-slate-300">
          <p>
            The best way to reach me is by email. I’m happy to share code,
            diagrams or walk through my projects in more depth.
          </p>
          <p className="text-xs text-slate-400">
            Based in Singapore · Open to hybrid / remote-friendly teams.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <a
            href="mailto:jarrodohliangkai@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Email me
            <span aria-hidden>↗</span>
          </a>
          <div className="text-xs text-slate-400">
            or connect on{" "}
            <a
              href="https://www.linkedin.com/in/jarrod-oh-45b407318/"
              className="font-medium text-sky-300 hover:text-sky-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}