const minicards = document.querySelectorAll(".minicard-v1");

minicards.forEach((minicard) => {

  minicard.classList.add("left");

  const allChildren = minicard.children;

  if (allChildren.length < 3) return;

  // --- HEADER SETUP ---

  const header = allChildren[0];

  header.classList.add("minicard-v1-header");

  if (header.children.length >= 2) {

    header.children[0].classList.add("minicard-v1-title-wrapper");

    header.children[1].classList.add("minicard-v1-date-wrapper");

    const dateElem = header.children[1];

    if (dateElem.textContent && !dateElem.querySelector(".post-date")) {

      const dateText = dateElem.textContent.trim();

      dateElem.innerHTML = `<span class="post-date">${dateText}</span>`;

    }

  }

  // --- BODY SETUP ---

  const body = allChildren[1];

  body.classList.add("minicard-v1-body");

  if (body.children.length >= 3) {

    body.children[0].classList.add("minicard-v1-image-wrapper");

    body.children[1].classList.add("minicard-v1-desc-wrapper");

    body.children[2].classList.add("minicard-v1-summary-wrapper");

  }

  // --- INTERACTION BAR ---

  const interactionBar = allChildren[2];

  interactionBar.classList.add("interaction-bar");

  const likeBox = interactionBar.children[0];

  likeBox.classList.add("like-box");

  const replyBox = interactionBar.children[1];

  replyBox.classList.add("reply-box");

  // Like toggle

  const likeLink = likeBox.querySelector("a");

  if (likeLink) {

    likeLink.addEventListener("click", (e) => {

      e.preventDefault();

      likeLink.textContent =

        likeLink.textContent.trim() === "Like" ? "Liked" : "Like";

    });

  }

  // --- HANDLE EXISTING REPLIES ---

  const replies = [];

  for (let i = 3; i < allChildren.length; i++) {

    const replyBlock = allChildren[i];

    replyBlock.classList.add("reply");

    const [imgDiv, nameDiv, msgDiv] = replyBlock.children;

    if (imgDiv) imgDiv.classList.add("reply-img");

    if (nameDiv) nameDiv.classList.add("reply-name");

    if (msgDiv) msgDiv.classList.add("reply-msg");

    replyBlock.style.display = "none";

    replies.push(replyBlock);

  }

  // --- REPLY TOGGLE ---

  const replyLink = replyBox.querySelector("a");

  if (replyLink) {

    const repliesCount = replies.length;

    replyLink.textContent = `Replies (${repliesCount})`;

    replyLink.setAttribute("data-visible", "false");

    replyLink.addEventListener("click", (e) => {

      e.preventDefault();

      const isVisible = replyLink.getAttribute("data-visible") === "true";

      replies.forEach((r) => {

        r.style.display = isVisible ? "none" : "flex";

      });

      replyLink.setAttribute("data-visible", isVisible ? "false" : "true");

    });

  }

  // --- COMMENT FORM ---

  const commentForm = document.createElement("div");

  commentForm.classList.add("comment-form");

  commentForm.style.marginTop = "10px";

  commentForm.style.display = "none";

  commentForm.style.flexDirection = "column";

  commentForm.style.gap = "5px";

  const nameInput = document.createElement("input");

  nameInput.type = "text";

  nameInput.placeholder = "Your name";

  nameInput.classList.add("comment-input-name");

  nameInput.style.padding = "5px";

  nameInput.style.width = "100%";

  const imageInput = document.createElement("input");

  imageInput.type = "text";

  imageInput.placeholder = "Image URL";

  imageInput.classList.add("comment-input-image");

  imageInput.style.padding = "5px";

  imageInput.style.width = "100%";

  const commentInput = document.createElement("input");

  commentInput.type = "text";

  commentInput.placeholder = "Add a comment...";

  commentInput.classList.add("comment-input-text");

  commentInput.style.padding = "5px";

  commentInput.style.width = "100%";

  const submitBtn = document.createElement("button");

  submitBtn.textContent = "Submit";

  submitBtn.style.padding = "7px 15px";

  submitBtn.style.cursor = "pointer";

  submitBtn.style.alignSelf = "flex-start";

  commentForm.appendChild(nameInput);

  commentForm.appendChild(imageInput);

  commentForm.appendChild(commentInput);

  commentForm.appendChild(submitBtn);

  // --- ADD COMMENT BUTTON ---

  const addCommentBtn = document.createElement("button");

  addCommentBtn.textContent = "Add Comment";

  addCommentBtn.style.marginTop = "10px";

  addCommentBtn.style.padding = "7px 15px";

  addCommentBtn.style.cursor = "pointer";

  addCommentBtn.style.alignSelf = "flex-start";

  minicard.insertBefore(addCommentBtn, allChildren[3] || null);

  minicard.insertBefore(commentForm, allChildren[4] || null);

  addCommentBtn.addEventListener("click", () => {

    commentForm.style.display = "flex";

    addCommentBtn.style.display = "none";

    nameInput.focus();

  });

  // --- SUBMIT NEW COMMENT ---

  submitBtn.addEventListener("click", () => {

    const userName = nameInput.value.trim();

    const userImage = imageInput.value.trim();

    const userDesc = commentInput.value.trim();

    if (!userName) return alert("Name is required.");

    if (!userImage) return alert("Image URL is required.");

    if (!userDesc) return alert("Please enter a comment.");

    // Create new reply

    const newReply = document.createElement("div");

    newReply.classList.add("reply");

    newReply.style.display =

      replyLink.getAttribute("data-visible") === "true" ? "flex" : "none";

    const replyImgDiv = document.createElement("div");

    replyImgDiv.classList.add("reply-img");

    const img = document.createElement("img");

    img.src = userImage;

    img.alt = `${userName}'s avatar`;

    replyImgDiv.appendChild(img);

    const replyNameDiv = document.createElement("div");

    replyNameDiv.classList.add("reply-name");

    const nameP = document.createElement("p");

    nameP.textContent = userName;

    replyNameDiv.appendChild(nameP);

    const replyMsgDiv = document.createElement("div");

    replyMsgDiv.classList.add("reply-msg");

    const msgP = document.createElement("p");

    msgP.textContent = userDesc;

    replyMsgDiv.appendChild(msgP);

    newReply.appendChild(replyImgDiv);

    newReply.appendChild(replyNameDiv);

    newReply.appendChild(replyMsgDiv);

    // Insert before the comment form

    minicard.insertBefore(newReply, commentForm);

    // Update replies array and reply count

    replies.push(newReply);

    let currentCount = parseInt(replyLink.textContent.match(/\d+/)[0]);

    currentCount++;

    replyLink.textContent = `Replies (${currentCount})`;

    // Reset form

    nameInput.value = "";

    imageInput.value = "";

    commentInput.value = "";

    commentForm.style.display = "none";

    addCommentBtn.style.display = "inline-block";

  });

});
 