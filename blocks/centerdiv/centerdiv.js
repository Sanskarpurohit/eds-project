const contentWrapper=document.querySelector(".centerdiv>div");
contentWrapper.classList.add("content-wrapper");
const headingBox=contentWrapper.children[0].classList.add("heading-box");
const subheadingBox=contentWrapper.children[1].classList.add("subheading-box");
const h6=subheadingBox.querySelector('h6');
h6.classList.add('blog-line');
h6.innerHTML = h6.innerHTML.replace(
    'Jane’s world',
    '<span class="blog-owner">Jane’s world</span>'
   );
   
   