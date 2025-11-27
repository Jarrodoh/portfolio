export type Project = {
  title: string;
  tagline: string;
  period: string;
  stack: string;
  bullets: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Agentic AI Video Detective",
    tagline: "Intelligent video analysis system that reconstructs timelines and causality.",
    period: "2025 · Personal Project",
    stack: "Streamlit, OpenCV, MoviePy, OpenRouter API, NVIDIA Nemotron VL",
    bullets: [
      "Built an autonomous AI agent that analyzes videos frame-by-frame to understand events, actors, and objects.",
      "Implemented temporal reasoning to connect frames and build coherent timelines with cause-effect relationships.",
      "Integrated vision-language models via OpenRouter API for intelligent frame interpretation.",
      "Deployed multi-page Streamlit dashboard with video upload, analysis pipeline, and interactive results visualization.",
      "Engineered frame extraction at 0.5 FPS with compression to optimize API calls while maintaining analysis quality."
    ],
    link: "https://agentic-ai-video-detective-azqe2wfskjrac5jdexj5y8.streamlit.app/"
  },
  {
    title: "AI Orchid Plant Discovery Website",
    tagline: "Computer vision on AWS Rekognition for orchid species.",
    period: "2025 · Temasek Polytechnic",
    stack: "AWS Rekognition, S3, CloudFront, SNS, HTML/CSS",
    bullets: [
      "Collected and labelled ~300 orchid images to train a custom classifier.",
      "Used Rekognition Custom Labels for training, evaluation and iteration.",
      "Deployed a web app that shows predictions, plant info and care tips.",
      "Integrated AWS services for hosting, notifications and IAM security."
    ]
  },
  {
    title: "Global Earthquake Magnitude Predictor",
    tagline: "Machine learning model deployed as a Streamlit app.",
    period: "2025 · Temasek Polytechnic",
    stack: "Python, Pandas, scikit-learn, Streamlit",
    bullets: [
      "Engineered features from a global earthquake dataset (2000–2025).",
      "Compared multiple regressors and selected the best-performing model.",
      "Achieved ~94.8% accuracy on held-out data.",
      "Deployed as an interactive web app for experimentation and learning."
    ]
  },
  {
    title: "Education Fitness Assessment & Certificate Bot",
    tagline: "UiPath automation for NAPFA-style fitness test reporting.",
    period: "2025 · Temasek Polytechnic",
    stack: "UiPath, Python, Excel, Word, PowerPoint, REST API",
    bullets: [
      "Designed an unattended UiPath workflow to process student Excel files.",
      "Used Python to compute fitness scores and call an AI API for feedback.",
      "Auto-generated Word reports and PowerPoint certificates for each student.",
      "Emailed results via Outlook, greatly reducing manual teacher workload."
    ]
  },
  {
    title: "Secure Enterprise Network & Cloud Proposal",
    tagline: "Network + cloud architecture for a fictional cybersecurity MNC.",
    period: "2025 · Temasek Polytechnic",
    stack: "AWS EC2, RDS, S3, CloudFront, Route 53, IAM, GuardDuty, KMS",
    bullets: [
      "Co-designed a secure hybrid network with VLANs, firewalls and redundancy.",
      "Proposed AWS architecture to host apps, databases and static assets.",
      "Considered PDPA compliance and security best practices.",
      "Documented design decisions and trade-offs in a professional proposal."
    ]
  },
  {
    title: "Freelance Automation Studio Website",
    tagline: "Marketing site for my 2024–2025 freelance AI + automation practice.",
    period: "2024 – 2025 · Freelance",
    stack: "Next.js, Vercel, Supabase, Framer Motion",
    bullets: [
      "Packaged the services I offered to SME clients and published case studies.",
      "Implemented a Supabase-powered CMS so I could publish updates without code.",
      "Built a lead capture flow that routes qualified enquiries to Notion + email.",
      "Tracked conversions with server-side events to optimize ad spend."
    ],
    link: "https://freelance.jarrod.dev"
  },
  {
    title: "First-Year Poly Showcase Site",
    tagline: "My first-year website documenting foundation labs and mini projects.",
    period: "2023 · Temasek Polytechnic",
    stack: "HTML, CSS, JavaScript, Firebase Hosting",
    bullets: [
      "Captured reflections for every lab, demo videos and GitHub links.",
      "Experimented with WebGL flourishes and custom scroll-driven interactions.",
      "Used Firebase auth so lecturers could leave inline comments.",
      "Became the reference point I send juniors who ask how to start building."
    ]
  }
];
