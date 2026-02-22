import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Glass House PR</h1>
      
      <div className="section">
        <h2>Who We Are</h2>
        <p>Glass House PR LTD is an independent agency offering a mix of services with a customized approach for each client.</p>
        <h3>Three Pillars</h3>
        <ul className="list">
          <li>Transparency: Clear purpose, vision, trust, and credibility.</li>
          <li>Clear Communication: Precise hearing, accurate interpretation.</li>
          <li>Constant Communication: Repetitive, persuasive, relevant.</li>
        </ul>
      </div>
      
      <div className="section">
        <h2>Vision</h2>
        <p>To help brands achieve business goals through strategic positioning and innovative, transparent communication.</p>
      </div>
      
      <div className="section">
        <h2>Mission</h2>
        <p>To shape and clearly communicate the identity of any entity worldwide to achieve their dreams.</p>
      </div>
      
      <div className="section">
        <h2>Core Values</h2>
        <ul className="list">
          <li>Entrepreneurial spirit</li>
          <li>Innovation</li>
          {/* Add more */}
        </ul>
      </div>
      
      <div className="section">
        <h2>Founding Story</h2>
        <p>Founded in 2012 by Mary Njoki...</p>
        {/* Full text from summary */}
      </div>
      
      <div className="section">
        <h2>Achievements and Clients</h2>
        <p>Worked with renowned global brands across tech, real estate...</p>
      </div>
      
      <div className="section">
        <h2>CEO Profile: Mary Njoki</h2>
        <p>Award-winning entrepreneur...</p>
        {/* Full bio */}
      </div>
      
      <div className="section">
        <p className="quote">~ Mary Njoki, CEO</p>
      </div>
      
      <div className="section">
        <h2>Get in touch</h2>
        <p>We would love to hear about your new project.</p>
        <Link to="/contact">Start by Contacting Us</Link>
      </div>
    </div>
  );
}

export default About;