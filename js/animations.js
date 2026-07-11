/**
 * GlowPro — Scroll Animations & Parallax
 */
(function () {
  'use strict';

  /* Intersection Observer — reveal on scroll */
  function initReveal() {
    var reveals = document.querySelectorAll('.reveal, .reveal-scale, .reveal-blur');
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* Mouse parallax on hero */
  function initParallax() {
    var hero = document.querySelector('.hero');
    if (!hero) return;

    var parallaxEls = hero.querySelectorAll('[data-parallax]');
    var shapes = hero.querySelectorAll('.shape');

    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.dataset.parallax) || 0.03;
        el.style.transform = 'translate(' + (x * speed * 100) + 'px, ' + (y * speed * 100) + 'px)';
      });

      shapes.forEach(function (shape, i) {
        var speed = (i + 1) * 0.02;
        shape.style.transform = 'translate(' + (x * speed * 80) + 'px, ' + (y * speed * 80) + 'px)';
      });
    });
  }

  /* Hero sparkle particles */
  function initParticles() {
    var container = document.getElementById('heroParticles');
    if (!container) return;

    for (var i = 0; i < 30; i++) {
      var p = document.createElement('span');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
      p.style.animation = 'sparkle ' + (Math.random() * 3 + 2) + 's ease-in-out ' + (Math.random() * 5) + 's infinite';
      container.appendChild(p);
    }
  }

  /* CTA sparkles */
  function initCtaSparkles() {
    var container = document.getElementById('ctaSparkles');
    if (!container) return;

    for (var i = 0; i < 20; i++) {
      var s = document.createElement('span');
      s.className = 'particle';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      s.style.background = '#FFFFFF';
      s.style.animation = 'sparkle ' + (Math.random() * 4 + 3) + 's ease-in-out ' + (Math.random() * 6) + 's infinite';
      container.appendChild(s);
    }
  }

  /* Scroll progress */
  function initScrollProgress() {
    var bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    }, { passive: true });
  }

  window.reinitReveal = initReveal;

  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initParallax();
    initParticles();
    initCtaSparkles();
    initScrollProgress();
  });

  window.addEventListener('glowpro:rendered', initReveal);
})();
