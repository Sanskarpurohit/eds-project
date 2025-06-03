document.querySelectorAll(".subscribe-container").forEach(right=>{
    right.classList.add("right");
  });
const subscribeBlock = document.querySelector('.subscribe');

if (subscribeBlock) {

  const outerDivs = subscribeBlock.children;

  // 1. Heading Block

  const headingInnerDiv = outerDivs[0]?.firstElementChild;

  headingInnerDiv.classList.add('subscribe-heading');

  // 2. Description Block

  const descriptionInnerDiv = outerDivs[1]?.firstElementChild;

  descriptionInnerDiv.classList.add('subscribe-description');

  // 3. Input Block

  const inputInnerDiv = outerDivs[2]?.firstElementChild;

  inputInnerDiv.classList.add('subscribe-input-container');

  const emailInput = document.createElement('input');

  emailInput.type = 'email';

  emailInput.placeholder = 'Enter your email';

  emailInput.className = 'custom-input';

  inputInnerDiv.appendChild(emailInput);

  // 4. Button Block

  const buttonInnerDiv = outerDivs[3]?.firstElementChild;

  buttonInnerDiv.classList.add('subscribe-button-container');

  const anchor = buttonInnerDiv.querySelector('a');

  anchor.className = 'custom-subscribe-btn';

  anchor.href = 'javascript:void(0)';

  // Click handler

  anchor.addEventListener('click', () => {

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

    alert("Thank you for subscribing!");

    // Data Layer push

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({

      event: "subscribe",

      email: email,

      component: "fashion-blog-subscribe"

    });

  });

}
 