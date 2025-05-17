const myNameCard=document.querySelector('.myname');

const imageWrapper=myNameCard.children[0];

imageWrapper.classList.add('myname-image');

const pictureDiv=imageWrapper.querySelector('div');

pictureDiv.classList.add('picture');

const textWrapper=myNameCard.children[1];

textWrapper.classList.add('text-wrapper');

const nameDiv=textWrapper.children[0];

const descDiv=textWrapper.children[1];

nameDiv.classList.add('name-div');

descDiv.classList.add('desc-div');

const h4=nameDiv.querySelector('h4');

h4.id='my-name';

const p=descDiv.querySelector('p');

p.classList.add('description');
 