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
      {/* Video Background */}
      <div className="binary-background">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.builder.io/o/assets%2F79769d392e2d4adaafd2450bdf15ec60%2F3bc0c79627104715bfbf0026a4e6c4c7?alt=media&token=16c3eb4d-0f8d-4fab-bcb9-c3318a6c8d61&apiKey=79769d392e2d4adaafd2450bdf15ec60" type="video/mp4" />
        </video>

        {/* Binary overlay */}
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
              
              <div className="text-xs space-y-1 max-w-2xl" style={{textShadow: '0 0 4px rgba(0,0,0,0.8)'}}>
                <div><span className="text-secondary">#!/bin/bash</span></div>
                <div className="text-foreground"># Kubernetes | Docker | CI/CD | Cloud Infrastructure</div>
                <div className="text-foreground"># 5+ years production experience | 500+ deployments</div>
                <div className="text-foreground"># Open source | Cybersecurity | Linux &amp; DevOps</div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <a href="https://cdn.builder.io/o/assets%2F79769d392e2d4adaafd2450bdf15ec60%2F8d9d31d4aa2543049789600df00048a8?alt=media&token=0b254dd8-265e-4a47-bcef-40c725cf986c&apiKey=79769d392e2d4adaafd2450bdf15ec60" download target="_blank" rel="noopener noreferrer" className="border border-accent text-accent px-6 py-2 hover:bg-accent hover:text-accent-foreground transition flex items-center gap-2 text-xs">
                  Download Resume
                  <ExternalLink className="w-3 h-3" />
                </a>
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

        {/* Tech Stack Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-xs space-y-6">
              <div className="text-muted-foreground">
                <span className="text-primary">$</span> cat tech_stack.txt
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-4">💻 Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/Apache%20Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white" alt="Apache Groovy" />
                  <img src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white" alt="Go" />
                  <img src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
                  <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
                  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                  <img src="https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Bash" />
                  <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" alt="C" />
                  <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
                  <img src="https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white" alt="Rust" />
                  <img src="https://img.shields.io/badge/PHP-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
                  <img src="https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white" alt="PowerShell" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-4">☁️ Cloud & DevOps:</h3>
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
                  <img src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" />
                  <img src="https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Azure" />
                  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                  <img src="https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
                  <img src="https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" />
                  <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
                  <img src="https://img.shields.io/badge/gitlab%20CI-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab CI" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-4">🎨 Frontend & Frameworks:</h3>
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
                  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS" />
                  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
                  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
                  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                  <img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                  <img src="https://img.shields.io/badge/NestJS-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-4">📊 Data & AI/ML:</h3>
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow" />
                  <img src="https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white" alt="PyTorch" />
                  <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
                  <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
                  <img src="https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black" alt="Matplotlib" />
                  <img src="https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white" alt="Anaconda" />
                </div>
              </div>

              <div>
                <h3 className="text-foreground font-bold mb-4">🛠️ Tools & Services:</h3>
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
                  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
                  <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="Netlify" />
                  <img src="https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
                  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                  <img src="https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" />
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
                <span className="text-primary">$</span> ls -la core_competencies/
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
