/**
 * GlowPro Sponsored Advertisement Widget
 * Premium floating video ad panel — vanilla ES6+ module (IIFE)
 */
(() => {
  'use strict';

  const STORAGE_KEY = 'glowproSponsoredAds';
  const STORAGE_TIME_KEY = 'glowproSponsoredAdsClosedAt';
  const COOLDOWN_MS = 24 * 60 * 60 * 1000;
  const ROTATION_MS = 12000;
  const SWIPE_THRESHOLD = 50;

  /** Inline fallback when fetch is unavailable (e.g. file://) */
  const WIDGET_HTML = `<aside id="glowpro-sponsored-widget" class="sponsored-widget" role="complementary" aria-label="Sponsored advertisements" hidden>
  <div class="sponsored-widget__panel" id="sponsoredPanel">
    <header class="sponsored-widget__header">
      <div class="sponsored-widget__header-left">
        <span class="sponsored-widget__badge">Advertisement</span>
        <span class="sponsored-widget__label">Sponsored</span>
      </div>
      <div class="sponsored-widget__header-actions">
        <button type="button" class="sponsored-widget__icon-btn" id="sponsoredMinimize" aria-label="Minimize sponsored ads">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
        <button type="button" class="sponsored-widget__icon-btn" id="sponsoredClose" aria-label="Close sponsored ads">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </button>
      </div>
    </header>
    <div class="sponsored-widget__body">
      <div class="sponsored-widget__viewport" id="sponsoredViewport">
        <div class="sponsored-widget__track" id="sponsoredTrack">
          <article class="sponsored-widget__slide is-active" data-index="0" aria-hidden="false">
            <div class="sponsored-widget__video-wrap">
              <video class="sponsored-widget__video" src="videos/noagentnaija.mp4" muted autoplay loop playsinline preload="auto" aria-label="NoAgentNaija advertisement video"></video>
              <div class="sponsored-widget__video-overlay">
                <div class="sponsored-widget__info">
                  <h3 class="sponsored-widget__title">NoAgentNaija</h3>
                  <p class="sponsored-widget__subtitle">Nigeria's Smart Property Marketplace</p>
                  <a href="https://noagentnaija.com.ng" target="_blank" rel="noopener noreferrer" class="sponsored-widget__cta">Visit Website
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
              <button type="button" class="sponsored-widget__overlay-play" aria-label="Play NoAgentNaija video">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <span class="sponsored-widget__duration" data-duration>0:00</span>
              <div class="sponsored-widget__video-controls">
                <button type="button" class="sponsored-widget__ctrl-btn sponsored-widget__play-btn" aria-label="Play or pause">
                  <svg class="icon-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <svg class="icon-pause" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" hidden><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
                </button>
                <div class="sponsored-widget__video-progress" role="progressbar" aria-label="Video progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                  <span class="sponsored-widget__video-progress-bar"></span>
                </div>
                <button type="button" class="sponsored-widget__ctrl-btn sponsored-widget__mute-btn" aria-label="Mute or unmute">
                  <svg class="icon-muted" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12A4.5 4.5 0 0012 7.97v3.79l2.48 2.48a4.5 4.5 0 001.97-1.97zM19.07 4.93l-1.41 1.41A7.96 7.96 0 0120 12a7.96 7.96 0 01-2.34 5.66l1.41 1.41A9.96 9.96 0 0022 12c0-2.74-1.1-5.22-2.93-7.07zM12 4.03v1.58a6.98 6.98 0 00-4.95 2.95L5.64 5.64A8.98 8.98 0 0112 4.03zM4.03 12A8.98 8.98 0 0112 19.97v1.58A10.98 10.98 0 013 12c0-1.85.46-3.58 1.27-5.11l1.41 1.41A6.98 6.98 0 004.03 12z"/></svg>
                  <svg class="icon-unmuted" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" hidden><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                </button>
              </div>
            </div>
          </article>
          <article class="sponsored-widget__slide" data-index="1" aria-hidden="true">
            <div class="sponsored-widget__video-wrap">
              <video class="sponsored-widget__video" src="videos/luxerith.mp4" muted autoplay loop playsinline preload="auto" aria-label="Luxerith AI advertisement video"></video>
              <div class="sponsored-widget__video-overlay">
                <div class="sponsored-widget__info">
                  <h3 class="sponsored-widget__title">Luxerith AI</h3>
                  <p class="sponsored-widget__subtitle">AI Solutions for Modern Businesses</p>
                  <a href="https://cokercodes1.github.io/Software-Engineer/" target="_blank" rel="noopener noreferrer" class="sponsored-widget__cta">Explore Luxerith AI
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                  </a>
                </div>
              </div>
              <button type="button" class="sponsored-widget__overlay-play" aria-label="Play Luxerith AI video">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <span class="sponsored-widget__duration" data-duration>0:00</span>
              <div class="sponsored-widget__video-controls">
                <button type="button" class="sponsored-widget__ctrl-btn sponsored-widget__play-btn" aria-label="Play or pause">
                  <svg class="icon-play" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  <svg class="icon-pause" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" hidden><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
                </button>
                <div class="sponsored-widget__video-progress" role="progressbar" aria-label="Video progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                  <span class="sponsored-widget__video-progress-bar"></span>
                </div>
                <button type="button" class="sponsored-widget__ctrl-btn sponsored-widget__mute-btn" aria-label="Mute or unmute">
                  <svg class="icon-muted" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12A4.5 4.5 0 0012 7.97v3.79l2.48 2.48a4.5 4.5 0 001.97-1.97zM19.07 4.93l-1.41 1.41A7.96 7.96 0 0120 12a7.96 7.96 0 01-2.34 5.66l1.41 1.41A9.96 9.96 0 0022 12c0-2.74-1.1-5.22-2.93-7.07zM12 4.03v1.58a6.98 6.98 0 00-4.95 2.95L5.64 5.64A8.98 8.98 0 0112 4.03zM4.03 12A8.98 8.98 0 0112 19.97v1.58A10.98 10.98 0 013 12c0-1.85.46-3.58 1.27-5.11l1.41 1.41A6.98 6.98 0 004.03 12z"/></svg>
                  <svg class="icon-unmuted" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" hidden><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="sponsored-widget__rotation-progress" role="progressbar" aria-label="Time until next advertisement" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
        <span class="sponsored-widget__rotation-progress-bar" id="sponsoredRotationBar"></span>
      </div>
      <div class="sponsored-widget__dots" id="sponsoredDots" role="tablist" aria-label="Select advertisement">
        <button type="button" class="sponsored-widget__dot is-active" role="tab" aria-selected="true" aria-label="NoAgentNaija" data-index="0"></button>
        <button type="button" class="sponsored-widget__dot" role="tab" aria-selected="false" aria-label="Luxerith AI" data-index="1"></button>
      </div>
    </div>
    <a href="https://wa.link/z7n125" target="_blank" rel="noopener noreferrer" class="sponsored-widget__place-ads">
      <span class="sponsored-widget__place-ads-icon" aria-hidden="true">📢</span> Place Your Ads
    </a>
  </div>
  <button type="button" class="sponsored-widget__collapsed" id="sponsoredCollapsed" aria-label="Expand sponsored ads">
    <span class="sponsored-widget__collapsed-icon" aria-hidden="true">▶</span> Sponsored Ads
  </button>
</aside>`;

  /** @returns {boolean} */
  function isCooldownActive() {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== 'closed') return false;
      const closedAt = parseInt(localStorage.getItem(STORAGE_TIME_KEY) || '0', 10);
      if (!closedAt) return true;
      if (Date.now() - closedAt >= COOLDOWN_MS) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STORAGE_TIME_KEY);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  /** @returns {Promise<HTMLElement|null>} */
  async function injectWidget() {
    if (document.getElementById('glowpro-sponsored-widget')) {
      return document.getElementById('glowpro-sponsored-widget');
    }

    let html = WIDGET_HTML;
    try {
      const res = await fetch('components/sponsored-widget.html');
      if (res.ok) html = await res.text();
    } catch {
      /* file:// or network — use inline fallback */
    }

    const wrapper = document.createElement('div');
    wrapper.innerHTML = html.trim();
    const widget = wrapper.firstElementChild;
    if (!widget) return null;
    document.body.appendChild(widget);
    return widget;
  }

  class SponsoredWidget {
    /**
     * @param {HTMLElement} root
     */
    constructor(root) {
      this.root = root;
      this.slides = [...root.querySelectorAll('.sponsored-widget__slide')];
      this.dots = [...root.querySelectorAll('.sponsored-widget__dot')];
      this.rotationBar = root.querySelector('#sponsoredRotationBar');
      this.rotationProgress = root.querySelector('.sponsored-widget__rotation-progress');
      this.viewport = root.querySelector('#sponsoredViewport');
      this.currentIndex = 0;
      this.isMinimized = false;
      this.isHovered = false;
      this.isVisible = true;
      this.rotationStart = 0;
      this.rotationElapsed = 0;
      this.rotationRaf = null;
      this.rotationTimeout = null;
      this.touchStartX = 0;
      this.touchStartY = 0;
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.bindEvents();
      this.show();
      this.setupIntersectionObserver();
      this.setupWidgetHeightObserver();
      this.goToSlide(0, false);
      this.startRotation();
      this.preloadAllVideos();
    }

    bindEvents() {
      const minimizeBtn = this.root.querySelector('#sponsoredMinimize');
      const closeBtn = this.root.querySelector('#sponsoredClose');
      const collapsedBtn = this.root.querySelector('#sponsoredCollapsed');

      minimizeBtn?.addEventListener('click', () => this.minimize());
      closeBtn?.addEventListener('click', () => this.close());
      collapsedBtn?.addEventListener('click', () => this.restore());

      this.dots.forEach((dot) => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.dataset.index || '0', 10);
          this.pauseRotation();
          this.goToSlide(idx, true);
          this.resetRotation(true);
        });
      });

      this.root.addEventListener('mouseenter', () => {
        this.isHovered = true;
        this.pauseRotation();
      });

      this.root.addEventListener('mouseleave', () => {
        this.isHovered = false;
        if (!this.isMinimized) this.resumeRotation();
      });

      this.root.addEventListener('focusin', () => {
        this.isHovered = true;
        this.pauseRotation();
      });

      this.root.addEventListener('focusout', (e) => {
        if (!this.root.contains(e.relatedTarget)) {
          this.isHovered = false;
          if (!this.isMinimized) this.resumeRotation();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || this.root.hidden) return;
        if (!this.isMinimized) this.minimize();
      });

      this.slides.forEach((slide) => this.bindSlideControls(slide));
      this.bindTouchGestures();
    }

    /**
     * @param {HTMLElement} slide
     */
    bindSlideControls(slide) {
      const video = slide.querySelector('.sponsored-widget__video');
      const overlay = slide.querySelector('.sponsored-widget__overlay-play');
      const playBtn = slide.querySelector('.sponsored-widget__play-btn');
      const muteBtn = slide.querySelector('.sponsored-widget__mute-btn');
      const progressBar = slide.querySelector('.sponsored-widget__video-progress-bar');
      const progressWrap = slide.querySelector('.sponsored-widget__video-progress');
      const durationEl = slide.querySelector('[data-duration]');
      if (!video) return;

      const updatePlayIcons = (playing) => {
        const playIcon = playBtn?.querySelector('.icon-play');
        const pauseIcon = playBtn?.querySelector('.icon-pause');
        if (playIcon) playIcon.hidden = playing;
        if (pauseIcon) pauseIcon.hidden = !playing;
        overlay?.classList.toggle('is-visible', !playing);
      };

      const updateMuteIcons = () => {
        const mutedIcon = muteBtn?.querySelector('.icon-muted');
        const unmutedIcon = muteBtn?.querySelector('.icon-unmuted');
        if (mutedIcon) mutedIcon.hidden = !video.muted;
        if (unmutedIcon) unmutedIcon.hidden = video.muted;
      };

      const togglePlay = () => {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      };

      overlay?.addEventListener('click', togglePlay);
      playBtn?.addEventListener('click', togglePlay);

      muteBtn?.addEventListener('click', () => {
        video.muted = !video.muted;
        updateMuteIcons();
      });

      video.addEventListener('play', () => updatePlayIcons(true));
      video.addEventListener('pause', () => updatePlayIcons(false));
      video.addEventListener('loadedmetadata', () => {
        if (durationEl) durationEl.textContent = formatTime(video.duration);
      });

      video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const pct = (video.currentTime / video.duration) * 100;
        if (progressBar) progressBar.style.width = `${pct}%`;
        if (progressWrap) progressWrap.setAttribute('aria-valuenow', String(Math.round(pct)));
      });

      updateMuteIcons();
      updatePlayIcons(false);
    }

    bindTouchGestures() {
      if (!this.viewport) return;

      this.viewport.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
        this.touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      this.viewport.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].screenX - this.touchStartX;
        const dy = e.changedTouches[0].screenY - this.touchStartY;
        if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) this.nextSlide();
        else this.prevSlide();
        this.pauseRotation();
        this.resetRotation(true);
      }, { passive: true });
    }

    setupIntersectionObserver() {
      if (!('IntersectionObserver' in window)) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.isVisible = entry.isIntersecting;
            if (entry.isIntersecting) {
              this.playActiveVideo();
            } else {
              this.pauseAllVideos();
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px' }
      );

      /* Observe after widget is visible so first callback is accurate */
      requestAnimationFrame(() => {
        this.isVisible = true;
        observer.observe(this.root);
      });
    }

    setupWidgetHeightObserver() {
      const panel = this.root.querySelector('.sponsored-widget__panel');
      const collapsed = this.root.querySelector('.sponsored-widget__collapsed');

      const updateHeight = () => {
        const el = this.isMinimized ? collapsed : panel;
        const height = el?.offsetHeight || 0;
        if (height > 0) {
          document.documentElement.style.setProperty('--sw-widget-height', height + 'px');
        }
      };

      updateHeight();

      if (typeof ResizeObserver !== 'undefined') {
        const ro = new ResizeObserver(updateHeight);
        if (panel) ro.observe(panel);
        if (collapsed) ro.observe(collapsed);
      }

      window.addEventListener('resize', updateHeight);
      this.updateWidgetHeight = updateHeight;
    }

    /**
     * @param {HTMLVideoElement} video
     * @returns {Promise<void>}
     */
    ensureVideoReady(video) {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute('muted', '');
      video.playsInline = true;

      const src = video.getAttribute('src') || video.dataset.src;
      if (!src) return Promise.resolve();

      if (!video.getAttribute('src')) {
        video.setAttribute('src', src);
      }

      return new Promise((resolve) => {
        const done = () => {
          video.removeEventListener('canplay', done);
          video.removeEventListener('loadeddata', done);
          video.removeEventListener('error', done);
          resolve();
        };

        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && !video.error) {
          resolve();
          return;
        }

        video.addEventListener('canplay', done, { once: true });
        video.addEventListener('loadeddata', done, { once: true });
        video.addEventListener('error', done, { once: true });
        video.load();

        setTimeout(done, 4000);
      });
    }

    preloadAllVideos() {
      this.slides.forEach((slide) => {
        const video = slide.querySelector('.sponsored-widget__video');
        if (video) this.ensureVideoReady(video);
      });
    }

    preloadAdjacentVideos() {
      const nextIdx = (this.currentIndex + 1) % this.slides.length;
      const nextVideo = this.slides[nextIdx]?.querySelector('.sponsored-widget__video');
      if (nextVideo) this.ensureVideoReady(nextVideo);
    }

    pauseAllVideos() {
      this.slides.forEach((slide) => {
        const video = slide.querySelector('.sponsored-widget__video');
        video?.pause();
      });
    }

    async playActiveVideo() {
      if (!this.isVisible || this.isMinimized) return;

      const slide = this.slides[this.currentIndex];
      const video = slide?.querySelector('.sponsored-widget__video');
      if (!video) return;

      const overlay = slide.querySelector('.sponsored-widget__overlay-play');

      this.slides.forEach((s, i) => {
        if (i !== this.currentIndex) {
          s.querySelector('.sponsored-widget__video')?.pause();
        }
      });

      await this.ensureVideoReady(video);

      try {
        video.currentTime = 0;
        await video.play();
        overlay?.classList.remove('is-visible');
      } catch {
        /* Retry once after a short delay — fixes autoplay on slide switch */
        await new Promise((r) => setTimeout(r, 300));
        try {
          video.muted = true;
          await video.play();
          overlay?.classList.remove('is-visible');
        } catch {
          overlay?.classList.add('is-visible');
        }
      }
    }

    /**
     * @param {number} index
     * @param {boolean} animate
     */
    goToSlide(index, animate = true) {
      const next = ((index % this.slides.length) + this.slides.length) % this.slides.length;
      const prev = this.currentIndex;

      if (prev === next && animate) return;

      const prevSlide = this.slides[prev];
      const activeSlide = this.slides[next];

      if (prev !== next) {
        prevSlide?.querySelector('.sponsored-widget__video')?.pause();

        if (animate && !this.reducedMotion) {
          prevSlide?.classList.add('is-exiting');
          prevSlide?.classList.remove('is-active');
          setTimeout(() => prevSlide?.classList.remove('is-exiting'), 550);
        } else {
          prevSlide?.classList.remove('is-active');
        }

        prevSlide?.setAttribute('aria-hidden', 'true');
      }

      activeSlide.classList.add('is-active');
      activeSlide.setAttribute('aria-hidden', 'false');
      this.currentIndex = next;

      this.dots.forEach((dot, i) => {
        const isActive = i === next;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
      });

      /* Wait for slide transition, then autoplay */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.preloadAdjacentVideos();
          this.playActiveVideo();
          this.updateWidgetHeight?.();
        });
      });
    }

    nextSlide() {
      this.goToSlide(this.currentIndex + 1, true);
    }

    prevSlide() {
      this.goToSlide(this.currentIndex - 1, true);
    }

    startRotation() {
      this.stopRotationTimers();
      this.rotationElapsed = 0;
      this.rotationStart = performance.now();
      this.tickProgress();
      this.scheduleNextRotation(ROTATION_MS);
    }

    scheduleNextRotation(delay) {
      this.clearRotationTimeout();
      this.rotationTimeout = setTimeout(() => {
        this.rotationTimeout = null;
        if (!this.isHovered && !this.isMinimized) {
          this.nextSlide();
          this.resetRotation(false);
        }
        if (!this.isHovered && !this.isMinimized) {
          this.scheduleNextRotation(ROTATION_MS);
        }
      }, delay);
    }

    tickProgress() {
      if (this.rotationRaf) cancelAnimationFrame(this.rotationRaf);

      const step = (now) => {
        if (!this.isHovered && !this.isMinimized) {
          this.rotationElapsed = now - this.rotationStart;
          const pct = Math.min((this.rotationElapsed / ROTATION_MS) * 100, 100);

          if (this.rotationBar) this.rotationBar.style.width = `${pct}%`;
          if (this.rotationProgress) {
            this.rotationProgress.setAttribute('aria-valuenow', String(Math.round(pct)));
          }
        }

        this.rotationRaf = requestAnimationFrame(step);
      };

      this.rotationRaf = requestAnimationFrame(step);
    }

    clearRotationTimeout() {
      if (this.rotationTimeout) {
        clearTimeout(this.rotationTimeout);
        this.rotationTimeout = null;
      }
    }

    stopRotationTimers() {
      this.clearRotationTimeout();
      if (this.rotationRaf) {
        cancelAnimationFrame(this.rotationRaf);
        this.rotationRaf = null;
      }
    }

    resetRotation(restartTimer = true) {
      this.rotationElapsed = 0;
      this.rotationStart = performance.now();
      if (this.rotationBar) this.rotationBar.style.width = '0%';
      if (restartTimer && !this.isHovered && !this.isMinimized) {
        this.scheduleNextRotation(ROTATION_MS);
      }
    }

    pauseRotation() {
      this.clearRotationTimeout();
      this.rotationElapsed = performance.now() - this.rotationStart;
    }

    resumeRotation() {
      if (this.rotationTimeout) return;
      const remaining = Math.max(ROTATION_MS - this.rotationElapsed, 500);
      this.scheduleNextRotation(remaining);
      if (!this.rotationRaf) this.tickProgress();
    }

    show() {
      this.root.removeAttribute('hidden');
      document.body.classList.add('sponsored-widget--active');
      requestAnimationFrame(() => this.updateWidgetHeight?.());
    }

    minimize() {
      this.isMinimized = true;
      this.root.classList.add('is-minimized');
      document.body.classList.add('sponsored-widget--minimized');
      document.body.classList.remove('sponsored-widget--active');
      this.pauseAllVideos();
      this.stopRotationTimers();
      this.updateWidgetHeight?.();
    }

    restore() {
      this.isMinimized = false;
      this.root.classList.remove('is-minimized');
      document.body.classList.remove('sponsored-widget--minimized');
      document.body.classList.add('sponsored-widget--active');
      this.startRotation();
      this.playActiveVideo();
      this.updateWidgetHeight?.();
    }

    close() {
      try {
        localStorage.setItem(STORAGE_KEY, 'closed');
        localStorage.setItem(STORAGE_TIME_KEY, String(Date.now()));
      } catch {
        /* private browsing */
      }
      this.pauseAllVideos();
      this.stopRotationTimers();
      this.root.setAttribute('hidden', '');
      document.body.classList.remove('sponsored-widget--active', 'sponsored-widget--minimized');
    }
  }

  /**
   * @param {number} seconds
   * @returns {string}
   */
  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  async function init() {
    if (isCooldownActive()) return;

    /* Defer until after page paint */
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => boot(), { timeout: 2000 });
    } else {
      setTimeout(boot, 100);
    }
  }

  async function boot() {
    const widget = await injectWidget();
    if (!widget) return;
    new SponsoredWidget(widget);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
