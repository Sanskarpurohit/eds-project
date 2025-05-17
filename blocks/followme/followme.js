document.querySelectorAll('.followme').forEach((followBlock) => {
    const children = followBlock.children;
    // First block (title)
    const titleBlock = children[0];
    titleBlock.classList.add('follow-me-block'); // Matches your CSS
    const h4 = titleBlock.querySelector('h4');
    if (h4 && h4.id !== 'follow-me') {
   h4.id = 'follow-me';
    }
    // Second block (links)
    const linksBlock = children[1];
    const innerDiv = linksBlock.querySelector('div');
    if (innerDiv) {
      const p = innerDiv.querySelector('p');
      if (p) {
        p.classList.add('social-icons'); // Matches your CSS
        p.querySelectorAll('a').forEach((a) => {
          a.classList.add('social-link'); // Optional, in case you want to target individually
        });
      }
    }
   });