import React from "react";

/**
 * Pip — a friendly blob mascot with tiny animations.
 * Props:
 *  - size: number (px) — default 300
 *  - waving: boolean — wave an arm
 *  - bounce: boolean — gentle idle bounce
 *  - sticker: boolean — small sticker style (no shadow)
 */
export default function Pip({
  size = 300,
  waving = false,
  bounce = false,
  sticker = false,
}) {
  return (
    <svg
      width={size}
      height={(size * 240) / 300}
      viewBox="0 0 300 240"
      fill="none"
      className={[sticker ? "" : "pip-shadow", bounce ? "pip-bounce" : ""].join(
        " "
      )}
    >
      <defs>
        <radialGradient id="pipGrad" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor="#FFB8E4" />
          <stop offset="100%" stopColor="#FF9CCF" />
        </radialGradient>
      </defs>

      {/* Body */}
      <path
        d="M40 140 C 20 80, 90 30, 150 40 C 210 50, 270 90, 250 150 C 230 210, 120 220, 80 190 C 55 172, 60 170, 40 140 Z"
        fill="url(#pipGrad)"
        stroke="#18182620"
        strokeWidth="2"
      />

      {/* Waving arm (optional) */}
      {waving && (
        <g transform="translate(190,120)">
          <path
            d="M0 0 q 30 -20 46 8"
            stroke="#181826"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            className="pip-wave"
          />
          <circle cx="48" cy="10" r="6" fill="#181826" />
        </g>
      )}

      {/* Eyes (blink) */}
      <ellipse
        className="pip-blink"
        cx="120"
        cy="120"
        rx="10"
        ry="12"
        fill="#181826"
      />
      <ellipse
        className="pip-blink"
        cx="180"
        cy="120"
        rx="10"
        ry="12"
        fill="#181826"
      />

      {/* Smile */}
      <path
        d="M120 150 Q150 170 180 150"
        stroke="#181826"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sparkle */}
      <g transform="translate(210,80)">
        <circle cx="0" cy="0" r="10" fill="#FFF8B8" />
        <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
      </g>

      {/* Inline keyframes via <style> so it works anywhere */}
      <style>{`
        .pip-shadow { filter: drop-shadow(0 10px 20px rgba(24,24,38,0.12)); }
        .pip-blink { transform-origin: center; animation: pipBlink 4.5s infinite; }
        @keyframes pipBlink { 0%, 7%, 100% { transform: scaleY(1); } 3%, 5% { transform: scaleY(0.05); } }
        .pip-bounce { animation: pipBounce 3.2s ease-in-out infinite; }
        @keyframes pipBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .pip-wave { transform-origin: 0 0; animation: pipWave 1.6s ease-in-out infinite; }
        @keyframes pipWave { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-18deg); } }
      `}</style>
    </svg>
  );
}
