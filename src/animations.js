export function initAnimations(Reveal, gsap) {
  // Custom easing matching Google I/O style (smooth organic movement)
  const ioEase = "power3.out";
  const barEase = "power2.out";

  // Active timelines map to manage and reset animations properly
  const activeTimelines = {};

  // Kill and clear existing timeline if any
  function resetTimeline(stateName) {
    if (activeTimelines[stateName]) {
      activeTimelines[stateName].kill();
      delete activeTimelines[stateName];
    }
  }

  // Define animations for each slide state
  const animations = {
    'intro-cover': (slide) => {
      resetTimeline('intro-cover');
      const tl = gsap.timeline();
      activeTimelines['intro-cover'] = tl;

      // Select elements
      const logo = slide.querySelector('.intro-logo');
      const title = slide.querySelector('.intro-title');
      const subtitle = slide.querySelector('.intro-subtitle');
      const footer = slide.querySelector('.intro-footer');
      const mockup = slide.querySelector('.intro-mockup');
      const glow = slide.querySelector('.intro-glow');
      const orbit = slide.querySelector('.intro-orbit');

      // Setup initial states
      gsap.set([logo, title, subtitle, footer, mockup], { opacity: 0 });
      gsap.set([title, subtitle], { y: 30 });
      gsap.set(mockup, { x: -40 });
      gsap.set(glow, { opacity: 0, scale: 0.7 });
      if (orbit) gsap.set(orbit, { opacity: 0, scale: 0.85 });

      // Build timeline
      tl.to(logo, { opacity: 1, duration: 0.8, ease: ioEase })
        .to(mockup, { opacity: 1, x: 0, duration: 1.0, ease: ioEase }, "-=0.6")
        .to(glow, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, "-=1.0")
        .to(orbit, { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" }, "-=1.1")
        .to(title, { opacity: 1, y: 0, duration: 1.0, ease: ioEase }, "-=0.8")
        .to(subtitle, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, "-=0.6")
        .to(footer, { opacity: 1, duration: 0.6 }, "-=0.4");
    },

    'relation-1to1': (slide) => {
      resetTimeline('relation-1to1');
      const tl = gsap.timeline();
      activeTimelines['relation-1to1'] = tl;

      const header = slide.querySelector('.relation-header');
      const pill = slide.querySelector('.relation-pill');
      const title = slide.querySelector('.relation-title');
      const subtitle = slide.querySelector('.relation-subtitle');
      const lanes = slide.querySelectorAll('.relation-lane');
      const footer = slide.querySelector('.relation-footer');
      const lines = slide.querySelectorAll('.relation-connector-line');
      const badges = slide.querySelectorAll('.relation-connector-badge');
      const arrows = slide.querySelectorAll('.relation-connector-arrow');

      gsap.set([header, pill, title, subtitle, footer], { opacity: 0 });
      gsap.set(pill, { scale: 0.85 });
      gsap.set(title, { y: 24 });
      gsap.set(subtitle, { y: 16 });
      gsap.set(lanes, { opacity: 0, y: 36 });
      gsap.set(lines, { strokeDashoffset: 120 });
      gsap.set(badges, { scale: 0, opacity: 0 });
      gsap.set(arrows, { opacity: 0, x: -8 });

      tl.to(header, { opacity: 1, duration: 0.5, ease: ioEase })
        .to(pill, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.25")
        .to(title, { opacity: 1, y: 0, duration: 0.7, ease: ioEase }, "-=0.3")
        .to(subtitle, { opacity: 1, y: 0, duration: 0.5, ease: ioEase }, "-=0.45")
        .to(lanes, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.22,
          ease: ioEase,
          clearProps: "transform"
        }, "-=0.2")
        .to(lines, {
          strokeDashoffset: 0,
          duration: 0.9,
          stagger: 0.22,
          ease: barEase
        }, "-=0.55")
        .to(badges, {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          stagger: 0.22,
          ease: "back.out(2)"
        }, "-=0.7")
        .to(arrows, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.22,
          ease: ioEase
        }, "-=0.5")
        .to(footer, { opacity: 1, duration: 0.4 }, "-=0.15");
    },

    'prob-ecommerce': (slide) => {
      resetTimeline('prob-ecommerce');
      const tl = gsap.timeline();
      activeTimelines['prob-ecommerce'] = tl;

      const header = slide.querySelector('.prob-eco-header');
      const title = slide.querySelector('.prob-eco-title');
      const card = slide.querySelector('.prob-eco-card');
      const items = card.querySelectorAll('li');
      const warning = slide.querySelector('.prob-eco-warning');

      gsap.set([header, title, warning], { opacity: 0 });
      gsap.set(card, { opacity: 0, y: 40 });
      gsap.set(items, { opacity: 0, x: -20 });
      gsap.set(warning, { scale: 0.8 });

      tl.to(header, { opacity: 1, duration: 0.6, ease: ioEase })
        .to(title, { opacity: 1, duration: 0.7, ease: ioEase }, "-=0.3")
        .to(card, { opacity: 1, y: 0, duration: 0.8, ease: ioEase, clearProps: "transform" }, "-=0.4")
        .to(warning, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.6")
        .to(items, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: ioEase }, "-=0.6");
    },

    'prob-tracker': (slide) => {
      resetTimeline('prob-tracker');
      const tl = gsap.timeline();
      activeTimelines['prob-tracker'] = tl;

      const header = slide.querySelector('.prob-track-header');
      const title = slide.querySelector('.prob-track-title');
      const card = slide.querySelector('.prob-track-card');
      const items = card.querySelectorAll('li');
      const warning = slide.querySelector('.prob-track-warning');

      gsap.set([header, title, warning], { opacity: 0 });
      gsap.set(card, { opacity: 0, y: 40 });
      gsap.set(items, { opacity: 0, x: -20 });
      gsap.set(warning, { scale: 0.8 });

      tl.to(header, { opacity: 1, duration: 0.6, ease: ioEase })
        .to(title, { opacity: 1, duration: 0.7, ease: ioEase }, "-=0.3")
        .to(card, { opacity: 1, y: 0, duration: 0.8, ease: ioEase, clearProps: "transform" }, "-=0.4")
        .to(warning, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }, "-=0.6")
        .to(items, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: ioEase }, "-=0.6");
    },

    'eco-vision': (slide) => {
      resetTimeline('eco-vision');
      const tl = gsap.timeline();
      activeTimelines['eco-vision'] = tl;

      const header = slide.querySelector('.eco-vision-header');
      const title = slide.querySelector('.eco-vision-title');
      const cards = slide.querySelectorAll('.eco-vision-cards .farma-card');

      gsap.set([header, title], { opacity: 0 });
      gsap.set(cards, { opacity: 0, y: 40 });

      tl.to(header, { opacity: 1, duration: 0.6, ease: ioEase })
        .to(title, { opacity: 1, duration: 0.8, ease: ioEase }, "-=0.3")
        .to(cards, { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: ioEase,
          clearProps: "transform"
        }, "-=0.4");
    },

    'eco-cover': (slide) => {
      resetTimeline('eco-cover');
      const tl = gsap.timeline();
      activeTimelines['eco-cover'] = tl;

      const tag = slide.querySelector('.eco-tag');
      const title = slide.querySelector('.eco-title');
      const desc = slide.querySelector('.eco-desc');
      const inst = slide.querySelector('.eco-instruction');
      const scanLine = slide.querySelector('.eco-scanline');
      const iconBg = slide.querySelector('.eco-icon-bg');
      const accentBar = slide.querySelector('.eco-accent-bar');
      const particles = slide.querySelectorAll('[class*="eco-particle-"]');

      // Initial states
      gsap.set([tag, title, desc, inst], { opacity: 0 });
      gsap.set([title], { y: 40, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(desc, { y: 20 });
      gsap.set(scanLine, { opacity: 0, y: -2 });
      gsap.set(iconBg, { opacity: 0, x: 60, scale: 0.85 });
      gsap.set(accentBar, { width: '0%' });
      gsap.set(particles, { opacity: 0, scale: 0 });

      // Timeline: scan → icon → tag → title clip reveal → bar → desc → particles → instruction
      tl
        // 1. Fast scan line sweeps top to bottom
        .to(scanLine, { opacity: 1, duration: 0.1 })
        .to(scanLine, { y: '100vh', duration: 0.8, ease: 'power2.in' })
        .to(scanLine, { opacity: 0, duration: 0.1 }, '-=0.1')
        // 2. Ghost icon drifts in from right
        .to(iconBg, { opacity: 0.06, x: 0, scale: 1, duration: 1.6, ease: ioEase }, '-=0.5')
        // 3. Tag fades in
        .to(tag, { opacity: 1, duration: 0.5, ease: ioEase }, '-=1.2')
        // 4. Title reveals upward (clip-path)
        .to(title, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.0, ease: ioEase }, '-=0.3')
        // 5. Accent bar grows right
        .to(accentBar, { width: '280px', duration: 0.7, ease: 'power3.out' }, '-=0.5')
        // 6. Description fades up
        .to(desc, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, '-=0.4')
        // 7. Particles pop in staggered
        .to(particles, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(2)' }, '-=0.5')
        // 8. Instruction
        .to(inst, { opacity: 1, duration: 0.5 }, '-=0.2');
    },

    'eco-objectives': (slide) => {
      resetTimeline('eco-objectives');
      const tl = gsap.timeline();
      activeTimelines['eco-objectives'] = tl;

      const header = slide.querySelector('.eco-obj-header');
      const generalCard = slide.querySelector('.eco-obj-general');
      const specificCard = slide.querySelector('.eco-obj-specific');
      const generalItems = generalCard.querySelectorAll('li');
      const specificItems = specificCard.querySelectorAll('li');

      gsap.set(header, { opacity: 0 });
      gsap.set(generalCard, { opacity: 0, x: -50 });
      gsap.set(specificCard, { opacity: 0, x: 50 });
      gsap.set([generalItems, specificItems], { opacity: 0, x: -15 });

      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(generalCard, { opacity: 1, x: 0, duration: 0.8, ease: ioEase, clearProps: "transform" }, "-=0.3")
        .to(generalItems, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: ioEase }, "-=0.4")
        .to(specificCard, { opacity: 1, x: 0, duration: 0.8, ease: ioEase, clearProps: "transform" }, "-=0.6")
        .to(specificItems, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: ioEase }, "-=0.4");
    },

    'eco-tech': (slide) => {
      resetTimeline('eco-tech');
      const tl = gsap.timeline();
      activeTimelines['eco-tech'] = tl;

      const header = slide.querySelector('.eco-tech-header');
      const left = slide.querySelector('.eco-tech-left');
      const right = slide.querySelector('.eco-tech-right');

      if (left) {
        const internalCards = left.querySelectorAll('.grid > div');
        gsap.set([header, left, right], { opacity: 0 });
        gsap.set(left, { y: -30 });
        gsap.set(right, { y: 30 });
        gsap.set(internalCards, { opacity: 0, scale: 0.9 });

        tl.to(header, { opacity: 1, duration: 0.6 })
          .to([left, right], { opacity: 1, y: 0, duration: 0.8, ease: ioEase, stagger: 0.15 }, "-=0.3")
          .to(internalCards, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: ioEase }, "-=0.4");
      } else {
        gsap.set([header, right], { opacity: 0 });
        gsap.set(right, { y: 30 });

        tl.to(header, { opacity: 1, duration: 0.6 })
          .to(right, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, "-=0.3");
      }
    },

    'eco-gantt': (slide) => {
      resetTimeline('eco-gantt');
      const tl = gsap.timeline();
      activeTimelines['eco-gantt'] = tl;

      const header = slide.querySelector('.eco-gantt-header');
      const card = slide.querySelector('.eco-gantt-card');
      const bar1 = slide.querySelector('.gantt-bar-1');
      const bar2 = slide.querySelector('.gantt-bar-2');
      const bar3 = slide.querySelector('.gantt-bar-3');

      gsap.set(header, { opacity: 0 });
      gsap.set(card, { opacity: 0, y: 30 });
      gsap.set([bar1, bar2, bar3], { width: "0%" });

      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(card, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, "-=0.3")
        .to(bar1, { width: "22.2%", duration: 1, ease: barEase })
        .to(bar2, { width: "22.2%", duration: 1, ease: barEase }, "-=0.7")
        .to(bar3, { width: "55.6%", duration: 1.5, ease: barEase }, "-=0.7");
    },

    'tech-stack': (slide) => {
      resetTimeline('tech-stack');
      const tl = gsap.timeline();
      activeTimelines['tech-stack'] = tl;

      const header = slide.querySelector('.tech-stack-header');
      const title = slide.querySelector('.tech-stack-title');
      const ecoCard = slide.querySelector('.eco-stack-card');
      const trackCard = slide.querySelector('.track-stack-card');
      const laptopMockup = slide.querySelector('.tech-laptop-mockup');
      const phoneMockup = slide.querySelector('.tech-phone-mockup');

      gsap.set([header, title], { opacity: 0 });
      gsap.set(ecoCard, { opacity: 0, x: -40 });
      gsap.set(trackCard, { opacity: 0, x: 40 });
      gsap.set(laptopMockup, { opacity: 0, x: -100, rotate: -15 });
      gsap.set(phoneMockup, { opacity: 0, x: 100, rotate: 15 });

      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(title, { opacity: 1, duration: 0.7, ease: ioEase }, "-=0.3")
        .to(ecoCard, { opacity: 1, x: 0, duration: 0.8, ease: ioEase }, "-=0.4")
        .to(trackCard, { opacity: 1, x: 0, duration: 0.8, ease: ioEase }, "-=0.7")
        .to(laptopMockup, { opacity: 0.9, x: 0, rotate: -6, duration: 1.0, ease: ioEase }, "-=0.9")
        .to(phoneMockup, { opacity: 0.9, x: 0, rotate: 6, duration: 1.0, ease: ioEase }, "-=0.9");
    },

    'track-cover': (slide) => {
      resetTimeline('track-cover');
      const tl = gsap.timeline();
      activeTimelines['track-cover'] = tl;

      const tag = slide.querySelector('.track-tag');
      const title = slide.querySelector('.track-title');
      const desc = slide.querySelector('.track-desc');
      const inst = slide.querySelector('.track-instruction');
      const scanLine = slide.querySelector('.track-scanline');
      const iconBg = slide.querySelector('.track-icon-bg');
      const accentBar = slide.querySelector('.track-accent-bar');
      const particles = slide.querySelectorAll('[class*="track-particle-"]');

      // Initial states
      gsap.set([tag, title, desc, inst], { opacity: 0 });
      gsap.set([title], { y: 40, clipPath: 'inset(0 0 100% 0)' });
      gsap.set(desc, { y: 20 });
      gsap.set(scanLine, { opacity: 0, y: -2 });
      gsap.set(iconBg, { opacity: 0, x: 60, scale: 0.85 });
      gsap.set(accentBar, { width: '0%' });
      gsap.set(particles, { opacity: 0, scale: 0 });

      // Timeline: scan → icon → tag → title → bar → desc → particles → instruction
      tl
        // 1. Fast scan line sweeps top to bottom
        .to(scanLine, { opacity: 1, duration: 0.1 })
        .to(scanLine, { y: '100vh', duration: 0.8, ease: 'power2.in' })
        .to(scanLine, { opacity: 0, duration: 0.1 }, '-=0.1')
        // 2. Ghost icon drifts in from right
        .to(iconBg, { opacity: 0.06, x: 0, scale: 1, duration: 1.6, ease: ioEase }, '-=0.5')
        // 3. Tag fades in
        .to(tag, { opacity: 1, duration: 0.5, ease: ioEase }, '-=1.2')
        // 4. Title reveals upward (clip-path)
        .to(title, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.0, ease: ioEase }, '-=0.3')
        // 5. Accent bar grows right
        .to(accentBar, { width: '280px', duration: 0.7, ease: 'power3.out' }, '-=0.5')
        // 6. Description fades up
        .to(desc, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, '-=0.4')
        // 7. Particles pop in staggered
        .to(particles, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(2)' }, '-=0.5')
        // 8. Instruction
        .to(inst, { opacity: 1, duration: 0.5 }, '-=0.2');
    },

    'track-objectives': (slide) => {
      resetTimeline('track-objectives');
      const tl = gsap.timeline();
      activeTimelines['track-objectives'] = tl;

      const header = slide.querySelector('.track-obj-header');
      const generalCard = slide.querySelector('.track-obj-general');
      const specificCard = slide.querySelector('.track-obj-specific');
      const generalItems = generalCard.querySelectorAll('li');
      const specificItems = specificCard.querySelectorAll('li');

      gsap.set(header, { opacity: 0 });
      gsap.set(generalCard, { opacity: 0, x: -50 });
      gsap.set(specificCard, { opacity: 0, x: 50 });
      gsap.set([generalItems, specificItems], { opacity: 0, x: -15 });

      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(generalCard, { opacity: 1, x: 0, duration: 0.8, ease: ioEase, clearProps: "transform" }, "-=0.3")
        .to(generalItems, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: ioEase }, "-=0.4")
        .to(specificCard, { opacity: 1, x: 0, duration: 0.8, ease: ioEase, clearProps: "transform" }, "-=0.6")
        .to(specificItems, { opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: ioEase }, "-=0.4");
    },

    'track-tech': (slide) => {
      resetTimeline('track-tech');
      const tl = gsap.timeline();
      activeTimelines['track-tech'] = tl;

      const header = slide.querySelector('.track-tech-header');
      const left = slide.querySelector('.track-tech-left');
      const right = slide.querySelector('.track-tech-right');

      if (left) {
        const internalCards = left.querySelectorAll('.grid > div');
        gsap.set([header, left, right], { opacity: 0 });
        gsap.set(left, { y: -30 });
        gsap.set(right, { y: 30 });
        gsap.set(internalCards, { opacity: 0, scale: 0.9 });

        tl.to(header, { opacity: 1, duration: 0.6 })
          .to([left, right], { opacity: 1, y: 0, duration: 0.8, ease: ioEase, stagger: 0.15 }, "-=0.3")
          .to(internalCards, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: ioEase }, "-=0.4");
      } else {
        gsap.set([header, right], { opacity: 0 });
        gsap.set(right, { y: 30 });

        tl.to(header, { opacity: 1, duration: 0.6 })
          .to(right, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, "-=0.3");
      }
    },

    'track-gantt': (slide) => {
      resetTimeline('track-gantt');
      const tl = gsap.timeline();
      activeTimelines['track-gantt'] = tl;

      const header = slide.querySelector('.track-gantt-header');
      const card = slide.querySelector('.track-gantt-card');
      const bar4 = slide.querySelector('.gantt-bar-4');
      const bar5 = slide.querySelector('.gantt-bar-5');
      const bar6 = slide.querySelector('.gantt-bar-6');

      gsap.set(header, { opacity: 0 });
      gsap.set(card, { opacity: 0, y: 30 });
      gsap.set([bar4, bar5, bar6], { width: "0%" });

      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(card, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, "-=0.3")
        .to(bar4, { width: "33.3%", duration: 1, ease: barEase })
        .to(bar5, { width: "33.3%", duration: 1, ease: barEase }, "-=0.7")
        .to(bar6, { width: "33.3%", duration: 1, ease: barEase }, "-=0.7");
    },

    'design-cover': (slide) => {
      resetTimeline('design-cover');
      const tl = gsap.timeline();
      activeTimelines['design-cover'] = tl;

      const tag = slide.querySelector('.design-tag');
      const title = slide.querySelector('.design-title');
      const desc = slide.querySelector('.design-desc');
      const pen = slide.querySelector('.design-vector-pen');
      const palette = slide.querySelector('.design-vector-palette');
      const ruler = slide.querySelector('.design-vector-ruler');
      const layers = slide.querySelector('.design-vector-layers');
      const scanLine = slide.querySelector('.design-scanline');
      const accentBar = slide.querySelector('.design-accent-bar');

      gsap.set([tag, title, desc], { opacity: 0 });
      gsap.set(title, { y: 30, clipPath: 'inset(0 0 100% 0)' });
      gsap.set([pen, palette, ruler, layers], { opacity: 0, scale: 0.5, rotate: -25 });
      if (scanLine) gsap.set(scanLine, { opacity: 0, y: -2 });
      if (accentBar) gsap.set(accentBar, { width: '0%' });

      tl
        // Scan sweep
        .to(scanLine, { opacity: 1, duration: 0.1 })
        .to(scanLine, { y: '100vh', duration: 0.8, ease: 'power2.in' })
        .to(scanLine, { opacity: 0, duration: 0.1 }, '-=0.1')
        // Tag + Title clip reveal
        .to(tag, { opacity: 1, duration: 0.5, ease: ioEase }, '-=0.4')
        .to(title, { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.0, ease: ioEase }, '-=0.2')
        // Accent bar
        .to(accentBar, { width: '180px', duration: 0.7, ease: 'power3.out' }, '-=0.5')
        // Description
        .to(desc, { opacity: 1, duration: 0.8, ease: ioEase }, '-=0.4')
        // Vector icons
        .to([pen, palette, ruler, layers], {
          opacity: (i, target) => target.classList.contains('design-vector-ruler') ? 0.15 : 0.2,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.5)"
        }, "-=0.8");
    },


    'style-guide': (slide) => {
      resetTimeline('style-guide');
      const tl = gsap.timeline();
      activeTimelines['style-guide'] = tl;

      const title = slide.querySelector('.style-guide-title');
      const typo = slide.querySelector('.style-guide-typo');
      const colors = slide.querySelector('.style-guide-colors');

      gsap.set([title, typo, colors], { opacity: 0 });
      gsap.set(typo, { x: -20 });
      gsap.set(colors, { x: 20 });

      tl.to(title, { opacity: 1, duration: 0.6, ease: ioEase })
        .to(typo, { opacity: 1, x: 0, duration: 0.7, ease: ioEase }, "-=0.3")
        .to(colors, { opacity: 1, x: 0, duration: 0.7, ease: ioEase }, "-=0.5");
    },

    'design-trust': (slide) => {
      resetTimeline('design-trust');
      const tl = gsap.timeline();
      activeTimelines['design-trust'] = tl;

      const header = slide.querySelector('.design-trust-header');
      const left = slide.querySelector('.design-card-left');
      const center = slide.querySelector('.design-card-center');
      const right = slide.querySelector('.design-card-right');

      gsap.set(header, { opacity: 0 });
      gsap.set(left, { opacity: 0, x: -40 });
      gsap.set(center, { opacity: 0, y: 30 });
      gsap.set(right, { opacity: 0, x: 40 });

      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(left, { opacity: 1, x: 0, duration: 0.8, ease: ioEase }, "-=0.3")
        .to(center, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, "-=0.5")
        .to(right, { opacity: 1, x: 0, duration: 0.8, ease: ioEase }, "-=0.5");
    },

    'design-clinical': (slide) => {
      resetTimeline('design-clinical');
      const tl = gsap.timeline();
      activeTimelines['design-clinical'] = tl;

      const header = slide.querySelector('.design-clinical-header');
      const left = slide.querySelector('.design-clinical-left');
      const right = slide.querySelector('.design-clinical-right');

      gsap.set(header, { opacity: 0 });
      gsap.set(left, { opacity: 0, x: -28 });
      gsap.set(right, { opacity: 0, x: 28 });

      tl.to(header, { opacity: 1, duration: 0.35, ease: ioEase })
        .to(left, { opacity: 1, x: 0, duration: 0.45, ease: ioEase }, "-=0.15")
        .to(right, { opacity: 1, x: 0, duration: 0.45, ease: ioEase }, "-=0.25");
    },

    'med-tracker-intro': (slide) => {
      resetTimeline('med-tracker-intro');
      const tl = gsap.timeline();
      activeTimelines['med-tracker-intro'] = tl;

      const content = slide.querySelector('.med-tracker-intro-content');
      const bgLeft = slide.querySelector('.med-tracker-intro-bg-left');
      const bgRight = slide.querySelector('.med-tracker-intro-bg-right');
      const icon = slide.querySelector('.med-tracker-intro-icon');
      const title = slide.querySelector('.med-tracker-intro-title');
      const sub = slide.querySelector('.med-tracker-intro-sub');
      const backgroundLayers = [bgLeft, bgRight].filter(Boolean);
      const textLayers = [icon, title, sub].filter(Boolean);

      if (content) {
        gsap.set(content, { opacity: 0, y: 18 });
      }
      if (backgroundLayers.length > 0) {
        gsap.set(backgroundLayers, { opacity: 0, scale: 0.95 });
      }
      if (textLayers.length > 0) {
        gsap.set(textLayers, { opacity: 0 });
      }
      if (title) {
        gsap.set(title, { y: 30 });
      }
      if (sub) {
        gsap.set(sub, { y: 20 });
      }
      if (icon) {
        gsap.set(icon, { scale: 0.5 });
      }

      if (backgroundLayers.length > 0) {
        tl.to(backgroundLayers, { opacity: 0.30, scale: 1, duration: 0.7, stagger: 0.1, ease: ioEase });
      }
      if (content) {
        tl.to(content, { opacity: 1, y: 0, duration: 0.55, ease: ioEase }, backgroundLayers.length > 0 ? "-=0.2" : 0);
      }
      if (icon) {
        tl.to(icon, { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.25");
      }
      if (title) {
        tl.to(title, { opacity: 1, y: 0, duration: 0.75, ease: ioEase }, "-=0.35");
      }
      if (sub) {
        tl.to(sub, { opacity: 1, y: 0, duration: 0.6, ease: ioEase }, "-=0.45");
      }
    },

    'seguridad-multicapa': (slide) => {
      resetTimeline('seguridad-multicapa');
      const tl = gsap.timeline();
      activeTimelines['seguridad-multicapa'] = tl;

      const header = slide.querySelector('.seguridad-header');
      const left = slide.querySelector('.seguridad-left');
      const right = slide.querySelector('.seguridad-right');

      gsap.set(header, { opacity: 0 });
      gsap.set(left, { opacity: 0, x: -40 });
      gsap.set(right, { opacity: 0, x: 40 });

      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(left, { opacity: 1, x: 0, duration: 0.8, ease: ioEase }, "-=0.3")
        .to(right, { opacity: 1, x: 0, duration: 0.8, ease: ioEase }, "-=0.6");
    },

    'ecommerce-web-intro': (slide) => {
      resetTimeline('ecommerce-web-intro');
      const tl = gsap.timeline();
      activeTimelines['ecommerce-web-intro'] = tl;

      const icon = slide.querySelector('.ecommerce-intro-icon');
      const title = slide.querySelector('.ecommerce-intro-title');
      const sub = slide.querySelector('.ecommerce-intro-sub');

      gsap.set([icon, title, sub], { opacity: 0 });
      gsap.set(title, { y: 30 });
      gsap.set(sub, { y: 20 });
      gsap.set(icon, { scale: 0.5 });

      tl.to(icon, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" })
        .to(title, { opacity: 1, y: 0, duration: 1, ease: ioEase }, "-=0.4")
        .to(sub, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, "-=0.5");
    },

    'experiencia-compra': (slide) => {
      resetTimeline('experiencia-compra');
      const tl = gsap.timeline();
      activeTimelines['experiencia-compra'] = tl;

      const header = slide.querySelector('.experiencia-header');
      const left = slide.querySelector('.experiencia-left');
      const right = slide.querySelector('.experiencia-right');

      gsap.set(header, { opacity: 0 });
      gsap.set(left, { opacity: 0, x: -40 });
      gsap.set(right, { opacity: 0, x: 40 });

      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(left, { opacity: 1, x: 0, duration: 0.8, ease: ioEase }, "-=0.3")
        .to(right, { opacity: 1, x: 0, duration: 0.8, ease: ioEase }, "-=0.6");
    },

    'team-structure': (slide) => {
      resetTimeline('team-structure');
      const tl = gsap.timeline();
      activeTimelines['team-structure'] = tl;

      const header = slide.querySelector('.team-header');
      const title = slide.querySelector('.team-title');

      // Level 1 nodes
      const l1Lt = slide.querySelector('.team-l1-lt');
      const l1Lr = slide.querySelector('.team-l1-lr');
      const connL1 = slide.querySelector('.team-connector-l1');

      // SVG hlines
      const hlineL2 = slide.querySelector('.team-hline-l2');
      const hlineL3 = slide.querySelector('.team-hline-l3');
      const hlineL4 = slide.querySelector('.team-hline-l4');
      const hlineL2Line = hlineL2 ? hlineL2.querySelector('line') : null;
      const hlineL3Line = hlineL3 ? hlineL3.querySelector('line') : null;
      const hlineL4Line = hlineL4 ? hlineL4.querySelector('line') : null;

      // Level 2
      const l2Nodes = [
        slide.querySelector('.team-l2-front'),
        slide.querySelector('.team-l2-mid'),
        slide.querySelector('.team-l2-back'),
        slide.querySelector('.team-l2-qa'),
      ].filter(Boolean);

      // Level 3
      const l3Nodes = [
        slide.querySelector('.team-l3-front'),
        slide.querySelector('.team-l3-mid'),
        slide.querySelector('.team-l3-back'),
        slide.querySelector('.team-l3-qa'),
      ].filter(Boolean);

      // Level 4
      const l4Nodes = [
        slide.querySelector('.team-l4-front'),
        slide.querySelector('.team-l4-mid'),
        slide.querySelector('.team-l4-back'),
        slide.querySelector('.team-l4-qa'),
      ].filter(Boolean);

      // Ping elements
      const pingRing = slide.querySelector('.team-ping');
      const pingDot = slide.querySelector('.team-ping-dot');

      // ── Initial states ──────────────────────────────────────────
      gsap.set([header, title], { opacity: 0 });
      gsap.set(title, { y: 16 });
      gsap.set([l1Lt, l1Lr], { opacity: 0, y: -20 });
      if (connL1) gsap.set(connL1, { opacity: 0, scaleY: 0 });
      if (hlineL2) gsap.set(hlineL2, { opacity: 0 });
      if (hlineL3) gsap.set(hlineL3, { opacity: 0 });
      if (hlineL4) gsap.set(hlineL4, { opacity: 0 });
      gsap.set(l2Nodes, { opacity: 0, y: 18 });
      gsap.set(l3Nodes, { opacity: 0, y: 14 });
      gsap.set(l4Nodes, { opacity: 0, y: 12 });
      if (pingRing) gsap.set(pingRing, { opacity: 0 });
      if (pingDot)  gsap.set(pingDot, { opacity: 0, scale: 0 });

      // ── Timeline — build top to bottom ──────────────────────────
      tl
        // Header + title
        .to(header, { opacity: 1, duration: 0.5, ease: ioEase })
        .to(title,  { opacity: 1, y: 0, duration: 0.6, ease: ioEase }, '-=0.2')

        // L1: Líder Técnico drops in with bounce
        .to(l1Lt, { opacity: 1, y: 0, duration: 0.65, ease: 'back.out(1.8)' }, '-=0.1')
        // L1: Líder Requerimientos follows with slight delay
        .to(l1Lr, { opacity: 1, y: 0, duration: 0.65, ease: 'back.out(1.8)' }, '-=0.45')

        // Vertical connector from L1 grows down
        .to(connL1, { opacity: 1, scaleY: 1, duration: 0.35, ease: 'power2.out' }, '-=0.1')

        // Horizontal SVG line L1→L2 draws itself
        .to(hlineL2, { opacity: 1, duration: 0.1 }, '-=0.05')
        .to(hlineL2Line, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out' }, '-=0.05')

        // L2: 4 líderes de área enter staggered from below
        .to(l2Nodes, {
          opacity: 1, y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: 'back.out(1.4)'
        }, '-=0.2')

        // Horizontal SVG line L2→L3 draws
        .to(hlineL3, { opacity: 1, duration: 0.1 }, '-=0.05')
        .to(hlineL3Line, { strokeDashoffset: 0, duration: 0.55, ease: 'power2.out' }, '-=0.05')

        // L3: Coaches enter staggered
        .to(l3Nodes, {
          opacity: 1, y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.3)'
        }, '-=0.15')

        // Horizontal SVG line L3→L4 draws
        .to(hlineL4, { opacity: 1, duration: 0.1 }, '-=0.05')
        .to(hlineL4Line, { strokeDashoffset: 0, duration: 0.5, ease: 'power2.out' }, '-=0.05')

        // L4: Operativo members enter staggered
        .to(l4Nodes, {
          opacity: 1, y: 0,
          duration: 0.45,
          stagger: 0.09,
          ease: 'back.out(1.2)'
        }, '-=0.1');

      // Ping badge appears on Líder Técnico (if elements exist)
      if (pingDot && pingRing) {
        tl.to(pingDot, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(2.5)' }, '-=0.1')
          .to(pingRing, { opacity: 0.75, duration: 0.2 }, '-=0.2');
      }
    },


    'planning-board': (slide) => {
      resetTimeline('planning-board');
      const tl = gsap.timeline();
      activeTimelines['planning-board'] = tl;

      const header = slide.querySelector('.planning-board-header');
      const title = slide.querySelector('.planning-board-title');
      const text = slide.querySelector('.planning-board-text');
      const card = slide.querySelector('.planning-board-card');
      const mockup = slide.querySelector('.planning-board-mockup');

      // Setup initial states
      gsap.set([header, title, text, mockup], { opacity: 0 });
      gsap.set(text, { y: 25 });
      gsap.set(mockup, { x: 40 });
      gsap.set(card, { opacity: 0, x: 0, y: 35, scale: 0.1, rotate: 0 });

      // Animate main content
      tl.to(header, { opacity: 1, duration: 0.6 })
        .to(title, { opacity: 1, duration: 0.7, ease: ioEase }, "-=0.3")
        .to(text, { opacity: 1, y: 0, duration: 0.7, ease: ioEase }, "-=0.4")
        .to(mockup, { opacity: 1, x: 0, duration: 0.9, ease: ioEase }, "-=0.5");

      // Card loop timeline
      const cardTl = gsap.timeline({ repeat: -1 });
      tl.add(cardTl, "-=0.4"); // add card loop to main timeline

      cardTl.to(card, { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "back.out(1.2)" })
        .to(card, { 
          x: "125%", 
          y: "-110px", 
          scale: 0.7, 
          rotate: -4, 
          duration: 2.8, 
          ease: "power3.inOut"
        }, "+=2.0") // wait 2s in place before sliding
        .to(card, { opacity: 0, duration: 0.8 }, "+=6.0") // stay on the board for 6s before fading out
        .set(card, { x: 0, y: 35, scale: 0.1, rotate: 0 }) // instantly reset while invisible
        .to({}, { duration: 3.0 }); // pause 3s at the end of the loop before repeating
    },

    'gantt-ecommerce-v2': (slide) => {
      resetTimeline('gantt-ecommerce-v2');
      const tl = gsap.timeline();
      activeTimelines['gantt-ecommerce-v2'] = tl;

      const header = slide.querySelector('.gantt-v2-header');
      const columns = slide.querySelectorAll('.gantt-v2-col');
      const milestone = slide.querySelector('.gantt-v2-milestone');

      gsap.set([header, milestone], { opacity: 0 });
      gsap.set(milestone, { y: 40 });
      gsap.set(columns, { opacity: 0, y: 20 });

      tl.to(header, { opacity: 1, duration: 0.8, ease: ioEase })
        .to(columns, { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: ioEase,
          clearProps: "transform"
        }, "-=0.4")
        .to(milestone, { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "back.out(1.2)" 
        }, "-=0.2");
    },

    'gantt-tracker-v2': (slide) => {
      resetTimeline('gantt-tracker-v2');
      const tl = gsap.timeline();
      activeTimelines['gantt-tracker-v2'] = tl;

      const header = slide.querySelector('.gantt-tracker-header');
      const columns = slide.querySelectorAll('.gantt-tracker-col');
      const milestone = slide.querySelector('.gantt-tracker-milestone');

      gsap.set([header, milestone], { opacity: 0 });
      gsap.set(milestone, { y: 40 });
      gsap.set(columns, { opacity: 0, y: 20 });

      tl.to(header, { opacity: 1, duration: 0.8, ease: ioEase })
        .to(columns, { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: ioEase,
          clearProps: "transform"
        }, "-=0.4")
        .to(milestone, { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "back.out(1.2)" 
        }, "-=0.2");
    },

    'pert-ecommerce': (slide) => {
      resetTimeline('pert-ecommerce');
      const tl = gsap.timeline();
      activeTimelines['pert-ecommerce'] = tl;

      const header = slide.querySelector('.pert-header');
      const canvas = slide.querySelector('.pert-canvas');
      const nodes = slide.querySelectorAll('.pert-node');
      const pathMain = slide.querySelector('.pert-path-main');
      const pathStart = slide.querySelector('.pert-path-start');
      const pathEnd = slide.querySelector('.pert-path-end');
      const legend = slide.querySelector('.pert-legend');

      gsap.set([header, canvas, legend], { opacity: 0 });
      gsap.set(nodes, { opacity: 0, scale: 0.8, y: 20 });
      gsap.set([pathMain, pathStart, pathEnd], { opacity: 0, strokeDasharray: 2000, strokeDashoffset: 2000 });

      tl.to(header, { opacity: 1, duration: 0.8, ease: ioEase })
        .to(canvas, { opacity: 1, duration: 0.5 }, "-=0.3")
        .to(nodes, { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "back.out(1.5)" 
        }, "-=0.2")
        .to([pathMain, pathStart, pathEnd], { 
          opacity: 1, 
          strokeDashoffset: 0, 
          duration: 2, 
          ease: "power2.inOut" 
        }, "-=0.5")
        .to(legend, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    },
    
    'pert-medication': (slide) => {
      resetTimeline('pert-medication');
      const tl = gsap.timeline();
      activeTimelines['pert-medication'] = tl;

      const header = slide.querySelector('.pert-header-medication');
      const canvas = slide.querySelector('.pert-canvas-medication');
      const nodes = slide.querySelectorAll('.pert-node-medication');
      const pathMain = slide.querySelector('.pert-path-main-medication');
      const pathStart = slide.querySelector('.pert-path-start-medication');
      const pathEnd = slide.querySelector('.pert-path-end-medication');
      const legend = slide.querySelector('.pert-legend-medication');

      gsap.set([header, canvas, legend], { opacity: 0 });
      gsap.set(nodes, { opacity: 0, scale: 0.8, y: 20 });
      gsap.set([pathMain, pathStart, pathEnd], { opacity: 0, strokeDasharray: 2000, strokeDashoffset: 2000 });

      tl.to(header, { opacity: 1, duration: 0.8, ease: ioEase })
        .to(canvas, { opacity: 1, duration: 0.5 }, "-=0.3")
        .to(nodes, { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "back.out(1.5)" 
        }, "-=0.2")
        .to([pathMain, pathStart, pathEnd], { 
          opacity: 1, 
          strokeDashoffset: 0, 
          duration: 2, 
          ease: "power2.inOut" 
        }, "-=0.5")
        .to(legend, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
    },

    'closing-slide': (slide) => {
      resetTimeline('closing-slide');
      const tl = gsap.timeline();
      activeTimelines['closing-slide'] = tl;

      const container = slide.querySelector('.closing-logos-container');
      gsap.set(container, { opacity: 0, scale: 0.9, y: 20 });

      tl.to(container, { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: "power3.out" });
    }
  };

  // Helper to trigger animations for a slide
  function triggerSlideAnimation(slide) {
    if (!slide) return;
    const state = slide.getAttribute('data-state');
    if (!state) return;

    if (animations[state]) {
      animations[state](slide);
    } else if (state.startsWith('presenter-')) {
      resetTimeline(state);
      const tl = gsap.timeline();
      activeTimelines[state] = tl;

      const pill = slide.querySelector('.presenter-pill');
      const name = slide.querySelector('.presenter-name');

      gsap.set([pill, name], { opacity: 0 });
      gsap.set(pill, { scale: 0.85, y: 15 });
      gsap.set(name, { y: 25 });

      tl.to(pill, { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: ioEase })
        .to(name, { opacity: 1, y: 0, duration: 0.8, ease: ioEase }, "-=0.4");
    }
  }

  // Trigger animations on Reveal.js slide transition
  Reveal.on('slidechanged', (event) => {
    triggerSlideAnimation(event.currentSlide);
  });

  // Run initial slide animation on load
  Reveal.on('ready', (event) => {
    triggerSlideAnimation(event.currentSlide);
  });

  // --- INTERACTION: FLOATING ZOOM OF PROCESS CARDS ON KEYS 1-8 ---
  let focusedCard = null;
  let otherCards = [];

  function resetFocus() {
    if (!focusedCard) return;

    // Reset focused card
    gsap.to(focusedCard, {
      x: 0,
      y: 0,
      scale: 1,
      zIndex: "",
      position: "",
      boxShadow: "",
      duration: 0.5,
      ease: "power2.out",
      clearProps: "transform,position,z-index,box-shadow"
    });

    // Reset other cards
    gsap.to(otherCards, {
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.4
    });

    // Reset backdrop
    const backdrops = document.querySelectorAll('.focus-backdrop');
    backdrops.forEach(backdrop => {
      backdrop.style.opacity = '0';
      backdrop.style.pointerEvents = 'none';
    });

    focusedCard = null;
    otherCards = [];
  }

  function focusCard(card, siblings) {
    resetFocus();

    focusedCard = card;
    otherCards = siblings;

    // Get current active slide
    const slide = card.closest('section');
    
    // Create or get backdrop INSIDE the slide to preserve stacking context
    let backdrop = slide.querySelector('.focus-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'focus-backdrop absolute inset-0 bg-[#00006A]/25 backdrop-blur-[2px] z-[80] opacity-0 pointer-events-none transition-opacity duration-300';
      // Close on backdrop click
      backdrop.addEventListener('click', resetFocus);
      slide.appendChild(backdrop);
    }

    // Show backdrop
    backdrop.style.opacity = '1';
    backdrop.style.pointerEvents = 'auto';

    // Blur and fade siblings
    gsap.to(otherCards, {
      filter: "blur(4px)",
      opacity: 0.25,
      duration: 0.5
    });

    // Calculate centering coordinates
    const rect = card.getBoundingClientRect();
    const viewX = window.innerWidth / 2;
    const viewY = window.innerHeight / 2;
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const deltaX = viewX - cardCenterX;
    const deltaY = viewY - cardCenterY;

    // Float and zoom card (lift it above backdrop with relative position and zIndex 100)
    gsap.to(card, {
      x: deltaX,
      y: deltaY,
      scale: 1.5,
      position: "relative",
      zIndex: 100,
      boxShadow: "0 25px 60px -10px rgba(0, 0, 106, 0.4), 0 10px 20px -5px rgba(80, 233, 248, 0.25)",
      duration: 0.6,
      ease: "power3.out"
    });
  }

  // Keydown listener
  window.addEventListener('keydown', (event) => {
    const currentSlide = Reveal.getCurrentSlide();
    if (!currentSlide) return;

    const state = currentSlide.getAttribute('data-state');
    if (state !== 'eco-flow' && state !== 'track-flow') {
      resetFocus();
      return;
    }

    const key = event.key;
    if (key === 'Escape') {
      resetFocus();
      return;
    }

    const num = parseInt(key);
    if (isNaN(num) || num < 1 || num > 8) return;

    const cards = Array.from(currentSlide.querySelectorAll('.farma-card'));
    if (num > cards.length) return;

    const selectedCard = cards[num - 1];
    const siblings = cards.filter(c => c !== selectedCard);

    if (focusedCard === selectedCard) {
      resetFocus();
    } else {
      focusCard(selectedCard, siblings);
    }
  });

  // Reset focus when transitioning between slides
  Reveal.on('slidechanged', () => {
    resetFocus();
  });
}
