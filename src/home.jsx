import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Glass House PR | PR Company in Kenya</h1>
      
      <div className="section">
        <h2>For Clear Communication</h2>
        <p>At Glass House PR LTD, we do not throw stones; we use them to build strong brands through cutting edge PR solutions.</p>
      </div>
      
      <div className="section">
        <h2>PR 2.0</h2>
        <p>PR 2.0 tailored for SMEs, offering strategic communication strategies and training.</p>
        <Link to="/pr2-0">Learn More</Link>
      </div>
      
      <div className="section">
        <h2>CEO's Message</h2>
        <p className="quote">Growing enterprises and transforming client journeys. ~ Mary Njoki</p>
      </div>
      
      <div className="section">
        <h2>Glass House PR Report 2025</h2>
        <p>A report on trends, challenges, and opportunities in Africa's PR industry.</p>
        <Link to="/report">View Report</Link>
      </div>
      
      <div className="section">
        <h2>Services</h2>
        <ul className="list">
          <li><Link to="/public-relations">Public Relations</Link></li>
          <li><Link to="/brand-management">Brand Management</Link></li>
          <li><Link to="/digital-communication">Digital Communication</Link></li>
          <li><Link to="/media-relations">Media Relations</Link></li>
          <li><Link to="/crisis-management">Crisis Management</Link></li>
          <li><Link to="/pr-training">PR Training</Link></li>
        </ul>
      </div>
      
      <div className="section">
        <h2>Testimonials</h2>
        <p className="quote">"Great service!" ~ Clara Masinde</p>
        <p className="quote">"Professional and effective." ~ Ron Azinga</p>
        {/* Add more testimonials as per summary */}
        {/* ... */}
      </div>
      
      <div className="section">
        <h2>Awards and Recognition</h2>
        <p>Most Innovative Agency in Digital Communication & Media Management 2018 - Kenya by Global Business Insight.</p>
        {/* Add more */}
      </div>
      
      <div className="section">
        <h2>Contact</h2>
        <p>Email: info@glasshousepr.co.ke</p>
        <p>Phone: +254 714 001 891</p>
        <Link to="/about">Learn About Us</Link>
      </div>
    </div>
  );
}

export default Home;