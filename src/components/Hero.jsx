import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Shayaan Tanvir</h1>
          <p className="hero-role">Software Engineer & Security Enthusiast</p>
          <p className="hero-description">
            Passionate about building secure, scalable applications and exploring cybersecurity. Currently pursuing a B.Eng in Software Engineering at the University of Western Ontario.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  )
}
