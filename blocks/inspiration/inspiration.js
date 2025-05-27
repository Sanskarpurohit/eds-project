document.querySelectorAll(".inspiration-container").forEach(right=>{
  right.classList.add("right");
})
document.querySelectorAll('.inspiration').forEach((inspirationBlock) => {
    const allChildren = inspirationBlock.children;
    const headingWrapper = allChildren[0];
    headingWrapper.classList.add('inspiration-title-block');
    const h4Div = headingWrapper.querySelector('div');
    if (h4Div) {
      h4Div.classList.add('inspiration-heading');
      const h4 = h4Div.querySelector('h4');
      if (h4 && h4.id !== 'inspiration-1') {
   h4.id = 'inspiration-1';
      }
    }
    for (let i = 1; i < allChildren.length; i++) {
      const pairBlock = allChildren[i];
      pairBlock.classList.add('picture-pair');
      pairBlock.querySelectorAll('div').forEach(div => {
        div.classList.add('picture-wrap');
        const picture = div.querySelector('picture');
        if (picture) picture.classList.add('photo');
      });
    }
   });