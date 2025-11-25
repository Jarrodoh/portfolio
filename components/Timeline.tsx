import SectionHeader from "./SectionHeader";

const items = [
  {
    year: "2024",
    title: "Started Diploma in Applied AI",
    body: "Joined Temasek Polytechnic’s Applied AI course and began exploring ML, cloud and automation."
  },
  {
    year: "2025",
    title: "First AI & automation projects",
    body: "Built plant recognition, earthquake prediction and UiPath automation projects as part of coursework and personal learning."
  },
  {
    year: "Next",
    title: "AI Engineering Intern",
    body: "Looking to join an AI / ML engineering team where I can contribute to model pipelines, deployment and experimentation."
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="space-y-8">
      <SectionHeader
        eyebrow="JOURNEY"
        title="Where I am in my learning journey."
      />
      <ol className="relative border-l border-slate-700/70 pl-5 text-sm">
        {items.map((item, idx) => (
          <li key={item.year} className="mb-8">
            <div className="absolute -left-2.5 mt-1 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.25)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {item.year}
            </p>
            <h3 className="mt-1 text-base font-semibold text-slate-100">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-slate-300">{item.body}</p>
            {idx !== items.length - 1 && (
              <div className="mt-4 h-px w-20 bg-gradient-to-r from-sky-500/60 to-transparent" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}