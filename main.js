// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
}

// Smooth scrolling for internal anchors
const internalAnchors = document.querySelectorAll('a[href^="#"]');
internalAnchors.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileNav && !mobileNav.classList.contains('hidden')) {
          mobileNav.classList.add('hidden');
        }
      }
    }
  });
});

// Reveal on scroll
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Fallback
  revealElements.forEach((el) => el.classList.add('is-visible'));
}

// Newsletter form (placeholder)
const newsletterForm = document.querySelector('form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Gracias por suscribirte! (Integra tu servicio de email más tarde)');
  });
}

// Modal for lineup
const bandModal = document.getElementById('bandModal');
const bandModalTitle = document.getElementById('bandModalTitle');
const bandMeta = document.getElementById('bandMeta');
const bandYouTube = document.getElementById('bandYouTube');
const bandModalClose = document.getElementById('bandModalClose');
const bandSocial = document.getElementById('bandSocial');

function socialIconSvg(name) {
  const common = 'class="h-5 w-5 text-[#39d52d]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"';
  switch (name) {
    case 'facebook':
      return `<svg ${common}><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5 3.66 9.14 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.93 8.44-9.93Z"/></svg>`;
    case 'instagram':
      return `<svg ${common}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm6.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/></svg>`;
    case 'youtube':
      return `<svg ${common}><path d="M23.5 7.2a4.51 4.51 0 0 0-.78-2.1 3.3 3.3 0 0 0-2.2-1.2C18.5 3.5 12 3.5 12 3.5s-6.5 0-8.52.3a3.3 3.3 0 0 0-2.2 1.2 4.51 4.51 0 0 0-.78 2.1A35.5 35.5 0 0 0 0 12a35.5 35.5 0 0 0 .5 4.8 4.51 4.51 0 0 0 .78 2.1 3.54 3.54 0 0 0 2.3 1.22C5.9 20.5 12 20.5 12 20.5s6.5 0 8.52-.3a3.3 3.3 0 0 0 2.2-1.2 4.51 4.51 0 0 0 .78-2.1A35.5 35.5 0 0 0 24 12a35.5 35.5 0 0 0-.5-4.8ZM9.75 15.5v-7L16 12Z"/></svg>`;
    case 'spotify':
      return `<svg ${common}><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.48 14.64a.75.75 0 0 1-1.03.25c-2.83-1.73-6.39-2.12-10.57-1.14a.75.75 0 1 1-.33-1.46c4.51-1.03 8.44-.59 11.58 1.31.35.21.46.67.24 1.04Zm1.42-3.23a.9.9 0 0 1-1.23.3c-3.25-1.96-8.2-2.53-12.04-1.36a.9.9 0 1 1-.52-1.72c4.27-1.29 9.76-.64 13.45 1.56.43.26.57.82.34 1.22Zm.12-3.37c-3.83-2.27-10.19-2.48-13.86-1.35a1.05 1.05 0 1 1-.61-2.01c4.2-1.28 11.28-1.03 15.64 1.55a1.05 1.05 0 0 1-1.17 1.81Z"/></svg>`;
    default:
      return '';
  }
}

function renderBandSocial({ facebook, instagram, youtube, spotify }) {
  if (!bandSocial) return;
  const items = [];
  if (facebook) items.push(`<a href="${facebook}" aria-label="Facebook" target="_blank" rel="noopener noreferrer" class="inline-flex items-center hover:text-white">${socialIconSvg('facebook')}</a>`);
  if (instagram) items.push(`<a href="${instagram}" aria-label="Instagram" target="_blank" rel="noopener noreferrer" class="inline-flex items-center hover:text-white">${socialIconSvg('instagram')}</a>`);
  if (youtube) items.push(`<a href="${youtube}" aria-label="YouTube" target="_blank" rel="noopener noreferrer" class="inline-flex items-center hover:text-white">${socialIconSvg('youtube')}</a>`);
  if (spotify) items.push(`<a href="${spotify}" aria-label="Spotify" target="_blank" rel="noopener noreferrer" class="inline-flex items-center hover:text-white">${socialIconSvg('spotify')}</a>`);
  bandSocial.innerHTML = items.join('');
}

function openBandModal({ name, origin, genre, youtubeId, socials }) {
  if (!bandModal) return;
  bandModalTitle.textContent = name || 'Banda';
  bandMeta.textContent = `${origin || '—'} · ${genre || '—'}`;
  const src = youtubeId ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0` : '';
  bandYouTube.setAttribute('src', src);
  renderBandSocial(socials || {});
  bandModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeBandModal() {
  if (!bandModal) return;
  bandYouTube.setAttribute('src', '');
  bandModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

if (bandModalClose) bandModalClose.addEventListener('click', closeBandModal);

if (bandModal) {
  bandModal.addEventListener('click', (e) => {
    if (e.target === bandModal) {
      closeBandModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && bandModal && !bandModal.classList.contains('hidden')) {
    closeBandModal();
  }
});

// Bind lineup cards
const lineupCards = document.querySelectorAll('[data-band-name]');
lineupCards.forEach((card) => {
  const onOpen = () => {
    const name = card.getAttribute('data-band-name') || '';
    const origin = card.getAttribute('data-origin') || '';
    const genre = card.getAttribute('data-genre') || '';
    const youtubeId = card.getAttribute('data-youtube-id') || '';
    const socials = {
      facebook: card.getAttribute('data-facebook') || '',
      instagram: card.getAttribute('data-instagram') || '',
      youtube: card.getAttribute('data-youtube') || '',
      spotify: card.getAttribute('data-spotify') || ''
    };
    openBandModal({ name, origin, genre, youtubeId, socials });
  };
  card.addEventListener('click', onOpen);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen();
    }
  });
});
