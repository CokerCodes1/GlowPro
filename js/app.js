/**
 * GlowPro Cleaning Services — Main Application
 */
(function () {
  'use strict';

  var WHATSAPP_URL = 'https://wa.link/x1tk8e';

  /* ── Services Data ── */
  var services = [
    { image: 'Gemini_Generated_Image_sszmn5sszmn5sszm.png', title: 'Industrial Cleaning', desc: 'Heavy-duty cleaning for factories, plants, and manufacturing facilities with specialized equipment.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-16 0H3' },
    { image: 'ChatGPT Image Jul 11, 2026, 06_28_15 AM.png', title: 'Office Cleaning', desc: 'Daily and deep office cleaning that keeps workspaces pristine, healthy, and productive.', icon: 'M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16' },
    { image: 'Gemini_Generated_Image_lj2q7nlj2q7nlj2q.png', title: 'School Cleaning', desc: 'Safe, thorough cleaning for classrooms, labs, and campuses to protect students and staff.', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422M12 14v7' },
    { image: 'ChatGPT Image Jul 11, 2026, 06_33_04 AM.png', title: 'Event Cleaning', desc: 'Pre and post-event cleaning for conferences, weddings, and corporate gatherings.', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { image: 'Gemini_Generated_Image_3jcnuo3jcnuo3jcn.png', title: 'Renovation Cleaning', desc: 'Post-renovation dust and debris removal to reveal your beautifully updated space.', icon: 'M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z' },
    { image: 'Gemini_Generated_Image_n86r5zn86r5zn86r.png', title: 'Home Cleaning', desc: 'Comprehensive residential cleaning tailored to your home\'s unique needs and schedule.', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3' },
    { image: 'Gemini_Generated_Image_n86r5zn86r5zn86r.png', title: 'Move In Cleaning', desc: 'Start fresh in your new home with our thorough move-in deep cleaning service.', icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' },
    { image: 'Gemini_Generated_Image_n86r5zn86r5zn86r.png', title: 'Move Out Cleaning', desc: 'Leave your former residence spotless and ready for the next occupant.', icon: 'M17 16l4-4m0 0l-4-4m4 4H7' },
    { image: 'Gemini_Generated_Image_3jcnuo3jcnuo3jcn.png', title: 'Post Construction Cleaning', desc: 'Remove construction dust, debris, and residue for a move-in ready finish.', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { image: 'Gemini_Generated_Image_vunegqvunegqvune.png', title: 'Warehouse Cleaning', desc: 'Large-scale warehouse and storage facility cleaning with industrial-grade solutions.', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { image: 'ChatGPT Image Jul 11, 2026, 06_28_15 AM.png', title: 'Floor Polishing', desc: 'Restore shine to marble, tile, and hardwood floors with expert polishing services.', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
    { image: 'Gemini_Generated_Image_vunegqvunegqvune.png', title: 'Sanitization Services', desc: 'Hospital-grade disinfection and sanitization for maximum health and safety protection.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
  ];

  var features = [
    { title: 'Professional Team', desc: 'Certified, background-checked cleaners trained to international standards.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { title: 'Eco Friendly Products', desc: 'Non-toxic, biodegradable cleaning solutions safe for people and the planet.', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' },
    { title: 'Affordable Pricing', desc: 'Competitive rates with transparent quotes and no hidden charges.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Fast Response', desc: 'Same-day and emergency cleaning available with rapid dispatch teams.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'Attention To Detail', desc: 'Every corner, surface, and crevice cleaned to perfection every time.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
    { title: 'Fully Insured', desc: 'Comprehensive liability insurance for complete peace of mind.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { title: '24/7 Support', desc: 'Round-the-clock customer support for scheduling and emergencies.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Guaranteed Satisfaction', desc: 'Not happy? We return and re-clean at no extra cost. That\'s our promise.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' }
  ];

  var gallery = [
    { img: 'ChatGPT Image Jul 11, 2026, 06_28_15 AM.png', title: 'Luxury Office', badge: 'Before / After' },
    { img: 'Gemini_Generated_Image_sszmn5sszmn5sszm.png', title: 'Hospital', badge: 'Before / After' },
    { img: 'Gemini_Generated_Image_vunegqvunegqvune.png', title: 'Warehouse', badge: 'Before / After' },
    { img: 'Gemini_Generated_Image_lj2q7nlj2q7nlj2q.png', title: 'School', badge: 'Before / After' },
    { img: 'Gemini_Generated_Image_n86r5zn86r5zn86r.png', title: 'Luxury Home', badge: 'Before / After' },
    { img: 'ChatGPT Image Jul 11, 2026, 06_33_04 AM.png', title: 'Event Hall', badge: 'Before / After' }
  ];

  /* ── Render Dynamic Content ── */
  function renderServices() {
    var grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = services.map(function (s, i) {
      return '<article class="service-card reveal' + (i % 3 === 1 ? ' reveal--delay' : i % 3 === 2 ? ' reveal--delay-2' : '') + '">' +
        '<img class="service-card__img" src="images/services/' + encodeURIComponent(s.image) + '" alt="' + s.title + '" loading="lazy" width="320" height="240">' +
        '<div class="service-card__body">' +
        '<div class="service-card__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="' + s.icon + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
        '<h3>' + s.title + '</h3>' +
        '<p>' + s.desc + '</p>' +
        '<a href="' + WHATSAPP_URL + '" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">Book Now</a>' +
        '</div></article>';
    }).join('');

    if (window.reinitReveal) window.reinitReveal();
  }

  function renderFeatures() {
    var grid = document.getElementById('featuresGrid');
    if (!grid) return;

    grid.innerHTML = features.map(function (f, i) {
      return '<div class="feature-card reveal' + (i % 2 ? ' reveal--delay' : '') + ' hover-glow">' +
        '<div class="feature-card__icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="' + f.icon + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' +
        '<h3>' + f.title + '</h3>' +
        '<p>' + f.desc + '</p></div>';
    }).join('');
  }

  function renderGallery() {
    var grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = gallery.map(function (g, i) {
      return '<div class="gallery-card reveal' + (i % 3 === 1 ? ' reveal--delay' : i % 3 === 2 ? ' reveal--delay-2' : '') + '">' +
        '<img src="images/services/' + encodeURIComponent(g.img) + '" alt="' + g.title + ' cleaning project" loading="lazy" width="400" height="300">' +
        '<div class="gallery-card__overlay">' +
        '<span class="gallery-card__badge">' + g.badge + '</span>' +
        '<h4>' + g.title + '</h4></div></div>';
    }).join('');
  }

  /* ── Logo Marquee Duplicate ── */
  function initMarquee() {
    var track = document.getElementById('logoMarquee');
    if (!track) return;
    var group = track.querySelector('.marquee__group');
    if (group) {
      var clone = group.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    }
  }

  /* ── Sticky Navbar ── */
  function initNavbar() {
    var header = document.getElementById('header');
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');
    var links = document.querySelectorAll('.nav__link');
    var overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    function closeMenu() {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('active', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
      overlay.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    overlay.addEventListener('click', closeMenu);
    links.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    /* Active link on scroll */
    var sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY + 120;
      sections.forEach(function (section) {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          var id = section.getAttribute('id');
          links.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { passive: true });
  }

  /* ── Smooth Scroll ── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /* ── Video Autoplay (native-first, minimal JS fallback) ── */
  function initVideoAutoplay() {
    var videos = document.querySelectorAll('.video-card__video');
    if (!videos.length) return;

    function ensureMuted(video) {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute('muted', '');
      video.playsInline = true;
      video.setAttribute('playsinline', '');
    }

    function tryPlay(video) {
      ensureMuted(video);
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    }

    videos.forEach(function (video) {
      ensureMuted(video);
      tryPlay(video);

      video.addEventListener('loadeddata', function () { tryPlay(video); }, { once: true });
      video.addEventListener('canplaythrough', function () { tryPlay(video); }, { once: true });
    });

    window.addEventListener('load', function () {
      videos.forEach(tryPlay);
    });

    var loader = document.getElementById('loader');
    if (loader && 'MutationObserver' in window) {
      var loaderObserver = new MutationObserver(function () {
        if (loader.classList.contains('hidden')) {
          videos.forEach(tryPlay);
          loaderObserver.disconnect();
        }
      });
      loaderObserver.observe(loader, { attributes: true, attributeFilter: ['class'] });
    }
  }

  /* ── Accordion ── */
  function initAccordion() {
    document.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item = trigger.parentElement;
        var isActive = item.classList.contains('active');

        document.querySelectorAll('.accordion__item').forEach(function (el) {
          el.classList.remove('active');
          el.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ── Scroll To Top ── */
  function initScrollTop() {
    var btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Loading Screen ── */
  function initLoader() {
    var loader = document.getElementById('loader');
    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('hidden');
      }, 1600);
    });
  }

  /* ── Newsletter ── */
  function initNewsletter() {
    var form = document.querySelector('.newsletter');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      if (input.value) {
        alert('Thank you for subscribing! We\'ll keep you updated with GlowPro news and offers.');
        input.value = '';
      }
    });
  }

  /* ── Pricing Hover ── */
  function initPricingHover() {
    document.querySelectorAll('.pricing-card').forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        card.style.borderColor = '#1E88E5';
      });
      card.addEventListener('mouseleave', function () {
        if (!card.classList.contains('pricing-card--popular')) {
          card.style.borderColor = '';
        }
      });
    });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    renderServices();
    renderFeatures();
    renderGallery();
    initMarquee();
    initNavbar();
    initSmoothScroll();
    initVideoAutoplay();
    initAccordion();
    initScrollTop();
    initLoader();
    initNewsletter();
    initPricingHover();
    window.dispatchEvent(new Event('glowpro:rendered'));
  });
})();
