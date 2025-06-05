const flipCard = document.querySelector('.flip-card');

const cards = flipCard.querySelectorAll(':scope > div');

cards.forEach(card => {

  card.classList.add('card');

  const nestedDivs = card.querySelectorAll(':scope > div');

  if (nestedDivs.length >= 5) {

    nestedDivs[0].classList.add('card-image');

    nestedDivs[1].classList.add('card-title');

    nestedDivs[2].classList.add('card-desc');

    nestedDivs[3].classList.add('card-price');

    nestedDivs[4].classList.add('card-buy');

  }

});
 