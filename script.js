const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a')];

const setActiveLink = () => {
  const offset = window.scrollY + 120;
  let current = sections[0]?.id;
  for (const section of sections) {
    if (offset >= section.offsetTop) current = section.id;
  }
  navLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', active);
  });
};

window.addEventListener('scroll', setActiveLink);
setActiveLink();


const VISITOR_MAP = {
  provider: 'clustrmaps',
  clustrmapsId: 'REPLACE_WITH_YOUR_CLUSTRMAPS_ID',
};

function renderVisitorMapPlaceholder(slot) {
  slot.innerHTML = `
    <div class="visitor-map-message">
      <strong>Visitor map is ready to be connected.</strong>
      <p>
        Open <code>script.js</code> and replace
        <code>REPLACE_WITH_YOUR_CLUSTRMAPS_ID</code> with the value after
        <code>?d=</code> in your ClustrMaps embed snippet.
      </p>
    </div>
  `;
}

function mountClustrMaps() {
  const slot = document.getElementById('visitor-widget-slot');
  const placeholder = document.getElementById('visitor-map-placeholder');
  if (!slot) return;

  const id = VISITOR_MAP.clustrmapsId?.trim();
  const isConfigured = id && id !== 'REPLACE_WITH_YOUR_CLUSTRMAPS_ID';

  if (!isConfigured) {
    renderVisitorMapPlaceholder(slot);
    return;
  }

  if (placeholder) placeholder.style.display = 'none';
  slot.innerHTML = '<div id="clustrmaps-widget"></div>';

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'clustrmaps';
  script.async = true;
  script.src = `https://cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=${encodeURIComponent(id)}`;
  slot.querySelector('#clustrmaps-widget').appendChild(script);
}

mountClustrMaps();
