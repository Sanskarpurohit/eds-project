import {
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
} from './aem.js';

document.querySelector("main").classList.add("mainBoss");
/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadSections(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));
  


  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

//















//
async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}










loadPage();

(() => {
  console.log("Modal Working");

  const MODAL_DOC_URL = '/modal.plain.html'; // Make sure this file exists with your modals

  let modalContainer;

  // Fetch and inject modals from fragment

  fetch(MODAL_DOC_URL)

    .then(res => {

      if (!res.ok) throw new Error('Cannot load modal fragment');

      return res.text();

    })

    .then(html => {

      modalContainer = document.createElement('div');

      modalContainer.style.display = 'none';

      modalContainer.innerHTML = html;

      document.body.appendChild(modalContainer);

      // Add ID to each modal based on its custom class

      modalContainer.querySelectorAll('.sub-modal').forEach(modal => {

        const customClass = [...modal.classList].find(cls => cls.startsWith('custom-'));

        if (customClass) modal.id = customClass;

        // Outside click to close

        modal.addEventListener('click', e => {

          if (e.target === modal) hideAllModals();

        });

      });

      // Add close button handlers if present

      modalContainer.querySelectorAll('.close-btn').forEach(btn => {

        btn.addEventListener('click', hideAllModals);

      });

    })

    .catch(err => console.error('Modal load error:', err));

  // Hide all modals

  function hideAllModals() {

    if (!modalContainer) return;

    modalContainer.style.display = 'none';

    modalContainer.querySelectorAll('.sub-modal.show').forEach(m => m.classList.remove('show'));

  }

  // Show a specific modal by ID

  function showModalById(id) {

    if (!modalContainer) return;

    const modal = modalContainer.querySelector(`#${id}`);

    if (!modal) return;

    hideAllModals();

    modalContainer.style.display = 'block';

    modal.classList.add('show');

  }

  // Global link click handler

  document.addEventListener('click', e => {

    const anchor = e.target.closest('a[href^="#custom-"]');

    if (anchor) {

      e.preventDefault();

      const id = anchor.getAttribute('href').substring(1);

      showModalById(id);

    }

  });

  // ESC to close

  document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {

      hideAllModals();

    }

  });

})();
 