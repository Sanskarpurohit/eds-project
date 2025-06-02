// Attach ID and setup modals
document.querySelectorAll('.sub-modal').forEach(modal => {
    const customClass = [...modal.classList].find(c => c.startsWith('custom-'));
    if (customClass) {
   modal.id = customClass;
      // Create input only once
      const inputContainer = modal.querySelectorAll('div')[1]?.querySelector('div');
      if (inputContainer && !inputContainer.querySelector('input')) {
        const input = document.createElement('input');
        input.type = 'email';
        input.placeholder = 'Enter your email';
        inputContainer.appendChild(input);
      }
      // Close on outside click
      modal.addEventListener('click', e => {
        if (!e.target.closest('.sub-modal > div')) {
          modal.classList.remove('show');
        }
      });
    }
   });
   // Open modal on anchor click
   document.querySelectorAll('a[href^="#custom-"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // remove #
      const modal = document.getElementById(targetId);
      if (modal) modal.classList.add('show');
    });
   });
   // ESC key closes all modals
   document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.sub-modal.show').forEach(modal => {
        modal.classList.remove('show');
      });
    }
   });