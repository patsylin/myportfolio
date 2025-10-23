import React, { useEffect } from "react";

/**
 * Patsy Lin — Whimsical Graffiti Design Kit v1
 * -------------------------------------------------
 * 1) Visual foundation: color tokens, fonts, and sample components
 * 2) Motion foundation: floating graffiti background + scribble reveal
 * 3) Mascot concept: simple, cute blob with blinking animation
 */

export default function DesignKit() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="kit-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Gloria+Hallelujah&family=Nunito:wght@400;700;900&display=swap');

        :root {
          --ink: #181826;
          --bg: #fffefb;
          --bubblegum: #FF9CCF;
          --lavender: #CBB2FF;
          --lemon: #FFF8B8;
          --mint: #9CFFE0;
          --cloud: #F9F9F9;
          --accent: #8AE7FF;
        }

        * { box-sizing: border-box; }
        body, html, #root { height: 100%; }
        .kit-root {
          font-family: 'Nunito', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial;
          background: var(--bg);
          color: var(--ink);
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        .wrap { width: min(1100px, 92vw); margin: 0 auto; padding: 48px 0 96px; position: relative; }

        .graffiti-layer { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
        .graffiti-layer svg { position: absolute; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.12)); opacity: 0.85; }
        .float-slow { animation: float 18s ease-in-out infinite; }
        .float-med  { animation: float 14s ease-in-out infinite; }
        .float-fast { animation: float 10s ease-in-out infinite; }
        @keyframes float {
          0%   { transform: translateY(0) rotate(0deg); }
          50%  { transform: translateY(-18px) rotate(2deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        .cursor-sparkle::after {
          content: '';
          position: fixed;
          left: var(--mx);
          top: var(--my);
          width: 10px; height: 10px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--mint), transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          filter: blur(1px);
          animation: sparkleFade 600ms ease-out;
        }
        @keyframes sparkleFade { from { opacity: .8; } to { opacity: 0; transform: translate(-50%, -50%) scale(1.8); } }

        .hero { position: relative; z-index: 1; padding: 48px 20px 16px; text-align: center; }
        .tag { display: inline-block; padding: 8px 14px; border-radius: 999px; background: var(--lemon); font-weight: 700; }
        .title {
          font-family: 'Caveat Brush', system-ui;
          font-size: clamp(40px, 7vw, 84px);
          line-height: 1.05;
          margin: 12px auto 6px;
          text-shadow: 0 2px 0 rgba(255,255,255,0.7), 0 6px 18px rgba(24,24,38,0.08);
          position: relative;
        }
        .scribble {
          width: clamp(220px, 52vw, 520px);
          height: 18px;
          margin: 8px auto 0;
          display: block;
        }
        .scribble path {
          stroke-dasharray: 560;
          stroke-dashoffset: 560;
          animation: draw 1.8s ease 400ms forwards;
        }
        @keyframes draw { to { stroke-dashoffset: 0; } }

        .lead { font-family: 'Gloria Hallelujah', system-ui; font-size: clamp(18px, 2.3vw, 26px); opacity: 0.95; }

        .section { z-index: 1; position: relative; padding: 40px 20px; }
        .section h2 { font-family: 'Caveat Brush'; font-size: 36px; margin: 0 0 16px; }
        .swatches { display: grid; grid-template-columns: repeat(auto-fit,minmax(160px,1fr)); gap: 14px; }
        .swatch { border-radius: 18px; padding: 14px; border: 2px dashed rgba(24,24,38,0.1); background: white; }
        .tone { height: 74px; border-radius: 12px; box-shadow: inset 0 0 0 2px rgba(24,24,38,0.08); }
        .meta { margin-top: 10px; font-size: 13px; display: flex; justify-content: space-between; font-weight: 700; }

        .typo-card { border-radius: 18px; background: white; padding: 18px; border: 1px solid rgba(24,24,38,0.08); box-shadow: 0 8px 24px rgba(24,24,38,0.06); }
        .typo-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: 16px; }
        .display { font-family: 'Caveat Brush'; font-size: 42px; }
        .accent  { font-family: 'Gloria Hallelujah'; font-size: 22px; }
        .body    { font-family: 'Nunito'; font-size: 16px; line-height: 1.7; }

        .bubbles { display: grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap: 18px; }
        .bubble {
          position: relative;
          border-radius: 28px 46px 38px 36px / 42px 32px 48px 36px;
          padding: 18px 18px 18px 22px;
          background: linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.85));
          border: 2px solid rgba(24,24,38,0.08);
          box-shadow: 0 10px 32px rgba(24,24,38,0.08);
          overflow: hidden;
        }
        .bubble::before {
          content: '';
          position: absolute; left: -20px; top: -20px; right: 40%; height: 64px;
          background: linear-gradient(90deg, var(--bubblegum), var(--lavender));
          transform: rotate(-3deg);
          filter: blur(0.2px) saturate(110%);
          border-radius: 24px;
          opacity: .95;
        }
        .bubble h3 { margin-top: 28px; margin-bottom: 6px; font-family: 'Caveat Brush'; font-size: 28px; }
        .bubble p { margin: 0 0 10px; }
        .pill { display: inline-block; padding: 6px 10px; border-radius: 999px; background: var(--mint); font-weight: 800; font-size: 12px; }

        .mascot-wrap { display: grid; grid-template-columns: 300px 1fr; gap: 20px; align-items: center; }
        .mascot { width: 100%; filter: drop-shadow(0 10px 20px rgba(24,24,38,0.12)); }
        .blink { transform-origin: center; animation: blink 4.5s infinite; }
        @keyframes blink {
          0%, 7%, 100% { transform: scaleY(1); }
          3%, 5% { transform: scaleY(0.05); }
        }

        .small { font-size: 12px; opacity: 0.7; }
      `}</style>

      <div className="graffiti-layer cursor-sparkle" aria-hidden>
        <svg className="float-slow" width="140" height="140" style={{ left: '6%', top: '10%' }} viewBox="0 0 100 100" fill="none">
          <g>
            <path d="M50 8 L58 34 L86 34 L62 50 L70 78 L50 60 L30 78 L38 50 L14 34 L42 34 Z" fill="#FF9CCF" opacity="0.9"/>
          </g>
        </svg>
        <svg className="float-med" width="200" height="200" style={{ right: '8%', top: '22%' }} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="34" fill="#CBB2FF" />
          <circle cx="70" cy="30" r="10" fill="#FFF8B8" />
        </svg>
        <svg className="float-fast" width="180" height="160" style={{ left: '12%', bottom: '12%' }} viewBox="0 0 200 160" fill="none">
          <path d="M10 80 C30 10, 170 10, 190 80 S170 150, 100 140  -10 150, 10 80 Z" fill="#9CFFE0"/>
        </svg>
        <svg className="float-med" width="160" height="120" style={{ right: '10%', bottom: '10%' }} viewBox="0 0 160 120" fill="none">
          <path d="M8 60 Q40 10 80 60 T152 60" stroke="#8AE7FF" strokeWidth="12" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="wrap">
        <header className="hero">
          <span className="tag">Whimsical • Playful • Human</span>
          <h1 className="title">Patsy Lin — Joyful Web Things</h1>
          <svg className="scribble" viewBox="0 0 560 18" fill="none">
            <path d="M2 14 Q 100 2, 200 10 T 360 8 T 560 14" stroke="url(#g)" strokeWidth="6" strokeLinecap="round"/>
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#FF9CCF"/>
                <stop offset="100%" stopColor="#CBB2FF"/>
              </linearGradient>
            </defs>
          </svg>
          <p className="lead">I build small apps with big heart — colourful, accessible, a little bit magical.</p>
        </header>

        <section className="section">
          <h2>1) Color Palette</h2>
          <div className="swatches">
            {[
              { name: 'Bubblegum Pink', hex: '#FF9CCF' },
              { name: 'Sky Lavender', hex: '#CBB2FF' },
              { name: 'Lemon Cream', hex: '#FFF8B8' },
              { name: 'Mint Glow', hex: '#9CFFE0' },
              { name: 'Soft Sky', hex: '#8AE7FF' },
              { name: 'Midnight Ink', hex: '#181826' },
            ].map((s) => (
              <div className="swatch" key={s.hex}>
                <div className="tone" style={{ background: s.hex }} />
                <div className="meta"><span>{s.name}</span><code>{s.hex}</code></div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Typography</h2>
          <div className="typo-grid">
            <div className="typo-card">
              <div className="display">Display: Caveat Brush</div>
              <p className="body">Use for big headlines and graffiti-style words.</p>
            </div>
            <div className="typo-card">
              <div className="accent">Accent: Gloria Hallelujah</div>
              <p className="body">Use for playful subheads, callouts, stickers.</p>
            </div>
            <div className="typo-card">
              <div className="body"><b>Body: Nunito</b> — Friendly, highly readable. Great for paragraphs and UI text.</div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>2) Motion & Non‑Boxy Project Bubbles</h2>
          <div className="bubbles">
            <article className="bubble">
              <span className="pill">Project</span>
              <h3>Strangers Things</h3>
              <p>Craigslist‑inspired marketplace with modern UX. React, Vite, custom API.</p>
            </article>
            <article className="bubble">
              <span className="pill" style={{ background: 'var(--lemon)' }}>Project</span>
              <h3>Twinstagram</h3>
              <p>Simple, cute photo‑sharing clone with dynamic image pools and captions.</p>
            </article>
            <article className="bubble">
              <span className="pill" style={{ background: 'var(--lavender)', color: 'white' }}>Project</span>
              <h3>TeacherTime (WIP)</h3>
              <p>K‑8 teacher scheduling & sub matching tool. Postgres + Express.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>3) Mascot Concept — "Pip" the Helpful Blob</h2>
          <div className="mascot-wrap">
            <svg className="mascot" viewBox="0 0 300 240" fill="none">
              <defs>
                <radialGradient id="grad" cx="50%" cy="45%" r="70%">
                  <stop offset="0%" stopColor="#FFB8E4"/>
                  <stop offset="100%" stopColor="#FF9CCF"/>
                </radialGradient>
              </defs>
              <path d="M40 140 C 20 80, 90 30, 150 40 C 210 50, 270 90, 250 150 C 230 210, 120 220, 80 190 C 55 172, 60 170, 40 140 Z" fill="url(#grad)" stroke="#18182620" strokeWidth="2"/>
              <ellipse className="blink" cx="120" cy="120" rx="10" ry="12" fill="#181826"/>
              <ellipse className="blink" cx="180" cy="120" rx="10" ry="12" fill="#181826"/>
              <path d="M120 150 Q150 170 180 150" stroke="#181826" strokeWidth="6" strokeLinecap="round" fill="none"/>
              <g transform="translate(210,80)">
                <circle cx="0" cy="0" r="10" fill="#FFF8B8"/>
                <circle cx="0" cy="0" r="5" fill="#FFFFFF"/>
              </g>
            </svg>
            <div>
              <p className="body"><b>Meet Pip</b> — a simple, friendly blob mascot that can blink, wiggle, and hold tiny signs (like “Hi!” or “New!”). Keep shapes simple so you can redraw or restyle easily. We can generate several poses (waving, typing at a laptop, carrying an envelope for Contact, etc.).</p>
              <p className="body">Brand roles for Pip:</p>
              <ul className="body">
                <li>Guide users (e.g., points to your CTA)</li>
                <li>Add personality (idle animations: blink, bounce, sparkle)</li>
                <li>Appear as tiny stickers around project cards</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Implementation Notes</h2>
          <ol className="body">
            <li><b>Background layer:</b> add/remove SVG elements in <code>.graffiti-layer</code> to change the mural vibe. Each has its own float speed class.</li>
            <li><b>Scribble reveal:</b> duplicate the underline SVG and adjust the path curve; the keyframe <code>draw</code> animates stroke-dashoffset.</li>
            <li><b>Bubbles:</b> replace with your real projects; non-rectangular feel comes from the uneven border-radius and paint-stroke header.</li>
            <li><b>Mascot:</b> tweak the blob path points or gradient colours to explore styles; eyes share the <code>blink</code> keyframe.</li>
          </ol>
          <p className="small">v1 — We can expand with: parallax layers, hover sparkles, audio blips on click (accessible), and a doodle drawer that lets you place stickers live.</p>
        </section>
      </div>
    </div>
  );
}
