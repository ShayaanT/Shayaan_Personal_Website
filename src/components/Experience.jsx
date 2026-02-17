import './Experience.css'

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Manulife, Toronto, ON",
    date: "May 2026 - Aug 2026",
    bullets: [
      "Built full-stack web applications using Spring Boot, React, and Angular for enterprise-scale projects",
      "Collaborated with cross-functional teams on feature delivery and KTLO initiatives using Agile methodologies",
      "Implemented comprehensive test coverage and debugging production issues using various logging tools",
      "Applied SAFe Agile practices throughout the development lifecycle with Azure DevOps"
    ]
  },
  {
    title: "Software Developer Co-op II",
    company: "Skylight, Guelph, ON",
    date: "May 2025 - Aug 2025",
    bullets: [
      "Developed a full ASP.NET WPF application with a .NET console service that improved alert delivery reliability by 35%",
      "Applied MVVM architecture principles and implemented CSS/JavaScript for maintainable, responsive frontends",
      "Implemented CI/CD pipelines in Azure DevOps, reducing manual alert checks by 50%",
      "Leveraged MVC architecture and Azure DevOps for version control and project tracking"
    ]
  },
  {
    title: "Software Developer Co-op I",
    company: "Skylight, Guelph, ON",
    date: "May 2024 - Aug 2024",
    bullets: [
      "Developed a WPF application using C# and .NET to fetch real-time alerts with 50+ shop floor machines",
      "Learned SQL Server backend logic, mapping machines to manufacturing stages, reducing traceability issues",
      "Engineered and deployed Microsoft SQL Server backend logic for alert mapping and machine tracking"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="exp-item">
              <div className="exp-header">
                <h3 className="exp-title">{exp.title}</h3>
                <span className="exp-date">{exp.date}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <ul className="exp-details">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
