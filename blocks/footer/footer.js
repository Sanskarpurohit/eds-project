import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);
  
  const fashionContainer = document.querySelector('.fashionblog-container ');
const twoColumnsWrapper = document.createElement('div');
twoColumnsWrapper.classList.add('two-columns-wrapper');
const leftColumn = document.createElement('div');
leftColumn.classList.add('left-column');
const rightColumn = document.createElement('div');
rightColumn.classList.add('right-column');
document.querySelectorAll('.left').forEach(el => leftColumn.appendChild(el));
document.querySelectorAll('.right').forEach(el => rightColumn.appendChild(el));
twoColumnsWrapper.appendChild(leftColumn);
twoColumnsWrapper.appendChild(rightColumn);

   

  block.append(footer);
  fashionContainer.insertAdjacentElement('afterend', twoColumnsWrapper);
  


  
  
}

  
