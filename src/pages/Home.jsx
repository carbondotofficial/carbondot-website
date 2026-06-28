import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { supabase } from "../src/supabase";
function Home() {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    role: "",
    industry: "",
    inquiry_type: "",
    message: "",
  });

   const [success, setSuccess] = useState(false);
   
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("inquiries")
      .insert([formData]);

    if (error) {
  console.error(error);
  alert("Error submitting inquiry");
} else {
  setSuccess(true);

  setFormData({
    full_name: "",
    email: "",
    company: "",
    role: "",
    industry: "",
    inquiry_type: "",
    message: "",
  });
}
  };

  return (
    
    <>
      <div>
 
      {/* ── NAVBAR ── */}
      <header className="navbar">
        <div className="logo">
          <img src="/logo-png.png" alt="CarbonDot Logo" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#technology">Our Technology</a>
          <Link to="/team">Our Team</Link>
          <a href="#contact">Contact Us</a>
        </nav>
       <div className="nav-buttons">
  <a href="#investors" className="partner-btn">
    Partner with us
  </a>
</div>
      </header>
 
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <div className="tag">
            <span className="tag-dot"></span>
            WATER-BASED CARBON CAPTURE
          </div>
          <h1 className="hero-title">
  CARBON CAPTURE FOR A
  <br />
  <span>NET-ZERO WORLD</span>
</h1>

<p className="hero-subtitle">
   "The future of industry depends on reducing emissions
  without sacrificing growth."
</p>
          <div className="hero-buttons">
            <a href="#technology" className="partner-btn">
    Explore WBCC Technology
  </a>
            <a href="#contact" className="deck-btn hero-deck-btn">
    Contact Us
  </a>
          </div>
        </div>
 
        <div className="hero-right">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/hero-video.mp4.mp4" type="video/mp4" />
          </video>
        </div>
 
        <div className="hero-stat-pill">
          <span className="pill-number">85%</span>
          <span className="pill-label">CO&#8322; Capture Rate</span>
        </div>
      </section>
 
      {/* ── BENEFITS ── */}
      <section className="benefits">
        <div className="benefits-header">
          <span className="eyebrow">WHY CARBONDOT</span>
          <h2>Built for industrial reality</h2>
          <p>
            Four engineering principles that make decarbonization
            economically credible not just technically possible.
          </p>
        </div>
 
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-top-bar"></div>
            <h3>85%</h3>
            <h4>High Efficiency</h4>
            <p>Best-in-class capture efficiency across industrial emission streams.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-top-bar"></div>
            <h3>&#8722;60%</h3>
            <h4>Lower CAPEX</h4>
            <p>Water-based chemistry reduces equipment cost and operating footprint.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-top-bar"></div>
            <h3>Retrofit</h3>
            <h4>Easy Retrofit</h4>
            <p>Designed to fit existing industrial facilities with minimal downtime.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-top-bar"></div>
            <h3>Scale</h3>
            <h4>Scalable Deployment</h4>
            <p>Engineered for pilot projects and fleet-wide industrial rollouts.</p>
          </div>
        </div>
      </section>
 
      {/* ── PROCESS ── */}
      <section className="process-section">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="process-video"
  >
    <source src="./how-it-works-video.mp4.mp4" type="video/mp4" />
  </video>

  <div className="process-overlay"></div>

  <div className="process">
        <div className="process-top">
          <div className="process-title">
            <span className="eyebrow">HOW IT WORKS</span>
            <h2>
  Capture <span className="process-arrow">&bull;</span>
Convert <span className="process-arrow">&bull;</span>
Utilize
</h2>
          </div>
        
        </div>
 
        <div className="process-grid">
          <div className="process-card">
            <div className="step-badge">01</div>
            <h3>Capture</h3>
            <p>
              Capture CO₂ from industrial emissions.
            </p>
            <div className="process-tags">
              <span>Absorber columns</span>
              <span>Aqueous chemistry</span>
            </div>
          </div>
          <div className="process-card">
            <div className="step-badge">02</div>
            <h3>Convert</h3>
            <p>
              Prepare CO₂ for utilization or storage.
            </p>
            <div className="process-tags">
              <span>Regeneration</span>
              <span>Downstream-ready</span>
            </div>
          </div>
          <div className="process-card">
            <div className="step-badge">03</div>
            <h3>Utilize</h3>
            <p>
              Convert captured carbon into value.
            </p>
            <div className="process-tags">
              <span>Carbon feedstock</span>
              <span>Value creation</span>
            </div>
          </div>
        </div>
        </div>
      </section>
 
      {/* ── INDUSTRIES ── */}
      <section className="industries">
        <div className="industries-header">
          <span className="eyebrow">INDUSTRIES SERVED</span>
          <h2>Designed for hard-to-abate sectors</h2>
          <p>From heavy industry to public infrastructure we deploy where the tonnes are.</p>
        </div>
 
        <div className="industries-grid-top">
          <div className="industry-card large">
            <img src="/steel.png" alt="Steel Industry" className="industry-image" />
            <div className="industry-content">
              <h3>Steel</h3>
              <p>Decarbonize blast furnace and DRI emissions with retrofit capture units.</p>
            </div>
          </div>
          <div className="industry-card large">
            <img src="/Cement.png" alt="Cement Industry" className="industry-image" />
            <div className="industry-content">
              <h3>Cement</h3>
              <p>Tackle process emissions from clinker production.</p>
            </div>
          </div>
        </div>
 
        <div className="industries-grid-bottom">
          <div className="industry-card large">
            <img src="/Thermal Power.webp" alt="Thermal Power" className="industry-image" />
            <div className="industry-content">
              <h3>Thermal Power</h3>
              <p>Capture CO&#8322; from coal and gas plants while maintaining grid reliability.</p>
            </div>
          </div>
          <div className="industry-card large">
            <img src="/oil and gas.webp" alt="Oil & Gas" className="industry-image" />
            <div className="industry-content">
              <h3>Oil &amp; Gas</h3>
              <p>Upstream and refining emissions converted into utilization feedstocks.</p>
            </div>
          </div>
          <div className="industry-card large">
            <img src="/public sector.jpg" alt="Public Sector" className="industry-image" />
            <div className="industry-content">
              <h3>Public Sector</h3>
              <p>Partner with municipalities and PSUs on national-scale decarbonization.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* ── TECHNOLOGY ── */}
      <section id="technology" className="technology">
        <div className="technology-left">
          <span className="tech-label eyebrow">OUR TECHNOLOGY</span>
          <h2>
            Water-Based Carbon
            <br />
            Capture <span>(WBCC)</span>
          </h2>
          <p>
           Water-based carbon capture with lower energy and operating costs.
          </p>
          <div className="tech-features">
            <div className="tech-card">
              
              <h3>Water as the solvent</h3>
              <p>Replaces hazardous amines with engineered aqueous chemistry.</p>
            </div>
            <div className="tech-card">
              
              <h3>Low energy penalty</h3>
              <p>Regeneration runs at a fraction of conventional systems.</p>
            </div>
            <div className="tech-card">
             
              <h3>Inherently safe</h3>
              <p>No volatile emissions or degradation byproducts.</p>
            </div>
            <div className="tech-card">
             
              <h3>Tunable purity</h3>
              <p>Output CO&#8322; conditioned for utilization or storage.</p>
            </div>
          </div>
        </div>
 
        <div className="technology-right">
          <video
  className="technology-image"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/3d model.mp4 " type="video/mp4" />
</video>
          <div className="capture-rate">
            <span>CAPTURE RATE</span>
            <h3>85%</h3>
          </div>
          <div className="energy-penalty">
            <span>ENERGY PENALTY</span>
            <h3>&#8595;35%</h3>
          </div>
        </div>
      </section>
 
      {/* ── INVESTORS ── */}
      <section id="investors" className="investors">
        <div className="investors-left">
          <img src="/Solar.webp" alt="Investors" className="investors-image" />
          <div className="capital-card">
            <span>DEPLOYMENT READY</span>
            <h3>Series A<br />open for capital</h3>
          </div>
        </div>
 
        <div className="investors-right">
          <span className="investors-label eyebrow">INVESTORS &amp; PARTNERS</span>
          <h2>A generational opportunity in industrial decarbonization</h2>
          <p>
            Positioned to lead the next wave of industrial carbon capture deployment.
          </p>
          <div className="investor-stats">
           <div className="stat-card">
  <span className="market-tag">TAM</span>
  <h3>$15–20B</h3>
  <p>Total Addressable Market</p>
</div>

<div className="stat-card">
  <span className="market-tag">SAM</span>
  <h3>$5–7B</h3>
  <p>Serviceable Available Market</p>
</div>

<div className="stat-card">
  <span className="market-tag">SOM</span>
  <h3>$200–300M</h3>
  <p>Serviceable Obtainable Market</p>
</div>
          </div>
          <div className="investor-buttons">
  <a
    href="/CarbonDot_Pitch Deck.pdf "
    target="_blank"
    rel="noopener noreferrer"
    className="partner-btn"
  >
    Get Investor Deck
  </a>

</div>
        </div>
      </section>

    <section className="ip-section">
  <div className="ip-left">
    <h2>Intellectual Property</h2>

    <p>
      CarbonDot's WBCC system is supported by proprietary process
      innovations and protected technical know-how.
    </p>

    <ul className="ip-list">
      <li>Proprietary solvent regeneration loop</li>
      <li>Capture-rate optimization algorithms</li>
      <li>Regional patent protection strategy</li>
    </ul>

    <a href="#contact" className="partner-btn">
  Request Technical Whitepaper
</a>
  </div>

  <div className="ip-card">
   <div className="ip-icon">
  <img src="/publicshield.png.png" alt="Patent Shield" />
</div>

    <h3>Patent Portfolio</h3>

    <p>
      CarbonDot continues to develop and protect innovations across
      industrial carbon capture and utilization technologies.
    </p>
  </div>
</section>
 
      {/* ── CONTACT ── */}
      <section id="contact" className="contact-section">
        <div className="contact-left">
          <span className="contact-label eyebrow">GET IN TOUCH</span>
          <h2>
            Let's decarbonize
            <br />
            together
          </h2>
          <p>
            Whether you're an industrial buyer evaluating capture technology,
            an investor exploring climate infrastructure, or a public-sector
            partner — we'd love to hear from you.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">&#9993;</div>
              <div>
                <span>EMAIL</span>
                <h4>carbondotpvtltd@gmail.com</h4>
              </div>
            </div>
          
            <div className="contact-item">
              <div className="contact-icon">&#8982;</div>
              <div>
                <span>HEADQUARTERS</span>
                <h4>Dehradun, India</h4>
              </div>
            </div>
          </div>
        </div>
 
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full name *</label>
                <input
  type="text"
  name="full_name"
  value={formData.full_name}
  onChange={handleChange}
  placeholder="Jane Doe"
/>
              </div>
              <div className="form-group">
                <label>Work email *</label>
                <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="jane@company.com"
/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Company *</label>
                <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Acme Industries"
/>
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
  type="text"
  name="role"
  value={formData.role}
  onChange={handleChange}
  placeholder="Sustainability Director"
/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Industry</label>
                <select
  name="industry"
  value={formData.industry}
  onChange={handleChange}
>
                  <option value="">Select industry</option>
<option value="Steel">Steel</option>
<option value="Cement">Cement</option>
<option value="Oil & Gas">Oil & Gas</option>
<option value="Thermal Power">Thermal Power</option>
                </select>
              </div>
              <div className="form-group">
                <label>Inquiry type</label>
                <select
  name="inquiry_type"
  value={formData.inquiry_type}
  onChange={handleChange}
>
                  <option value="Partnership">Partnership</option>
<option value="Investment">Investment</option>
<option value="Technology">Technology</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>How can we help? *</label>
              <textarea
  rows="6"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Tell us about your facility, emissions profile, or partnership interest."
></textarea>
            </div>
            {success && (
  <div className="success-message">
    ✓ Inquiry sent successfully!
  </div>
)}
            <div className="form-footer">
              <p>By submitting this form you agree to be contacted by the CarbonDot team.</p>
              <button type="submit" className="partner-btn">Send inquiry</button>
            </div>
          </form>
        </div>
      </section>
 
      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo-png.png" alt="CarbonDot" className="footer-logo" />
            <p>Industrial carbon capture — made practical.</p>
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#technology">Our Technology</a>
          <Link to="/team">Our Team</Link>
            <a href="#contact">Contact Us</a>
          </div>
          <p className="footer-copy">&#169; 2026 CarbonDot. All rights reserved.</p>
        </div>
      </footer>
 
    </div>
    </>
  )
}

export default Home