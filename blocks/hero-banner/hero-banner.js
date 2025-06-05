document.querySelectorAll('.hero-banner').forEach(heroBanner=>{
    const [imageDiv, titleDiv, subtitleDiv, buttonDiv] = heroBanner.children;

imageDiv.className = 'hero-image-block';

imageDiv.querySelector('picture').className = 'hero-picture';

titleDiv.className = 'hero-title-block';

const titleP = titleDiv.querySelector('p');

titleP.className = 'hero-title';

titleP.setAttribute('data-aos', 'fade-up');

subtitleDiv.className = 'hero-subtitle-block';

const subtitleP = subtitleDiv.querySelector('p');

subtitleP.className = 'hero-subtitle';

subtitleP.setAttribute('data-aos', 'fade-up');

buttonDiv.className = 'hero-cta-block';

const buttonA = buttonDiv.querySelector('a');

buttonDiv.querySelector('p').className = 'hero-button-wrap';

buttonA.className = 'hero-btn';

buttonA.setAttribute('data-aos', 'zoom-in');
 

});

