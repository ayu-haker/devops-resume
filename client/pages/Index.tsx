import { ArrowRight, Code2, GitBranch, Container, Cloud, Shield, Zap } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">DevOps Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-8">
              <span className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Welcome to my portfolio</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Infrastructure. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Automated.</span> Scalable.
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              DevOps engineer specializing in cloud infrastructure, containerization, and CI/CD automation. Building reliable systems at scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2 w-full sm:w-auto justify-center">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-card border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition w-full sm:w-auto">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                With 5+ years of experience in DevOps and cloud infrastructure, I've helped teams deploy, scale, and maintain critical systems serving millions of users. I'm passionate about automation, infrastructure as code, and building robust CI/CD pipelines.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I specialize in containerization with Docker and Kubernetes, cloud platforms like AWS and GCP, and modern tooling for infrastructure automation. Whether it's optimizing costs, improving deployment times, or enhancing system reliability, I love solving complex infrastructure challenges.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Always learning, always building</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Deployments</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-accent mb-2">50ms</div>
                <p className="text-muted-foreground">Avg Deploy Time</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                <p className="text-muted-foreground">Infrastructure Managed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Core Competencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
              <Cloud className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Cloud Platforms</h3>
              <p className="text-muted-foreground mb-4">AWS, Google Cloud, Azure, DigitalOcean</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ EC2, S3, RDS, Lambda</li>
                <li>✓ GKE, Cloud Run</li>
                <li>✓ Multi-cloud orchestration</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition">
              <Container className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Containers & Orchestration</h3>
              <p className="text-muted-foreground mb-4">Docker, Kubernetes, Helm</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Kubernetes (EKS, GKE, AKS)</li>
                <li>✓ Helm charts & operators</li>
                <li>✓ Container security & scanning</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition">
              <GitBranch className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">CI/CD & Automation</h3>
              <p className="text-muted-foreground mb-4">GitLab CI, GitHub Actions, Jenkins</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Pipeline design & optimization</li>
                <li>✓ Infrastructure as Code (Terraform)</li>
                <li>✓ Deployment automation</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Security & Compliance</h3>
              <p className="text-muted-foreground mb-4">Security best practices, compliance automation</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Network security & firewalls</li>
                <li>✓ Secret management (Vault)</li>
                <li>✓ SIEM & monitoring</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-secondary transition">
              <Zap className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Monitoring & Observability</h3>
              <p className="text-muted-foreground mb-4">Prometheus, Grafana, ELK, DataDog</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Metrics & alerting</li>
                <li>✓ Log aggregation & analysis</li>
                <li>✓ Distributed tracing</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent transition">
              <Code2 className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold text-lg text-foreground mb-2">Infrastructure as Code</h3>
              <p className="text-muted-foreground mb-4">Terraform, CloudFormation, Ansible</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ IaC best practices</li>
                <li>✓ Configuration management</li>
                <li>✓ Reproducible infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Multi-Region Kubernetes Infrastructure</h3>
                  <p className="text-sm text-muted-foreground mt-1">AWS, Kubernetes, Terraform</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
              <p className="text-muted-foreground mb-4">
                Designed and deployed a global Kubernetes infrastructure across 3 AWS regions with automated failover, reducing latency by 40% and improving disaster recovery capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">EKS</span>
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Terraform</span>
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Helm</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-secondary transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Automated CI/CD Pipeline</h3>
                  <p className="text-sm text-muted-foreground mt-1">GitLab CI, Docker, Kubernetes</p>
                </div>
                <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
              </div>
              <p className="text-muted-foreground mb-4">
                Built a comprehensive CI/CD pipeline serving 50+ microservices with automated testing, security scanning, and canary deployments. Reduced deployment time from 2 hours to 10 minutes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">GitLab CI</span>
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">SAST</span>
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Canary</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Observability Stack Implementation</h3>
                  <p className="text-sm text-muted-foreground mt-1">Prometheus, Grafana, ELK, Alert Manager</p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
              </div>
              <p className="text-muted-foreground mb-4">
                Deployed a complete observability platform providing real-time monitoring of 1000+ services with intelligent alerting, reducing MTTR from 30 mins to 5 mins.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Prometheus</span>
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Grafana</span>
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">ELK</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cost Optimization Initiative</h3>
                  <p className="text-sm text-muted-foreground mt-1">AWS, Spot Instances, Reserved Capacity</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
              <p className="text-muted-foreground mb-4">
                Led a comprehensive cloud cost optimization project utilizing reserved instances, spot market, and rightsizing strategies, resulting in 35% monthly cost reduction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Cost Analysis</span>
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Spot Instances</span>
                <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Let's Build Something Great</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Looking for a DevOps engineer to optimize your infrastructure? Get in touch and let's discuss how I can help your team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@example.com" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2">
              Send me an email
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="bg-card border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition">
              LinkedIn
            </a>
            <a href="#" className="bg-card border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-muted transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">© 2024 DevOps Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition text-sm">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
