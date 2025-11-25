import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="space-y-6">
      <SectionHeader
        eyebrow="ABOUT"
        title="A poly student mixing AI, cloud and automation."
        description="Right now I’m exploring how machine learning, computer vision and RPA fit together to solve real problems — from recognising plants in gardens to automating fitness test scoring in schools."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <p className="text-sm leading-relaxed text-slate-300">
          I’m currently pursuing the{" "}
          <span className="font-medium">
            Diploma in Applied Artificial Intelligence at Temasek Polytechnic
          </span>{" "}
          in Singapore. My focus is on building{" "}
          <span className="text-sky-300">
            practical, end-to-end solutions
          </span>{" "}
          — collecting data, training models, deploying them and wrapping the
          whole thing in a clean UI.
        </p>
        <p className="text-sm leading-relaxed text-slate-300">
          Outside of school, I explore side projects like building portfolio
          dashboards, experimenting with agent workflows, or trying new cloud
          architectures. I enjoy learning by{" "}
          <span className="font-medium text-sky-300">shipping</span>: if it
          runs on the web and someone can click it, I know I’ve understood it.
        </p>
      </div>
    </section>
  );
}