import './Skills.css'

const skillGroups = [
  {
    title: "Security & Networking",
    skills: ["Kali Linux", "Metasploit", "Wireshark", "VirtualBox", "AWS", "Network Reconnaissance", "Vulnerability Scanning"]
  },
  {
    title: "Security Concepts",
    skills: ["SIEM", "Elastic / Wazuh", "Splunk", "IDS/IPS", "Incident Response", "Threat Hunting", "Cloud Security"]
  },
  {
    title: "Programming & Backend",
    skills: ["Python", "C / C++", "Java", "C#", "SQL", "Bash", ".NET / ASP.NET"]
  },
  {
    title: "Frontend & Frameworks",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Spring Boot", "Flask / Django", "REST APIs"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Azure DevOps", "Docker", "Nmap", "Postman", "Jira", "Linux"]
  },
  {
    title: "Databases",
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "SQLAlchemy"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group">
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-items">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
