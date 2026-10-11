/**
 * ============================================================================
 * MOHAMED NASEEM H — PORTFOLIO JAVASCRIPT
 * Vanilla JavaScript (No Frameworks)
 * 
 * TABLE OF CONTENTS:
 * 0. GLOBAL FEATURE CONFIGURATION (Easy toggle flags)
 * 1. EDITABLE PROJECT DATA ARRAY (All project specs in one place)
 * 2. DARK / LIGHT THEME SYSTEM (Pre-paint sync, localStorage, 't' key shortcut)
 * 3. SCROLL PROGRESS BAR (2px top indicator)
 * 4. CONTINUOUS AMBIENT LAYER & SCROLL PARALLAX (4 drifting blobs)
 * 5. DESKTOP CURSOR FOLLOWER (Smooth lerp ring, hover expansion)
 * 6. SPOTLIGHT CARDS (Dynamic cursor glow on cards)
 * 7. SERVICES INTERACTIVE DOT GRID CANVAS (34px grid, proximity cursor, edge fade)
 * 8. BEYOND PARTICLES CANVAS (Theme-aware ambient floaters)
 * 9. HERO SPARKLE & STARBURST CANVAS (Theme-aware antigravity particles)
 * 10. TIMELINE PROGRESSIVE SCROLL GLOW (Smooth height tracking)
 * 11. MAGNETIC BUTTONS (Spring Physics on Hover)
 * 12. FLOATING NAVBAR SCROLLSPY & MOBILE DRAWER (Fixed precise section tracker)
 * 13. SCROLL REVEAL (Blur-to-sharp IntersectionObserver)
 * 14. PROJECT DETAILS MODAL & GALLERY (Accessible dialog & keyboard controls)
 * 15. LIVE UAE TIME & REAL-TIME CLOCK (GST UTC+4)
 * 16. ONE-CLICK EMAIL COPY & ANIMATED TOAST
 * 17. BACK TO TOP & CLEAN UTILITIES
 * ============================================================================
 */

// ============================================================================
// 0. GLOBAL FEATURE CONFIGURATION
// Easily enable or disable any ambient or interactive feature with these flags.
// ============================================================================
const CONFIG = {
  THEME_TOGGLE: true,          // Dark / Light theme switch
  DEFAULT_THEME: "system",     // "dark" | "light" | "system"
  AMBIENT_BLOBS: true,         // Continuous 4 blurred ambient light blobs + parallax
  DOT_GRID: true,              // Services interactive dot grid canvas
  RADAR_RINGS: true,           // Tools pulsing radar rings
  PARTICLES: true,             // Beyond section ambient floating particles canvas
  TIMELINE_GLOW: true,         // Progressive glowing timeline track
  SPOTLIGHT_CARDS: true,       // Cursor spotlight reflection on cards
  SCROLL_PROGRESS: true,       // 2px top scroll progress bar
  CURSOR_FOLLOWER: true        // Desktop smooth cursor ring follower
};

// ============================================================================
// 1. EDITABLE PROJECT DATA ARRAY
// EDIT HERE: Easily modify, add or remove projects shown on your website.
// ============================================================================
const PROJECTS = [
  {
    id: "project-cape-hayat",
    published: true,
    title: "Cape Hayat: Fire Alarm & Home Automation",
    location: "Hayat Island, Mina Al Arab, Ras Al Khaimah, UAE",
    status: "In progress",
    year: "2026",
    siteType: "Multi-tower residential development (two 20-storey and two 9-storey towers, around 670 units)",
    client: "RAK Properties",
    company: "CoreTech Control and Security Equipment",
    scope: "Fire alarm and home automation scope: installation, labelling, testing and commissioning, and handover documentation across the towers.",
    systems: ["Fire Alarm", "Home Automation", "Testing & Commissioning", "Documentation"],
    role: "", // Hidden if empty
    responsibilities: [
      "Planned and tracked the installation and commissioning schedule for each tower",
      "Led device labelling and as-built documentation",
      "Tested and commissioned systems and prepared handover files",
      "Coordinated with the consultant, main contractor and site teams"
    ],
    challenges: "Keeping several towers on schedule with multiple trades working in parallel",
    outcome: "Handover scheduled for Q4 2026",
    images: [],
    imageNote: "Site photos by me"
  },
  {
    id: "project-smart-parking",
    published: true,
    title: "IoT-Based Smart Parking & Telemetry Ecosystem",
    category: "IOT HARDWARE & CLOUD INTEGRATION",
    siteType: "Smart Infrastructure",
    role: "Developer & System Designer",
    client: "Engineering Project / Technical Initiative",
    company: "Technical Systems R&D",
    location: "Tamil Nadu / Prototype for UAE Smart Cities",
    status: "Completed",
    year: "2025",
    thumbnail: "assets/project-2.jpg",
    images: [
      "assets/project-2.jpg",
      "assets/imagesmedia3.jpg",
      "assets/imagesmedia4.jpg"
    ],
    imageNote: "Hardware prototype & telemetry display console",
    excerpt: "Automated multi-level parking ecosystem utilizing NodeMCU microcontrollers, ultrasonic bay sensors, cloud sync via Firebase, and a live frontend guidance screen.",
    description: "Engineered an intelligent parking automation system designed to eliminate vehicle bottlenecks in high-capacity parking facilities. Combining hardware-level sensor nodes with a low-latency cloud backend and responsive frontend displays, drivers receive real-time occupancy guidance before entering each bay.",
    scope: "Formulated systematic electrical schematics and wire routing for ultrasonic proximity sensors mounted overhead. Integrated NodeMCU ESP8266 microcontrollers with MQTT and HTTP protocols to stream state changes to a live Firebase NoSQL database. Maintained meticulous component lists and Bill of Quantities (BOQs) to manage hardware synchronization and power distribution.",
    responsibilities: [
      "Real-time bay occupancy detection with dynamic green/red overhead LED status indicators.",
      "Cloud database synchronization with sub-second latency via Google Firebase.",
      "Centralized entrance display console indicating vacant spaces per level and parking row.",
      "Comprehensive hardware BOQ, component pinout diagrams, and site installation schematics."
    ],
    deliverables: [
      "Real-time bay occupancy detection with dynamic green/red overhead LED status indicators.",
      "Cloud database synchronization with sub-second latency via Google Firebase.",
      "Centralized entrance display console indicating vacant spaces per level and parking row.",
      "Comprehensive hardware BOQ, component pinout diagrams, and site installation schematics."
    ],
    challenges: "Synchronizing high-frequency ultrasonic sensor telemetry with cloud database without latency bottlenecks.",
    outcome: "Successfully achieved sub-second latency cloud database sync and automated vacancy guidance.",
    systems: [
      "NODEMCU (ESP8266)",
      "ULTRASONIC SENSORS",
      "FIREBASE CLOUD",
      "REAL-TIME TELEMETRY",
      "BOQ SPECIFICATION",
      "HARDWARE-SOFTWARE SYNC"
    ]
  },
  {
    id: "project-surveillance-ai",
    published: true,
    title: "Unauthorized Device Detection System (YOLOv8)",
    category: "COMPUTER VISION & HIGH-SECURITY",
    siteType: "High-Security Zones",
    role: "Computer Vision & Systems Engineer",
    client: "AI Surveillance R&D",
    company: "Computer Vision Initiative",
    location: "Technical Systems / Security Zones",
    status: "Completed",
    year: "2025",
    thumbnail: "assets/project-3.jpg",
    images: [
      "assets/project-3.jpg",
      "assets/imagesmedia5.jpg",
      "assets/imagesmedia6.jpg"
    ],
    imageNote: "Edge inference detection pipeline captures",
    excerpt: "Automated real-time neural network detection pipeline analyzing live video streams to instantly flag unauthorized mobile devices in restricted security zones.",
    description: "Designed and trained an optimized computer vision model tailored for high-security facilities, data rooms, and examination perimeters where unauthorized mobile devices represent a severe compliance violation. Directly integrates with live RTSP video feeds from IP surveillance cameras.",
    scope: "Curated and augmented specialized image datasets with varied lighting conditions, occlusion, and distance metrics. Fine-tuned the YOLOv8 convolutional neural network architecture for high inference speed on edge computing nodes. Configured event triggers to stream automated alerts to the central security management console upon confirmed detection.",
    responsibilities: [
      "Sub-40ms real-time object detection on 1080p surveillance video feeds.",
      "Drastic reduction of false-positive alarms through confidence threshold fine-tuning.",
      "Automated logging with timestamped video frame captures of unauthorized devices.",
      "Comprehensive technical compliance documentation and architectural integration manual."
    ],
    deliverables: [
      "Sub-40ms real-time object detection on 1080p surveillance video feeds.",
      "Drastic reduction of false-positive alarms through confidence threshold fine-tuning.",
      "Automated logging with timestamped video frame captures of unauthorized devices.",
      "Comprehensive technical compliance documentation and architectural integration manual."
    ],
    challenges: "Mitigating false positives in variable ambient lighting conditions across restricted perimeters.",
    outcome: "Achieved sub-40ms inference on 1080p video streams with high detection confidence.",
    systems: [
      "YOLOV8 CONVOLUTIONAL NN",
      "COMPUTER VISION",
      "LIVE RTSP SURVEILLANCE",
      "EDGE INFERENCE",
      "PYTHON / OPENCV",
      "SECURITY PROTOCOL COMPLIANCE"
    ]
  }
];

// ============================================================================
// 2. DARK / LIGHT THEME SYSTEM
// ============================================================================
(function initThemeSystem() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("themeToggleBtn");
  const mobileToggleBtn = document.getElementById("mobileThemeToggleBtn");
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  if (!CONFIG.THEME_TOGGLE) {
    if (toggleBtn) toggleBtn.style.display = "none";
    if (mobileToggleBtn) mobileToggleBtn.style.display = "none";
    return;
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem("portfolio-theme");
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (e) {
      // Storage unavailable / private mode
    }
  }

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function resolveInitialTheme() {
    const saved = getStoredTheme();
    if (saved === "light" || saved === "dark") return saved;
    if (CONFIG.DEFAULT_THEME === "light") return "light";
    if (CONFIG.DEFAULT_THEME === "dark") return "dark";
    return getSystemPreference();
  }

  function updateAriaAndUI(theme) {
    const isLight = theme === "light";
    const label = isLight ? "Switch to dark theme" : "Switch to light theme";

    [toggleBtn, mobileToggleBtn].forEach((btn) => {
      if (!btn) return;
      btn.setAttribute("aria-label", label);
      btn.setAttribute("aria-pressed", String(isLight));
      btn.title = label;
    });

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", isLight ? "#F4F4F2" : "#000000");
    }
  }

  function applyTheme(theme, animate = false) {
    if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      html.classList.add("theme-transitioning");
      setTimeout(() => {
        html.classList.remove("theme-transitioning");
      }, 420);
    }

    html.setAttribute("data-theme", theme);
    updateAriaAndUI(theme);
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
  }

  // Set initial theme
  const initialTheme = resolveInitialTheme();
  applyTheme(initialTheme, false);

  function toggle() {
    const current = html.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    setStoredTheme(next);
    applyTheme(next, true);
  }

  if (toggleBtn) toggleBtn.addEventListener("click", toggle);
  if (mobileToggleBtn) mobileToggleBtn.addEventListener("click", toggle);

  // Keyboard shortcut 't' / 'T' (ignore when in inputs)
  window.addEventListener("keydown", (e) => {
    if (e.key === "t" || e.key === "T") {
      const active = document.activeElement;
      if (active) {
        const tag = active.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea" || active.isContentEditable) {
          return;
        }
      }
      toggle();
    }
  });

  // Listen to OS theme changes if user hasn't explicitly set preference
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
      if (!getStoredTheme() || CONFIG.DEFAULT_THEME === "system") {
        applyTheme(e.matches ? "light" : "dark", true);
      }
    });
  }
})();

// ============================================================================
// 3. SCROLL PROGRESS BAR (2px top bar)
// ============================================================================
(function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgressBar");
  if (!progressBar) return;

  if (!CONFIG.SCROLL_PROGRESS) {
    progressBar.style.display = "none";
    return;
  }

  function update() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
})();

// ============================================================================
// 4. CONTINUOUS AMBIENT LAYER & SCROLL PARALLAX
// ============================================================================
(function initAmbientBlobs() {
  const ambientLayer = document.querySelector(".ambient-layer");
  if (!ambientLayer) return;

  if (!CONFIG.AMBIENT_BLOBS) {
    ambientLayer.style.display = "none";
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 1023) return;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        ambientLayer.style.transform = `translate3d(0, ${scrolled * 0.14}px, 0)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

// ============================================================================
// 5. DESKTOP CURSOR FOLLOWER (Smooth Lerp Ring)
// ============================================================================
(function initCursorFollower() {
  const follower = document.getElementById("cursorFollower");
  if (!follower) return;

  if (!CONFIG.CURSOR_FOLLOWER || window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) {
    follower.style.display = "none";
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let followerX = -100;
  let followerY = -100;
  let isVisible = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      follower.classList.add("is-active");
    }
  });

  window.addEventListener("mouseleave", () => {
    isVisible = false;
    follower.classList.remove("is-active");
  });

  // Interactive targets hover expansion
  const targetSelector = "a, button, .project-card, .bento-card, .pillar-card, .brand-card, .software-item, .modal-thumb, .modal-close-btn, input, label";
  document.addEventListener("mouseover", (e) => {
    if (e.target && e.target.closest(targetSelector)) {
      follower.classList.add("is-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target && e.target.closest(targetSelector)) {
      follower.classList.remove("is-hover");
    }
  });

  function renderFollower() {
    if (isVisible) {
      followerX += (mouseX - followerX) * 0.22;
      followerY += (mouseY - followerY) * 0.22;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    }
    requestAnimationFrame(renderFollower);
  }

  requestAnimationFrame(renderFollower);
})();

// ============================================================================
// 6. SPOTLIGHT CARDS (Bounded Cursor Follower on Cards)
// ============================================================================
(function initSpotlightCards() {
  if (!CONFIG.SPOTLIGHT_CARDS || window.matchMedia("(pointer: coarse)").matches) return;

  const cards = document.querySelectorAll(".spotlight-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
})();

// ============================================================================
// 7. SERVICES INTERACTIVE DOT GRID CANVAS (34px Grid with Cursor Proximity)
// ============================================================================
(function initServicesDotGrid() {
  const canvas = document.getElementById("servicesDotGridCanvas");
  if (!canvas) return;

  if (!CONFIG.DOT_GRID || window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const servicesSection = document.getElementById("services");
  let width = 0;
  let height = 0;
  let mouseX = -9999;
  let mouseY = -9999;
  let isVisible = false;

  function resize() {
    const rect = servicesSection ? servicesSection.getBoundingClientRect() : { width: window.innerWidth, height: 600 };
    const dpr = window.innerWidth <= 1023 ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  if (servicesSection) {
    servicesSection.addEventListener("mousemove", (e) => {
      const rect = servicesSection.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    servicesSection.addEventListener("mouseleave", () => {
      mouseX = -9999;
      mouseY = -9999;
    });
  }

  const SPACING = 34;
  const PROXIMITY_RADIUS = 130;

  function renderGrid() {
    if (!isVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(renderGrid);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const baseRgb = isLight ? "0, 0, 0" : "255, 255, 255";

    for (let x = SPACING / 2; x < width; x += SPACING) {
      for (let y = SPACING / 2; y < height; y += SPACING) {
        const dx = mouseX - x;
        const dy = mouseY - y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let size = 1.0;
        let alpha = 0.08;

        if (dist < PROXIMITY_RADIUS) {
          const factor = 1 - dist / PROXIMITY_RADIUS;
          size = 1.0 + factor * 2.2;
          alpha = 0.08 + factor * 0.42;
        }

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseRgb}, ${alpha})`;
        ctx.fill();
      }
    }

    requestAnimationFrame(renderGrid);
  }

  window.addEventListener("resize", resize);
  resize();

  if ("IntersectionObserver" in window && servicesSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });
    observer.observe(servicesSection);
  }

  renderGrid();
})();

// ============================================================================
// 8. BEYOND PARTICLES CANVAS (Theme-Aware Floating Dust)
// ============================================================================
(function initBeyondParticles() {
  const canvas = document.getElementById("beyondParticlesCanvas");
  if (!canvas) return;

  if (!CONFIG.PARTICLES) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const beyondSection = document.getElementById("beyond");
  let width = 0;
  let height = 0;
  let isVisible = false;

  const PARTICLE_COUNT = 24;
  const particles = [];

  function resize() {
    const rect = beyondSection ? beyondSection.getBoundingClientRect() : { width: window.innerWidth, height: 600 };
    const dpr = window.innerWidth <= 1023 ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  class DustParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = 0.9 + Math.random() * 1.8;
      this.vx = (Math.random() - 0.5) * 0.18;
      this.vy = -(0.12 + Math.random() * 0.28);
      this.alpha = 0.15 + Math.random() * 0.25;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset(false);
      }
    }

    draw() {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const rgb = isLight ? "0, 0, 0" : "255, 255, 255";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, ${this.alpha})`;
      ctx.fill();
    }
  }

  function init() {
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new DustParticle());
    }
  }

  function render() {
    if (!isVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(render);
  }

  window.addEventListener("resize", resize);
  resize();
  init();

  if ("IntersectionObserver" in window && beyondSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        isVisible = e.isIntersecting;
      });
    }, { threshold: 0.05 });
    observer.observe(beyondSection);
  }

  render();
})();

// ============================================================================
// 9. HERO SPARKLE & STARBURST EFFECT (Antigravity Ambience, Theme-Aware)
// ============================================================================
(function initSparkleEffect() {
  const canvas = document.getElementById("sparkleCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let isHeroVisible = true;

  const isMobile = window.innerWidth <= 1023;
  const PARTICLE_COUNT = isMobile ? 12 : 32;
  const particles = [];

  function resizeCanvas() {
    const heroBg = document.getElementById("heroBg");
    const rect = heroBg ? heroBg.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
    const dpr = window.innerWidth <= 1023 ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);

    width = rect.width || window.innerWidth;
    height = rect.height || window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  class Sparkle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.baseSize = 0.8 + Math.random() * 1.5;
      this.vx = (Math.random() - 0.5) * 0.22;
      this.vy = -(0.14 + Math.random() * 0.3);
      this.phase = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.018 + Math.random() * 0.03;
      this.isStarburst = Math.random() > 0.45;
      this.maxAlpha = 0.35 + Math.random() * 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.phase += this.pulseSpeed;

      if (this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset(false);
      }
    }

    draw() {
      const alpha = Math.max(0, Math.sin(this.phase)) * this.maxAlpha;
      if (alpha <= 0.01) return;

      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const rgb = isLight ? "20, 20, 20" : "255, 255, 255";

      ctx.save();
      ctx.translate(this.x, this.y);

      if (this.isStarburst && alpha > 0.16) {
        const armLength = this.baseSize * 3.4 * (alpha / this.maxAlpha);
        ctx.strokeStyle = `rgba(${rgb}, ${alpha * 0.85})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(-armLength, 0);
        ctx.lineTo(armLength, 0);
        ctx.moveTo(0, -armLength);
        ctx.lineTo(armLength, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, this.baseSize * 0.85, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.baseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha * 0.75})`;
        ctx.shadowColor = `rgba(${rgb}, 0.5)`;
        ctx.shadowBlur = 3;
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Sparkle());
    }
  }

  function render() {
    if (!isHeroVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    requestAnimationFrame(render);
  }

  window.addEventListener("resize", resizeCanvas);

  if ("IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isHeroVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });

    const heroEl = document.getElementById("hero");
    if (heroEl) heroObserver.observe(heroEl);
  }

  resizeCanvas();
  initParticles();
  render();
})();

// ============================================================================
// 10. TIMELINE PROGRESSIVE SCROLL GLOW
// ============================================================================
(function initTimelineGlow() {
  const glow = document.getElementById("timelineTrackGlow");
  const timeline = document.querySelector("#experience .timeline");
  if (!glow || !timeline || !CONFIG.TIMELINE_GLOW) return;

  function update() {
    const rect = timeline.getBoundingClientRect();
    const windowH = window.innerHeight;
    const viewCenter = windowH * 0.55;

    if (rect.bottom < 0 || rect.top > windowH) return;

    const progress = Math.min(1, Math.max(0, (viewCenter - rect.top) / rect.height));
    glow.style.height = `${(progress * 100).toFixed(1)}%`;
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
})();

// ============================================================================
// 11. MAGNETIC BUTTONS (Spring Physics on Hover)
// ============================================================================
(function initMagneticButtons() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const magneticElements = document.querySelectorAll(".magnetic-btn");

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      el.style.transform = `translate3d(${x * 0.22}px, ${y * 0.22}px, 0)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate3d(0, 0, 0)";
      el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    el.addEventListener("mouseenter", () => {
      el.style.transition = "none";
    });
  });
})();

// ============================================================================
// 12. FLOATING NAVBAR SCROLLSPY & MOBILE DRAWER (Fixed Accurate Viewport Tracker)
// ============================================================================
(function initNavigation() {
  // Navigation links match these exact sections
  const trackedSectionIds = [
    "hero",
    "services",
    "projects",
    "visual-work",
    "beyond",
    "experience",
    "tools",
    "contact"
  ];

  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");

  function setActiveLink(activeId) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
    });
    mobileLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
    });
  }

  // Scrollspy: accurately checks viewport bounding rects
  function updateActiveNavLink() {
    const scrollBottom = window.innerHeight + window.scrollY;
    const docHeight = document.documentElement.scrollHeight;

    // Bottom of page: activate contact
    if (docHeight - scrollBottom < 90) {
      setActiveLink("contact");
      return;
    }

    const triggerPoint = window.innerHeight * 0.38;
    let currentActiveId = "hero";

    for (let i = 0; i < trackedSectionIds.length; i++) {
      const id = trackedSectionIds[i];
      const sec = document.getElementById(id);
      if (sec) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          currentActiveId = id;
          break;
        }
      }
    }

    setActiveLink(currentActiveId);
  }

  window.addEventListener("scroll", updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // Mobile Drawer Toggle
  if (menuToggle && mobileDrawer) {
    const closeBtn = document.getElementById("mobileDrawerCloseBtn");

    function setDrawerState(open) {
      mobileDrawer.classList.toggle("is-open", open);
      menuToggle.classList.toggle("is-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      mobileDrawer.setAttribute("aria-hidden", String(!open));
      if (open) {
        document.body.classList.add("menu-open");
        document.body.style.overflow = "hidden";
      } else {
        document.body.classList.remove("menu-open");
        document.body.style.overflow = "";
      }
    }

    menuToggle.addEventListener("click", () => {
      const willOpen = !mobileDrawer.classList.contains("is-open");
      setDrawerState(willOpen);
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => setDrawerState(false));
    }

    mobileDrawer.querySelectorAll("a, button:not(.mobile-close-btn)").forEach((item) => {
      item.addEventListener("click", () => setDrawerState(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("is-open")) {
        setDrawerState(false);
      }
    });

    document.addEventListener("click", (e) => {
      if (mobileDrawer.classList.contains("is-open") && !menuToggle.contains(e.target) && !mobileDrawer.contains(e.target)) {
        setDrawerState(false);
      }
    });
  }
})();

// ============================================================================
// 13. SCROLL REVEAL (Blur to Sharp IntersectionObserver)
// ============================================================================
(function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        // Remove will-change after transition completes to preserve memory
        setTimeout(() => {
          entry.target.style.willChange = "auto";
        }, 700);
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach((el) => observer.observe(el));
})();

// ============================================================================
// 14. PROJECT CASE STUDIES & ACCESSIBLE MODAL
// ============================================================================
(function initProjectsAndModal() {
  const container = document.getElementById("projectsContainer");
  const modal = document.getElementById("projectModal");
  const backdrop = document.getElementById("modalBackdrop");
  const closeBtn = document.getElementById("modalCloseBtn");
  const counterEl = document.getElementById("modalCounter");
  const scrollArea = document.getElementById("modalScrollArea");
  const modalBody = document.getElementById("modalBody");

  if (!modal || !modalBody) return;

  // Filter only published projects (supports published: true/false flag)
  const publishedProjects = PROJECTS.filter((p) => p.published !== false);
  let currentProjectIndex = 0;
  let activeTriggerElement = null;

  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Render project cards in the grid dynamically
  function renderGrid() {
    if (!container) return;

    container.innerHTML = publishedProjects.map((project, index) => {
      const statusText = project.status || "In progress";
      const hasImages = Array.isArray(project.images) && project.images.length > 0;
      const thumbnail = hasImages ? (project.thumbnail || project.images[0]) : (project.thumbnail && !project.thumbnail.includes("placeholder") ? project.thumbnail : null);

      let mediaHtml = "";
      if (thumbnail) {
        mediaHtml = `
          <img src="${escapeHtml(thumbnail)}" alt="${escapeHtml(project.title)}" class="project-img" loading="lazy" width="800" height="450">
          <div class="card-status-badge font-mono">
            <span class="card-status-dot" aria-hidden="true"></span>
            <span>${escapeHtml(statusText)}</span>
          </div>
          <div class="project-overlay font-mono">
            <span class="overlay-cta">VIEW CASE STUDY ↗</span>
          </div>
        `;
      } else {
        mediaHtml = `
          <div class="project-media-placeholder">
            <svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <span class="placeholder-label font-mono">Photos coming soon</span>
            <span class="placeholder-sublabel font-mono">Site Documentation in Progress</span>
          </div>
          <div class="card-status-badge font-mono">
            <span class="card-status-dot" aria-hidden="true"></span>
            <span>${escapeHtml(statusText)}</span>
          </div>
          <div class="project-overlay font-mono">
            <span class="overlay-cta">VIEW CASE STUDY ↗</span>
          </div>
        `;
      }

      const systemsList = project.systems || [];
      const firstTwo = systemsList.slice(0, 2).map((sys) => `<span class="chip-tag">${escapeHtml(sys)}</span>`).join("");
      const remainingCount = systemsList.length - 2;
      const moreTag = remainingCount > 0 ? `<span class="chip-tag chip-tag-more">+${remainingCount}</span>` : "";
      const extraDesktop = systemsList.slice(2, 4).map((sys) => `<span class="chip-tag chip-tag-desktop">${escapeHtml(sys)}</span>`).join("");
      const tagsHtml = systemsList.length > 0 ? `<div class="project-tags font-mono">${firstTwo}${moreTag}${extraDesktop}</div>` : "";

      const scopeOneline = project.scope || project.excerpt || "";

      return `
        <article class="project-card spotlight-card reveal" data-project-index="${index}" tabindex="0" role="article" aria-label="${escapeHtml(project.title)}">
          <div class="project-media">
            ${mediaHtml}
          </div>
          <div class="project-info">
            <div class="project-header-block">
              <h3 class="project-title">${escapeHtml(project.title)}</h3>
              ${project.location ? `
                <div class="project-location font-mono">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>${escapeHtml(project.location)}</span>
                </div>
              ` : ""}
            </div>
            ${scopeOneline ? `<p class="project-excerpt">${escapeHtml(scopeOneline)}</p>` : ""}
            ${tagsHtml}
            <div class="project-action-link font-mono" role="button" tabindex="0">
              <span class="project-action-desktop">INSPECT CASE STUDY</span>
              <span class="project-action-mobile">View →</span>
              <svg class="project-action-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Attach card event listeners
    const cards = container.querySelectorAll(".project-card");
    cards.forEach((card, idx) => {
      card.addEventListener("click", () => openModal(idx, card));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(idx, card);
        }
      });
    });

    // Re-observe revealed cards if observer exists
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      cards.forEach((c) => observer.observe(c));
    } else {
      cards.forEach((c) => c.classList.add("is-revealed"));
    }

    // Attach spotlight cursor tracking to new cards
    if (CONFIG.SPOTLIGHT_CARDS && !window.matchMedia("(pointer: coarse)").matches) {
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
        });
      });
    }
  }

  // Populate modal content for a given project in exact order requested
  function populateModal(index) {
    const project = publishedProjects[index];
    if (!project) return;

    currentProjectIndex = index;
    if (counterEl) {
      counterEl.textContent = `PROJECT 0${index + 1} / 0${publishedProjects.length}`;
    }

    // SECTION 1: Header (title, status badge, location, year)
    let headerHtml = `
      <div class="modal-case-header">
        <div class="modal-case-meta font-mono">
          ${project.status ? `
            <span class="modal-status-badge">
              <span class="card-status-dot" aria-hidden="true"></span>
              <span>${escapeHtml(project.status)}</span>
            </span>
          ` : ""}
          ${project.year ? `<span class="modal-meta-pill">${escapeHtml(project.year)}</span>` : ""}
        </div>
        <h2 class="modal-title" id="modalTitle">${escapeHtml(project.title)}</h2>
        ${project.location ? `
          <div class="modal-location-row font-mono">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${escapeHtml(project.location)}</span>
          </div>
        ` : ""}
      </div>
    `;

    // SECTION 2: Quick Facts Grid (2x3 on desktop) - hiding any that are empty
    const quickFacts = [];
    if (project.siteType && project.siteType.trim()) {
      quickFacts.push({ key: "Site Type", val: escapeHtml(project.siteType) });
    }
    if (project.client && project.client.trim()) {
      quickFacts.push({ key: "Client / Developer", val: escapeHtml(project.client) });
    }
    if (project.company && project.company.trim()) {
      quickFacts.push({ key: "Company", val: escapeHtml(project.company) });
    }
    if (project.role && project.role.trim()) {
      quickFacts.push({ key: "My Role", val: escapeHtml(project.role) });
    }
    if (Array.isArray(project.systems) && project.systems.length > 0) {
      const chips = project.systems.map((s) => `<span class="modal-system-chip">${escapeHtml(s)}</span>`).join("");
      quickFacts.push({ key: "Systems", val: `<div class="fact-val-systems">${chips}</div>`, isHtml: true });
    }
    if (project.status && project.status.trim()) {
      quickFacts.push({
        key: "Status",
        val: `<span class="fact-status-val"><span class="card-status-dot" aria-hidden="true"></span>${escapeHtml(project.status)}</span>`,
        isHtml: true
      });
    }

    let quickFactsHtml = "";
    if (quickFacts.length > 0) {
      quickFactsHtml = `
        <div class="modal-quick-facts" role="region" aria-label="Project Quick Facts">
          ${quickFacts.map((qf) => `
            <div class="quick-fact-card">
              <span class="fact-key font-mono">${escapeHtml(qf.key)}</span>
              <div class="fact-val">${qf.isHtml ? qf.val : escapeHtml(qf.val)}</div>
            </div>
          `).join("")}
        </div>
      `;
    }

    // SECTION 3: "Scope of work" paragraph (hide if empty)
    let scopeHtml = "";
    if (project.scope && project.scope.trim()) {
      scopeHtml = `
        <div class="modal-section-block">
          <h3 class="modal-section-title font-mono">Scope of Work</h3>
          <p class="modal-scope-text">${escapeHtml(project.scope)}</p>
        </div>
      `;
    }

    // SECTION 4: "What I handled" list from responsibilities (hide if empty)
    let handledHtml = "";
    const respList = (Array.isArray(project.responsibilities) && project.responsibilities.length > 0)
      ? project.responsibilities
      : (Array.isArray(project.deliverables) && project.deliverables.length > 0 ? project.deliverables : []);

    if (respList.length > 0) {
      handledHtml = `
        <div class="modal-section-block">
          <h3 class="modal-section-title font-mono">What I Handled</h3>
          <ul class="modal-deliverables-list">
            ${respList.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    // SECTION 5: "Challenges" and "Outcome" blocks (hide if empty)
    let challengesOutcomeHtml = "";
    const hasChallenges = project.challenges && project.challenges.trim();
    const hasOutcome = project.outcome && project.outcome.trim();

    if (hasChallenges || hasOutcome) {
      challengesOutcomeHtml = `
        <div class="modal-challenges-outcome-grid">
          ${hasChallenges ? `
            <div class="modal-callout-card">
              <div class="callout-header font-mono">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Challenges</span>
              </div>
              <p class="callout-text">${escapeHtml(project.challenges)}</p>
            </div>
          ` : ""}
          ${hasOutcome ? `
            <div class="modal-callout-card">
              <div class="callout-header font-mono">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Outcome</span>
              </div>
              <p class="callout-text">${escapeHtml(project.outcome)}</p>
            </div>
          ` : ""}
        </div>
      `;
    }

    // SECTION 6: Gallery (ONLY IF IMAGES EXIST) with lightbox & imageNote caption
    let galleryHtml = "";
    if (Array.isArray(project.images) && project.images.length > 0) {
      const mainImgSrc = project.images[0];
      const thumbsHtml = project.images.length > 1 ? `
        <div class="modal-thumbnails" id="modalThumbnails">
          ${project.images.map((src, idx) => `
            <button type="button" class="modal-thumb ${idx === 0 ? "is-active" : ""}" data-img-src="${escapeHtml(src)}" aria-label="View photo ${idx + 1}">
              <img src="${escapeHtml(src)}" alt="${escapeHtml(project.title)} - View ${idx + 1}" loading="lazy">
            </button>
          `).join("")}
        </div>
      ` : "";

      galleryHtml = `
        <div class="modal-section-block">
          <div class="modal-gallery">
            <div class="modal-image-viewport">
              <img src="${escapeHtml(mainImgSrc)}" alt="${escapeHtml(project.title)}" id="modalMainImg" class="modal-main-img">
            </div>
            ${thumbsHtml}
            ${project.imageNote ? `<p class="modal-gallery-caption font-mono">${escapeHtml(project.imageNote)}</p>` : ""}
          </div>
        </div>
      `;
    }

    // SECTION 7: Closing line with two buttons & disclaimer
    const footerActionsHtml = `
      <div class="modal-footer-actions">
        <div class="modal-action-buttons">
          <a href="https://wa.me/971503196123" target="_blank" rel="noopener noreferrer" class="btn btn-primary" id="modalDiscussBtn" aria-label="Discuss a similar project on WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>Discuss a similar project</span>
          </a>
          <button type="button" class="btn btn-outline" id="modalNextBtn" aria-label="View next project case study">
            <span>Next project</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <p class="modal-disclaimer font-mono">Details shown are limited to my scope of work.</p>
      </div>
    `;

    // Render exact 7 sections in order
    modalBody.innerHTML = `
      ${headerHtml}
      ${quickFactsHtml}
      ${scopeHtml}
      ${handledHtml}
      ${challengesOutcomeHtml}
      ${galleryHtml}
      ${footerActionsHtml}
    `;

    // Bind gallery thumbnail clicks
    const thumbButtons = modalBody.querySelectorAll(".modal-thumb");
    const mainImg = modalBody.querySelector("#modalMainImg");
    thumbButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-img-src");
        if (mainImg && src) {
          mainImg.src = src;
          thumbButtons.forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
        }
      });
    });

    // Bind "Next project" button
    const nextBtn = modalBody.querySelector("#modalNextBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const nextIndex = (currentProjectIndex + 1) % publishedProjects.length;
        populateModal(nextIndex);
        if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
          const newNextBtn = modalBody.querySelector("#modalNextBtn");
          if (newNextBtn) newNextBtn.focus();
        }, 50);
      });
    }
  }

  function openModal(index, triggerEl) {
    activeTriggerElement = triggerEl || document.activeElement;
    populateModal(index);

    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (scrollArea) scrollArea.scrollTop = 0;

    // Focus close button for accessibility
    setTimeout(() => {
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  function closeModal() {
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (activeTriggerElement && typeof activeTriggerElement.focus === "function") {
      activeTriggerElement.focus();
    }
  }

  // Close triggers
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  // Keyboard navigation & Focus Trap
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-active")) return;

    if (e.key === "Escape") {
      closeModal();
      return;
    }

    if (e.key === "Tab") {
      const focusable = modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;

      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });

  // Initial dynamic grid render
  renderGrid();
})();

// ============================================================================
// 15. LIVE UAE TIME & REAL-TIME CLOCK (Asia/Dubai)
// ============================================================================
(function initLiveUAEClock() {
  function getClockElements() {
    return {
      navClock: document.getElementById("navLiveTime"),
      mobileClock: document.getElementById("mobileLiveTime"),
    };
  }

  function formatTime(now) {
    const isDesktop = window.innerWidth >= 1024;
    const showGst = window.innerWidth >= 430;

    const options = {
      timeZone: "Asia/Dubai",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    };

    if (isDesktop) {
      options.second = "2-digit";
    }

    try {
      const formatted = new Intl.DateTimeFormat("en-GB", options).format(now);
      return showGst ? `${formatted} GST` : formatted;
    } catch (e) {
      const hours = String(now.getUTCHours() + 4).padStart(2, "0");
      const minutes = String(now.getUTCMinutes()).padStart(2, "0");
      return showGst ? `${hours}:${minutes} GST` : `${hours}:${minutes}`;
    }
  }

  function updateClock() {
    const { navClock, mobileClock } = getClockElements();
    if (!navClock && !mobileClock) return;

    const timeStr = formatTime(new Date());
    if (navClock) navClock.textContent = timeStr;
    if (mobileClock) mobileClock.textContent = timeStr;
  }

  let timerId = null;

  function tick() {
    updateClock();
    const msToNext = 1000 - (Date.now() % 1000);
    timerId = setTimeout(tick, msToNext);
  }

  function start() {
    if (timerId) clearTimeout(timerId);
    tick();
  }

  function stop() {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  window.addEventListener("resize", updateClock);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();

// ============================================================================
// 16. ONE-CLICK EMAIL COPY & ANIMATED TOAST
// ============================================================================
(function initCopyEmailAction() {
  const emailRow = document.getElementById("emailRow");
  const copyBtn = document.getElementById("copyEmailBtn");
  const toast = document.getElementById("toastNotification");
  const emailToCopy = "naseemmohamed6886@gmail.com";
  let toastTimer = null;

  function showToast(msg = "COPIED TO CLIPBOARD ✓") {
    if (!toast) return;
    const msgEl = toast.querySelector(".toast-msg");
    if (msgEl) msgEl.textContent = msg;

    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  function handleCopy(e) {
    if (e.target.closest(".row-arrow")) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailToCopy).then(() => {
        showToast("EMAIL COPIED TO CLIPBOARD ✓");
      }).catch(() => {
        showToast("naseemmohamed6886@gmail.com");
      });
    } else {
      showToast("naseemmohamed6886@gmail.com");
    }
  }

  if (emailRow) emailRow.addEventListener("click", handleCopy);
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      handleCopy(e);
    });
  }
})();

// ============================================================================
// 17. BACK TO TOP & CLEAN UTILITIES
// ============================================================================
(function initUtilities() {
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // If radar rings are disabled in config, hide them
  if (!CONFIG.RADAR_RINGS) {
    const rings = document.querySelector(".tools-radar-rings");
    if (rings) rings.style.display = "none";
  }

  console.log(
    "%c Mohamed Naseem H — ELV & Security Systems Portfolio %c Dark/Light Grayscale Theme System Active.",
    "background: #FFFFFF; color: #000000; font-weight: bold; padding: 4px 8px; border-radius: 4px;",
    "background: #111111; color: #8A8A8A; padding: 4px 8px;"
  );
})();
