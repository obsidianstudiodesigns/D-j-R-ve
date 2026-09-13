import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withGlow?: boolean;
  animated?: boolean;
}

export const DejaReveLogo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  withGlow = true,
  animated = false,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-28 h-28 sm:w-36 sm:h-36',
    xl: 'w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72',
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      {/* Ambient Gold Glow */}
      {withGlow && (
        <div
          className={`absolute inset-0 rounded-full bg-[#d4af37]/20 blur-xl pointer-events-none ${
            animated ? 'animate-gold-pulse' : ''
          }`}
        />
      )}

      {/* SVG Emblem matching the uploaded brand badge */}
      <svg
        viewBox="0 0 800 800"
        className="w-full h-full relative z-10 select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`goldRingGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bf953f" />
            <stop offset="25%" stopColor="#fcf6ba" />
            <stop offset="50%" stopColor="#b38728" />
            <stop offset="75%" stopColor="#fbf5b7" />
            <stop offset="100%" stopColor="#aa771c" />
          </linearGradient>

          <linearGradient id={`goldScriptGrad-${size}`} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFF8D6" />
            <stop offset="35%" stopColor="#E5BE6C" />
            <stop offset="70%" stopColor="#FCEABB" />
            <stop offset="100%" stopColor="#BF9224" />
          </linearGradient>

          <radialGradient id={`glowRing-${size}`} cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#d4af37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={`innerNoir-${size}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#121212" />
            <stop offset="80%" stopColor="#080808" />
            <stop offset="100%" stopColor="#030303" />
          </radialGradient>

          <filter id={`shineFilter-${size}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Halo Glow Base */}
        <circle cx="400" cy="400" r="340" fill={`url(#glowRing-${size})`} />

        {/* Shimmering Gold Confetti Halo */}
        <g opacity="0.9">
          {/* Scattered golden sparkle particles matching logo.jpeg */}
          <circle cx="210" cy="180" r="3.5" fill="#fcf6ba" opacity="0.85" />
          <circle cx="245" cy="150" r="2" fill="#dfb76c" opacity="0.6" />
          <circle cx="270" cy="130" r="4.5" fill="#fcf6ba" opacity="0.9" />
          <circle cx="310" cy="110" r="2.5" fill="#dfb76c" opacity="0.7" />
          <circle cx="360" cy="95" r="3.8" fill="#fcf6ba" opacity="0.85" />
          <circle cx="400" cy="90" r="2" fill="#aa771c" opacity="0.6" />
          <circle cx="440" cy="95" r="4.2" fill="#fcf6ba" opacity="0.9" />
          <circle cx="490" cy="110" r="2.5" fill="#dfb76c" opacity="0.6" />
          <circle cx="530" cy="130" r="3.2" fill="#fcf6ba" opacity="0.75" />
          <circle cx="570" cy="160" r="4.5" fill="#fcf6ba" opacity="0.95" />
          <circle cx="610" cy="200" r="2" fill="#dfb76c" opacity="0.6" />
          <circle cx="640" cy="250" r="3.5" fill="#fcf6ba" opacity="0.8" />
          <circle cx="660" cy="300" r="2" fill="#aa771c" opacity="0.5" />
          <circle cx="670" cy="350" r="4" fill="#fcf6ba" opacity="0.9" />
          <circle cx="675" cy="400" r="2.5" fill="#dfb76c" opacity="0.65" />
          <circle cx="670" cy="450" r="3.5" fill="#fcf6ba" opacity="0.85" />
          <circle cx="655" cy="500" r="2" fill="#dfb76c" opacity="0.6" />
          <circle cx="630" cy="550" r="4" fill="#fcf6ba" opacity="0.9" />
          <circle cx="600" cy="600" r="3" fill="#fcf6ba" opacity="0.75" />
          <circle cx="560" cy="640" r="2.5" fill="#dfb76c" opacity="0.7" />
          <circle cx="510" cy="670" r="4.5" fill="#fcf6ba" opacity="0.95" />
          <circle cx="460" cy="690" r="2" fill="#aa771c" opacity="0.5" />
          <circle cx="400" cy="700" r="3.5" fill="#fcf6ba" opacity="0.85" />
          <circle cx="340" cy="690" r="2" fill="#dfb76c" opacity="0.6" />
          <circle cx="290" cy="670" r="4" fill="#fcf6ba" opacity="0.9" />
          <circle cx="240" cy="635" r="2.5" fill="#dfb76c" opacity="0.7" />
          <circle cx="200" cy="595" r="3.5" fill="#fcf6ba" opacity="0.8" />
          <circle cx="170" cy="550" r="2" fill="#aa771c" opacity="0.6" />
          <circle cx="145" cy="500" r="4" fill="#fcf6ba" opacity="0.9" />
          <circle cx="130" cy="450" r="2.5" fill="#dfb76c" opacity="0.65" />
          <circle cx="125" cy="400" r="3.5" fill="#fcf6ba" opacity="0.85" />
          <circle cx="135" cy="350" r="2" fill="#aa771c" opacity="0.5" />
          <circle cx="150" cy="300" r="4.5" fill="#fcf6ba" opacity="0.95" />
          <circle cx="175" cy="250" r="2.5" fill="#dfb76c" opacity="0.7" />
          <circle cx="190" cy="210" r="3" fill="#fcf6ba" opacity="0.8" />

          {/* Sparkle crosses */}
          <path d="M 275,135 Q 275,140 280,140 Q 275,140 275,145 Q 275,140 270,140 Q 275,140 275,135 Z" fill="#ffffff" opacity="0.9" />
          <path d="M 525,125 Q 525,131 531,131 Q 525,131 525,137 Q 525,131 519,131 Q 525,131 525,125 Z" fill="#ffffff" opacity="0.9" />
          <path d="M 645,320 Q 645,326 651,326 Q 645,326 645,332 Q 645,326 639,326 Q 645,326 645,320 Z" fill="#ffffff" opacity="0.9" />
          <path d="M 580,590 Q 580,596 586,596 Q 580,596 580,602 Q 580,596 574,596 Q 580,596 580,590 Z" fill="#ffffff" opacity="0.9" />
          <path d="M 220,530 Q 220,536 226,536 Q 220,536 220,542 Q 220,536 214,536 Q 220,536 220,530 Z" fill="#ffffff" opacity="0.9" />
        </g>

        {/* Central Velvet Black Circle */}
        <circle cx="400" cy="400" r="215" fill={`url(#innerNoir-${size})`} />

        {/* Outer and Inner Double Gold Foil Rings */}
        <circle
          cx="400"
          cy="400"
          r="215"
          fill="none"
          stroke={`url(#goldRingGrad-${size})`}
          strokeWidth="7"
        />
        <circle cx="400" cy="400" r="207" fill="none" stroke="#1c160a" strokeWidth="2" />
        <circle
          cx="400"
          cy="400"
          r="202"
          fill="none"
          stroke={`url(#goldRingGrad-${size})`}
          strokeWidth="3.2"
        />

        {/* Delicate Stippled Inner Accent Ring */}
        <circle
          cx="400"
          cy="400"
          r="194"
          fill="none"
          stroke="#e5be6c"
          strokeWidth="0.8"
          strokeDasharray="4, 4"
          opacity="0.35"
        />

        {/* Déjà Rêve Script Text */}
        <text
          x="400"
          y="416"
          textAnchor="middle"
          fontFamily="'Great Vibes', 'Brush Script MT', cursive"
          fontSize="96"
          fontWeight="normal"
          fill={`url(#goldScriptGrad-${size})`}
          filter={`url(#shineFilter-${size})`}
          letterSpacing="1"
        >
          Déjà Rêve
        </text>

        {/* "ONCE A DREAM, NOW REALITY" Subtitle */}
        <text
          x="400"
          y="464"
          textAnchor="middle"
          fontFamily="'Cinzel', serif"
          fontSize="12.5"
          fontWeight="600"
          letterSpacing="5.5"
          fill="#DFB76C"
          opacity="0.94"
        >
          "ONCE A DREAM, NOW REALITY"
        </text>
      </svg>
    </div>
  );
};
