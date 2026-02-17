import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-description">
          Feel free to reach out! I'm always interested in interesting projects and conversations.
        </p>
        <div className="contact-links">
          <a href="mailto:shayaantanvir9@gmail.com" className="contact-link">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
