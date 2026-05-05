(() => {
  // ── NAV HTML ──────────────────────────────────
  const NAV = `
<nav id="main-nav">
  <a href="index.html" class="nav-logo">
    <span class="logo-n">N</span><span class="logo-t">T</span><span class="logo-s">S</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="courses.html">Courses</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="contact.html" class="nav-cta">Let's Talk</a></li>
  </ul>
  <div class="hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </div>
</nav>`;

  // ── FOOTER HTML ───────────────────────────────
  const FOOTER = `
<div class="flag-divider" style="width:100%;height:3px;border-radius:0;margin:0;background:linear-gradient(90deg,var(--red) 50%,var(--blue) 50%);"></div>
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-brand-name">
        <span style="color:var(--white)">N</span><span style="color:var(--red)">T</span><span style="color:var(--blue-light)">S</span>
      </div>
      <p>Nepal Technology Service — bridging Nepal to international tech standards. Built by a GenZ team from Imadol, Lalitpur.</p>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html">Web Development</a></li>
        <li><a href="services.html">App Development</a></li>
        <li><a href="services.html">Cybersecurity</a></li>
        <li><a href="services.html">Cloud & DevOps</a></li>
        <li><a href="services.html">UI/UX Design</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Get In Touch</h4>
      <ul>
        <li><a href="mailto:contact@nepaltechnologyservice.com">contact@nepaltechnologyservice.com</a></li>
        <li><a href="#">Imadol, Lalitpur, Nepal</a></li>
        <li><a href="courses.html">Courses — Coming Soon</a></li>
      </ul>
      <div class="footer-socials" style="margin-top:20px;">
        <a href="#" title="Facebook">fb</a>
        <a href="#" title="Instagram">ig</a>
        <a href="#" title="LinkedIn">in</a>
        <a href="#" title="Twitter/X">𝕏</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Nepal Technology Service. All rights reserved.</span>
    <span>Made with pride in Nepal 🇳🇵</span>
  </div>
</footer>`;

  document.addEventListener('DOMContentLoaded', () => {
    // Inject nav
    const navHolder = document.getElementById('nav-ph');
    if (navHolder) navHolder.outerHTML = NAV;

    // Inject footer
    const footHolder = document.getElementById('footer-ph');
    if (footHolder) footHolder.outerHTML = FOOTER;

    // Active link
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });

    // Hamburger
    const ham = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    if (ham && nav) {
      ham.addEventListener('click', () => nav.classList.toggle('open'));
    }

    // Scroll fade
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el, i) => {
      if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay;
      io.observe(el);
    });

    // Count-up numbers
    const countEls = document.querySelectorAll('[data-count]');
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        let start = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { el.textContent = target + suffix; clearInterval(timer); return; }
          el.textContent = Math.floor(start) + suffix;
        }, 16);
        countIO.unobserve(el);
      });
    }, { threshold: 0.5 });
    countEls.forEach(el => countIO.observe(el));
  });
})();
