document.querySelectorAll(".carousel").forEach(carousel=>{
  const slides = carousel.querySelectorAll(":scope > div");

  // Add classes to each slide and inner elements
  
  slides.forEach((slide, i) => {
  
    slide.classList.add("slide");
  
    const imgDiv = slide.children[0];
  
    imgDiv.classList.add("slide-image");
  
    const picture = imgDiv.querySelector("picture");
  
    picture.classList.add("slide-picture");
  
    const img = picture.querySelector("img");
  
    img.classList.add("slide-img");
  
    const titleDiv = slide.children[1];
  
    titleDiv.classList.add("slide-title");
  
    const titleP = titleDiv.querySelector("p");
  
    titleP.classList.add("title-text");
  
    const descDiv = slide.children[2];
  
    descDiv.classList.add("slide-description");
  
    const descP = descDiv.querySelector("p");
  
    descP.classList.add("description-text");
  
  });
  
  let currentSlide = 0;
  
  function showSlide(index) {
  
    slides.forEach((slide, i) => {
  
      slide.style.display = i === index ? "flex" : "none";
  
    });
  
  }
  
  function nextSlide() {
  
    currentSlide = (currentSlide + 1) % slides.length;
  
    showSlide(currentSlide);
  
  }
  
  // Initialize
  
  showSlide(currentSlide);
  
  // Auto slide every 5 seconds
  
  setInterval(nextSlide, 5000);
   

});

