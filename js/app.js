/* Mobil ilovalar kiosk: slaydlar va rasmlar avtomatik almaşadi.
   Tugmalar: → / ← keyingi va oldingi, Probel pauza, F töliq ekran. */
(() => {
  const K = window.KIOSK;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const EXT = ["jpg", "png", "jpeg", "webp"];
  const MAX_SHOTS = 40;

  const PLAY = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M10,5 L55,50 L10,95 Z" fill="#4285F4"/><path d="M10,5 L72,39 L55,50 Z" fill="#34A853"/><path d="M10,95 L55,50 L72,61 Z" fill="#EA4335"/><path d="M72,39 L92,50 L72,61 L55,50 Z" fill="#FBBC04"/></svg>';
  const CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---- rasm bor-yöqligini tekşiriş ---- */
  const exists = (src) => new Promise((res) => {
    const im = new Image();
    im.onload = () => res(im.naturalWidth > 0 ? { src, w: im.naturalWidth, h: im.naturalHeight } : null);
    im.onerror = () => res(null);
    im.src = src;
  });
  const firstOf = async (base) => {
    const r = await Promise.all(EXT.concat("svg").map((e) => exists(`${base}.${e}`)));
    return r.find(Boolean) || null;
  };
  async function findShots(id) {
    const out = [];
    let miss = 0;
    for (let n = 1; n <= MAX_SHOTS && miss < 2; n++) {
      const r = await Promise.all(EXT.map((e) => exists(`images/${id}/${n}.${e}`)));
      const hit = r.find(Boolean);
      if (hit) { out.push(hit); miss = 0; } else miss++;
    }
    return out;
  }

  /* ---- QR kod (SVG) ---- */
  function qrSvg(text) {
    const q = qrcode(0, "M");
    q.addData(text);
    q.make();
    const n = q.getModuleCount();
    let d = "";
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c},${r}h1v1h-1z`;
    return `<svg viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" aria-label="QR kod"><path d="${d}" fill="#14235c"/></svg>`;
  }

  const iconHtml = (a) => a.logo
    ? `<div class="icon"><img src="${a.logo.src}" alt="${esc(a.name)} logo"></div>`
    : `<div class="icon"><span class="letter">${esc(a.name.trim()[0] || "?")}</span></div>`;

  /* ---- slaydlar ---- */
  function introSlide(apps) {
    const live = apps.filter((a) => !/testing/.test(a.link)).length;
    return `<section class="slide intro" data-kind="intro" style="--a:var(--brand)">
      <div>
        <p class="eyebrow rise" style="--d:0">IT Markaz · SamDU</p>
        <h1 class="big rise" style="--d:1">Mobil<br><em>ilovalar</em></h1>
        <p class="lead rise" style="--d:2">Markaz jamoasi işlab çiqqan mobil ilovalar. QR kodni skanerlang va ilovani telefoningizga yuklab oling.</p>
        <div class="stats rise" style="--d:3">
          <div class="stat"><b>${apps.length}</b><span>mobil ilova</span></div>
          <div class="stat"><b>${live}</b><span>Google Play'da</span></div>
          <div class="stat"><b>Android</b><span>platforma</span></div>
        </div>
      </div>
      <div class="tiles">
        ${apps.map((a, i) => `<div class="tile rise" style="--d:${i + 3};--c:${a.color}">${iconHtml(a)}<div class="t-txt"><b>${esc(a.name)}</b><span>${esc(a.tagline)}</span></div></div>`).join("")}
      </div>
    </section>`;
  }

  function appSlide(a) {
    const shots = a.shots.length
      ? a.shots.map((s, i) => {
          const tall = s.h / s.w > 1.6;
          return `<div class="shot${i === 0 ? " on" : ""}${tall ? " fill" : ""}"><div class="blur" style="background-image:url('${s.src}')"></div><img src="${s.src}" alt="${esc(a.name)} ${i + 1}" loading="lazy"></div>`;
        }).join("")
      : `<div class="empty">${iconHtml(a)}<b>${esc(a.name)}</b></div>`;
    const dots = a.shots.length > 1 ? a.shots.map((_, i) => `<i class="${i === 0 ? "on" : ""}"></i>`).join("") : "";
    return `<section class="slide app-slide" data-kind="app" style="--a:${a.color}">
      <div class="info">
        <div class="head rise" style="--d:0">${iconHtml(a)}<span class="tag">${esc(a.tag)}</span></div>
        <h2 class="name rise" style="--d:1">${esc(a.name)}</h2>
        <p class="tagline rise" style="--d:2">${esc(a.tagline)}</p>
        <p class="desc rise" style="--d:3">${esc(a.desc)}</p>
        <div class="get rise" style="--d:4">
          <div class="qr">${qrSvg(a.link)}</div>
          <div class="get-txt">
            <div class="store">${PLAY}Google Play</div>
            <div class="scan"><b>Skanerlang</b> va yuklab oling</div>
          </div>
        </div>
      </div>
      <div class="phone-col rise" style="--d:2">
        <div class="phone"><div class="screen">${shots}</div></div>
        <div class="dots">${dots}</div>
        <p class="caption">${esc(a.caption || "")}</p>
      </div>
      <div class="panels">
        <div class="panel rise" style="--d:4"><h3>Asosiy imkoniyatlari</h3>
          <ul class="list">${a.features.map((f, i) => `<li><span class="n">${String(i + 1).padStart(2, "0")}</span>${esc(f)}</li>`).join("")}</ul></div>
        <div class="panel rise" style="--d:5"><h3>Afzalliklari</h3>
          <ul class="list adv">${a.advantages.map((f) => `<li><span class="n">${CHECK}</span>${esc(f)}</li>`).join("")}</ul></div>
      </div>
    </section>`;
  }

  /* ---- boşqaruv ---- */
  let slides = [], durs = [], cur = -1, timer = null, shotTimer = null, paused = false;
  const host = $("#slides"), prog = $("#progress"), counter = $("#counter");

  function show(i) {
    clearTimeout(timer); clearInterval(shotTimer);
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("on", k === cur));
    const el = slides[cur];
    document.documentElement.style.setProperty("--a", getComputedStyle(el).getPropertyValue("--a") || "var(--brand)");

    [...prog.children].forEach((seg, k) => {
      seg.className = "seg" + (k < cur ? " done" : k === cur ? " cur" : "");
      const bar = seg.firstElementChild;
      bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = "";
    });
    prog.children[cur].style.setProperty("--dur", durs[cur] + "s");

    const appIdx = el.dataset.kind === "app" ? slides.filter((s) => s.dataset.kind === "app").indexOf(el) : -1;
    const total = K.apps.length;
    counter.innerHTML = appIdx >= 0 ? `<b>${String(appIdx + 1).padStart(2, "0")}</b> / ${String(total).padStart(2, "0")}` : `${total} ta ilova`;

    // ilova rasmlari almaşişi
    const shots = [...el.querySelectorAll(".shot")], dots = [...el.querySelectorAll(".dots i")];
    shots.forEach((s, k) => s.classList.toggle("on", k === 0));
    dots.forEach((d, k) => d.classList.toggle("on", k === 0));
    if (shots.length > 1) {
      let k = 0;
      shotTimer = setInterval(() => {
        if (paused) return;
        k = (k + 1) % shots.length;
        shots.forEach((s, j) => s.classList.toggle("on", j === k));
        dots.forEach((d, j) => d.classList.toggle("on", j === k));
      }, K.shotSeconds * 1000);
    }
    schedule(durs[cur] * 1000);
  }
  let left = 0, started = 0;
  function schedule(ms) { left = ms; started = Date.now(); timer = setTimeout(() => show(cur + 1), ms); }
  function togglePause() {
    paused = !paused;
    document.body.classList.toggle("paused", paused);
    if (paused) { clearTimeout(timer); left -= Date.now() - started; }
    else schedule(Math.max(left, 500));
  }

  async function init() {
    const apps = await Promise.all(K.apps.map(async (a) => {
      const [shots, logo] = await Promise.all([findShots(a.id), firstOf(`images/${a.id}/logo`)]);
      return { ...a, shots, logo };
    }));

    let html = "";
    durs = [];
    if (K.introSeconds > 0) { html += introSlide(apps); durs.push(K.introSeconds); }
    apps.forEach((a) => {
      html += appSlide(a);
      // köp rasmli ilova uzoqroq turadi, şunda hamma rasmlar körinadi
      durs.push(Math.max(K.slideSeconds, Math.min(a.shots.length * K.shotSeconds, 60)));
    });
    host.innerHTML = html;
    slides = [...host.children];
    prog.innerHTML = slides.map(() => '<div class="seg"><i></i></div>').join("");
    show(0);
  }

  /* klaviatura va sensor */
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "PageDown") show(cur + 1);
    else if (e.key === "ArrowLeft" || e.key === "PageUp") show(cur - 1);
    else if (e.key === " ") { e.preventDefault(); togglePause(); }
    else if (e.key === "f" || e.key === "F") {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.();
    }
  });
  let tx = null;
  document.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  });

  /* siçqonça harakatsiz bölsa kursor yashirinadi */
  let idle;
  const wake = () => { document.body.classList.remove("idle"); clearTimeout(idle); idle = setTimeout(() => document.body.classList.add("idle"), 2500); };
  document.addEventListener("mousemove", wake); wake();

  init();
})();
