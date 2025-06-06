(() => {
    const metaTag = document.querySelector('meta[name="logo"]');
    const pageTag = metaTag ? metaTag.content.toLowerCase() : 'default';
    const customLogoDivs = document.querySelectorAll('.customlogo > div');
    let matchedDiv = null;
    customLogoDivs.forEach(div => {
      const brandNameP = div.querySelector('div > p');
      if (!brandNameP) return;
      const brandName = brandNameP.textContent.trim().toLowerCase();
      if (brandName === pageTag) {
        div.style.display = 'block';
        matchedDiv = div;
      } else {
        div.style.display = 'none';
      }
    });
    if (!matchedDiv) {
      customLogoDivs.forEach(div => {
        const brandNameP = div.querySelector('div > p');
        if (!brandNameP) return;
        const brandName = brandNameP.textContent.trim().toLowerCase();
        if (brandName === 'default') {
          div.style.display = 'block';
        } else {
          div.style.display = 'none';
        }
      });
    }
   })();