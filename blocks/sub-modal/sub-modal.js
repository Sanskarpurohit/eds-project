// Set up all modals with class 'sub-modal'

const modals = document.querySelectorAll('.sub-modal');

modals.forEach(modal => {

  const customClass = [...modal.classList].find(c => c.startsWith('custom-'));

  if (!customClass) return;

  // Give the modal an ID if it doesn't have one

  if (!modal.id) modal.id = customClass;

  // Assign structure class names

  const outerDivs = modal.querySelectorAll(':scope > div');

  if (outerDivs[0]) {

    outerDivs[0].classList.add('modal-first');

    const inner = outerDivs[0].querySelector('div');

    if (inner) inner.classList.add('modal-text');

  }

  if (outerDivs[1]) {

    outerDivs[1].classList.add('modal-second');

    const inner = outerDivs[1].querySelector('div');

    if (inner && !inner.querySelector('input')) {

      inner.classList.add('modal-input');

      const input = document.createElement('input');

      input.type = 'email';

      input.placeholder = 'Enter your email';

      inner.appendChild(input);

    }

  }

  if (outerDivs[2]) {

    outerDivs[2].classList.add('modal-third');

    const inner = outerDivs[2].querySelector('div');

    if (inner) {

      inner.classList.add('modal-footer');

      const h6 = inner.querySelector('h6');

      if (h6) {

        const a = h6.querySelector('a');

        if (a) {

          const btn = document.createElement('button');

          btn.textContent = 'Subscribe';

          btn.className = 'modal-button';

          inner.appendChild(btn);

          h6.remove();

        }

      }

    }

  }

  // Close modal on background click

  modal.addEventListener('click', (e) => {

    if (!e.target.closest('.modal-first, .modal-second, .modal-third')) {

      modal.classList.remove('show');

    }

  });

});

// Open modal on link click

document.querySelectorAll('a[href^="#custom-"]').forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);

    const modal = document.getElementById(targetId);

    if (modal) {

      modal.classList.add('show');

    } else {

      console.warn(`Modal with ID "${targetId}" not found.`);

    }

  });

});

// Close on ESC key

document.addEventListener('keydown', (e) => {

  if (e.key === 'Escape') {

    document.querySelectorAll('.sub-modal.show').forEach(modal => {

      modal.classList.remove('show');

    });

  }

});
 