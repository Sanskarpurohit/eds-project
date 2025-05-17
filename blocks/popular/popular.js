document.querySelectorAll('.popular').forEach((popularBlock) => {

    const allChildren = popularBlock.children;
  
    const fixedTitleBlock = allChildren[0];
  
    fixedTitleBlock.classList.add('popular-title-block');
  
    const h4 = fixedTitleBlock.querySelector('h4');
  
    if (h4 && h4.id !== 'popular-posts') {
  h4.id = 'popular-posts';
  
    }
  
    for (let i = 1; i < allChildren.length; i++) {
  
      const postBlock = allChildren[i];
  
      postBlock.classList.add('popular-post');
  
      const [imgDiv, titleDiv, descDiv] = postBlock.children;
  
      if (imgDiv) {
  
        imgDiv.classList.add('popular-img');
  
        const picture = imgDiv.querySelector('picture');
  
        if (picture) picture.classList.add('popular-picture');
  
      }
  
      if (titleDiv) {
  
        titleDiv.classList.add('popular-title');
  
      }
  
      if (descDiv) {
  
        descDiv.classList.add('popular-desc');
  
      }
  
    }
  
  });
   