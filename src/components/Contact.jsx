import React from "react";
import Pip from "./Pip";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "180px 1fr 120px",
          gap: 16,
          alignItems: "center",
        }}
      >
        {/* cute envelope */}
        <svg
          width="180"
          height="140"
          viewBox="0 0 180 140"
          fill="none"
          style={{ filter: "drop-shadow(0 8px 16px rgba(24,24,38,.12))" }}
        >
          <defs>
            <linearGradient id="env" x1="0" x2="1">
              <stop offset="0%" stopColor="#FF9CCF" />
              <stop offset="100%" stopColor="#CBB2FF" />
            </linearGradient>
          </defs>
          <rect
            x="14"
            y="26"
            width="152"
            height="96"
            rx="14"
            fill="white"
            stroke="rgba(24,24,38,.15)"
            strokeWidth="3"
          />
          <path
            d="M22 36 L90 86 L158 36"
            stroke="url(#env)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* sparkle */}
          <circle cx="142" cy="26" r="8" fill="#FFF8B8">
            <animate
              attributeName="r"
              values="8;10;8"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        {/* text and links */}
        <div className="body">
          <p style={{ marginTop: 0 }}>
            Got a role, project, or idea? I’d love to chat.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="pill" href="mailto:pohutchison@gmail.com">
              Email me
            </a>
            <a
              className="pill"
              href="https://github.com/patsylin"
              target="_blank"
              rel="noreferrer"
              style={{ background: "var(--lemon)" }}
            >
              GitHub
            </a>
            <a
              className="pill"
              href="https://www.linkedin.com/in/patsy-lin/"
              target="_blank"
              rel="noreferrer"
              style={{ background: "var(--mint)" }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* cute Pip mascot on the right */}
        <Pip size={120} sticker bounce />
      </div>
    </section>
  );
}
