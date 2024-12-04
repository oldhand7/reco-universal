import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Contact Us</h1>
      <p style={{ fontSize: '1.5em', marginBottom: '10px' }}>
        <strong>Name:</strong>Jarek Czerwinski
        
      </p>
      <p style={{ fontSize: '1.5em', marginBottom: '20px' }}>
        <strong>Email:</strong>{' '}
        <a href="mailto:jarekczerwinski.motive@outlook.com" style={{ color: '#007BFF', textDecoration: 'none' }}>
        jarekczerwinski.motive@outlook.com
        </a>
      </p>

      <div style={{ margin: '30px auto', maxWidth: '500px', textAlign: 'left' }}>
        <h2 style={{ fontSize: '1.8em', marginBottom: '20px' }}>Send Us a Message</h2>
        <form
          action="https://formsubmit.co/jarekczerwinski.motive@outlook.com"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
        >
          {/* FormSubmit uses hidden inputs to process messages */}
          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{
              padding: '10px',
              fontSize: '1em',
              border: '1px solid #ddd',
              borderRadius: '5px',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={{
              padding: '10px',
              fontSize: '1em',
              border: '1px solid #ddd',
              borderRadius: '5px',
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            style={{
              padding: '10px',
              fontSize: '1em',
              border: '1px solid #ddd',
              borderRadius: '5px',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: '1em',
              color: '#fff',
              backgroundColor: '#007BFF',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      <p style={{ marginTop: '40px' }}>
        <Link href="/">
          <a style={{ color: '#007BFF', textDecoration: 'none' }}>Back to Home</a>
        </Link>
      </p>
    </div>
  );
};

export default ContactPage;
