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
        <h1>Our Leadership & Team</h1>
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
          <div className="team-members-grid">

                
      </div>
</div>   {/* <-- CLOSE leadership grid here */}

<div className="member-card">
    <img src="/Satwik Dash.jpeg" alt="Satwik Dash" />
    <h3>Satwik Dash</h3>
    <span>Technical Lead</span>
    <p>Leads the technical team, coordinates development activities, and oversees technical execution across projects.</p>
  </div>

  <div className="member-card">
    <img src="/Sakshi Kumari.jpeg" alt="Sakshi Kumari" />
    <h3>Sakshi Kumari</h3>
    <span>Technology & Creative</span>
    <p>Contributes to website development and leads the creation of posters and visual content for CarbonDot’s social media presence.</p>
  </div>

  <div className="member-card">
    <img src="/Sahil Singh.jpeg" alt="Sahil Singh" />
    <h3>Sahil Singh</h3>
    <span>Technology & Creative</span>
    <p>Contributes to website development while supporting CarbonDot’s visual communication and social media design.</p>
  </div>

  <div className="member-card">
    <img src="/Rishav Kumar.jpeg" alt="Rishav Kumar" />
    <h3>Rishav Kumar</h3>
    <span>3D Design & Visualization</span>
    <p>Creates 3D models and visual assets using Blender to support CarbonDot’s products and technical presentations.</p>
  </div>

  <div className="member-card">
    <img src="/Yashaya Bhola.jpeg" alt="Yashaya Bhola" />
    <h3>Yashaya Bhola</h3>
    <span>Social Media & Marketing</span>
    <p>Drives social media design and contributes to marketing initiatives that strengthen CarbonDot’s digital presence.</p>
  </div>

  <div className="member-card">
<img src="/Ankush Panwar.png" alt="Ankush Panwar" />
    <h3>Ankush Panwar</h3>
    <span>Technology & Media</span>
    <p>Contributes to website development, video editing, and voiceovers for CarbonDot’s digital and promotional content.</p>
  </div>

  <div className="member-card">
    <img src="/Arya Agarwal.jpeg" alt="Arya Agarwal" />
    <h3>Arya Agarwal</h3>
    <span>3D Design & Visualization</span>
    <p>Works on 3D modeling and visualization using Blender to develop engaging technical and visual assets for CarbonDot.</p>
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