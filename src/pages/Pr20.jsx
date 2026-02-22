import { Link } from 'react-router-dom';

function Pr20() {
  return (
    <div>
      <h1>PR 2.0 by Glass House PR</h1>
      
      <div className="section">
        <p>PR 2.0 tailored for SMEs to address cost barriers and provide strategic PR solutions.</p>
      </div>
      
      <div className="section">
        <h2>PR 2.0 Structure</h2>
        <p>Develops a 1-year PR strategy...</p>
      </div>
      
      <div className="section">
        <h2>Building Media Real Estate for Businesses</h2>
        <ol>
          <li>Connects businesses with journalists...</li>
          {/* Add more */}
        </ol>
      </div>
      
      <div className="section">
        <h2>Would you like to know more about PR 2.0?</h2>
        <a href="/downloads/pr2-0.pdf" download>Download PR 2.0 Presentation</a>
      </div>
    </div>
  );
}

export default Pr20;