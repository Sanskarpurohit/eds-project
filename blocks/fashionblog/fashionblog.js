document.querySelectorAll(".fashionblog-container").forEach(right=>{
    right.classList.add("center");
})
const fashionblog = document.querySelector('.fashionblog');
const imageContainer = fashionblog.children[0];
imageContainer.classList.add('image-container');
const overlayContainer = fashionblog.children[1];
overlayContainer.classList.add('overlay-text');
const [janesDiv, fashionBlogDiv, subscribeDiv] = overlayContainer.children;
janesDiv.querySelector('h1').id = 'janes';
janesDiv.classList.add('janes-container');
fashionBlogDiv.querySelector('h1').id = 'fashion-blog';
fashionBlogDiv.classList.add('fashion-blog-container');
subscribeDiv.querySelector('h6').id = 'subscribe';
subscribeDiv.classList.add('subscribe-container');