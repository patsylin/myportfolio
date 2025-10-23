import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
      <h2>About Me</h2>
      <div
        style={{
          background: "white",
          borderRadius: "28px",
          border: "2px dashed rgba(24,24,38,0.12)",
          padding: "18px 20px",
          boxShadow: "0 10px 32px rgba(24,24,38,0.06)",
        }}
      >
        <p className="body" style={{ margin: 0 }}>
          Hi! I’m <b>Patsy Lin</b> — a people-person who loves to code. I build
          joyful, accessible web apps with playful UI and clean, readable code.
          Recent projects include a Craigslist-style marketplace and a tiny
          Instagram-like photo app. I’m currently looking for my first role in
          web dev or a customer-facing sales role at a dev-tools company.
        </p>
      </div>
    </section>
  );
}
