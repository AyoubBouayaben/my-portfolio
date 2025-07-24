import React from "react";
import { contactInfo } from "../../portfolio";  // adjust path if needed

export default function Contact() {
  return (
   <div id="contact" style={{ padding: "2rem", fontFamily: "Segoe UI, sans-serif", color: "#fff" }}>
      <h1>{contactInfo.title}</h1>
      <p style={{ maxWidth: "600px" }}>
        {contactInfo.subtitle}
      </p>

      <form
        action={contactInfo.formLink}
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          gap: "1rem",
        }}
      >
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            required
            style={{
              width: "100%",
              padding: "0.6rem",
              fontSize: "2rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          Your Email:
          <input
            type="email"
            name="_replyto"
            required
            style={{
              width: "100%",
              padding: "0.6rem",
              fontSize: "2rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <label>
          Your Message:
          <textarea
            name="message"
            rows="5"
            required
            style={{
              width: "100%",
              padding: "0.6rem",
              fontSize: "1.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            fontSize: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
