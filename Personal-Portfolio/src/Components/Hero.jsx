import portrait from '../assets/portrait.jpeg';
import Squiggle from './Squiggle';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section className="hero">
      <img src={portrait} alt="Portrait of Malinka" />

      <div className="hero-text">
        <h1 className="heading">
  <Typewriter text="Hello! I'm Malinka Samarasinha" speed={50} />
</h1>
<p className="subheading">
  <Typewriter
    text="2nd year CS undergraduate at University of Colombo School of Computing. I build web projects and help run student communities."
    speed={30}
    delay={1800}
  />
</p>
        <a href="#work" className="hero-button">View my work</a>
        <Squiggle className="squiggle-hero" color="#D9A5A0" />
      </div>
    </section>
  )
}