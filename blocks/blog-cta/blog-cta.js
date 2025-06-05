
const blogCta = document.querySelector('.blog-cta');

if (blogCta) {

  const outerDivs = blogCta.children;

  // 1. Heading Block

  const headingInnerDiv = outerDivs[0]?.firstElementChild;

  headingInnerDiv.classList.add('blogcta-heading');

  // 2. Description Block

  const descriptionInnerDiv = outerDivs[1]?.firstElementChild;

  descriptionInnerDiv.classList.add('blogcta-description');

  // 3. Input Block

  const inputInnerDiv = outerDivs[2]?.firstElementChild;

  inputInnerDiv.classList.add('blogcta-input-container');

  const emailInput = document.createElement('input');

  emailInput.type = 'email';

  emailInput.placeholder = 'Enter your email';

  emailInput.className = 'custom-input';

  inputInnerDiv.appendChild(emailInput);

  // 4. Button Block

  const buttonInnerDiv = outerDivs[3]?.firstElementChild;

  buttonInnerDiv.classList.add('blogcta-button-container');

  const anchor = buttonInnerDiv.querySelector('a');

  anchor.className = 'custom-blogcta-btnNew';

  anchor.href = 'javascript:void(0)';

  // Click handler

  anchor.addEventListener('click', () => {

    const email = emailInput.value.trim();

    if (!email) {

      alert("Please enter your email");

      return;

    }

    let emails = JSON.parse(localStorage.getItem("blogctaEmail")) || [];

    if (emails.includes(email)) {

      alert("This email is already subscribed!");

      return;

    }

    emails.push(email);

    localStorage.setItem("blogctaEmail", JSON.stringify(emails));

    emailInput.value = "";

    alert("Thank you for subscribing!");

    // Data Layer push

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({

      event: "subscribe",

      email: email,

      component: "blogcta-subscribe"

    });

  });

}
 