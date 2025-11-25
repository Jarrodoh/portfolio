import SectionHeader from "./SectionHeader";

const tech = [
  "Python (Pandas, NumPy, scikit-learn)",
  "Computer Vision basics · AWS Rekognition",
  "Streamlit · basic React/Next.js",
  "AWS (S3, CloudFront, IAM, SNS)",
  "UiPath RPA · Excel automation",
  "HTML · CSS · Tailwind · WordPress",
  "Git · GitHub · Postman"
];

const soft = [
  "Analytical thinking & debugging",
  "Explaining tech to non-tech people",
  "Team collaboration on projects",
  "Learning new tools quickly",
  "Documenting workflows & decisions"
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <SectionHeader
        eyebrow="SKILLS"
        title="What I like to build with."
        description="I’m still early in my journey, but I’ve already explored a mix of ML, cloud, web and automation tools."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title="Technical stack" items={tech} />
        <SkillGroup title="How I work" items={soft} />
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-glass rounded-2xl p-5">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}