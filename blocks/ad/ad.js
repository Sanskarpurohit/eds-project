
document.querySelectorAll('.ad').forEach(ad => {
    const titleWrapper = ad.children[0];
    const titleInner = titleWrapper?.children[0];
    if (titleInner) titleInner.classList.add('ad-title-block');
    const imgWrapper = ad.children[1];
    const imageInner = imgWrapper?.children[0];
    if (imageInner) imageInner.classList.add('ad-image');
   });
   