/* === SolarCache landing — interactions === */

/* ---------- Hero word-by-word ---------- */
(function heroIn() {
  const el = document.getElementById('hero-headline');
  const words = [
    { t: "Don't", a: false },
    { t: 'store',  a: false },
    { t: 'energy.', a: false },
    { t: 'BR',     a: false },
    { t: 'Store',  a: true  },
    { t: 'compute.', a: true },
  ];
  el.innerHTML = words.map((w, i) => {
    if (w.t === 'BR') return '<br/>';
    const cls = w.a ? 'word amber-word' : 'word';
    return `<span class="${cls}" style="animation-delay:${.18 * i + .2}s">${w.t}</span>`;
  }).join(' ');
})();

/* ---------- Particle sun (canvas) ---------- */
(function particles() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const COUNT = window.innerWidth < 700 ? 0 : 60;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function spawn() {
    return {
      x: w * 0.5 + (Math.random() - 0.5) * 200,
      y: h * 0.6 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -0.3 - Math.random() * 0.6,
      r: Math.random() * 2 + 0.5,
      life: 0,
      maxLife: 200 + Math.random() * 200,
    };
  }
  for (let i = 0; i < COUNT; i++) particles.push(spawn());

  function tick() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life++;
      const alpha = Math.max(0, 1 - p.life / p.maxLife);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 181, 71, ${alpha * 0.8})`;
      ctx.shadowColor = '#ffb547';
      ctx.shadowBlur = 12;
      ctx.fill();
      if (p.life > p.maxLife || p.y < 0) particles[i] = spawn();
    });
    requestAnimationFrame(tick);
  }
  if (COUNT) tick();
})();

/* ---------- Reveal on scroll ---------- */
(function reveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();

/* ---------- Animated counters ---------- */
(function counters() {
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  function animate(el) {
    const target = parseFloat(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const isFloat = target % 1 !== 0;
    const dur = 1800;
    const start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const v = target * ease(t);
      let str;
      if (target >= 1000000) str = (v / 1000000).toFixed(1) + 'M';
      else if (target >= 1000) str = Math.round(v).toLocaleString();
      else if (isFloat) str = v.toFixed(1);
      else str = Math.round(v).toString();
      el.textContent = prefix + str + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animate(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach((el) => io.observe(el));
})();

/* ---------- World map nodes ---------- */
(function map() {
  const dotsG = document.getElementById('map-dots');
  const nodesG = document.getElementById('map-nodes');
  if (!dotsG) return;

  // sparse continent dot pattern
  const dots = [];
  for (let x = 40; x < 760; x += 14) {
    for (let y = 40; y < 360; y += 14) {
      // crude continent mask
      const inland =
        (x > 80 && x < 220 && y > 60 && y < 200) ||  // NA
        (x > 180 && x < 280 && y > 200 && y < 340) || // SA
        (x > 340 && x < 460 && y > 60 && y < 200) ||  // EU
        (x > 360 && x < 500 && y > 180 && y < 320) || // Africa
        (x > 480 && x < 700 && y > 60 && y < 200) ||  // Asia
        (x > 600 && x < 720 && y > 240 && y < 320);   // Oceania
      if (inland && Math.random() > 0.35) dots.push([x, y]);
    }
  }
  dotsG.innerHTML = dots.map(([x, y]) =>
    `<circle cx="${x}" cy="${y}" r="1.2" fill="#1f2230"/>`
  ).join('');

  // active nodes
  const NODES = [
    [380, 110, 'München'],
    [375, 115, 'Vienna'],
    [360, 120, 'Amsterdam'],
    [395, 95,  'Berlin'],
    [150, 130, 'Austin'],
    [580, 140, 'Tokyo'],
    [430, 200, 'Lagos'],
    [200, 250, 'São Paulo'],
    [620, 280, 'Sydney'],
    [490, 160, 'Mumbai'],
  ];
  nodesG.innerHTML = NODES.map(([x, y], i) => `
    <circle cx="${x}" cy="${y}" r="3" fill="url(#nodeGlow)" />
    <circle cx="${x}" cy="${y}" r="3" fill="#ffb547">
      <animate attributeName="r" values="3;7;3" dur="${2 + i * 0.2}s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="1;.3;1" dur="${2 + i * 0.2}s" repeatCount="indefinite"/>
    </circle>
  `).join('');
})();

/* ---------- Live feed ---------- */
(function feed() {
  const feedEl = document.getElementById('feed');
  if (!feedEl) return;
  const cities = ['München', 'Vienna', 'Amsterdam', 'Berlin', 'Austin', 'Tokyo', 'Lagos', 'São Paulo', 'Sydney', 'Mumbai', 'Helsinki', 'Lisbon'];
  const caches = ['react-docs-v19', 'linux-kernel-6.8', 'gpt-system-prompt', 'eu-ai-act', 'rust-book', 'tailwind-v4', 'numpy-tutorial', 'k8s-handbook'];
  const sizes = ['142k', '88k', '212k', '34k', '301k', '67k', '198k'];

  function add() {
    const div = document.createElement('div');
    div.className = 'feed-line';
    const r = Math.random();
    if (r < 0.5) {
      const c = cities[Math.floor(Math.random() * cities.length)];
      const ch = caches[Math.floor(Math.random() * caches.length)];
      const sz = sizes[Math.floor(Math.random() * sizes.length)];
      div.innerHTML = `▸ Node in <b>${c}</b> seeded <span style="color:#ffb547">${ch}</span> [${sz} tokens]`;
    } else {
      const c1 = cities[Math.floor(Math.random() * cities.length)];
      const c2 = cities[Math.floor(Math.random() * cities.length)];
      const e = (Math.random() * 0.012 + 0.001).toFixed(4);
      div.innerHTML = `▸ Node in <b>${c1}</b> earned <span class="euro">€${e}</span> — cache hit from ${c2}`;
    }
    feedEl.prepend(div);
    while (feedEl.children.length > 12) feedEl.removeChild(feedEl.lastChild);
  }
  // seed
  for (let i = 0; i < 6; i++) add();
  setInterval(add, 1800);
})();

/* ---------- Waitlist counter ---------- */
(function waitlist() {
  const el = document.getElementById('waitlist-count');
  if (!el) return;
  let n = parseInt(localStorage.getItem('sc_wl') || '847', 10);
  el.textContent = n.toLocaleString();
  setInterval(() => {
    if (Math.random() > 0.6) {
      n += 1;
      localStorage.setItem('sc_wl', n);
      el.textContent = n.toLocaleString();
    }
  }, 7000);
})();

window.joinWaitlist = function (e) {
  e.preventDefault();
  const input = document.getElementById('email-in');
  const btn = e.target.querySelector('button');
  if (!input.value) return false;
  btn.textContent = '✓ You\'re in';
  btn.style.background = '#27c93f';
  let n = parseInt(localStorage.getItem('sc_wl') || '847', 10) + 1;
  localStorage.setItem('sc_wl', n);
  document.getElementById('waitlist-count').textContent = n.toLocaleString();
  input.value = '';
  return false;
};
