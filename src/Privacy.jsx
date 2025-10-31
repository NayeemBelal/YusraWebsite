import React from 'react';
import './LegalPage.css';

function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: October 31, 2025</p>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>
              YUSRA INSTITUTE LLC ("we", "our", or "us") is committed to protecting your privacy. This 
              Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you use our services.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Opt in to receive SMS communications</li>
              <li>Contact us for support or inquiries</li>
              <li>Use our services or website</li>
            </ul>
            <p>
              This information may include your name, phone number, and any other information you choose 
              to provide.
            </p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Send you SMS messages about updates, promotions, and service notifications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. SMS Communications</h2>
            <p>
              When you opt in to receive SMS messages from us, we collect and store your phone number. 
              We will use this number solely to send you the messages you have consented to receive.
            </p>
            <p>
              We do not share your phone number with third parties for their marketing purposes. You can 
              opt out at any time by texting STOP to any message from us.
            </p>
          </section>

          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of SMS communications at any time</li>
            </ul>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>
              We may use third-party service providers (such as Twilio) to facilitate our SMS services. 
              These providers have access to your information only to perform these tasks on our behalf 
              and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              YUSRA INSTITUTE LLC<br />
              Phone: +1 (203) 300-7233
            </p>
          </section>
        </div>

        <div className="legal-footer">
          <a href="/" className="back-link">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default Privacy;

