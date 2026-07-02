import '../App.css'
import { Link } from 'react-router-dom'

function Team() {
  return (
  <>
    <nav className="team-nav">
      <Link to="/">← Back to Home</Link>
    </nav>

    <section className="team-page">
      <div className="team-header">
        <span>OUR TEAM</span>
        <h1>Leadership</h1>
        <p>
          A world class team of engineers, scientists, and operators
          dedicated to solving industrial carbon emissions.
        </p>
        <div className="team-divider"></div>
      </div>

      <div className="team-grid">

        <div className="team-card">
          <img src="/Udbhav Agarwal.jpeg" alt="Udbhav Agarwal" />
          <h3>Udbhav Agarwal</h3>
          <span>Chief Executive Officer</span>
          <p>
            Visionary leader driving commercialization and growth.
          </p>
        </div>

        <div className="team-card">
          <img src="/Daksh Ingle.jpeg" alt="Daksh Ingle" />
          <h3>Daksh Ingle</h3>
          <span>Chief Operating Officer</span>
          <p>
            Industrial optimization expert and operations leader.
          </p>
        </div>

        <div className="team-card">
          <img src="/Dr Annapurna Boruah.jpeg" alt="Dr Annapurna Boruah" />
          <h3>Dr. Annapurna Boruah</h3>
          <span>Strategic Advisor</span>
          <p>
            Lead architect of CarbonDot's capture technology.
          </p>
        </div>

      </div>

<section className="team-quote">
  <h2>
    "The future of industry depends on reducing emissions
    without sacrificing growth."
  </h2>
</section>

</section>
</>
)
}

export default Team