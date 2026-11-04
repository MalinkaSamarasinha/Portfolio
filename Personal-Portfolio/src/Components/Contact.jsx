import Squiggle from './Squiggle';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact</h2>

      <a className="contact-email" href="mailto:malinkasamarasinha@gmail.com">
        <svg
          className="contact-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M2.5 6.5 12 13l9.5-6.5" />
        </svg>
        malinkasamarasinha@gmail.com
      </a>

      <div className="contact-buttons">
        <a
          className="contact-button"
          href="https://www.linkedin.com/in/malinka-samarasinha-1635482b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="contact-button"
          href="https://github.com/MalinkaSamarasinha"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <p className="contact-note">Open to internships and collaborations</p>
    <Squiggle className="squiggle-contact" color="#7A2B26" />
      
    </section>
  );
}