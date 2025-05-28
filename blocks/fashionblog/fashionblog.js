document.querySelectorAll(".fashionblog-container").forEach((right) => {
  right.classList.add("center");
});
const fashionblog = document.querySelector(".fashionblog");
const imageContainer = fashionblog.children[0];
imageContainer.classList.add("image-container");
const overlayContainer = fashionblog.children[1];
overlayContainer.classList.add("overlay-text");
const [janesDiv, fashionBlogDiv, subscribeDiv] = overlayContainer.children;
janesDiv.querySelector("h1").id = "janes";
janesDiv.classList.add("janes-container");
fashionBlogDiv.querySelector("h1").id = "fashion-blog";
fashionBlogDiv.classList.add("fashion-blog-container");
// subscribeDiv.querySelector("h6").id = "subscribe";
subscribeDiv.classList.add("subscribe-container");

// 1. Add Subscribe button inside .subscribe-container
const container = document.querySelector(".fashion-blog-container");
if (container) {
  const button = document.createElement("button");
  button.textContent = "Subscribe";
  button.className = "custom-subscribe-btn";
  button.addEventListener("click", () => {
    const modal = document.querySelector(".custom-modal");
    if (modal) modal.classList.add("show");
  });
  container.appendChild(button);
}

if (!document.querySelector(".custom-modal")) {
  const modalHTML = `
    <div class="custom-modal">
      <div class="custom-modal-content">
        <span class="close-modal">&times;</span>
        <h2>Subscribe to Our Blog</h2>
        <p>Get the latest updates right in your inbox.</p>
        <input type="email" placeholder="Enter your email" class="custom-input" />
        <button class="custom-submit-btn">Subscribe</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Close modal on X click
  document.querySelector(".close-modal").addEventListener("click", () => {
    document.querySelector(".custom-modal").classList.remove("show");
  });

  // Close modal on outside click
  document.querySelector(".custom-modal").addEventListener("click", (e) => {
    if (e.target.classList.contains("custom-modal")) {
      e.target.classList.remove("show");
    }
  });
}

// 3. Handle subscribe button inside modal with localStorage
const submitBtn = document.querySelector(".custom-submit-btn");
const emailInput = document.querySelector(".custom-input");

submitBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter your email");
    return;
  }
  let emails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
  if (emails.includes(email)) {
    alert("This email is already subscribed!");
    return;
  }
  emails.push(email);
  localStorage.setItem("subscribedEmails", JSON.stringify(emails));
  emailInput.value = "";
  document.querySelector(".custom-modal").classList.remove("show");

  alert("Thank you for subscribing!");
});
