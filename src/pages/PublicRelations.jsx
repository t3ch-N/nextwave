import { Link } from 'react-router-dom';

function PublicRelations() {
  return (
    <div>
      <h1>Public Relations | Glass House PR Services</h1>
      
      <div className="section">
        <h2>Our Expertise</h2>
        <p>Over half-a-decade experience with renowned brands...</p>
      </div>
      
      <div className="section">
        <p>Achieved through:</p>
        <ul className="list">
          <li>Strategic communication strategies</li>
          {/* Add more */}
        </ul>
      </div>
      
      <div className="section">
        <h2>Other Areas of Expertise</h2>
        <ul className="list">
          <li><Link to="/public-relations">Public Relations</Link></li>
          <li><Link to="/brand-management">Brand Management</Link></li>
          {/* Add all links */}
        </ul>
      </div>
      
      <div className="section">
        <h2>Get in touch</h2>
        <p>We would love to hear about your new project.</p>
        <Link to="/contact">Start by Contacting Us</Link>
      </div>
    </div>
  );
}

export default PublicRelations;