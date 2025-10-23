import React from "react";
import { projects } from "../projects";

export default function ProjectList() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="bubbles">
        {projects.map((p) => (
          <article key={p.id} className="bubble">
            <span className="pill">Project</span>
            <h3>{p.title}</h3>
            <p>{p.tagline}</p>
            {p.tech?.length ? (
              <p style={{ opacity: 0.8 }}>{p.tech.join(" • ")}</p>
            ) : null}
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 8,
                flexWrap: "wrap",
              }}
            >
              <a
                className="pill"
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                className="pill"
                href={p.codeUrl}
                target="_blank"
                rel="noreferrer"
                style={{ background: "var(--lavender)", color: "white" }}
              >
                Code
              </a>
            </div>
            {p.img ? (
              <img
                src={p.img}
                alt={`${p.title} screenshot`}
                style={{ width: "100%", borderRadius: 14, marginTop: 12 }}
              />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
