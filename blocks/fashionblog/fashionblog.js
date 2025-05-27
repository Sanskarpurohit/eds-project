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
subscribeDiv.querySelector("h6").id = "subscribe";
subscribeDiv.classList.add("subscribe-container");

// Create Subscribe Button
const container = document.querySelector('.subscribe-container');
if (container) {
  const button = document.createElement('button');
  button.textContent = 'Subscribe';
  button.className = 'custom-subscribe-btn';
  button.addEventListener('click', () => {
    const modal = document.querySelector('.custom-modal');
    if (modal) modal.classList.add('show');
  });
  container.appendChild(button);
}

// Create Modal if not present
if (!document.querySelector('.custom-modal')) {
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
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  // Close modal on X click
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.custom-modal').classList.remove('show');
  });

  // Close modal on outside click
  document.querySelector('.custom-modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('custom-modal')) {
      e.target.classList.remove('show');
    }
  });
}
