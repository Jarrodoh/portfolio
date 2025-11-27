import SectionHeader from "./SectionHeader";

const items = [
  {
    year: "2020-2023",
    title: "Hougang Secondary School - O Levels",
    bullets: [
      "Completed O Level education",
      "Earned Edusave Good Progress Award (2022)",
      "Earned Edusave Certificate of Academic Achievement - Top 25% (2022)",
      "Participated in Singapore Math Kangaroo Contest (2023)"
    ]
  },
  {
    year: "2022-2024",
    title: "Early Learning & Work Experience",
    bullets: [
      "Completed Nanyang Polytechnic Computation Thinking course",
      "Worked at Orchid Country Club (2023-2024) as Banquet/Event set-up staff",
      "Gained customer service and event logistics experience"
    ]
  },
  {
    year: "2024",
    title: "Started Temasek Polytechnic & KNIME Certification",
    bullets: [
      "Enrolled in Diploma in Applied Artificial Intelligence at Temasek Polytechnic",
      "Earned KNIME Analytics Platform L1 Basic Proficiency certification (June 2024)",
      "Proficient in data preparation, analysis and visualization workflows"
    ]
  },
  {
    year: "2025",
    title: "Hackathons, Projects & Academic Excellence",
    bullets: [
      "Participated in BuildingBlocs March Conference Hackathon",
      "Participated in PolyFinTech100 API Hackathon (built Peerfolio - AI-driven portfolio diversifier)",
      "Earned Edusave Academic Achievement Award - Top 25%",
      "Built AI/ML projects: AWS orchid recognition, earthquake predictor, UiPath automation bots"
    ]
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
            <ul className="mt-2 space-y-1.5">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-sky-400/80 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {idx !== items.length - 1 && (
              <div className="mt-4 h-px w-20 bg-gradient-to-r from-sky-500/60 to-transparent" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}