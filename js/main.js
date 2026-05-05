(() => {
  const NAV = `
<nav id="main-nav">
  <a href="index.html" class="nav-logo" aria-label="Nepal Technology Service">
    <span class="n">N</span><span class="t">T</span><span class="s">S</span>
  </a>
  <ul class="nav-links" id="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="portfolio.html">Portfolio</a></li>
    <li><a href="courses.html">Courses</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="contact.html" class="nav-cta">Let's Talk</a></li>
  </ul>
  <div class="hamburger" id="ham" aria-label="Menu" role="button" tabindex="0">
    <span></span><span></span><span></span>
  </div>
</nav>`;

  const FOOTER = `
<div class="flag-top"></div>
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <span style="color:var(--white)">N</span><span style="color:var(--red)">T</span><span style="color:var(--blue-mid)">S</span>
        </div>
        <p class="footer-desc">Nepal Technology Service — bridging Nepal to international tech standards. Founded February 2025, Imadol, Lalitpur.</p>
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
          <li><a href="services.html">All 11 Services →</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get In Touch</h4>
        <ul>
          <li><a href="mailto:contact@nepaltechnologyservice.com">contact@nepaltechnologyservice.com</a></li>
          <li><a href="#">Imadol, Lalitpur, Nepal</a></li>
          <li><a href="courses.html">Courses — Coming Soon</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Nepal Technology Service. All rights reserved.</span>
      <div class="footer-socials">
        <a href="#" aria-label="Facebook">Facebook</a>
        <a href="#" aria-label="Instagram">Instagram</a>
        <a href="#" aria-label="LinkedIn">LinkedIn</a>
        <a href="#" aria-label="X">X</a>
      </div>
    </div>
  </div>
</footer>`;

  document.addEventListener('DOMContentLoaded', () => {
    // Inject nav
    const navPh = document.getElementById('nav-ph');
    if (navPh) navPh.outerHTML = NAV;

    // Inject footer
    const footPh = document.getElementById('footer-ph');
    if (footPh) footPh.outerHTML = FOOTER;

    // Active link highlight
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });

    // Hamburger toggle
    const ham = document.getElementById('ham');
    const nav = document.getElementById('main-nav');
    if (ham && nav) {
      ham.addEventListener('click', () => nav.classList.toggle('open'));
      ham.addEventListener('keydown', e => { if (e.key === 'Enter') nav.classList.toggle('open'); });
    }

    // Scroll-reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('[data-reveal]').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity 0.65s ease ${i * 0.07}s, transform 0.65s ease ${i * 0.07}s`;
      el.classList.add('will-reveal');
      observer.observe(el);
    });

    // Handle revealed class
    const style = document.createElement('style');
    style.textContent = '.revealed { opacity: 1 !important; transform: none !important; }';
    document.head.appendChild(style);
  });
})();
