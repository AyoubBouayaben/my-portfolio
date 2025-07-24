import React from "react";

export default function Contact() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Segoe UI, sans-serif", color: "#fff" }}>
      <h1>Contact Me</h1>
      <p style={{ maxWidth: "600px" }}>
        If you’d like to test the flight delay prediction API or ask about my services, feel free to reach out.
      </p>

      <form
        action="https://formspree.io/f/mpwlpbda"
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
              fontSize: "2rem",
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
