import React from 'react';
import './LegalPage.css';

function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: October 31, 2025</p>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using YUSRA INSTITUTE's services, you accept and agree to be bound by the 
              terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2>2. SMS Communications</h2>
            <p>
              By opting in to receive SMS messages from YUSRA INSTITUTE, you consent to receive text 
              messages at the phone number you provided. Message frequency varies. Message and data rates 
              may apply.
            </p>
            <p>
              You can cancel SMS messages at any time by replying STOP to any message from us. After you 
              send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have 
              been unsubscribed. After this, you will no longer receive SMS messages from us.
            </p>
            <p>
              For help, text HELP to any message from us or contact us at +1 (203) 300-7233.
            </p>
          </section>

          <section>
            <h2>3. Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms. 
              You agree not to use our services in any way that could damage, disable, overburden, or 
              impair our systems.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the 
              exclusive property of YUSRA INSTITUTE LLC and its licensors.
            </p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall YUSRA INSTITUTE LLC, nor its directors, employees, partners, agents, 
              suppliers, or affiliates, be liable for any indirect, incidental, special, consequential 
              or punitive damages.
            </p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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

export default Terms;

