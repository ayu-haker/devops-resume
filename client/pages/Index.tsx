import { useMemo, useEffect, useRef, useState } from "react";
import Hero3D from "@/components/Hero3D";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Download,
  ChevronRight,
  Layers,
  Shield,
  Cloud,
  Code2,
  GitBranch,
  Container,
  Zap,
  Monitor,
  Server,
  Cpu,
  Database,
  Globe,
  Lock,
  Activity,
  Users,
  Calendar,
  ArrowUpRight,
  Star,
  BookOpen,
  Award,
  Clock,
  Sparkles,
  Network,
  HardDrive,
  Settings,
  Copy,
  Check,
  HeartHandshake,
} from "lucide-react";

const BinaryRain = () => {
  const columns = useMemo(() =>
    Array.from({ length: 12 }, () => {
      const len = Math.floor(Math.random() * 40) + 80;
      return Array.from({ length: len }, () => Math.floor(Math.random() * 2)).join('\n');
    }), []
  );
  return (
    <div className="binary-background">
      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="https://cdn.builder.io/o/assets%2F79769d392e2d4adaafd2450bdf15ec60%2F3bc0c79627104715bfbf0026a4e6c4c7?alt=media&token=16c3eb4d-0f8d-4fab-bcb9-c3318a6c8d61&apiKey=79769d392e2d4adaafd2450bdf15ec60" type="video/mp4" />
      </video>
      {columns.map((b, i) => <div key={i} className="binary-column">{b}</div>)}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#050505]/95 backdrop-blur-xl shadow-lg shadow-primary/5' : 'bg-[#050505]/80 backdrop-blur-md'
    } border-b border-border/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-foreground font-bold text-sm font-mono tracking-tight">
            <span className="text-primary">ayu-haker</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">devops</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {['about', 'experience', 'skills', 'projects', 'contact'].map(s => (
            <a key={s} href={`#${s}`}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-all duration-300 relative group uppercase tracking-wider">
              ./{s}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ cmd, title, subtitle }: { cmd: string; title: string; subtitle?: string }) => (
  <div className="mb-12 space-y-2">
    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60 mb-4">
      <span className="text-primary">$</span>
      <span className="text-muted-foreground/40">{cmd}</span>
      <span className="animate-terminal-blink border-r-2 border-primary h-4" />
    </div>
    <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
      <span className="gradient-text-multi">{title}</span>
    </h2>
    {subtitle && <p className="text-sm text-muted-foreground/60 font-mono">{subtitle}</p>}
    <div className="section-divider mt-4" />
  </div>
);

const AnimatedSection = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 border-b border-border/20 ${className}`}>
    <div className="max-w-7xl mx-auto animate-reveal">
      {children}
    </div>
  </section>
);

const StatCard = ({ value, label, color = "text-primary" }: { value: string; label: string; color?: string }) => (
  <div className="terminal-card p-5 text-center group cursor-default">
    <div className={`text-2xl sm:text-3xl font-black ${color} mb-1 font-mono`}>{value}</div>
    <div className="text-xs text-muted-foreground/60 font-mono uppercase tracking-wider">{label}</div>
  </div>
);

const ExperienceCard = ({
  role, company, period, description, tags, type
}: {
  role: string; company: string; period: string; description: string; tags: string[]; type: string;
}) => (
  <div className="terminal-card p-6 group">
    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow-secondary" />
          <span className="text-xs font-mono text-secondary uppercase tracking-wider">{type}</span>
        </div>
        <h3 className="text-lg font-bold text-foreground">{role}</h3>
        <p className="text-sm text-muted-foreground/80 font-mono">{company}</p>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/50 bg-muted/50 px-3 py-1.5 rounded-full">
        <Calendar className="w-3 h-3" />
        {period}
      </div>
    </div>
    <p className="text-sm text-muted-foreground/70 leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <span key={i} className="tech-badge text-[10px]">{t}</span>
      ))}
    </div>
  </div>
);

const SkillBar = ({ name, level, color = "bg-primary" }: { name: string; level: number; color?: string }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-mono text-foreground/90 group-hover:text-primary transition-colors font-medium">{name}</span>
      <span className="text-xs font-mono text-foreground/70 font-bold">{level}%</span>
    </div>
    <div className="h-3 rounded-full bg-[#1a1a1a] border border-border/40 overflow-hidden">
      <div className={`h-full rounded-full ${color} transition-all duration-1000 relative shadow-lg`}
        style={{ width: `${level}%` }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project, idx }: { project: any; idx: number }) => (
  <a href={project.link} target="_blank" rel="noopener noreferrer"
    className={`terminal-card p-6 group cursor-pointer ${idx === 0 ? 'md:col-span-2' : ''}`}>
    <div className="flex items-start justify-between mb-3">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-2 h-2 rounded-full ${project.dotColor || 'bg-primary'} animate-pulse`} />
          <span className={`text-xs font-mono font-bold uppercase tracking-wider ${project.color}`}>{project.name}</span>
        </div>
        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
      </div>
      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0" />
    </div>
    <p className="text-sm text-muted-foreground/60 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {project.tech.map((t: string, i: number) => (
        <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-muted/30 text-muted-foreground/60 border border-border/30">
          {t}
        </span>
      ))}
    </div>
  </a>
);

export default function Index() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('ayushmanbosuroy@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      name: "sh-pdops",
      title: "AI-Driven Self-Healing DevOps Pipeline",
      description: "Predictive failure recovery pipeline with AI-powered automation. Automatically detects and recovers from infrastructure issues before they impact users.",
      link: "https://github.com/ayu-haker/sh-pdops",
      tech: ["Python", "AI/ML", "Kubernetes", "Automation"],
      color: "text-primary",
      dotColor: "bg-primary"
    },
    {
      name: "java-k8s-microservices",
      title: "Kubernetes Microservices Architecture",
      description: "Production-ready Java microservices deployed with Kubernetes. Demonstrates containerization, orchestration, and microservices best practices.",
      link: "https://github.com/ayu-haker/java-k8s-microservices",
      tech: ["Java", "Docker", "Kubernetes", "Microservices"],
      color: "text-secondary",
      dotColor: "bg-secondary"
    },
    {
      name: "dockwarden",
      title: "Docker DevOps Terminal UI",
      description: "High-performance terminal UI for Docker DevOps workflows. Built in Go with state machine navigation for seamless Docker container management.",
      link: "https://github.com/ayu-haker/dockwarden",
      tech: ["Go", "Docker", "TUI", "DevOps"],
      color: "text-accent",
      dotColor: "bg-accent"
    },
    {
      name: "grafana-monitoring",
      title: "Enterprise Monitoring & Observability",
      description: "Complete observability stack with Grafana dashboards. Enables real-time monitoring, alerting, and visualization of complex infrastructure.",
      link: "https://github.com/ayu-haker/grafana-monitoring",
      tech: ["Grafana", "Prometheus", "Monitoring", "Observability"],
      color: "text-primary",
      dotColor: "bg-primary"
    }
  ];

  const experiences = [
    {
      role: "Python Developer Trainee",
      company: "Zeethron Network",
      period: "Jun 2025 - Jul 2025",
      description: "Developed automation scripts and backend services using Python. Gained hands-on experience with network programming and system integration.",
      tags: ["Python", "Automation", "Backend", "Networking"],
      type: "Internship"
    },
    {
      role: "Cyber Security Job Simulation",
      company: "Deloitte Australia",
      period: "2025",
      description: "Completed a realistic cyber security job simulation covering threat analysis, incident response, and security assessment methodologies.",
      tags: ["Security", "Incident Response", "Threat Analysis", "Compliance"],
      type: "Simulation"
    },
    {
      role: "Solution Architecture Job Simulation",
      company: "AWS APAC",
      period: "2025",
      description: "Built cloud architecture solutions using AWS services. Designed scalable, fault-tolerant systems and implemented cost-optimization strategies.",
      tags: ["AWS", "Cloud Architecture", "Scalability", "Cost Optimization"],
      type: "Simulation"
    }
  ];

  const competencies = [
    { icon: <Cloud className="w-4 h-4" />, title: "Cloud Platforms", color: "text-primary", borderColor: "border-primary/30", hoverColor: "hover:border-primary",
      items: ["AWS (EC2, EKS, RDS, Lambda, S3)", "Google Cloud (GKE, Cloud Run)", "Azure, DigitalOcean"] },
    { icon: <Container className="w-4 h-4" />, title: "Containers & Orchestration", color: "text-secondary", borderColor: "border-secondary/30", hoverColor: "hover:border-secondary",
      items: ["Docker, Kubernetes (EKS/GKE/AKS)", "Helm, Operators", "Container security & scanning"] },
    { icon: <GitBranch className="w-4 h-4" />, title: "CI/CD & Automation", color: "text-accent", borderColor: "border-accent/30", hoverColor: "hover:border-accent",
      items: ["GitLab CI, GitHub Actions, Jenkins", "Terraform, IaC", "Deployment automation"] },
    { icon: <Activity className="w-4 h-4" />, title: "Monitoring & Observability", color: "text-primary", borderColor: "border-primary/30", hoverColor: "hover:border-primary",
      items: ["Prometheus, Grafana", "ELK Stack, DataDog", "Alerting & logging"] },
    { icon: <Shield className="w-4 h-4" />, title: "Security & Compliance", color: "text-secondary", borderColor: "border-secondary/30", hoverColor: "hover:border-secondary",
      items: ["Network security, firewalls", "Secret management (Vault)", "SIEM, compliance automation"] },
    { icon: <Code2 className="w-4 h-4" />, title: "Programming & Scripting", color: "text-accent", borderColor: "border-accent/30", hoverColor: "hover:border-accent",
      items: ["Python, Bash, Go", "Java, JavaScript, TypeScript", "Infrastructure automation"] },
  ];

  const skillsData = [
    { category: "Languages", skills: [
      { name: "Python", level: 90 }, { name: "Go", level: 75 }, { name: "Java", level: 80 },
      { name: "JavaScript/TS", level: 85 }, { name: "Bash", level: 88 }, { name: "Rust", level: 50 }
    ]},
    { category: "Cloud & DevOps", skills: [
      { name: "AWS", level: 92 }, { name: "Docker", level: 95 }, { name: "Kubernetes", level: 85 },
      { name: "Terraform", level: 80 }, { name: "CI/CD", level: 90 }, { name: "Linux", level: 88 }
    ]}
  ];

  const techStackGroups = [
    { title: "💻 Languages", color: "text-primary",
      badges: ["Python", "Go", "Java", "JavaScript", "TypeScript", "Bash", "C", "C++", "Rust", "PHP", "PowerShell", "Groovy"] },
    { title: "☁️ Cloud & DevOps", color: "text-secondary",
      badges: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI"] },
    { title: "🎨 Frontend", color: "text-accent",
      badges: ["React", "Node.js", "Express.js", "Vite", "HTML5", "CSS3", "Bootstrap", "NestJS"] },
    { title: "📊 Data & AI/ML", color: "text-primary",
      badges: ["TensorFlow", "PyTorch", "NumPy", "Pandas", "Matplotlib", "Anaconda"] },
    { title: "🛠️ Tools & Services", color: "text-secondary",
      badges: ["Firebase", "Supabase", "MySQL", "Netlify", "Vercel", "Git", "GitHub", "GitLab"] },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <BinaryRain />

      <div className="relative z-10">
        {/* Terminal Bar */}
        <div className="bg-[#050505]/90 border-b border-border/20 px-4 py-1.5 flex items-center gap-3 text-xs font-mono backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-muted-foreground/40 text-[10px]">─</span>
          <span className="text-primary">$</span>
          <span className="text-muted-foreground/60">ayushman@devops</span>
          <span className="text-primary">~</span>
          <span className="text-muted-foreground/40 text-[10px]">─</span>
          <span className="text-muted-foreground/30 flex-1 text-right text-[10px] hidden sm:block">./devops-resume.sh</span>
        </div>

        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent pointer-events-none" />
          <Hero3D />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-[1]" />
          <div className="max-w-7xl mx-auto relative z-[2]">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60 mb-6 animate-reveal">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary">$</span>
                <span>whoami</span>
                <span className="animate-terminal-blink border-r-2 border-primary h-4" />
              </div>

              <div className="animate-reveal mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-mono mb-4">
                  <Sparkles className="w-3 h-3" />
                  DevOps Engineer • Cloud Architect • OSS Contributor
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6 animate-reveal-delay-1">
                <span className="text-foreground/90">Building</span>
                <br />
                <span className="gradient-text-multi">Resilient</span>
                <br />
                <span className="text-foreground/90">Infrastructure</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground/60 max-w-xl leading-relaxed mb-8 animate-reveal-delay-2 font-light">
                DevOps engineer with 5+ years of production experience architecting
                cloud-native solutions, automating workflows, and building secure,
                scalable systems.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-10 animate-reveal-delay-2">
                <a href="#contact" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold font-mono overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
                <a href="https://cdn.builder.io/o/assets%2F79769d392e2d4adaafd2450bdf15ec60%2F8d9d31d4aa2543049789600df00048a8?alt=media&token=0b254dd8-265e-4a47-bcef-40c725cf986c&apiKey=79769d392e2d4adaafd2450bdf15ec60"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-sm font-mono text-muted-foreground hover:text-foreground transition-all duration-300 group">
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  Resume
                </a>
                <a href="https://github.com/ayu-haker" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-sm font-mono text-muted-foreground hover:text-foreground transition-all duration-300 group">
                  <Github className="w-4 h-4" />
                  GitHub
                  <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono animate-reveal-delay-3">
                <div className="flex items-center gap-2 text-muted-foreground/40">
                  <MapPin className="w-3.5 h-3.5" />
                  India
                </div>
                <div className="flex items-center gap-2 text-muted-foreground/40">
                  <Calendar className="w-3.5 h-3.5" />
                  5+ Years Exp.
                </div>
                <div className="flex items-center gap-2 text-muted-foreground/40">
                  <Star className="w-3.5 h-3.5" />
                  34 Repositories
                </div>
                <div className="flex items-center gap-2 text-muted-foreground/40">
                  <Users className="w-3.5 h-3.5" />
                  Open Source
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <div className="border-y border-border/20 bg-[#050505]/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard value="500+" label="Deployments" color="text-primary" />
              <StatCard value="99.9%" label="Uptime" color="text-secondary" />
              <StatCard value="5+" label="Years Exp." color="text-accent" />
              <StatCard value="34" label="Repositories" color="text-primary" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <AnimatedSection id="about">
          <SectionHeader cmd="cat about_me.txt" title="About Me" subtitle="DevOps engineer passionate about building resilient infrastructure" />
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                <span className="text-primary font-mono">&gt;</span> DevOps engineer with 5+ years building and scaling cloud infrastructure.
                Specialized in Kubernetes, Docker, CI/CD pipelines, and infrastructure automation.
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                <span className="text-primary font-mono">&gt;</span> Passionate about creating reliable, secure, and scalable systems.
                Strong background in cybersecurity, Linux systems, and cloud platforms (AWS, GCP, Azure).
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                <span className="text-primary font-mono">&gt;</span> Active open source contributor. Currently focusing on AI-driven DevOps automation
                and container orchestration at scale.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["#DevOps", "#Cloud", "#Kubernetes", "#Security", "#Automation", "#OpenSource"].map(t => (
                  <span key={t} className="tech-badge text-[10px]">{t}</span>
                ))}
              </div>
            </div>
            <div className="terminal-card p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Quick Info
              </div>
              <div className="space-y-3">
                {[
                  { icon: <MapPin className="w-3.5 h-3.5" />, label: "Location", value: "India" },
                  { icon: <BookOpen className="w-3.5 h-3.5" />, label: "Education", value: "B.Tech CSE, IIT (AI/ML Minor)" },
                  { icon: <Award className="w-3.5 h-3.5" />, label: "Certifications", value: "AWS, EC-Council Cybersecurity" },
                  { icon: <HeartHandshake className="w-3.5 h-3.5" />, label: "Availability", value: "Open to opportunities" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-primary/60">{item.icon}</span>
                    <div>
                      <span className="text-muted-foreground/40 text-xs">{item.label}</span>
                      <p className="text-foreground/80 text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experience">
          <SectionHeader cmd="ls -la experience/" title="Experience" subtitle="Professional journey & simulations" />
          <div className="grid md:grid-cols-3 gap-4">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills">
          <SectionHeader cmd="cat skills.json" title="Skills & Expertise" subtitle="Core competencies and proficiency levels" />
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillsData.map((group, gi) => (
              <div key={gi} className="terminal-card p-6">
                <h3 className="text-sm font-bold text-foreground mb-5 font-mono uppercase tracking-wider">
                  <span className="text-primary">&gt;</span> {group.category}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar key={si} name={skill.name} level={skill.level}
                      color={gi === 0 ? "bg-primary" : "bg-secondary"} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-bold text-foreground mb-5 font-mono uppercase tracking-wider">
            <span className="text-primary">&gt;</span> Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((comp, i) => (
              <div key={i} className={`terminal-card p-5 group cursor-default ${comp.borderColor} ${comp.hoverColor}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`${comp.color}`}>{comp.icon}</span>
                  <h4 className={`text-sm font-bold ${comp.color}`}>{comp.title}</h4>
                </div>
                <ul className="space-y-1.5">
                  {comp.items.map((item, j) => (
                    <li key={j} className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors flex items-start gap-2">
                      <span className={`${comp.color} mt-0.5`}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tech Stack Section */}
        <AnimatedSection>
          <SectionHeader cmd="cat tech_stack.txt" title="Tech Stack" subtitle="Technologies I work with daily" />
          <div className="space-y-6">
            {techStackGroups.map((group, gi) => (
              <div key={gi} className="terminal-card p-5">
                <h3 className={`text-sm font-bold mb-4 font-mono ${group.color}`}>{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.badges.map((badge, bi) => (
                    <span key={bi} className="tech-badge text-xs">{badge}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects">
          <SectionHeader cmd="git log --oneline --graph" title="Featured Projects" subtitle="Open source contributions & personal work" />
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} idx={idx} />
            ))}
          </div>
          <div className="mt-8 terminal-card p-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60 mb-3">
              <span className="text-primary">$</span> cd github.com/ayu-haker
            </div>
            <p className="text-sm text-muted-foreground/60 mb-4">
              34 repositories across Cybersecurity, Cloud, DevOps, Microservices, Monitoring & Automation
            </p>
            <a href="https://github.com/ayu-haker" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-primary text-sm font-mono hover:bg-primary/10 transition-all duration-300 group">
              <Github className="w-4 h-4" />
              View All Projects
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact">
          <SectionHeader cmd="cat contact.txt" title="Get In Touch" subtitle="Let's build something resilient together" />
          <div className="max-w-3xl mx-auto">
            <div className="terminal-card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Say Hello</h3>
              <p className="text-sm text-muted-foreground/60 mb-8 max-w-md mx-auto">
                I'm always open to discussing DevOps projects, collaboration opportunities,
                or just geeking out about infrastructure automation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-mono hover:bg-primary/20 transition-all duration-300 group">
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'ayushmanbosuroy@gmail.com'}
                </button>
                <a href="mailto:ayushmanbosuroy@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold font-mono hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  Send Email
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <a href="https://github.com/ayu-haker" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-muted/30 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/ayushman-bosu-roy-24b3842b1/" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-muted/30 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://wa.me/917063444943" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-muted/30 border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.498 14.382c-.718-.375-2.107-.516-2.429-.516-.322 0-1.064.241-1.504.482-.214.115-.441.236-.588.236-.44 0-3.089-1.532-3.665-2.878-.438-.998.224-1.07.759-1.498.228-.187.418-.374.418-.561 0-.187-.193-.965-.322-1.333-.214-.647-.416-.645-.606-.645-.193 0-.418 0-.644.022-.234.023-.621.099-.955.485-.322.386-1.124 1.098-1.124 2.677 0 1.579 1.15 3.104 1.311 3.314.161.209 2.155 3.358 5.348 4.543.744.276 1.338.448 1.802.579.75.214 1.416.184 1.958.078.644-.128 2.155-.836 2.466-1.653.311-.818.311-1.518.225-1.653-.088-.135-.322-.214-.644-.374z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.657 1.43 5.158L2 22l4.842-1.43A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="border-t border-border/20 bg-[#050505]/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground/40">
                <span className="text-primary">$</span>
                <span>logout</span>
                <span className="animate-terminal-blink border-r-2 border-primary h-4" />
              </div>
              <p className="text-xs text-muted-foreground/30 font-mono">
                © 2025 Ayushman Bosu Roy — Built with resilience
              </p>
            </div>
            <div className="mt-4 text-[10px] text-muted-foreground/20 font-mono text-center sm:text-right">
              <span className="text-primary">❯</span> Cybersecurity • Cloud • DevOps • Building secure and scalable solutions
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
