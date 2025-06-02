// Find all modal blocks
const modals = document.querySelectorAll('.sub-modal');
modals.forEach((modal) => {
 // Find class like 'custom-sanskar'
 const customClass = [...modal.classList].find(c => c.startsWith('custom-'));
 // First outer div
 const firstDiv = modal.children[0];
 if (firstDiv) firstDiv.classList.add('modal-first');
 const textWrapper = firstDiv?.querySelector('div');
 if (textWrapper) textWrapper.classList.add('modal-text');
 // Second outer div (input section)
 const secondDiv = modal.children[1];
 if (secondDiv) secondDiv.classList.add('modal-second');
 const inputWrapper = secondDiv?.querySelector('div');
 if (inputWrapper && !inputWrapper.querySelector('input')) {
   inputWrapper.classList.add('modal-input');
   const input = document.createElement('input');
   input.type = 'email';
   input.placeholder = 'Enter your email';
   inputWrapper.appendChild(input);
 }
 // Third outer div (footer with h6 > a)
 const thirdDiv = modal.children[2];
 if (thirdDiv) thirdDiv.classList.add('modal-third');
 const footerWrapper = thirdDiv?.querySelector('div');
 if (footerWrapper) {
   const h6 = footerWrapper.querySelector('h6');
   if (h6) {
     const a = h6.querySelector('a');
     if (a) {
       const btn = document.createElement('button');
       btn.textContent = a.textContent || 'Submit';
       btn.title = a.title || '';
       btn.className = 'modal-button';
       a.replaceWith(btn);
     }
     h6.remove(); // Remove h6 after replacing link
   }
 }
 // Click outside to close
 modal.addEventListener('click', (e) => {
   if (!e.target.closest('.modal-first, .modal-second, .modal-third')) {
     modal.classList.remove('show');
   }
 });
});
// Open modal from anchor links like <a href="#custom-sanskar">
document.querySelectorAll('a[href^="#custom-"]').forEach(link => {
 link.addEventListener('click', (e) => {
   e.preventDefault();
   const targetId = link.getAttribute('href').substring(1);
   const modal = document.getElementById(targetId);
   if (modal && modal.classList.contains('sub-modal')) {
     modal.classList.add('show');
   }
 });
});
// ESC key to close modals
document.addEventListener('keydown', (e) => {
 if (e.key === 'Escape') {
   document.querySelectorAll('.sub-modal.show').forEach(modal => {
     modal.classList.remove('show');
   });
 }
});