import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div>
            <p className="about-text">
              I'm a software engineering student with hands-on experience in full-stack development and cybersecurity. I've interned at Manulife and worked at Skylight on real-world applications, gaining expertise in building scalable systems with modern technologies.
            </p>
            <p className="about-text">
              I'm particularly interested in security engineering, network security, and building applications that protect user data. When I'm not coding, I'm exploring new technologies or working on security research projects.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact">
              <span className="fact-label">Education</span>
              <span className="fact-value">University of Western Ontario</span>
            </div>
            <div className="fact">
              <span className="fact-label">Degree</span>
              <span className="fact-value">B.Eng Software Engineering</span>
            </div>
            <div className="fact">
              <span className="fact-label">Expected Graduation</span>
              <span className="fact-value">May 2027</span>
            </div>
            <div className="fact">
              <span className="fact-label">Certifications</span>
              <span className="fact-value">CompTIA Security+ (Feb 2026)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
