
const modals = document.querySelectorAll('.sub-modal');
modals.forEach(modal => {
 // Find custom class like 'custom-sanskar'
 const customClass = [...modal.classList].find(cls => cls.startsWith('custom-'));
 // Get first-level divs inside modal
 const outerDivs = modal.querySelectorAll(':scope > div');
 // First section
 if (outerDivs[0]) {
   outerDivs[0].classList.add('section', 'first');
   const innerFirstDiv = outerDivs[0].querySelector('div');
   if (innerFirstDiv) {
     innerFirstDiv.classList.add('text-wrapper');
   }
 }
 // Second section - create input inside inner div
 if (outerDivs[1]) {
   outerDivs[1].classList.add('section', 'second');
   const innerSecondDiv = outerDivs[1].querySelector('div');
   if (innerSecondDiv) {
     innerSecondDiv.classList.add('input-wrapper');
     if (!innerSecondDiv.querySelector('input')) {
       const input = document.createElement('input');
       input.type = 'email';
       input.placeholder = 'Enter your email';
       innerSecondDiv.appendChild(input);
     }
   }
 }
 // Third section - replace h6 > a with a button, remove h6
 if (outerDivs[2]) {
   outerDivs[2].classList.add('section', 'third');
   const innerThirdDiv = outerDivs[2].querySelector('div');
   if (innerThirdDiv) {
     innerThirdDiv.classList.add('footer-wrapper');
     const h6 = innerThirdDiv.querySelector('h6#sub');
     if (h6) {
       const anchor = h6.querySelector('a');
       if (anchor) {
         const button = document.createElement('button');
         button.type = 'button';
         button.title = 'sub';
         button.textContent = 'sub';
         // Replace <a> with <button> inside h6
         anchor.replaceWith(button);
       }
       // Replace the whole h6 with the button (unwrap)
       innerThirdDiv.replaceChild(button, h6);
     }
   }
 }
 // Close modal on click outside first-level divs
 modal.addEventListener('click', e => {
   if (!e.target.closest('.sub-modal > div')) {
     modal.classList.remove('show');
   }
 });
});
// Open modal on anchor click with href="#custom-..."
const modalTriggers = document.querySelectorAll('a[href^="#custom-"]');
modalTriggers.forEach(trigger => {
 trigger.addEventListener('click', e => {
   e.preventDefault();
   const targetId = trigger.getAttribute('href').slice(1);
   const targetModal = document.getElementById(targetId);
   if (targetModal) {
     targetModal.classList.add('show');
   }
 });
});
// Close all modals on ESC key
document.addEventListener('keydown', e => {
 if (e.key === 'Escape') {
   document.querySelectorAll('.sub-modal.show').forEach(modal => {
     modal.classList.remove('show');
   });
 }
});