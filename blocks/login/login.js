// Get containers (assuming HTML is already loaded before this script runs)

const loginDiv = document.querySelector('.login');

const usernameInputContainer = loginDiv.children[0].children[1];

const passwordInputContainer = loginDiv.children[1].children[1];

const buttonContainer = loginDiv.children[2].querySelector('div');

// Create username input

const usernameInput = document.createElement('input');

usernameInput.type = 'text';

usernameInput.placeholder = 'Enter username';

usernameInput.classList.add('login-input');

usernameInputContainer.appendChild(usernameInput);

// Create password input

const passwordInput = document.createElement('input');

passwordInput.type = 'password';

passwordInput.placeholder = 'Enter password';

passwordInput.classList.add('login-input');

passwordInputContainer.appendChild(passwordInput);

// Create submit button (anchor tag)

const submitBtn = document.createElement('a');

submitBtn.href = '#';

submitBtn.textContent = 'Submit';

submitBtn.classList.add('login-submit');

buttonContainer.appendChild(submitBtn);

// Create error message element

const errorMsg = document.createElement('p');

errorMsg.style.color = 'red';

errorMsg.style.marginTop = '10px';

errorMsg.style.display = 'none';

buttonContainer.appendChild(errorMsg);

// Handle click on submit button

submitBtn.addEventListener('click', async (e) => {

  e.preventDefault();

  const username = usernameInput.value.trim();

  const password = passwordInput.value.trim();

  if (!username || !password) {

    errorMsg.textContent = 'Please enter both username and password.';

    errorMsg.style.display = 'block';

    return;

  }

  try {

    const response = await fetch('/logininfo.json');

    if (!response.ok) throw new Error('Failed to load login info');

    const users = await response.json();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {

      errorMsg.style.display = 'none';

      // Redirect to user's page

      window.location.href = user.redirect || '/';

    } else {

      errorMsg.textContent = 'Invalid username or password.';

      errorMsg.style.display = 'block';

    }

  } catch (err) {

    errorMsg.textContent = 'Error checking login info, please try again later.';

    errorMsg.style.display = 'block';

    console.error(err);

  }

});
 