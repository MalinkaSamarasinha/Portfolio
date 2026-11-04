import portrait from '../assets/portrait.jpeg';
import Squiggle from './Squiggle';

export default function Hero() {
  return (
    <section className="hero">
      <img src={portrait} alt="Portrait of Malinka" />

      <div className="hero-text">
        <h1 className="heading">Hello! I'm Malinka Samarasinha</h1>
        <p className="subheading">
          2nd year CS undergraduate at University of Colombo School of
          Computing. I build web projects and help run student communities.
        </p>
        <a href="#work" className="hero-button">View my work</a>
        <Squiggle className="squiggle-hero" color="#D9A5A0" />
      </div>
    </section>
  )
}