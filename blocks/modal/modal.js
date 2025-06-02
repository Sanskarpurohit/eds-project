export default function decorate(block) {

    // Step 1: Assign modal styling
  
    block.classList.add('modal-container');
  
    // Step 2: Add modal inner wrapper
  
    const contentWrapper = document.createElement('div');
  
    contentWrapper.className = 'modal-content';
  
    // Move original content inside modal content div
  
    while (block.firstChild) {
  
      contentWrapper.appendChild(block.firstChild);
  
    }
  
    block.appendChild(contentWrapper);
  
    // Step 3: Add unique ID from class (e.g., custom-sanskar)
  
    const modalClass = Array.from(block.classList).find(c => c.startsWith('custom-'));
  
    if (modalClass) block.id = modalClass;
  
    // Step 4: Insert input into the 2nd div's inner div
  
    const inputTarget = block.querySelectorAll('div > div')[1];
  
    if (inputTarget) {
  
      const input = document.createElement('input');
  
      input.type = 'email';
  
      input.placeholder = 'Enter your email';
  
      input.style = 'width: 100%; padding: 10px;';
  
      inputTarget.appendChild(input);
  
    }
  
    // Step 5: Close modal on outside click or ESC
  
    block.addEventListener('click', (e) => {
  
      if (e.target === block) block.classList.remove('modal-show');
  
    });
  
    document.addEventListener('keydown', (e) => {
  
      if (e.key === 'Escape') block.classList.remove('modal-show');
  
    });
  
  }
   