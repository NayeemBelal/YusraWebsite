import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">YUSRA INSTITUTE</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#mission">Mission</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="cta-button">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Business with
              <span className="gradient-text"> AI Automation</span>
            </h1>
            <p className="hero-subtitle">
              We design and implement cutting-edge AI solutions that streamline operations, 
              reduce costs, and accelerate growth for forward-thinking businesses.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="primary-button">Start Your Journey</a>
              <a href="#projects" className="secondary-button">View Our Work</a>
            </div>
          </div>
          <div className="hero-decoration">
            <div className="floating-card card-1">
              <div className="icon">🤖</div>
              <div className="card-text">AI Automation</div>
            </div>
            <div className="floating-card card-2">
              <div className="icon">⚡</div>
              <div className="card-text">Lightning Fast</div>
            </div>
            <div className="floating-card card-3">
              <div className="icon">🎯</div>
              <div className="card-text">Results Driven</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Do</h2>
            <div className="title-underline"></div>
          </div>
          <div className="about-content">
            <div className="about-card">
              <div className="card-icon">🚀</div>
              <h3>AI Automation Agency</h3>
              <p>
                At YUSRA INSTITUTE, we specialize in developing intelligent automation solutions 
                that revolutionize how businesses operate. Our expert team combines deep AI knowledge 
                with practical business acumen to deliver systems that actually work.
              </p>
            </div>
            <div className="about-card">
              <div className="card-icon">💡</div>
              <h3>Custom Solutions</h3>
              <p>
                Every business is unique. We don't believe in one-size-fits-all solutions. 
                Our approach involves understanding your specific challenges and crafting 
                AI automations tailored to your exact needs.
              </p>
            </div>
            <div className="about-card">
              <div className="card-icon">📈</div>
              <h3>Proven Results</h3>
              <p>
                Our clients experience measurable improvements in efficiency, cost reduction, 
                and customer satisfaction. We focus on delivering tangible ROI through intelligent 
                automation strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">Our Mission</h2>
              <div className="title-underline"></div>
              <p className="mission-description">
                To empower businesses of all sizes with accessible, innovative AI automation 
                solutions that drive real transformation. We believe that cutting-edge technology 
                should be within reach for every organization seeking to enhance efficiency, 
                improve customer experiences, and unlock new growth opportunities.
              </p>
              <p className="mission-description">
                We're committed to demystifying AI and making it practical, reliable, and 
                profitable for our clients. Through collaboration, innovation, and unwavering 
                dedication to excellence, we aim to be the catalyst that propels businesses 
                into the future of intelligent automation.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3x</div>
                <div className="stat-label">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Discover how we've helped businesses transform their operations with AI
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🧹</div>
              <h3 className="project-title">Commercial Cleaning Automation</h3>
              <p className="project-description">
                Revolutionized scheduling and dispatch operations for a multi-location 
                commercial cleaning company. Our AI system automatically assigns jobs, 
                optimizes routes, and manages client communications, reducing operational 
                overhead by 60% while improving service quality.
              </p>
              <div className="project-tags">
                <span className="tag">AI Scheduling</span>
                <span className="tag">Route Optimization</span>
                <span className="tag">Automated Dispatch</span>
              </div>
              <div className="project-results">
                <div className="result-item">
                  <span className="result-value">60%</span>
                  <span className="result-label">Cost Reduction</span>
                </div>
                <div className="result-item">
                  <span className="result-value">3x</span>
                  <span className="result-label">Faster Scheduling</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-icon">🍽️</div>
              <h3 className="project-title">Restaurant AI Chatbot</h3>
              <p className="project-description">
                Developed an intelligent text-to-order system for restaurant chains that 
                handles customer orders via SMS and messaging apps. The AI understands 
                natural language, manages menu customizations, processes payments, and 
                integrates seamlessly with kitchen management systems.
              </p>
              <div className="project-tags">
                <span className="tag">NLP</span>
                <span className="tag">Payment Integration</span>
                <span className="tag">24/7 Ordering</span>
              </div>
              <div className="project-results">
                <div className="result-item">
                  <span className="result-value">40%</span>
                  <span className="result-label">More Orders</span>
                </div>
                <div className="result-item">
                  <span className="result-value">95%</span>
                  <span className="result-label">Accuracy Rate</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-icon">💼</div>
              <h3 className="project-title">Your Project Next?</h3>
              <p className="project-description">
                We're always looking for new challenges and opportunities to create 
                innovative AI automation solutions. Whether you're in retail, healthcare, 
                logistics, or any other industry, we can help you harness the power of AI 
                to transform your business.
              </p>
              <a href="#contact" className="project-cta">Let's Talk</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Ready to Automate?</h2>
            <div className="title-underline"></div>
            <p className="contact-subtitle">
              Let's discuss how AI automation can transform your business. 
              Get in touch to schedule a free consultation.
            </p>
            <div className="contact-methods">
              <a href="tel:+1234567890" className="contact-card">
                <div className="contact-icon">📞</div>
                <div className="contact-label">Call Us</div>
                <div className="contact-value">+1 (203) 300-7233</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">YUSRA INSTITUTE</div>
            <p className="footer-text">
              Empowering businesses through intelligent automation
            </p>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#mission">Mission</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <p className="copyright">
              © 2025 YUSRA INSTITUTE LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

