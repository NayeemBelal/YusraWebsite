import React, { useState } from 'react';
import './SmsConsent.css';

// Configuration - Update these for your brand
const BRAND_NAME = "YUSRA INSTITUTE";
const WHAT_USERS_RECEIVE = "order confirmations, order status updates, and customer support messages";
const FREQUENCY_TEXT = "Message frequency varies based on order activity";

function SmsConsent() {
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consentId, setConsentId] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [obfuscatedPhone, setObfuscatedPhone] = useState('');

  // Basic phone formatting to E.164-like format (US numbers)
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    
    if (!match) return value;
    
    let formatted = '';
    if (match[1]) formatted = `(${match[1]}`;
    if (match[2]) formatted += `) ${match[2]}`;
    if (match[3]) formatted += `-${match[3]}`;
    
    return formatted;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (errors.phone) {
      setErrors({ ...errors, phone: '' });
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (errors.consent) {
      setErrors({ ...errors, consent: '' });
    }
  };

  const generateConsentId = () => {
    return Array.from({ length: 10 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('').toUpperCase();
  };

  const obfuscatePhone = (phoneStr) => {
    const cleaned = phoneStr.replace(/\D/g, '');
    if (cleaned.length >= 4) {
      const lastFour = cleaned.slice(-4);
      return `+1 •••-•••-${lastFour}`;
    }
    return phoneStr;
  };

  const validateForm = () => {
    const newErrors = {};
    const cleanedPhone = phone.replace(/\D/g, '');

    if (!phone.trim() || cleanedPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!isChecked) {
      newErrors.consent = 'You must agree to receive SMS messages to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Generate consent metadata
      const id = generateConsentId();
      const ts = new Date().toISOString();
      const obfPhone = obfuscatePhone(phone);

      setConsentId(id);
      setTimestamp(ts);
      setObfuscatedPhone(obfPhone);
      setIsSubmitted(true);

      // In production, you would send this data to your backend here
      console.log('Consent captured:', {
        phone: phone.replace(/\D/g, ''),
        consentId: id,
        timestamp: ts,
        brand: BRAND_NAME,
        what: WHAT_USERS_RECEIVE,
        frequency: FREQUENCY_TEXT
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="sms-consent-page">
        <div className="consent-container">
          <header className="consent-header">
            <h1 className="brand-name">{BRAND_NAME}</h1>
            <p className="subtitle">SMS Consent</p>
          </header>

          <div className="consent-card">
            <div className="confirmation-state">
              <div className="check-icon">
                <svg viewBox="0 0 52 52" className="check-svg">
                  <circle className="check-circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="check-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
              
              <h2 className="confirmation-title">Thanks! You're opted in.</h2>
              
              <div className="confirmation-details">
                <p className="phone-echo">
                  <strong>Phone:</strong> {obfuscatedPhone}
                </p>
                
                <div className="consent-metadata">
                  <p><strong>Consent ID:</strong> <code>{consentId}</code></p>
                  <p><strong>Timestamp:</strong> <code>{timestamp}</code></p>
                </div>

                <div className="restatement">
                  <p>
                    You have agreed to receive SMS from <strong>{BRAND_NAME}</strong> about{' '}
                    <strong>{WHAT_USERS_RECEIVE}</strong>. {FREQUENCY_TEXT}. 
                    Msg &amp; data rates may apply.
                  </p>
                  <p>
                    Reply <strong>STOP</strong> to cancel or <strong>HELP</strong> for help at any time.
                  </p>
                </div>
              </div>
            </div>

            <div className="disclosure-block">
              <h3>Disclosure Information</h3>
              <ul>
                <li><strong>Brand:</strong> {BRAND_NAME}</li>
                <li><strong>What you'll receive:</strong> {WHAT_USERS_RECEIVE}</li>
                <li><strong>Frequency:</strong> {FREQUENCY_TEXT}</li>
                <li><strong>Rates:</strong> Msg &amp; data rates may apply</li>
                <li>
                  <strong>Opt-out/Help:</strong> Reply STOP to cancel, HELP for help
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sms-consent-page">
      <div className="consent-container">
        <header className="consent-header">
          <h1 className="brand-name">{BRAND_NAME}</h1>
          <p className="subtitle">SMS Consent</p>
        </header>

        <div className="consent-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className={`form-input ${errors.phone ? 'error' : ''}`}
                placeholder="(555) 555-5555"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={14}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkbox-text">
                  By checking this box, you agree to receive SMS from{' '}
                  <strong>{BRAND_NAME}</strong> at the number provided about{' '}
                  <strong>{WHAT_USERS_RECEIVE}</strong>. Msg &amp; data rates may apply.{' '}
                  {FREQUENCY_TEXT}. Reply <strong>STOP</strong> to cancel,{' '}
                  <strong>HELP</strong> for help. See our{' '}
                  <a href="/terms" className="consent-link">Terms</a> and{' '}
                  <a href="/privacy" className="consent-link">Privacy</a>.
                </span>
              </label>
              {errors.consent && (
                <span className="error-message">{errors.consent}</span>
              )}
            </div>

            <button type="submit" className="submit-button">
              Agree &amp; Continue
            </button>
          </form>

          <div className="disclosure-block">
            <h3>Disclosure Information</h3>
            <ul>
              <li><strong>Brand:</strong> {BRAND_NAME}</li>
              <li><strong>What you'll receive:</strong> {WHAT_USERS_RECEIVE}</li>
              <li><strong>Frequency:</strong> {FREQUENCY_TEXT}</li>
              <li><strong>Rates:</strong> Msg &amp; data rates may apply</li>
              <li>
                <strong>Opt-out/Help:</strong> Reply STOP to cancel, HELP for help
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmsConsent;

