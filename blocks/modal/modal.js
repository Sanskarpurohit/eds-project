// === STEP 1: Setup all modals ===
document.querySelectorAll('.modal').forEach(modal => {
    // Wrap content in modal-content div
    const wrapper = document.createElement('div');
    wrapper.classList.add('modal-content');
    while (modal.firstChild) wrapper.appendChild(modal.firstChild);
    modal.appendChild(wrapper);
    // Assign ID based on custom-* class
    const customClass = [...modal.classList].find(c => c.startsWith('custom-'));
    if (customClass) modal.id = customClass;
    // Insert input into second div > div
    const inputTarget = modal.querySelectorAll('div > div')[1];
    if (inputTarget && !inputTarget.querySelector('input')) {
      const input = document.createElement('input');
      input.type = 'email';
      input.placeholder = 'Enter your email';
      input.style = 'width: 100%; padding: 10px;';
      inputTarget.appendChild(input);
    }
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('show');
    });
    // Close modal on ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') modal.classList.remove('show');
    });
   });
   // === STEP 2: Trigger modal by clicking anchor with #custom-* ===
   document.querySelectorAll('a[href^="#custom-"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = link.getAttribute('href').substring(1);
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add('show');
    });
   });