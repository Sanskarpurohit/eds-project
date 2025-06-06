
document.querySelectorAll('.followme').forEach((followBlock) => {
    const children = followBlock.children;
    
    const titleBlock = children[0];
    titleBlock.classList.add('follow-me-block'); 
    const h4 = titleBlock.querySelector('h4');
    if (h4 && h4.id !== 'follow-me') {
   h4.id = 'follow-me';
    }
 
    const linksBlock = children[1];
    const innerDiv = linksBlock.querySelector('div');
    if (innerDiv) {
      const p = innerDiv.querySelector('p');
      if (p) {
        p.classList.add('social-icons'); 
        p.querySelectorAll('a').forEach((a) => {
          a.classList.add('social-link'); 
        });
      }
    }
   });

   //using QSAll fetch all blocks