/* ---------------------------------------------
   Starfield + constellations
--------------------------------------------- */
(function () {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width, height, dpr;
  let stars = [];
  let constellations = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = document.body.scrollHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildStars();
    buildConstellations();
  }

  function buildStars() {
    const count = Math.floor((width * height) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.5 + 0.35,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.006,
    }));
  }

  // A handful of loose constellation clusters scattered down the page
  function buildConstellations() {
    constellations = [];
    const clusterCount = Math.max(4, Math.floor(height / 700));
    for (let c = 0; c < clusterCount; c++) {
      const cx = Math.random() * width;
      const cy = (height / clusterCount) * c + Math.random() * (height / clusterCount);
      const pointCount = 4 + Math.floor(Math.random() * 3);
      const points = [];
      for (let p = 0; p < pointCount; p++) {
        points.push({
          x: cx + (Math.random() - 0.5) * 220,
          y: cy + (Math.random() - 0.5) * 160,
          r: Math.random() * 1.5 + 1,
        });
      }
      constellations.push(points);
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    // constellation lines
    ctx.strokeStyle = 'rgba(207,186,255,0.16)';
    ctx.lineWidth = 1;
    constellations.forEach((points) => {
      for (let i = 0; i < points.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[i + 1].x, points[i + 1].y);
        ctx.stroke();
      }
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,233,173,0.85)';
        ctx.fill();
      });
    });

    // twinkling stars
    stars.forEach((s) => {
      const alpha = prefersReducedMotion
        ? s.baseAlpha
        : s.baseAlpha + Math.sin(time * s.speed + s.phase) * 0.25;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${Math.max(0, alpha)})`;
      ctx.fill();
    });

    if (!prefersReducedMotion) {
      requestAnimationFrame(draw);
    }
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
  if (prefersReducedMotion) draw(0);
})();

/* ---------------------------------------------
   Scroll reveal
--------------------------------------------- */
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
})();
