const minicards = document.querySelectorAll(".minicard-v1");
minicards.forEach((left) => {
  left.classList.add("left");
});

minicards.forEach((minicard, index) => {
  const allChildren = minicard.children;
  if (allChildren.length < 3) return;

  // Header & body setup
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

  const body = allChildren[1];
  body.classList.add("minicard-v1-body");
  if (body.children.length >= 3) {
    body.children[0].classList.add("minicard-v1-image-wrapper");
    body.children[1].classList.add("minicard-v1-desc-wrapper");
    body.children[2].classList.add("minicard-v1-summary-wrapper");
  }

  const interactionBar = allChildren[2];
  interactionBar.classList.add("interaction-bar");

  const likeBox = interactionBar.children[0];
  likeBox.classList.add("like-box");

  const replyBox = interactionBar.children[1];
  replyBox.classList.add("reply-box");

  // LIKE toggle functionality
  const likeLink = likeBox.querySelector("a");
  if (likeLink) {
    likeLink.addEventListener("click", (e) => {
      e.preventDefault();
      likeLink.textContent =
        likeLink.textContent.trim() === "Like" ? "Liked" : "Like";
    });
  }

  // REPLY toggle existing replies
  let replies = [];
  for (let i = 3; i < allChildren.length; i++) {
    const replyBlock = allChildren[i];
    replyBlock.classList.add("reply");
    const [imgDiv, nameDiv, msgDiv] = replyBlock.children;
    if (imgDiv) imgDiv.classList.add("reply-img");
    if (nameDiv) nameDiv.classList.add("reply-name");
    if (msgDiv) msgDiv.classList.add("reply-msg");

    replyBlock.style.display = "none"; // hide by default
    replies.push(replyBlock);
  }

  const replyLink = replyBox.querySelector("a");
  if (replyLink) {
    const repliesCount = replies.length;
    replyLink.textContent = `Replies (${repliesCount})`;
    replyLink.addEventListener("click", (e) => {
      e.preventDefault();
      replies.forEach((r) => {
        r.style.display = r.style.display === "none" ? "flex" : "none";
      });
    });
  }

  // --- CREATE comment form and "Add Comment" button ---

  // Comment form container (hidden initially)
  const commentForm = document.createElement("div");
  commentForm.classList.add("comment-form");
  commentForm.style.marginTop = "10px";
  commentForm.style.display = "none"; // hidden initially
  commentForm.style.flexDirection = "column";
  commentForm.style.gap = "5px";

  // Input fields
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

  // Create the "Add Comment" button (visible initially)
  const addCommentBtn = document.createElement("button");
  addCommentBtn.textContent = "Add Comment";
  addCommentBtn.style.marginTop = "10px";
  addCommentBtn.style.padding = "7px 15px";
  addCommentBtn.style.cursor = "pointer";
  addCommentBtn.style.alignSelf = "flex-start";

  // Append both to minicard after interaction bar
  minicard.insertBefore(addCommentBtn, allChildren[3] || null);
  minicard.insertBefore(commentForm, allChildren[4] || null);

  // Toggle form visibility when Add Comment button clicked
  addCommentBtn.addEventListener("click", () => {
    if (commentForm.style.display === "none") {
      commentForm.style.display = "flex";
      addCommentBtn.style.display = "none";
      nameInput.focus();
    }
  });

  // On submit click: add a new reply block with user comment and info
  submitBtn.addEventListener("click", () => {
    const userName = nameInput.value.trim();
    const userImage = imageInput.value.trim();
    const userDesc = commentInput.value.trim();

    if (!userName) return alert("Name is required.");
    if (!userImage) return alert("Image URL is required.");
    if (!userDesc) return alert("Please enter a comment.");

    // Create new reply block structure
    const newReply = document.createElement("div");
    newReply.classList.add("reply");
    newReply.style.display = "flex";

    // reply-img
    const replyImgDiv = document.createElement("div");
    replyImgDiv.classList.add("reply-img");
    const img = document.createElement("img");
    img.src = userImage;
    img.alt = `${userName}'s avatar`;
    replyImgDiv.appendChild(img);

    // reply-name
    const replyNameDiv = document.createElement("div");
    replyNameDiv.classList.add("reply-name");
    const nameP = document.createElement("p");
    nameP.textContent = userName;
    replyNameDiv.appendChild(nameP);

    // reply-msg
    const replyMsgDiv = document.createElement("div");
    replyMsgDiv.classList.add("reply-msg");
    const msgP = document.createElement("p");
    msgP.textContent = userDesc;
    replyMsgDiv.appendChild(msgP);

    // Append new reply children
    newReply.appendChild(replyImgDiv);
    newReply.appendChild(replyNameDiv);
    newReply.appendChild(replyMsgDiv);

    // Append new reply to minicard
    minicard.appendChild(newReply);

    // Clear inputs and hide form, show button
    nameInput.value = "";
    imageInput.value = "";
    commentInput.value = "";
    commentForm.style.display = "none";
    addCommentBtn.style.display = "inline-block";

    // Update reply count
    let currentCount = parseInt(replyLink.textContent.match(/\d+/)[0]);
    currentCount++;
    replyLink.textContent = `Replies (${currentCount})`;

    // Add new reply to replies array so toggle works
    replies.push(newReply);
  });
});
