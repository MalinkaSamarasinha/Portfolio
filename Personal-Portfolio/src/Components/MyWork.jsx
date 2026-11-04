import Squiggle from './Squiggle';
export default function MyWork() {
  return (
    <section className="mywork" id="work">
      <h2 className="heading">My Work</h2>

      <ul className="project-list">
        <li className="project">
          <h3 className="project-title">2nd Harvest (Group project)</h3>
          <p className="project-desc">
            A web platform that connects supermarkets, charities and consumers
            to rescue surplus food before it goes to waste. I built the
            supermarket staff interface and contributed to building a section
            of the admin interface.
          </p>
          <p className="project-link">
            GitHub -{' '}
            <a href="https://github.com/arun-x/2nd_harvest" target="_blank" rel="noopener noreferrer">
              https://github.com/arun-x/2nd_harvest
            </a>
          </p>
        </li>

        <li className="project">
          <h3 className="project-title">Niche.lk (Web app, in progress)</h3>
          <p className="project-desc">
            A café-finder for Sri Lanka, made for students and remote workers.
            Pick a café on the map and see its Wi-Fi speed, plug points, study
            space, menu and current deals before you go. Café owners get their
            own dashboard to manage their listing. Free to list, with paid
            options to boost visibility and promote deals.
          </p>
          <p className="project-link">
            GitHub -{' '}
            <a href="https://github.com/MalinkaSamarasinha/niche.lk" target="_blank" rel="noopener noreferrer">
              https://github.com/MalinkaSamarasinha/niche.lk
            </a>
          </p>
        </li>

        <li className="project">
          <h3 className="project-title">The Canvas by D (Client project, Live)</h3>
          <p className="project-desc">
            A portfolio website for a hand-painted pottery and wooden art
            studio. Visitors browse a filterable gallery by medium, swipe
            through pieces on mobile and open them in a lightbox. A parallax
            hero and a custom cursor trail give the site a crafted, tactile
            feel. Designed and built from scratch.
          </p>
          <p className="project-link">
            Website -{' '}
            <a href="https://thecanvasbyd.vercel.app" target="_blank" rel="noopener noreferrer">
              https://thecanvasbyd.vercel.app
            </a>
          </p>
          <p className="project-link">
            GitHub -{' '}
            <a href="https://github.com/MalinkaSamarasinha/ArtWebsite" target="_blank" rel="noopener noreferrer">
              https://github.com/MalinkaSamarasinha/ArtWebsite
            </a>
          </p>
        </li>

        <li className="project">
          <h3 className="project-title">Face Recognition App (Personal project)</h3>
          <p className="project-desc">
            A desktop app with a live webcam feed that registers faces and
            identifies known people.
          </p>
          <p className="project-desc">Tags: Python · Tkinter · OpenCV</p>
        </li>
      </ul>
      <Squiggle className="squiggle-work" color="#D9A5A0" />
    </section>
  );
}