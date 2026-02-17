import './Projects.css'

const projects = [
  {
    title: "NutriScan (Best Health Hack)",
    date: "Nov 2025",
    description: "Built and deployed an award-winning AI platform using facial biometrics to detect nutritional deficiencies and generate personalized recommendations.",
    tech: ["React", "TypeScript", "Gemini 2.5", "Flask API"]
  },
  {
    title: "Malware Homelab",
    date: "Sep 2025 - Oct 2025",
    description: "Created a secure penetration-testing lab to perform network reconnaissance, vulnerability scanning, and reverse TCP exploitation with controlled malware containers.",
    tech: ["VirtualBox", "Kali Linux", "Nmap", "Metasploit"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href="#" className="project-link">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
