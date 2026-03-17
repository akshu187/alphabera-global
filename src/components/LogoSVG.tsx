export default function LogoSVG() {
  return (
    <svg
      viewBox="0 0 300 300"
      width="200"
      height="200"
      className="absolute -z-10 opacity-30"
    >
      {/* Background Circle */}
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B4455" />
          <stop offset="100%" stopColor="#3D1F2A" />
        </radialGradient>
      </defs>

      {/* Main Circle Background */}
      <circle cx="150" cy="150" r="140" fill="url(#bgGradient)" />

      {/* Top Lines */}
      <line x1="80" y1="80" x2="220" y2="80" stroke="#D4AF37" strokeWidth="2" />

      {/* Mountain/Triangle Top */}
      <path
        d="M 150 60 L 120 100 L 180 100 Z"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2.5"
      />
      <path
        d="M 150 70 L 135 95 L 165 95 Z"
        fill="none"
        stroke="#E8D5B7"
        strokeWidth="1.5"
      />

      {/* Top decorative lines */}
      <line x1="100" y1="115" x2="130" y2="115" stroke="#D4AF37" strokeWidth="1.5" />
      <line x1="170" y1="115" x2="200" y2="115" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Main Text: ALPHABERA */}
      <text
        x="150"
        y="145"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
        letterSpacing="3"
      >
        ALPHABERA
      </text>

      {/* GLOBAL Text */}
      <text
        x="150"
        y="170"
        textAnchor="middle"
        fontSize="14"
        fill="#E8D5B7"
        fontFamily="Arial, sans-serif"
        letterSpacing="2"
      >
        GLOBAL
      </text>

      {/* Bottom decorative lines */}
      <line x1="100" y1="185" x2="130" y2="185" stroke="#D4AF37" strokeWidth="1.5" />
      <line x1="170" y1="185" x2="200" y2="185" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Infinity symbol */}
      <path
        d="M 120 210 Q 135 200 150 210 Q 165 220 180 210"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
      />
      <path
        d="M 130 210 Q 140 205 150 210 Q 160 215 170 210"
        fill="none"
        stroke="#E8D5B7"
        strokeWidth="1"
      />

      {/* Bottom Lines */}
      <line x1="80" y1="230" x2="220" y2="230" stroke="#D4AF37" strokeWidth="2" />
    </svg>
  );
}
