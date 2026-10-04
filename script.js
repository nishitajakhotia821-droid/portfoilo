const body = document.body;
const header = document.querySelector('.site-header');
const progress = document.getElementById('scrollMeter');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const dialog = document.querySelector('.case-dialog');
const caseContent = document.getElementById('caseContent');
const closeDialog = document.querySelector('.dialog-close');

const caseStudies = {
  'pure-leaf': {
    title: 'Pure Leaf', category: 'Brand identity · Packaging', year: '2026', role: 'Concept project',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1500&q=85',
    summary: 'A calm, considered identity for everyday plant-powered care.',
    challenge: 'Create a fresh visual world for a nature-led care brand that feels modern, clear and easy to trust.',
    concept: 'A quiet botanical language balances tactile warmth with precise, shelf-ready typography.',
    process: 'The system moves from audience and category research to naming, identity exploration, packaging hierarchy and digital applications.',
    outcome: 'A flexible identity direction across primary packaging, supporting print and campaign imagery.'
  },
  'fit-aura': {
    title: 'Fit Aura', category: 'Brand identity · Smart wearable', year: '2025', role: 'Concept project',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85',
    summary: 'A confident visual system for a more mindful kind of movement.',
    challenge: 'Make a connected fitness product feel encouraging and human, without defaulting to aggressive performance cues.',
    concept: 'A crisp, energetic identity pairs a reassuring voice with a modular graphic rhythm inspired by daily activity.',
    process: 'Visual research informed the logo, color system, typography, product touchpoints and a set of campaign compositions.',
    outcome: 'A cohesive direction spanning wearable presentation, business stationery and promotional graphics.'
  },
  shweta: {
    title: "Shweta's Makeover", category: 'Beauty · Social media · Visual identity', year: '2025', role: 'Brand design',
    image: '../Shweta%27s%20Makeover/hero%20banner.png',
    summary: 'A warm, expressive identity made to celebrate personal beauty.',
    challenge: 'Bring the salon’s range of beauty services together under a recognizable and welcoming visual voice.',
    concept: 'Soft rose tones, gold details and expressive beauty imagery create a polished identity with a personal feel.',
    process: 'The direction extends through service communication, promotional layouts, social templates and digital brand touchpoints.',
    outcome: 'A consistent brand presence for beauty, hair, skin, nail and academy services.'
  },
  'secret-stories': {
    title: 'Secret Stories', category: 'Skincare · Haircare · Bodycare', year: '2024', role: 'Concept project',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1500&q=85',
    summary: 'A sensorial family of products with a story in every detail.',
    challenge: 'Give a multi-category care range a connected identity while keeping each product easy to navigate.',
    concept: 'Editorial type, intimate copy and a restrained palette make the everyday ritual feel considered.',
    process: 'Packaging structure, typography, color coding, campaign styling and social formats were developed as one system.',
    outcome: 'A clear visual family designed to scale across skincare, haircare and bodycare.'
  },
  interior: {
    title: 'Spaces in Stillness', category: '3D modeling · Interior visualization', year: '2024', role: '3D visual study',
    image: '../Creative%20Agency/3d.png',
    summary: 'An exploration of material, proportion and the quiet quality of light.',
    challenge: 'Communicate an interior concept through a render that feels tactile, calm and spatially legible.',
    concept: 'A sculptural object anchors a warm, minimal environment and gives light room to describe its surfaces.',
    process: 'Scene blocking, object modeling, material studies, lighting tests and final composition shaped the visualization.',
    outcome: 'A focused interior image balancing clear form with an atmospheric sense of place.'
  },
  bmw: {
    title: 'BMW M4 CS', category: '3D modeling · Automotive visualization', year: '2023', role: 'Visual study',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
    summary: 'Precision surfaces and cinematic light, shaped around performance.',
    challenge: 'Present an expressive automotive silhouette with a strong sense of material, speed and dimensional detail.',
    concept: 'A dramatic, low-key studio environment keeps the car’s proportions and reflections at the center.',
    process: 'Model refinement, surface checks, studio lighting, camera studies and render finishing build the final image.',
    outcome: 'A cinematic automotive visualization focused on form, finish and presence.'
  }
};

function updateScrollState() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  header.classList.toggle('scrolled', window.scrollY > 12);
}

function setMenu(open) {
  body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

function openCaseStudy(key, trigger) {
  const project = caseStudies[key];
  if (!project) return;
  caseContent.innerHTML = `
    <div class="case-hero"><img src="${project.image}" alt=""><div><p class="eyebrow">${project.category}</p><h2 id="caseTitle">${project.title}</h2></div></div>
    <div class="case-body">
      <p class="case-summary">${project.summary}</p>
      <div class="case-facts"><div><span>Discipline</span><strong>${project.category}</strong></div><div><span>Role</span><strong>${project.role}</strong></div><div><span>Year</span><strong>${project.year}</strong></div></div>
      <section class="case-section"><h3>Project overview</h3><p>${project.summary}</p></section>
      <section class="case-section"><h3>The challenge</h3><p>${project.challenge}</p></section>
      <section class="case-section"><h3>The concept</h3><p>${project.concept}</p></section>
      <section class="case-section"><h3>Design process</h3><p>${project.process}</p></section>
      <section class="case-section"><h3>Final outcome</h3><p>${project.outcome}</p></section>
      <div class="case-visuals" aria-label="Case study stages"><span>Moodboards</span><span>Sketches & type</span><span>Color & identity</span><span>Applications</span></div>
    </div>`;
  dialog.showModal();
  body.classList.add('dialog-open');
  closeDialog.focus();
  dialog.dataset.triggerId = trigger.id || '';
}

function closeCaseStudy() {
  if (!dialog.open) return;
  dialog.close();
  body.classList.remove('dialog-open');
  const trigger = dialog.dataset.triggerId && document.getElementById(dialog.dataset.triggerId);
  if (trigger) trigger.focus();
}

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState);
updateScrollState();

menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
    if (dialog.open) closeCaseStudy();
  }
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.project-open').forEach((button, index) => {
  button.id = `project-trigger-${index + 1}`;
  button.addEventListener('click', () => openCaseStudy(button.dataset.project, button));
});
closeDialog.addEventListener('click', closeCaseStudy);
dialog.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeCaseStudy();
});
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeCaseStudy();
});
dialog.addEventListener('close', () => body.classList.remove('dialog-open'));

document.querySelectorAll('.magnetic').forEach((element) => {
  element.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = element.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    element.style.transform = `translate(${x * 0.07}px, ${y * 0.1}px)`;
  });
  element.addEventListener('pointerleave', () => { element.style.transform = ''; });
});

const heroArt = document.querySelector('.hero-art');
heroArt.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const bounds = heroArt.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - .5;
  const y = (event.clientY - bounds.top) / bounds.height - .5;
  heroArt.querySelector('img').style.transform = `scale(1.07) translate(${x * -8}px, ${y * -8}px)`;
});
heroArt.addEventListener('pointerleave', () => { heroArt.querySelector('img').style.transform = ''; });