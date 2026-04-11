const MAAC_COMPONENT_FONTS = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&family=Bebas+Neue&display=swap" rel="stylesheet">
`;

const MAAC_COMPONENT_STYLES = `
<style id="maac-component-styles">
  #topBar {
    background: transparent;
    color: #fff;
    font-family: 'Outfit', sans-serif;
    font-size: .72rem;
    font-weight: 400;
    letter-spacing: .04em;
    padding: .4rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    transition: all .4s ease;
  }

  #topBar.scrolled {
    transform: translateY(-100%);
  }

  #mainNav {
    position: fixed;
    top: 36px;
    left: 0;
    right: 0;
    z-index: 9999;
    transition: all .4s ease;
    padding: 1.2rem 0;
    background: transparent;
  }

  #mainNav.scrolled {
    top: 0;
    background: rgba(255,255,255,.72);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(0,0,0,.06);
    box-shadow: 0 4px 24px rgba(0,0,0,.08);
    padding: .7rem 0;
  }

  .nav-logo-img {
    display: block;
    height: 70px;
    width: auto;
    transition: height .3s ease;
  }

  #mainNav.scrolled .nav-logo-img {
    height: 90px;
  }

  .nav-link-custom {
    font-family: 'Outfit', sans-serif;
    font-size: .84rem;
    font-weight: 700;
    letter-spacing: .08em;
    color: #fff !important;
    text-decoration: none;
    padding: .3rem 0 !important;
    position: relative;
    transition: color .35s cubic-bezier(.4,0,.2,1);
  }

  #mainNav.scrolled .nav-link-custom {
    color: #0F0F0F !important;
  }

  .nav-link-custom::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: var(--gold);
    border-radius: 2px;
    transition: width .35s cubic-bezier(.4,0,.2,1);
  }

  .nav-link-custom:hover,
  .nav-link-custom.active {
    color: var(--red) !important;
  }

  .nav-link-custom:hover::after,
  .nav-link-custom.active::after {
    width: 100%;
  }

  .mobile-toggle {
    color: #fff;
    transition: color .35s cubic-bezier(.4,0,.2,1);
  }

  #mainNav.scrolled .mobile-toggle {
    color: #0F0F0F;
  }

  .btn-brand-red {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: var(--red);
    color: #fff !important;
    font-family: 'Outfit', sans-serif;
    font-size: .82rem;
    font-weight: 600;
    letter-spacing: .08em;
    text-transform: uppercase;
    padding: .85rem 2rem;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    cursor: pointer;
    transition: background .35s cubic-bezier(.4,0,.2,1), transform .35s cubic-bezier(.4,0,.2,1), box-shadow .35s cubic-bezier(.4,0,.2,1);
    position: relative;
    overflow: hidden;
  }

  .btn-brand-red:hover {
    background: var(--red-dark);
    color: #fff !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(210,35,42,.35);
  }

  .btn-outline-dark {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    background: transparent;
    color: #0F0F0F;
    font-family: 'Outfit', sans-serif;
    font-size: .82rem;
    font-weight: 600;
    letter-spacing: .08em;
    text-transform: uppercase;
    padding: .82rem 2rem;
    border: 1.5px solid #0F0F0F;
    border-radius: 6px;
    text-decoration: none;
    cursor: pointer;
    transition: all .35s cubic-bezier(.4,0,.2,1);
  }

  .btn-outline-dark:hover {
    background: #0F0F0F;
    color: #fff;
    transform: translateY(-2px);
  }

  .nav-dropdown .dropdown-menu {
    background: #0F0F0F;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 14px;
    padding: .75rem;
    min-width: 240px;
    box-shadow: 0 15px 40px rgba(0,0,0,.4);
    margin-top: 0;
    backdrop-filter: blur(10px);
    display: none;
    opacity: 0;
    transform: translateY(10px);
    transition: all .3s ease;
  }

  @media (min-width: 992px) {
    .nav-dropdown:hover .dropdown-menu {
      display: block;
      opacity: 1;
      transform: translateY(0);
    }
  }

  .nav-dropdown .dropdown-item {
    font-family: 'Outfit', sans-serif;
    font-size: .9rem;
    font-weight: 500;
    color: rgba(255,255,255,.8);
    padding: .75rem 1.2rem;
    border-radius: 8px;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    gap: .8rem;
  }

  .nav-dropdown .dropdown-item:hover,
  .nav-dropdown .dropdown-item.active {
    background: rgba(255,255,255,.05);
    color: var(--gold);
    padding-left: 1.5rem;
  }

  .offcanvas-start {
    width: 300px !important;
    background: #fff !important;
  }

  .offcanvas-header {
    border-bottom: 1px solid rgba(0,0,0,.08);
    padding: 1.5rem;
  }

  .mobile-nav-link {
    display: block;
    font-family: 'Outfit', sans-serif;
    font-size: .95rem;
    font-weight: 500;
    color: #0F0F0F;
    text-decoration: none;
    padding: .9rem 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,.08);
    transition: color .35s cubic-bezier(.4,0,.2,1), padding-left .35s cubic-bezier(.4,0,.2,1);
  }

  .mobile-nav-link:hover,
  .mobile-nav-link.active {
    color: var(--red);
    padding-left: 2rem;
  }

  .mobile-nav-sub {
    padding-left: 1rem;
    border-left: 2px solid rgba(0,0,0,.08);
    margin-left: 1.5rem;
    margin-bottom: .5rem;
  }

  .mobile-sub-link {
    display: block;
    padding: .6rem 0;
    font-size: .85rem;
    color: var(--muted);
    text-decoration: none;
  }

  .mobile-sub-link.active,
  .mobile-sub-link:hover {
    color: var(--red);
  }

  .fade-up {
    margin-top: 0;
  }

  .f-logo {
    display: block;
    height: 72px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .footer-brand {
    max-width: 360px;
  }

  .footer-tagline {
    line-height: 1.8;
    margin: 0 0 1.4rem;
  }

  .footer-socials {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .social-btn {
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,.14);
    background: rgba(255,255,255,.06);
    transition: transform .25s ease, background .25s ease, color .25s ease, border-color .25s ease;
  }

  .social-btn:hover {
    color: #111;
    background: var(--gold);
    border-color: var(--gold);
    transform: translateY(-2px);
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li + li {
    margin-top: 0.75rem;
  }

  .footer-links a,
  .footer-contact-text a,
  .footer-bottom-links a {
    color: rgba(255,255,255,.72);
    text-decoration: none;
    transition: color .25s ease;
  }

  .footer-links a:hover,
  .footer-contact-text a:hover,
  .footer-bottom-links a:hover {
    color: var(--gold);
  }

  .footer-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
  }

  .footer-contact-item + .footer-contact-item {
    margin-top: 1rem;
  }

  .footer-contact-icon {
    color: var(--gold);
    margin-top: 0.15rem;
    font-size: 1rem;
    flex-shrink: 0;
  }

  .footer-contact-text {
    line-height: 1.7;
    color: rgba(255,255,255,.76);
  }

  .footer-newsletter {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .footer-newsletter input {
    flex: 1 1 220px;
    min-width: 0;
    height: 48px;
    border: 1px solid rgba(255,255,255,.14);
    background: rgba(255,255,255,.06);
    color: #fff;
    padding: 0 1rem;
    outline: none;
  }

  .footer-newsletter input::placeholder {
    color: rgba(255,255,255,.5);
  }

  .footer-newsletter button {
    height: 48px;
    border: none;
    padding: 0 1.2rem;
    background: var(--gold);
    color: #111;
    font-weight: 700;
    cursor: pointer;
    transition: background .25s ease, transform .25s ease;
  }

  .footer-newsletter button:hover {
    background: var(--gold-light);
    transform: translateY(-1px);
  }

  .footer-bottom {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255,255,255,.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .footer-bottom-text {
    color: rgba(255,255,255,.72);
  }

  .footer-bottom-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 575px) {
    .f-logo {
      height: 58px;
    }

    .footer-newsletter {
      flex-direction: column;
    }

    .footer-newsletter button,
    .footer-newsletter input {
      width: 100%;
    }
  }

  @media (max-width: 991px) {
    #topBar {
      display: none;
    }

    #mainNav {
      top: 0;
    }
  }
</style>
`;

const MAAC_TOPBAR = `
<div id="topBar" role="banner" aria-label="Contact information">
  <div class="container-xl">
    <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap">
      <div class="d-flex align-items-center gap-4">
        <span><i class="bi bi-geo-alt-fill me-1" style="color:var(--gold);"></i>RDC Rajnagar, Ghaziabad, UP 201002</span>
        <span class="d-none d-md-inline"><i class="bi bi-envelope-fill me-1" style="color:var(--gold);"></i>maacrdcghaziabad@gmail.com</span>
      </div>
      <div class="d-flex align-items-center gap-3">
        <a href="tel:+917840002724" style="color:var(--gold);text-decoration:none;font-size:.72rem;font-weight:600;">
          <i class="bi bi-telephone-fill me-1"></i>+91 784 000 2724
        </a>
        <a href="tel:+917840002725" style="color:var(--gold);text-decoration:none;font-size:.72rem;font-weight:600;">
          <i class="bi bi-telephone-fill me-1"></i>+91 784 000 2725
        </a>
        <a href="about.html" style="color:rgba(255,255,255,.6);text-decoration:none;font-size:.72rem;" class="d-none d-sm-inline">FAQs</a>
        <a href="courses.html" style="color:rgba(255,255,255,.6);text-decoration:none;font-size:.72rem;" class="d-none d-sm-inline">All Courses</a>
      </div>
    </div>
  </div>
</div>
`;

const MAAC_NAVBAR = `
<nav id="mainNav" role="navigation" aria-label="Main navigation">
  <div class="container-xl">
    <div class="d-flex align-items-center justify-content-between gap-3">
      <a href="index.html" aria-label="MAAC Ghaziabad RDC Home">
        <img src="Images/logo_white.png"
             alt="MAAC Ghaziabad RDC Logo"
             class="nav-logo-img"
             id="navLogo"
             onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'160\\' height=\\'50\\' viewBox=\\'0 0 160 50\\'%3E%3Crect width=\\'160\\' height=\\'50\\' fill=\\'%230F0F0F\\'/%3E%3Ctext x=\\'10\\' y=\\'32\\' font-family=\\'Georgia\\' font-size=\\'22\\' font-weight=\\'bold\\' fill=\\'%23D4AF37\\'%3EMAAC%3C/text%3E%3Ctext x=\\'60\\' y=\\'32\\' font-family=\\'Georgia\\' font-size=\\'22\\' font-weight=\\'bold\\' fill=\\'%23D2232A\\'%3E%3E%3E%3C/text%3E%3C/svg%3E'"/>
      </a>

      <ul class="d-none d-lg-flex align-items-center gap-4 list-unstyled mb-0">
        <li><a href="index.html" class="nav-link-custom" data-nav="home">Home</a></li>
        <li><a href="about.html" class="nav-link-custom" data-nav="about">About</a></li>
        <li class="nav-item dropdown nav-dropdown">
          <a class="nav-link-custom dropdown-toggle" href="courses.html" id="navCourses" role="button" data-nav="courses">
            Courses <i class="bi bi-chevron-down" style="font-size:.65rem;"></i>
          </a>
          <ul class="dropdown-menu fade-up" aria-labelledby="navCourses">
            <li><a class="dropdown-item" href="course-graphic-design.html">Graphic Design</a></li>
            <li><a class="dropdown-item" href="course-video-editing.html">Video Editing</a></li>
            <li><a class="dropdown-item" href="course-game-design.html">Game Design</a></li>
            <li><a class="dropdown-item" href="course-ar-vr.html">AR & VR</a></li>
            <li><a class="dropdown-item" href="course-broadcast.html">Broadcast</a></li>
            <li><a class="dropdown-item" href="course-3d-animation.html">3D Animation</a></li>
            <li><a class="dropdown-item" href="course-vfx.html">Visual Effects (VFX)</a></li>
            <li><a class="dropdown-item" href="course-digital-design.html">Digital Design</a></li>
            <li><a class="dropdown-item" href="course-short-term.html">Short Term Courses</a></li>
          </ul>
        </li>
        <li><a href="placements.html" class="nav-link-custom" data-nav="placements">Placements</a></li>
        <li><a href="gallery.html" class="nav-link-custom" data-nav="gallery">Gallery</a></li>
        <li><a href="contact.html" class="nav-link-custom" data-nav="contact">Contact</a></li>
      </ul>

      <div class="d-flex align-items-center gap-3">
        <a href="#enquiryModal" data-bs-toggle="modal" data-bs-target="#enquiryModal" class="btn-brand-red d-none d-md-inline-flex">
          <i class="bi bi-send"></i> Enquire Now
        </a>
        <button class="btn d-lg-none border-0 p-1 mobile-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-label="Open navigation menu" style="background:none;font-size:1.4rem;">
          <i class="bi bi-list"></i>
        </button>
      </div>
    </div>
  </div>
</nav>

<div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
  <div class="offcanvas-header">
    <img src="Images/logo_black.png" alt="MAAC Ghaziabad RDC" height="42" id="mobileMenuLogo"
         onerror="this.onerror=null; this.style.display='none'; document.getElementById('mobileMenuFallback').style.display='block'"/>
    <span id="mobileMenuFallback" style="display:none;font-family:'Bebas Neue';font-size:1.4rem;color:var(--red);">MAAC Ghaziabad</span>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close menu"></button>
  </div>
  <div class="offcanvas-body p-0">
    <a href="index.html" class="mobile-nav-link" data-nav="home">Home</a>
    <a href="about.html" class="mobile-nav-link" data-nav="about">About Us</a>
    <a href="courses.html" class="mobile-nav-link" data-nav="courses">Courses</a>
    <div class="mobile-nav-sub">
      <a href="course-graphic-design.html" class="mobile-sub-link">Graphic Design</a>
      <a href="course-video-editing.html" class="mobile-sub-link">Video Editing</a>
      <a href="course-game-design.html" class="mobile-sub-link">Game Design</a>
      <a href="course-3d-animation.html" class="mobile-sub-link">3D Animation</a>
      <a href="course-vfx.html" class="mobile-sub-link">Visual Effects (VFX)</a>
      <a href="course-digital-design.html" class="mobile-sub-link">Digital Design</a>
      <a href="course-ar-vr.html" class="mobile-sub-link">AR & VR</a>
      <a href="course-broadcast.html" class="mobile-sub-link">Broadcast</a>
      <a href="course-short-term.html" class="mobile-sub-link">Short Term Courses</a>
    </div>
    <a href="placements.html" class="mobile-nav-link" data-nav="placements">Placements</a>
    <a href="gallery.html" class="mobile-nav-link" data-nav="gallery">Gallery</a>
    <a href="contact.html" class="mobile-nav-link" data-nav="contact">Contact</a>
    <div style="padding:1.5rem;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:.8rem;">
      <a href="#enquiryModal" data-bs-toggle="modal" data-bs-target="#enquiryModal" data-bs-dismiss="offcanvas" class="btn-brand-red justify-content-center">
        <i class="bi bi-send"></i> Enquire Now
      </a>
      <a href="tel:+917840002724" class="btn-outline-dark justify-content-center">
        <i class="bi bi-telephone"></i> Call Us
      </a>
    </div>
  </div>
</div>
`;

const MAAC_FOOTER = `
<footer id="mainFooter" role="contentinfo" aria-labelledby="footerHeading">
  <h2 id="footerHeading" class="visually-hidden">Footer Site Information</h2>
  <div class="container-xl">
    <div class="row g-5">
      <div class="col-lg-4 col-md-6">
        <div class="footer-brand">
          <img src="Images/logo_white.png"
               alt="MAAC Ghaziabad RDC Maya Academy of Advanced Creativity"
               class="f-logo"
               onerror="this.onerror=null;this.style.display='none';document.getElementById('footerLogoFb').style.display='block'"/>
          <div id="footerLogoFb" style="display:none;font-family:'Bebas Neue';font-size:2rem;color:var(--gold);margin-bottom:1rem;">MAAC Ghaziabad</div>
          <p class="footer-tagline">
            Maya Academy of Advanced Creativity - India's premier institute
            for Animation, VFX, Gaming & Design. Ghaziabad RDC centre.
          </p>
          <div class="footer-socials" aria-label="Social media links">
            <a href="#" class="social-btn" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-btn" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-btn" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            <a href="#" class="social-btn" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-3 col-lg-2">
        <h3 class="footer-heading">Quick Links</h3>
        <ul class="footer-links" role="list">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="courses.html">All Courses</a></li>
          <li><a href="placements.html">Placements</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 col-lg-2">
        <h3 class="footer-heading">Courses</h3>
        <ul class="footer-links" role="list">
          <li><a href="course-vfx.html">ADVFX Plus</a></li>
          <li><a href="course-3d-animation.html">AD3D Edge Plus</a></li>
          <li><a href="course-game-design.html">Game Design</a></li>
          <li><a href="course-graphic-design.html">Graphic Design</a></li>
          <li><a href="course-broadcast.html">Broadcast</a></li>
          <li><a href="course-short-term.html">Short Term Pro</a></li>
        </ul>
      </div>

      <div class="col-md-6 col-lg-4">
        <h3 class="footer-heading">Get in Touch</h3>
        <address style="font-style:normal;">
          <div class="footer-contact-item">
            <i class="bi bi-geo-alt-fill footer-contact-icon" aria-hidden="true"></i>
            <div class="footer-contact-text">RDC Rajnagar, Ghaziabad,<br/>Uttar Pradesh - 201002</div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-telephone-fill footer-contact-icon" aria-hidden="true"></i>
            <div class="footer-contact-text">
              <a href="tel:+917840002724">+91 784 000 2724</a> /
              <a href="tel:+917840002725">2725</a>
            </div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-envelope-fill footer-contact-icon" aria-hidden="true"></i>
            <div class="footer-contact-text">
              <a href="mailto:maacrdcghaziabad@gmail.com">maacrdcghaziabad@gmail.com</a>
            </div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-clock-fill footer-contact-icon" aria-hidden="true"></i>
            <div class="footer-contact-text">Mon-Sat: 9:00 AM - 7:00 PM</div>
          </div>
        </address>
        <h4 class="footer-heading mt-4">Stay Updated</h4>
        <div class="footer-newsletter">
          <input type="email" placeholder="Your email address" aria-label="Email for newsletter"/>
          <button type="button">Subscribe</button>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-text">
        &copy; <span id="footerYear"></span> MAAC Ghaziabad RDC. All rights reserved. |
        NSDC &amp; MESC Affiliated.
      </div>
      <nav class="footer-bottom-links" aria-label="Footer legal links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Sitemap</a>
      </nav>
    </div>
  </div>
</footer>
`;

(function () {
  if (!document.getElementById("maac-component-fonts")) {
    document.head.insertAdjacentHTML(
      "beforeend",
      MAAC_COMPONENT_FONTS.replace("<link ", '<link id="maac-component-fonts" ')
    );
  }

  if (!document.getElementById("maac-component-styles")) {
    document.head.insertAdjacentHTML("beforeend", MAAC_COMPONENT_STYLES);
  }

  const topbarPlaceholder = document.getElementById("topbar-placeholder");
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (topbarPlaceholder) {
    topbarPlaceholder.innerHTML = MAAC_TOPBAR;
  } else {
    const oldTopbar = document.getElementById("topBar");
    if (oldTopbar) oldTopbar.outerHTML = MAAC_TOPBAR;
  }

  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = MAAC_NAVBAR;
  } else {
    const oldNav = document.getElementById("mainNav");
    const oldMenu = document.getElementById("mobileMenu");
    if (oldNav) oldNav.outerHTML = MAAC_NAVBAR;
    if (oldMenu) oldMenu.remove();
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = MAAC_FOOTER;
  } else {
    const oldFooter = document.getElementById("mainFooter");
    if (oldFooter) oldFooter.outerHTML = MAAC_FOOTER;
  }

  const page = window.location.pathname.split("/").pop() || "index.html";
  const pageMap = {
    "index.html": "home",
    "about.html": "about",
    "courses.html": "courses",
    "course-graphic-design.html": "courses",
    "course-video-editing.html": "courses",
    "course-game-design.html": "courses",
    "course-ar-vr.html": "courses",
    "course-broadcast.html": "courses",
    "course-3d-animation.html": "courses",
    "course-vfx.html": "courses",
    "course-digital-design.html": "courses",
    "course-short-term.html": "courses",
    "placements.html": "placements",
    "gallery.html": "gallery",
    "contact.html": "contact"
  };

  const activeKey = pageMap[page];
  if (activeKey) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const isActive = link.getAttribute("data-nav") === activeKey;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  document.querySelectorAll(".dropdown-item, .mobile-sub-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
})();
