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

const MAAC_SHARED_SHELL_CSS = `
#topBar {
  background: transparent !important;
  color: #fff !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: .72rem !important;
  font-weight: 400 !important;
  letter-spacing: .04em !important;
  padding: .4rem 0 !important;
  position: fixed !important;
  inset: 0 0 auto 0 !important;
  z-index: 10000 !important;
  transition: transform .35s cubic-bezier(.4,0,.2,1) !important;
}

#topBar.scrolled {
  transform: translateY(-100%) !important;
}

#mainNav {
  position: fixed !important;
  top: 36px !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 9999 !important;
  padding: 1.2rem 0 !important;
  background: transparent !important;
  transition: all .35s cubic-bezier(.4,0,.2,1) !important;
}

#mainNav.scrolled {
  top: 0 !important;
  background: rgba(255,255,255,.78) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(0,0,0,.06) !important;
  box-shadow: 0 4px 24px rgba(0,0,0,.08) !important;
  padding: .72rem 0 !important;
}

#mainNav .nav-logo-img {
  display: block !important;
  height: 56px !important;
  width: auto !important;
  max-width: 100% !important;
  transition: height .3s ease !important;
}

#mainNav.scrolled .nav-logo-img {
  height: 48px !important;
}

#mainNav .nav-link-custom {
  font-family: 'Outfit', sans-serif !important;
  font-size: .84rem !important;
  font-weight: 700 !important;
  letter-spacing: .08em !important;
  color: #fff !important;
  text-transform: uppercase !important;
}

#mainNav.scrolled .nav-link-custom,
#mainNav.scrolled .mobile-toggle {
  color: #0F0F0F !important;
}

#mainNav .nav-link-custom:hover,
#mainNav .nav-link-custom.active {
  color: var(--red) !important;
}

#mainNav .mobile-toggle {
  color: #fff !important;
}

#mainNav .btn-brand-red {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: .5rem !important;
  padding: .85rem 2rem !important;
  border-radius: 6px !important;
  font-size: .82rem !important;
  font-weight: 600 !important;
  letter-spacing: .08em !important;
  text-transform: uppercase !important;
}

#mainNav .dropdown-menu {
  margin-top: 0 !important;
}

#mainFooter .f-logo {
  display: block !important;
  height: 72px !important;
  width: auto !important;
  max-width: 100% !important;
  object-fit: contain !important;
}

@media (max-width: 991px) {
  #topBar {
    display: none !important;
  }

  #mainNav {
    top: 0 !important;
    padding: .9rem 0 !important;
  }

  #mainNav .nav-logo-img,
  #mainNav.scrolled .nav-logo-img {
    height: 44px !important;
  }

  #mainNav .btn-brand-red {
    padding: .78rem 1.2rem !important;
    font-size: .75rem !important;
  }
}

@media (max-width: 575px) {
  #mainNav {
    padding: .78rem 0 !important;
  }

  #mainNav .nav-logo-img,
  #mainNav.scrolled .nav-logo-img {
    height: 38px !important;
  }
}
`;

(function () {
  if (!document.getElementById("maac-shared-shell-css")) {
    const sharedStyle = document.createElement("style");
    sharedStyle.id = "maac-shared-shell-css";
    sharedStyle.textContent = MAAC_SHARED_SHELL_CSS;
    document.head.appendChild(sharedStyle);
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
