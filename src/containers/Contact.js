import React from "react";

export default function Contact() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Contact Me</h1>
      <p>If you’d like to test the flight delay prediction API or ask about my services, feel free to reach out.</p>
      <form action="https://formspree.io/f/mpwlpbda" method="POST">
        <label>Your Name:</label><br />
        <input type="text" name="name" required /><br /><br />
        
        <label>Your Email:</label><br />
        <input type="email" name="_replyto" required /><br /><br />
        
        <label>Your Message:</label><br />
        <textarea name="message" rows="5" required></textarea><br /><br />
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
