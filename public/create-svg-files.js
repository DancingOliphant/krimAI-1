// This script creates SVG files in the public directory if they don't exist yet
// It's a workaround for the build issue
const fs = require('fs');

const svgContents = {
  'wave-purple.svg': `<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,300 Q300,200 600,300 T1200,300" fill="none" stroke="#8a2be2" stroke-width="5" opacity="0.3">
    <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M0,300 Q300,200 600,300 T1200,300;M0,300 Q300,400 600,300 T1200,300;M0,300 Q300,200 600,300 T1200,300" />
  </path>
  <path d="M0,300 Q300,400 600,300 T1200,300" fill="none" stroke="#9370db" stroke-width="3" opacity="0.5">
    <animate attributeName="d" dur="15s" repeatCount="indefinite" values="M0,300 Q300,400 600,300 T1200,300;M0,300 Q300,200 600,300 T1200,300;M0,300 Q300,400 600,300 T1200,300" />
  </path>
</svg>`,
  'wave-blue.svg': `<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,300 Q300,200 600,300 T1200,300" fill="none" stroke="#00bfff" stroke-width="2" opacity="0.3">
    <animate attributeName="d" dur="30s" repeatCount="indefinite" values="M0,300 Q300,200 600,300 T1200,300;M0,300 Q300,400 600,300 T1200,300;M0,300 Q300,200 600,300 T1200,300" />
  </path>
  <path d="M0,300 Q300,400 600,300 T1200,300" fill="none" stroke="#1e90ff" stroke-width="3" opacity="0.2" stroke-dasharray="5,5">
    <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M0,300 Q300,400 600,300 T1200,300;M0,300 Q300,200 600,300 T1200,300;M0,300 Q300,400 600,300 T1200,300" />
  </path>
</svg>`,
  'spectrum.svg': `<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff4500" />
      <stop offset="25%" stop-color="#ffd700" />
      <stop offset="50%" stop-color="#32cd32" />
      <stop offset="75%" stop-color="#00bfff" />
      <stop offset="100%" stop-color="#8a2be2" />
    </linearGradient>
  </defs>
  
  <g transform="translate(0, 300)">
    <path d="M0,-50 C50,-100, 100,-150, 150,-120, 200,-90, 250,-60, 300,-100, 350,-140, 400,-160, 450,-100, 500,-40, 550,-20, 600,-60, 650,-100, 700,-150, 750,-120, 800,-90, 850,-40, 900,-100, 950,-160, 1000,-120, 1050,-80, 1100,-40, 1150,-90, 1200,-140" stroke="url(#gradient1)" stroke-width="3" fill="none">
      <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
        M0,-50 C50,-100, 100,-150, 150,-120, 200,-90, 250,-60, 300,-100, 350,-140, 400,-160, 450,-100, 500,-40, 550,-20, 600,-60, 650,-100, 700,-150, 750,-120, 800,-90, 850,-40, 900,-100, 950,-160, 1000,-120, 1050,-80, 1100,-40, 1150,-90, 1200,-140;
        M0,-100 C50,-60, 100,-40, 150,-80, 200,-120, 250,-150, 300,-100, 350,-50, 400,-20, 450,-80, 500,-140, 550,-160, 600,-100, 650,-40, 700,-20, 750,-60, 800,-100, 850,-140, 900,-120, 950,-100, 1000,-60, 1050,-20, 1100,-40, 1150,-80, 1200,-120;
        M0,-50 C50,-100, 100,-150, 150,-120, 200,-90, 250,-60, 300,-100, 350,-140, 400,-160, 450,-100, 500,-40, 550,-20, 600,-60, 650,-100, 700,-150, 750,-120, 800,-90, 850,-40, 900,-100, 950,-160, 1000,-120, 1050,-80, 1100,-40, 1150,-90, 1200,-140" />
    </path>
  </g>
</svg>`,
  'circle-pulse.svg': `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <circle cx="400" cy="400" r="150" fill="none" stroke="#00ffff" stroke-width="3" opacity="0.2">
    <animate attributeName="r" dur="10s" values="150;200;150" repeatCount="indefinite" />
    <animate attributeName="opacity" dur="10s" values="0.2;0.6;0.2" repeatCount="indefinite" />
  </circle>
  
  <circle cx="400" cy="400" r="180" fill="none" stroke="#00ffff" stroke-width="2" opacity="0.1">
    <animate attributeName="r" dur="15s" values="180;240;180" repeatCount="indefinite" />
    <animate attributeName="opacity" dur="15s" values="0.1;0.3;0.1" repeatCount="indefinite" />
  </circle>
  
  <path d="M400,270 L400,320 M530,400 L480,400 M400,530 L400,480 M270,400 L320,400" stroke="#00ffff" stroke-width="2">
    <animate attributeName="opacity" dur="2s" values="0.2;1;0.2" repeatCount="indefinite" />
  </path>
</svg>`,
  'particles.svg': `<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
  <g>
    <circle cx="100" cy="300" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="15s" values="300;280;320;300" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="310" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="12s" values="310;290;330;310" repeatCount="indefinite" />
    </circle>
    <circle cx="140" cy="290" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="14s" values="290;320;280;290" repeatCount="indefinite" />
    </circle>
    <circle cx="160" cy="305" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="13s" values="305;275;315;305" repeatCount="indefinite" />
    </circle>
    <circle cx="180" cy="295" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="11s" values="295;325;285;295" repeatCount="indefinite" />
    </circle>
    <circle cx="200" cy="300" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="10s" values="300;270;310;300" repeatCount="indefinite" />
    </circle>
    <circle cx="220" cy="310" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="9s" values="310;280;320;310" repeatCount="indefinite" />
    </circle>
    <circle cx="240" cy="290" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="16s" values="290;310;280;290" repeatCount="indefinite" />
    </circle>
    <circle cx="260" cy="300" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="17s" values="300;280;320;300" repeatCount="indefinite" />
    </circle>
    <circle cx="280" cy="305" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="15s" values="305;325;295;305" repeatCount="indefinite" />
    </circle>
    <circle cx="300" cy="295" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="14s" values="295;275;305;295" repeatCount="indefinite" />
    </circle>
    <circle cx="320" cy="300" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="13s" values="300;320;290;300" repeatCount="indefinite" />
    </circle>
    <circle cx="340" cy="310" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="12s" values="310;290;320;310" repeatCount="indefinite" />
    </circle>
    <circle cx="360" cy="290" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="11s" values="290;310;280;290" repeatCount="indefinite" />
    </circle>
    <circle cx="380" cy="300" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="10s" values="300;280;310;300" repeatCount="indefinite" />
    </circle>
    <circle cx="400" cy="305" r="2" fill="#ffffff" opacity="0.7">
      <animate attributeName="cy" dur="9s" values="305;325;295;305" repeatCount="indefinite" />
    </circle>
  </g>
</svg>`
};

// Ensure the public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Create each SVG file
Object.entries(svgContents).forEach(([filename, content]) => {
  const filePath = `public/${filename}`;
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created ${filePath}`);
  } else {
    console.log(`${filePath} already exists`);
  }
});
