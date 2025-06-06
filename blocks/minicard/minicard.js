const minicards = document.querySelectorAll('.minicard');
// const allMinicard=document.querySelectorAll(".minicard-container");
minicards.forEach(minicard => {

  const allChildren = minicard.children;
 

  allChildren[0].classList.add('minicard-header');

  allChildren[0].children[0].classList.add('title-wrapper');

  allChildren[0].children[1].classList.add('date-wrapper');

  allChildren[1].classList.add('minicard-body');

  allChildren[1].children[0].classList.add('image-wrapper');

  allChildren[1].children[1].classList.add('desc-wrapper');

  allChildren[1].children[2].classList.add('summary-wrapper');

  allChildren[2].classList.add('interaction-bar');

  allChildren[2].children[0].classList.add('like-box');

  allChildren[2].children[1].classList.add('reply-box');


  const h5 = allChildren[0].children[1];

  h5.innerHTML = h5.innerHTML.replace(

    'May 2, 2016',

    '<span class="post-date">May 2, 2016</span>'

  );



  for (let i = 3; i < allChildren.length; i++) {

    const replyBlock = allChildren[i];

    replyBlock.classList.add('reply');

    const [imgDiv, nameDiv, msgDiv] = replyBlock.children;

    if (imgDiv) imgDiv.classList.add('reply-img');

    if (nameDiv) nameDiv.classList.add('reply-name');

    if (msgDiv) msgDiv.classList.add('reply-msg');

  
    replyBlock.style.display = 'none'; // hide 
}

  

 
  
  // Replies count

  const repliesCount = allChildren.length - 3;



  const replyBoxLink = allChildren[2].querySelector('.reply-box a');

  if (replyBoxLink) {

    replyBoxLink.textContent = `Replies (${repliesCount})`;

    replyBoxLink.addEventListener('click', e => {

      e.preventDefault();

      for (let i = 3; i < allChildren.length; i++) {

        const replyBlock = allChildren[i];

        replyBlock.style.display = replyBlock.style.display === 'none' ? 'block' : 'none';

      }

    });

  }



  const likeBoxLink = allChildren[2].querySelector('.like-box a');

  if (likeBoxLink) {

    likeBoxLink.addEventListener('click', e => {

      e.preventDefault();

      likeBoxLink.textContent = likeBoxLink.textContent.trim() === 'Like' ? 'Liked' : 'Like';

    });

  }

});
 
