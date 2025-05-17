const minicard = document.querySelector('.minicard');
const allChildren = minicard.children;
// --- Assign classes to first 3 blocks ---
allChildren[0].classList.add('minicard-header'); // Title + date block
allChildren[0].children[0].classList.add('title-wrapper');   // h3
allChildren[0].children[1].classList.add('date-wrapper');    // h5
allChildren[1].classList.add('minicard-body'); // Image + description block
allChildren[1].children[0].classList.add('image-wrapper');   // picture div
allChildren[1].children[1].classList.add('desc-wrapper');    // p
allChildren[1].children[2].classList.add('summary-wrapper'); // p
allChildren[2].classList.add('interaction-bar'); // Like + Reply block
allChildren[2].children[0].classList.add('like-box');   // like h6 > a
allChildren[2].children[1].classList.add('reply-box');  // replies h6 > a
// --- Wrap the date in a <span> inside the h5 ---
const h5 = allChildren[0].children[1]; // h5 element
h5.innerHTML = h5.innerHTML.replace(
  'May 2, 2016',
  '<span class="post-date">May 2, 2016</span>'
);
// --- Handle all reply blocks (from 4th div onward) ---
for (let i = 3; i < allChildren.length; i++) {
  const replyBlock = allChildren[i];
  replyBlock.classList.add('reply'); // Mark as a reply
  const [imgDiv, nameDiv, msgDiv] = replyBlock.children;
  if (imgDiv) imgDiv.classList.add('reply-img');
  if (nameDiv) nameDiv.classList.add('reply-name');
  if (msgDiv) msgDiv.classList.add('reply-msg');
  // Hide replies by default
  replyBlock.style.display = 'none';
}
// --- Toggle function to show/hide replies ---
function toggleReply() {
  const replies = document.querySelectorAll('.minicard .reply');
  replies.forEach(reply => {
    reply.style.display = reply.style.display === 'none' ? 'block' : 'none';
  });
}
const likeButton = allChildren[2].querySelector('.like-box a');
if (likeButton) {
 likeButton.addEventListener('click', (e) => {
   e.preventDefault();
   likeButton.textContent = likeButton.textContent === 'Like' ? 'Liked' : 'Like';
 });
}
const replyButton = allChildren[2].querySelector('.reply-box a');
if (replyButton) {
  replyButton.addEventListener('click', (e) => {
    e.preventDefault();
    toggleReply();
  });
}

const repliesBtn = document.querySelector('.reply-box #replies a');
const replyCount = document.querySelectorAll('.reply').length;
if (repliesBtn) {
 repliesBtn.textContent = `Replies (${replyCount})`;
}