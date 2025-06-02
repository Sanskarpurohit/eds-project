// Find all modals

const modals = document.querySelectorAll('.modal');

modals.forEach(modal => {

  // Assign ID from class starting with "custom-"

  const customClass = [...modal.classList].find(c => c.startsWith('custom-'));

  if (customClass) modal.id = customClass;

  // Insert input inside second div > div

  const secondDiv = modal.querySelectorAll('div')[1];

  if (secondDiv) {

    const innerDiv = secondDiv.querySelector('div');

    if (innerDiv) {

      const input = document.createElement('input');

      input.type = 'email';

      input.placeholder = 'Enter your email';

      input.style.width = '100%';

      input.style.padding = '10px';

      innerDiv.appendChild(input);

    }

  }

  // Clicking outside modal content closes modal

  modal.addEventListener('click', e => {

    const modalContent = modal.children[0];

    if (!modalContent.contains(e.target)) {

      modal.classList.remove('show');

    }

  });

});

// Open modal when clicking links like <a href="#custom-sanskar">

document.querySelectorAll('a[href^="#custom-"]').forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    const targetId = link.getAttribute('href').substring(1);

    const targetModal = document.getElementById(targetId);

    if (targetModal) targetModal.classList.add('show');

  });

});

// Close modal on ESC key

window.addEventListener('keydown', e => {

  if (e.key === 'Escape') {

    modals.forEach(modal => modal.classList.remove('show'));

  }

});
 