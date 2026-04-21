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
  <a href="tel:+917840002725" class="btn-outline-dark justify-content-center">
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
          <div class="footer-socials" style="margin-top:20px" aria-label="Social media links">
            <a href="https://www.facebook.com/profile.php?id=61588161250891" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-fb" aria-label="Facebook">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/maacrdc/" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-insta" aria-label="Instagram">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a href="mailto:maacrdcghaziabad@gmail.com" class="fsoc fsoc-mail" aria-label="Email">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@MAACRDC" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-yt" aria-label="YouTube">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 6.2a2.99 2.99 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A2.99 2.99 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a2.99 2.99 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a2.99 2.99 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"></path>
              </svg>
            </a>
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
              <a href="tel:+917840002725">+91 784 000 2725</a> /
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

    <div class="footer-disclaimer">
      <div class="footer-disclaimer-label">Disclaimer</div>
      <p>
        This website (<a href="https://maacghaziabad.in/" target="_blank" rel="noopener">https://maacghaziabad.in/</a>) is not the official website of MAAC India. It is owned and operated by an authorized franchisee/business partner of MAAC (Maya Academy of Advanced Creativity), a registered trademark of MEL Training and Assessments Limited, a subsidiary of Aptech Ltd.
      </p>
      <p>
        All course content, curriculum, and related materials are the exclusive property of MEL Training and Assessments Limited. While every effort is made to ensure that the information provided on this website is accurate and up to date, inadvertent errors or outdated information may occasionally occur.
      </p>
      <p>
        The information presented is provided without any guarantee of completeness or absolute accuracy. Placement assistance may be offered as per the applicable program guidelines; however, employment or job placement is not guaranteed.
      </p>
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

const MAAC_LOCATION_SECTION = `
<section class="maac-location-section" aria-labelledby="maacLocationHeading">
  <div class="container-xl">
    <div class="text-center mb-4">
      <span class="sec-eyebrow">Find Us</span>
      <h2 class="sec-title sec-title-sm" id="maacLocationHeading">
        Visit <span style="color:var(--red);font-style:italic;">MAAC Ghaziabad RDC</span>
      </h2>
      <div class="divider-gold centered"></div>
    </div>

    <div class="maac-location-wrap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2682.0157295681743!2d77.43820905755561!3d28.676618715455938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1de7da8713d%3A0xeb9b2c5fad0a4aa7!2sMAAC%20Ghaziabad%20RDC%20Raj%20Nagar%20%7C%20Best%203D%20Animation%20%26%202D%20Animation%2C%20Graphic%20Designing%2C%20VFX%2C%20Video%20Editing%20Institute%20in%20Ghaziabad!5e1!3m2!1sen!2sin!4v1776686001967!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</section>
`;

const MAAC_ENQUIRY_MODAL = `
<div class="modal fade enquiry-modal" id="enquiryModal" tabindex="-1" role="dialog" aria-labelledby="enquiryModalLabel" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <div>
          <img src="Images/logo_white.png" alt="MAAC Ghaziabad RDC" height="36" onerror="this.style.display='none'"/>
          <div class="maac-enquiry-title">Request a Free Counselling</div>
        </div>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row g-4">
          <div class="col-lg-5 d-none d-lg-flex flex-column justify-content-center maac-enquiry-aside">
            <span class="sec-eyebrow" style="margin-bottom:.8rem;">Why Enquire?</span>
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:700;margin-bottom:1rem;">Get personalised guidance - <span style="color:var(--red);font-style:italic;">free.</span></h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.7rem;">
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Free demo class booking</li>
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Course selection guidance</li>
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Fee structure & EMI info</li>
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Scholarship information</li>
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Callback within 24 hours</li>
            </ul>
          </div>
          <div class="col-lg-7">
            <form id="enquiryForm" novalidate>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label class="form-label-custom" for="enqFirstName">First Name *</label>
                  <input type="text" id="enqFirstName" class="form-control-custom" placeholder="First Name" required autocomplete="given-name"/>
                </div>
                <div class="col-sm-6">
                  <label class="form-label-custom" for="enqLastName">Last Name *</label>
                  <input type="text" id="enqLastName" class="form-control-custom" placeholder="Last Name" required autocomplete="family-name"/>
                </div>
                <div class="col-sm-6">
                  <label class="form-label-custom" for="enqPhone">Phone Number *</label>
                  <input type="tel" id="enqPhone" class="form-control-custom" placeholder="Phone Number" required autocomplete="tel"/>
                </div>
                <div class="col-sm-6">
                  <label class="form-label-custom" for="enqEmail">Email Address</label>
                  <input type="email" id="enqEmail" class="form-control-custom" placeholder="Email Address" autocomplete="email"/>
                </div>
                <div class="col-12">
                  <label class="form-label-custom" for="enqCourse">Course of Interest *</label>
                  <select id="enqCourse" class="form-control-custom" required style="cursor:pointer;">
                    <option value="">Select a programme...</option>
                    <option>VFX - ADVFX Plus</option>
                    <option>3D Animation - AD3DIGHP</option>
                    <option>3D Animation - D3D</option>
                    <option>Film Making - DAFM</option>
                    <option>Game Design</option>
                    <option>Graphic Design</option>
                    <option>Video Editing</option>
                    <option>AR & VR Design</option>
                    <option>Broadcast</option>
                    <option>Digital Design</option>
                    <option>Short Term Courses</option>
                    <option>Not Sure - Need Guidance</option>
                  </select>
                </div>
                <div class="col-12">
                  <label class="form-label-custom" for="enqMessage">Message (Optional)</label>
                  <textarea id="enqMessage" class="form-control-custom" rows="3" placeholder="Message" style="resize:none;"></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn-brand-red w-100 justify-content-center maac-enquiry-submit">
                    <i class="bi bi-send-fill"></i> Submit Enquiry - Get Free Callback
                  </button>
                  <div style="font-size:.72rem;color:var(--muted-2);text-align:center;margin-top:.7rem;">We respect your privacy. No spam. Callback within 24 hours.</div>
                </div>
              </div>
            </form>
            <div id="enquirySuccess" class="text-center" style="display:none;padding:3rem 1rem;">
              <i class="bi bi-check-circle-fill" style="font-size:3.5rem;color:var(--gold);display:block;margin-bottom:1rem;"></i>
              <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:700;margin-bottom:.5rem;">Enquiry Received!</h3>
              <p style="color:var(--muted);font-size:.9rem;">Our counsellor will call you within 24 hours.<br/>Check your email for a confirmation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
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

#mainFooter .footer-socials {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: .75rem !important;
  align-items: center !important;
}

#mainFooter .fsoc {
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
  background: rgba(255,255,255,.08) !important;
  border: 1px solid rgba(255,255,255,.1) !important;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease !important;
  box-shadow: 0 8px 20px rgba(0,0,0,.2) !important;
}

#mainFooter .fsoc svg {
  width: 18px !important;
  height: 18px !important;
  fill: #fff !important;
}

#mainFooter .fsoc:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 24px rgba(0,0,0,.26) !important;
}

#mainFooter .fsoc-fb {
  background: rgba(255,255,255,.08) !important;
}

#mainFooter .fsoc-insta {
  background: rgba(255,255,255,.08) !important;
}

#mainFooter .fsoc-mail {
  background: rgba(255,255,255,.08) !important;
}

#mainFooter .fsoc-yt {
  background: rgba(255,255,255,.08) !important;
}

#mainFooter .fsoc-fb:hover {
  background: #1877f2 !important;
  border-color: #1877f2 !important;
}

#mainFooter .fsoc-insta:hover {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%) !important;
  border-color: rgba(255,255,255,.18) !important;
}

#mainFooter .fsoc-mail:hover {
  background: #ea4335 !important;
  border-color: #ea4335 !important;
}

#mainFooter .fsoc-yt:hover {
  background: #ff0000 !important;
  border-color: #ff0000 !important;
}

#mainFooter .footer-disclaimer {
  margin-top: 2.2rem !important;
  padding: 1.25rem 1.35rem !important;
  border: 1px solid rgba(255,255,255,.08) !important;
  border-radius: 16px !important;
  background: rgba(255,255,255,.03) !important;
}

#mainFooter .footer-disclaimer p {
  margin: 0 0 .75rem !important;
  color: rgba(255,255,255,.68) !important;
  font-size: .78rem !important;
  line-height: 1.75 !important;
}

#mainFooter .footer-disclaimer p:last-child {
  margin-bottom: 0 !important;
}

#mainFooter .footer-disclaimer-label {
  display: inline-flex !important;
  align-items: center !important;
  gap: .5rem !important;
  margin-bottom: .85rem !important;
  color: var(--gold) !important;
  font-size: .7rem !important;
  font-weight: 800 !important;
  letter-spacing: .16em !important;
  text-transform: uppercase !important;
}

#mainFooter .footer-disclaimer-label::before {
  content: "" !important;
  width: 22px !important;
  height: 2px !important;
  background: linear-gradient(90deg, var(--gold), var(--red)) !important;
}

#mainFooter .footer-disclaimer a {
  color: var(--gold) !important;
  text-decoration: none !important;
}

#mainFooter .footer-disclaimer a:hover {
  color: #fff !important;
}

#mainFooter .footer-credit {
  margin: 0 !important;
  color: rgba(255,255,255,.76) !important;
  font-size: .8rem !important;
  font-weight: 600 !important;
  text-align: center !important;
  white-space: nowrap !important;
}

#mainFooter .footer-credit a {
  color: var(--gold) !important;
  text-decoration: none !important;
}

#mainFooter .footer-credit a:hover {
  color: #fff !important;
}

#mainFooter .footer-bottom {
  display: grid !important;
  grid-template-columns: 1fr auto 1fr !important;
  align-items: center !important;
  gap: 1rem !important;
}

#mainFooter .footer-bottom-text {
  justify-self: start !important;
}

#mainFooter .footer-bottom-links {
  justify-self: end !important;
}

.maac-location-section {
  background: #fff !important;
  padding: 5rem 0 0 !important;
}

.maac-location-wrap {
  position: relative !important;
  overflow: hidden !important;
  height: 460px !important;
  border-radius: 20px 20px 0 0 !important;
  border: 1px solid rgba(15,15,15,.08) !important;
  box-shadow: 0 16px 48px rgba(0,0,0,.08) !important;
}

.maac-location-wrap iframe {
  width: 100% !important;
  height: 100% !important;
  border: 0 !important;
  display: block !important;
}

.maac-location-card {
  position: absolute !important;
  top: 1.5rem !important;
  left: 1.5rem !important;
  max-width: 300px !important;
  padding: 1.15rem 1.2rem !important;
  border-radius: 16px !important;
  background: rgba(255,255,255,.92) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  box-shadow: 0 14px 40px rgba(0,0,0,.12) !important;
}

.maac-location-title {
  font-family: 'Bebas Neue', sans-serif !important;
  font-size: 1.2rem !important;
  letter-spacing: .08em !important;
  color: #101010 !important;
  margin-bottom: .55rem !important;
}

.maac-location-text {
  color: #6b7280 !important;
  font-size: .84rem !important;
  line-height: 1.7 !important;
  margin-bottom: .8rem !important;
}

.maac-location-meta {
  display: flex !important;
  flex-direction: column !important;
  gap: .45rem !important;
  margin-bottom: 1rem !important;
  color: #4b5563 !important;
  font-size: .78rem !important;
}

.maac-location-meta i {
  color: var(--gold) !important;
  margin-right: .35rem !important;
}

.maac-directions-btn {
  display: inline-flex !important;
  align-items: center !important;
  gap: .45rem !important;
  padding: .75rem 1rem !important;
  border-radius: 999px !important;
  background: var(--red) !important;
  color: #fff !important;
  text-decoration: none !important;
  font-size: .78rem !important;
  font-weight: 700 !important;
  letter-spacing: .06em !important;
  text-transform: uppercase !important;
  transition: transform .2s ease, background .2s ease !important;
}

.maac-directions-btn:hover {
  background: var(--red-dark) !important;
  color: #fff !important;
  transform: translateY(-2px) !important;
}

.enquiry-modal .modal-dialog {
  max-width: 860px !important;
  margin-top: 1.25rem !important;
  margin-bottom: 1.25rem !important;
}

.enquiry-modal .modal-content {
  border: 0 !important;
  border-radius: 18px !important;
  overflow: hidden !important;
}

.enquiry-modal {
  z-index: 20000 !important;
}

.enquiry-modal.show {
  display: block !important;
}

.modal-backdrop.show {
  z-index: 19990 !important;
}

.enquiry-modal .modal-header {
  background: #101010 !important;
  border-bottom: 0 !important;
  padding: 1rem 1.25rem !important;
}

.enquiry-modal .modal-header > div {
  width: 100% !important;
  text-align: center !important;
}

.enquiry-modal .modal-body {
  padding: 1.1rem !important;
  background: #fff !important;
}

.maac-enquiry-aside {
  background: var(--off-white, #f7f4ee) !important;
  border-radius: 14px !important;
  padding: 1.35rem !important;
}

.form-label-custom {
  display: block !important;
  margin-bottom: .4rem !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: .68rem !important;
  font-weight: 700 !important;
  letter-spacing: .1em !important;
  text-transform: uppercase !important;
  color: #6b7280 !important;
}

.form-control-custom {
  width: 100% !important;
  min-height: 50px !important;
  padding: .78rem .95rem !important;
  border-radius: 12px !important;
  border: 1px solid rgba(15,15,15,.1) !important;
  background: #fff !important;
  color: #101010 !important;
  font-family: 'Outfit', sans-serif !important;
  font-size: .9rem !important;
  box-shadow: none !important;
  transition: border-color .2s ease, box-shadow .2s ease !important;
}

textarea.form-control-custom {
  min-height: 92px !important;
}

.form-control-custom:focus {
  border-color: rgba(212,175,55,.9) !important;
  box-shadow: 0 0 0 3px rgba(212,175,55,.12) !important;
  outline: none !important;
}

.maac-enquiry-submit {
  padding: .9rem !important;
}

.enquiry-modal .sec-eyebrow {
  font-size: .68rem !important;
  letter-spacing: .18em !important;
}

.enquiry-modal .btn-close {
  transform: scale(.9);
}

.enquiry-modal .modal-header img {
  height: 30px !important;
  width: auto !important;
  margin: 0 auto !important;
  display: block !important;
}

.maac-enquiry-title {
  margin-top: .45rem !important;
  color: var(--gold) !important;
  font-size: .9rem !important;
  font-weight: 800 !important;
  letter-spacing: .16em !important;
  text-transform: uppercase !important;
  text-align: center !important;
}

.maac-enquiry-aside h3 {
  font-size: 1.18rem !important;
  line-height: 1.35 !important;
}

.maac-enquiry-aside li {
  font-size: .8rem !important;
}

.enquiry-modal .row.g-4 {
  --bs-gutter-y: 1rem !important;
  --bs-gutter-x: 1rem !important;
}

@media (max-width: 991px) {
  #topBar {
    display: none !important;
  }

  // Dynamically inject favicon across all pages if not present in the HTML
  if (!document.querySelector("link[rel~='icon']")) {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "Images/favicon.png";
    document.head.appendChild(favicon);
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

  .enquiry-modal .modal-body {
    padding: 1rem !important;
  }

  .enquiry-modal .modal-dialog {
    max-width: min(760px, calc(100vw - 1.5rem)) !important;
    margin-top: 1rem !important;
  }

  .maac-location-wrap {
    height: 360px !important;
  }

  #mainFooter .footer-bottom {
    grid-template-columns: 1fr !important;
    text-align: center !important;
  }

  #mainFooter .footer-bottom-text,
  #mainFooter .footer-bottom-links {
    justify-self: center !important;
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

  .enquiry-modal .modal-header {
    padding: .85rem .9rem !important;
  }

  .form-control-custom {
    min-height: 48px !important;
    font-size: .88rem !important;
  }

  textarea.form-control-custom {
    min-height: 84px !important;
  }

  .enquiry-modal .modal-dialog {
    max-width: calc(100vw - 1rem) !important;
    margin: .75rem auto !important;
  }

  .enquiry-modal .modal-content {
    border-radius: 14px !important;
  }

  .enquiry-modal .modal-body {
    padding: .85rem !important;
  }

  .maac-location-section {
    padding-top: 4.2rem !important;
  }

  .maac-location-wrap {
    height: 320px !important;
    border-radius: 18px 18px 0 0 !important;
  }

  .maac-location-card {
    top: 1rem !important;
    left: 1rem !important;
    right: 1rem !important;
    max-width: none !important;
    padding: .95rem 1rem !important;
  }

  #mainFooter .footer-disclaimer {
    padding: 1rem !important;
  }

  #mainFooter .footer-credit {
    white-space: normal !important;
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
  const page = window.location.pathname.split("/").pop() || "index.html";

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
    if (page !== "contact.html" && !document.getElementById("maacSharedLocation")) {
      footerPlaceholder.insertAdjacentHTML("beforebegin", `<div id="maacSharedLocation">${MAAC_LOCATION_SECTION}</div>`);
    }
    footerPlaceholder.innerHTML = MAAC_FOOTER;
  } else {
    const oldFooter = document.getElementById("mainFooter");
    if (oldFooter) oldFooter.outerHTML = MAAC_FOOTER;
  }

  const existingEnquiryModal = document.getElementById("enquiryModal");
  if (existingEnquiryModal) {
    existingEnquiryModal.outerHTML = MAAC_ENQUIRY_MODAL;
  } else {
    document.body.insertAdjacentHTML("beforeend", MAAC_ENQUIRY_MODAL);
  }

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

  const enquiryForm = document.getElementById("enquiryForm");
  const enquirySuccess = document.getElementById("enquirySuccess");
  if (enquiryForm && !enquiryForm.dataset.bound) {
    enquiryForm.dataset.bound = "true";
    enquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let isValid = true;
      enquiryForm.querySelectorAll("[required]").forEach((field) => {
        if (!field.value.trim()) {
          field.style.borderColor = "var(--red)";
          isValid = false;
          setTimeout(() => {
            field.style.borderColor = "";
          }, 2000);
        }
      });

      if (!isValid) return;

      enquiryForm.style.display = "none";
      if (enquirySuccess) {
        enquirySuccess.style.display = "block";
      }
    });
  }

  const setupAutoEnquiryModal = () => {
    const modalEl = document.getElementById("enquiryModal");
    if (!modalEl || typeof window.bootstrap === "undefined") return;

    const enquiryModal = new window.bootstrap.Modal(modalEl);
    const rootEl = document.documentElement;
    const autoPopupSessionKey = "maacEnquiryAutoShown";

    modalEl.addEventListener("show.bs.modal", () => {
      document.body.style.overflow = "hidden";
      rootEl.style.overflow = "hidden";
    });
    modalEl.addEventListener("hidden.bs.modal", () => {
      document.body.style.overflow = "";
      rootEl.style.overflow = "";
    });

    try {
      if (window.sessionStorage.getItem(autoPopupSessionKey) === "true") {
        return;
      }
    } catch (error) {
      // Ignore storage issues and continue with one-page fallback behavior.
    }

    window.setTimeout(() => {
      if (!modalEl.classList.contains("show")) {
        try {
          window.sessionStorage.setItem(autoPopupSessionKey, "true");
        } catch (error) {
          // Ignore storage issues and still show the popup once on this page.
        }
        enquiryModal.show();
      }
    }, 10000);
  };

  if (document.getElementById("enquiryModal")) {
    if (typeof window.bootstrap !== "undefined") {
      setupAutoEnquiryModal();
    } else {
      window.addEventListener("load", () => {
        setupAutoEnquiryModal();
      }, { once: true });
    }
  }
})();
