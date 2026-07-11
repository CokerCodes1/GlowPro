/**
 * GlowPro — Testimonial Slider
 */
(function () {
  'use strict';

  var testimonials = [
    {
      avatar: 'images/testimonials/' + encodeURIComponent('avatar o.png'),
      name: 'Adaeze Okonkwo',
      role: 'Facilities Manager',
      company: 'Shell Nigeria',
      text: 'GlowPro transformed our office environment. Their attention to detail and professional team exceeded every expectation. We have been using their services for over three years.'
    },
    {
      avatar: 'images/testimonials/' + encodeURIComponent('avatar t.png'),
      name: 'Ibrahim Musa',
      role: 'Operations Director',
      company: 'Dangote Group',
      text: 'For industrial-scale cleaning, GlowPro is unmatched. They handle our warehouse facilities with precision, safety compliance, and remarkable efficiency every single time.'
    },
    {
      avatar: 'images/testimonials/' + encodeURIComponent('avatar u.png'),
      name: 'Chioma Eze',
      role: 'HR Manager',
      company: 'UBA Plc',
      text: 'Our staff consistently compliments the cleanliness of our workspaces. GlowPro\'s eco-friendly approach aligns perfectly with our corporate sustainability goals.'
    }
  ];

  var viewport = document.getElementById('testimonialViewport');
  var track = document.getElementById('testimonialTrack');
  var dotsContainer = document.getElementById('testimonialDots');
  var prevBtn = document.querySelector('.testimonial-slider__arrow--prev');
  var nextBtn = document.querySelector('.testimonial-slider__arrow--next');
  var slider = document.getElementById('testimonialSlider');

  if (!track || !viewport) return;

  var current = 0;
  var autoplayTimer;
  var slideWidth = 0;

  function renderSlides() {
    track.innerHTML = testimonials.map(function (t) {
      return '<div class="testimonial-card" role="group" aria-roledescription="slide">' +
        '<img class="testimonial-card__avatar" src="' + t.avatar + '" alt="' + t.name + '" loading="lazy" width="80" height="80">' +
        '<div class="testimonial-card__stars" aria-label="5 stars">★★★★★</div>' +
        '<p class="testimonial-card__text">"' + t.text + '"</p>' +
        '<p class="testimonial-card__name">' + t.name + '</p>' +
        '<p class="testimonial-card__role">' + t.role + ', ' + t.company + '</p>' +
        '</div>';
    }).join('');

    dotsContainer.innerHTML = testimonials.map(function (_, i) {
      return '<button type="button" class="testimonial-slider__dot' + (i === 0 ? ' active' : '') + '" aria-label="Go to testimonial ' + (i + 1) + '" data-index="' + i + '"></button>';
    }).join('');
  }

  function updateLayout() {
    slideWidth = viewport.clientWidth;
    var cards = track.querySelectorAll('.testimonial-card');
    cards.forEach(function (card) {
      card.style.width = slideWidth + 'px';
      card.style.flexBasis = slideWidth + 'px';
    });
    goTo(current, false);
  }

  function goTo(index, animate) {
    current = (index + testimonials.length) % testimonials.length;
    if (animate === false) {
      track.style.transition = 'none';
    } else {
      track.style.transition = '';
    }
    track.style.transform = 'translateX(-' + (current * slideWidth) + 'px)';

    dotsContainer.querySelectorAll('.testimonial-slider__dot').forEach(function (dot, i) {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-current', i === current ? 'true' : 'false');
    });

    if (animate === false) {
      requestAnimationFrame(function () {
        track.style.transition = '';
      });
    }
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  renderSlides();
  updateLayout();
  startAutoplay();

  window.addEventListener('resize', function () {
    updateLayout();
  });

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(function () {
      updateLayout();
    }).observe(viewport);
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); startAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { next(); startAutoplay(); });

  dotsContainer.addEventListener('click', function (e) {
    var dot = e.target.closest('.testimonial-slider__dot');
    if (dot) {
      goTo(parseInt(dot.dataset.index, 10));
      startAutoplay();
    }
  });

  if (slider) {
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
  }

  var startX = 0;
  viewport.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener('touchend', function (e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
      startAutoplay();
    }
  }, { passive: true });

  window.addEventListener('load', updateLayout);
})();
