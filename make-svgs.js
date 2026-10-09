const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');

// 1. DaVinci Resolve authentic color logo SVG
const davinciSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#111116"/>
  <g transform="translate(50, 50)">
    <path d="M0,-34 C12,-34 22,-20 18,-6 C14,-1 6,2 0,0 C-6,2 -14,-1 -18,-6 C-22,-20 -12,-34 0,-34 Z" fill="url(#gradRed)"/>
    <path d="M29,17 C35,7 34,-8 21,-14 C16,-16 9,-13 5,-9 C1,-5 2,3 4,9 C8,21 19,25 29,17 Z" fill="url(#gradBlue)" transform="rotate(120)"/>
    <path d="M29,17 C35,7 34,-8 21,-14 C16,-16 9,-13 5,-9 C1,-5 2,3 4,9 C8,21 19,25 29,17 Z" fill="url(#gradGreen)" transform="rotate(240)"/>
    <circle cx="0" cy="0" r="6" fill="#FFFFFF" opacity="0.9"/>
  </g>
  <defs>
    <linearGradient id="gradRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF4B4B"/>
      <stop offset="100%" stop-color="#D11528"/>
    </linearGradient>
    <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3898EC"/>
      <stop offset="100%" stop-color="#0856C1"/>
    </linearGradient>
    <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#27D78A"/>
      <stop offset="100%" stop-color="#088A4A"/>
    </linearGradient>
  </defs>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'davinci.svg'), davinciSvg);

// 2. Adobe Audition authentic color logo SVG
const auditionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#001C19" stroke="#00E5C9" stroke-width="4"/>
  <text x="50" y="68" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="46" font-weight="800" fill="#00E5C9" text-anchor="middle" letter-spacing="-1">Au</text>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'audition.svg'), auditionSvg);

// 3. CapCut authentic color logo SVG
const capcutSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#0F0F12"/>
  <path d="M22,34 L48,50 L48,34 L30,22 Z" fill="#00E5FF"/>
  <path d="M78,34 L52,50 L52,34 L70,22 Z" fill="#00E5FF"/>
  <path d="M22,66 L48,50 L48,66 L30,78 Z" fill="#FF2D55"/>
  <path d="M78,66 L52,50 L52,66 L70,78 Z" fill="#FF2D55"/>
  <path d="M38,34 L62,50 L62,34 L50,26 Z" fill="#FFFFFF" opacity="0.95"/>
  <path d="M38,66 L62,50 L62,66 L50,74 Z" fill="#FFFFFF" opacity="0.95"/>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'capcut.svg'), capcutSvg);

// 4. VN Video Editor authentic color logo SVG
const vnSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <defs>
    <linearGradient id="vnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E88E5"/>
      <stop offset="100%" stop-color="#1565C0"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#vnGrad)"/>
  <text x="50" y="67" font-family="Inter, system-ui, -apple-system, sans-serif" font-size="42" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">VN</text>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'vn.svg'), vnSvg);

// 5. HeavyM authentic color logo SVG
const heavymSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#120D1D"/>
  <g transform="translate(50, 48)">
    <path d="M0,-28 L24,-14 L0,0 L-24,-14 Z" fill="#00F0FF"/>
    <path d="M0,0 L24,-14 L24,14 L0,28 Z" fill="#E6007A"/>
    <path d="M0,0 L-24,-14 L-24,14 L0,28 Z" fill="#7928CA"/>
  </g>
</svg>`;
fs.writeFileSync(path.join(assetsDir, 'heavym.svg'), heavymSvg);

console.log('Successfully written all SVGs!');
