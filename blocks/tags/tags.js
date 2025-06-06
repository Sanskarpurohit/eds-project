
document.querySelectorAll('.tags').forEach(tagsBlock => {
    const [titleWrapper, linksWrapper] = tagsBlock.children;
    titleWrapper.classList.add('tags-title-block');
    const h4 = titleWrapper.querySelector('h4');
    if (h4) h4.id = 'tags-title';
    linksWrapper.classList.add('tags-links-block');
    const h5 = linksWrapper.querySelector('h5');
    if (h5) {
      h5.classList.add('tags-list');
      h5.querySelectorAll('a').forEach(tag => tag.classList.add('tag'));
    }
   });