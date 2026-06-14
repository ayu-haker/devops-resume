import { ArrowRight, Code2, GitBranch, Container, Cloud, Shield, Zap, Terminal, ExternalLink } from "lucide-react";
import { useMemo } from "react";

export default function Index() {
  // Generate random binary sequences
  const binaryColumns = useMemo(() => {
    return Array.from({ length: 10 }, () => {
      const length = Math.floor(Math.random() * 50) + 100;
      return Array.from({ length }, () => Math.floor(Math.random() * 2)).join('\n');
    });
  }, []);

  const projects = [
    {
      name: "sh-pdops",
      title: "AI-Driven Self-Healing DevOps Pipeline",
      description: "Predictive failure recovery pipeline with AI-powered automation. Automatically detects and recovers from infrastructure issues before they impact users.",
      link: "https://github.com/ayu-haker/sh-pdops",
      tech: ["Python", "AI/ML", "Kubernetes", "Automation"],
      color: "text-primary"
    },
    {
      name: "java-k8s-microservices",
      title: "Kubernetes Microservices Architecture",
      description: "Production-ready Java microservices deployed with Kubernetes. Demonstrates containerization, orchestration, and microservices best practices.",
      link: "https://github.com/ayu-haker/java-k8s-microservices",
      tech: ["Java", "Docker", "Kubernetes", "Microservices"],
      color: "text-secondary"
    },
    {
      name: "dockwarden",
      title: "Docker DevOps Terminal UI",
      description: "High-performance terminal UI for Docker DevOps workflows. Built in Go with state machine navigation for seamless Docker container management.",
      link: "https://github.com/ayu-haker/dockwarden",
      tech: ["Go", "Docker", "TUI", "DevOps"],
      color: "text-accent"
    },
    {
      name: "grafana-monitoring",
      title: "Enterprise Monitoring & Observability",
      description: "Complete observability stack with Grafana dashboards. Enables real-time monitoring, alerting, and visualization of complex infrastructure.",
      link: "https://github.com/ayu-haker/grafana-monitoring",
      tech: ["Grafana", "Prometheus", "Monitoring", "Observability"],
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-mono relative">
      {/* Binary Background */}
      <div className="binary-background">
        {binaryColumns.map((binary, idx) => (
          <div key={idx} className="binary-column">
            {binary}
          </div>
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Terminal Header */}
        <div className="bg-card border-b border-border px-4 py-2 flex items-center gap-2 text-xs">
          <span className="text-primary">$</span>
          <span className="text-muted-foreground">ayushman@portfolio</span>
          <span className="text-primary">~</span>
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-primary">❯</span>
              <span className="text-foreground font-bold">ayu-haker/devops</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition">[about]</a>
              <a href="#skills" className="hover:text-foreground transition">[skills]</a>
              <a href="#projects" className="hover:text-foreground transition">[projects]</a>
              <a href="#contact" className="hover:text-foreground transition">[contact]</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-left space-y-6">
              <div className="text-xs space-y-1">
                <div className="text-muted-foreground">
                  <span className="text-primary">$</span> whoami
                </div>
                <div className="text-foreground">
                  <span className="text-primary">&gt;</span> Ayushman Bosu Roy - DevOps Engineer
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Building Resilient<br />Infrastructure at Scale
              </h1>
              
              <div className="text-xs text-muted-foreground space-y-1 max-w-2xl">
                <div><span className="text-secondary">#!/bin/bash</span></div>
                <div># Kubernetes | Docker | CI/CD | Cloud Infrastructure</div>
                <div># 5+ years production experience | 500+ deployments</div>
                <div># Open source | Cybersecurity | Linux &amp; DevOps</div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <a href="https://github.com/ayu-haker" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-6 py-2 hover:bg-primary hover:text-primary-foreground transition flex items-center gap-2 text-xs">
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a href="#contact" className="border border-secondary text-secondary px-6 py-2 hover:bg-secondary hover:text-secondary-foreground transition text-xs">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs space-y-4">
              <div className="text-muted-foreground">
                <span className="text-primary">$</span> cat about_me.txt
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="text-primary">&gt;</span> DevOps engineer with 5+ years building and scaling cloud infrastructure. 
                  Specialized in Kubernetes, Docker, CI/CD pipelines, and infrastructure automation.
                </p>
                
                <p>
                  <span className="text-primary">&gt;</span> Passionate about creating reliable, secure, and scalable systems. 
                  Strong background in cybersecurity, Linux systems, and cloud platforms (AWS, GCP, Azure).
                </p>
                
                <p>
                  <span className="text-primary">&gt;</span> Active open source contributor. Currently focusing on AI-driven DevOps automation 
                  and container orchestration at scale.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
                <div>
                  <div className="text-primary text-lg font-bold">500+</div>
                  <div className="text-muted-foreground text-xs">Deployments</div>
                </div>
                <div>
                  <div className="text-secondary text-lg font-bold">99.9%</div>
                  <div className="text-muted-foreground text-xs">Uptime</div>
                </div>
                <div>
                  <div className="text-accent text-lg font-bold">5+</div>
                  <div className="text-muted-foreground text-xs">Years Experience</div>
                </div>
                <div>
                  <div className="text-primary text-lg font-bold">34</div>
                  <div className="text-muted-foreground text-xs">Repositories</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs space-y-6">
              <div className="text-muted-foreground">
                <span className="text-primary">$</span> ls -la skills/
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border border-border p-4 hover:border-primary transition">
                  <div className="text-primary font-bold mb-2">Cloud Platforms</div>
                  <div className="text-muted-foreground space-y-1 text-xs">
                    <div>→ AWS (EC2, EKS, RDS, Lambda, S3)</div>
                    <div>→ Google Cloud (GKE, Cloud Run)</div>
                    <div>→ Azure, DigitalOcean</div>
                  </div>
                </div>
                
                <div className="border border-border p-4 hover:border-secondary transition">
                  <div className="text-secondary font-bold mb-2">Containers &amp; Orchestration</div>
                  <div className="text-muted-foreground space-y-1 text-xs">
                    <div>→ Docker, Kubernetes (EKS/GKE/AKS)</div>
                    <div>→ Helm, Operators</div>
                    <div>→ Container security &amp; scanning</div>
                  </div>
                </div>
                
                <div className="border border-border p-4 hover:border-accent transition">
                  <div className="text-accent font-bold mb-2">CI/CD &amp; Automation</div>
                  <div className="text-muted-foreground space-y-1 text-xs">
                    <div>→ GitLab CI, GitHub Actions, Jenkins</div>
                    <div>→ Terraform, Infrastructure as Code</div>
                    <div>→ Deployment automation</div>
                  </div>
                </div>
                
                <div className="border border-border p-4 hover:border-primary transition">
                  <div className="text-primary font-bold mb-2">Monitoring &amp; Observability</div>
                  <div className="text-muted-foreground space-y-1 text-xs">
                    <div>→ Prometheus, Grafana</div>
                    <div>→ ELK Stack, DataDog</div>
                    <div>→ Alerting &amp; logging</div>
                  </div>
                </div>
                
                <div className="border border-border p-4 hover:border-secondary transition">
                  <div className="text-secondary font-bold mb-2">Security &amp; Compliance</div>
                  <div className="text-muted-foreground space-y-1 text-xs">
                    <div>→ Network security, firewalls</div>
                    <div>→ Secret management (Vault)</div>
                    <div>→ SIEM, compliance automation</div>
                  </div>
                </div>
                
                <div className="border border-border p-4 hover:border-accent transition">
                  <div className="text-accent font-bold mb-2">Programming &amp; Scripting</div>
                  <div className="text-muted-foreground space-y-1 text-xs">
                    <div>→ Python, Bash, Go</div>
                    <div>→ Java, JavaScript, TypeScript</div>
                    <div>→ Infrastructure automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs space-y-6">
              <div className="text-muted-foreground">
                <span className="text-primary">$</span> git log --oneline --graph
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, idx) => (
                  <a 
                    key={idx}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border p-4 hover:border-foreground transition group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className={`font-bold mb-1 ${project.color}`}>{project.name}</div>
                        <div className="text-foreground text-xs">{project.title}</div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition flex-shrink-0" />
                    </div>
                    
                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, i) => (
                        <span key={i} className="bg-border text-muted-foreground px-2 py-0.5 text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <div className="text-muted-foreground mb-4">
                  <span className="text-primary">$</span> cd github.com/ayu-haker
                </div>
                <p className="text-muted-foreground text-xs">
                  34 repositories • Contributions in Cybersecurity, Cloud, DevOps, Microservices, Monitoring &amp; Automation
                </p>
                <a 
                  href="https://github.com/ayu-haker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-3 border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition text-xs"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs space-y-6">
              <div className="text-muted-foreground">
                <span className="text-primary">$</span> cat contact_info.txt
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="text-primary">&gt;</span> Looking for a DevOps engineer to optimize your infrastructure?
                </p>
                <p>
                  <span className="text-primary">&gt;</span> Let's discuss how I can help scale your systems, improve deployment pipelines, and build resilient infrastructure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://github.com/ayu-haker" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-6 py-2 hover:bg-primary hover:text-primary-foreground transition text-xs flex items-center gap-2">
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a href="mailto:ayushman@example.com" className="border border-secondary text-secondary px-6 py-2 hover:bg-secondary hover:text-secondary-foreground transition text-xs">
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-xs text-muted-foreground space-y-3">
            <div>
              <span className="text-primary">$</span> logout
            </div>
            <p>© 2024 Ayushman Bosu Roy. DevOps Portfolio.</p>
            <p>
              <span className="text-primary">❯</span> Cybersecurity • Cloud • DevOps • Building secure and scalable solutions
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
