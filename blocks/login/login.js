(async () => {

    const loginContainer = document.querySelector('.login');
  
    if (!loginContainer) return;
  
    // Add structure and classes
  
    const [userDiv, passDiv, submitDiv] = loginContainer.children;
  
    // Username
  
    userDiv.classList.add('login-field');
  
    const usernameLabel = userDiv.querySelector('p');
  
    usernameLabel.textContent = 'Enter your username';
  
    const usernameInput = document.createElement('input');
  
    usernameInput.type = 'text';
  
    usernameInput.placeholder = 'Username';
  
    usernameInput.classList.add('login-input');
  
    userDiv.appendChild(usernameInput);
  
    // Password
  
    passDiv.classList.add('login-field');
  
    const passwordLabel = passDiv.querySelector('p');
  
    passwordLabel.textContent = 'Enter your password';
  
    const passwordInput = document.createElement('input');
  
    passwordInput.type = 'password';
  
    passwordInput.placeholder = 'Password';
  
    passwordInput.classList.add('login-input');
  
    passDiv.appendChild(passwordInput);
  
    // Submit button
  
    const buttonContainer = submitDiv.querySelector('.button-container');
  
    const button = buttonContainer.querySelector('a');
  
    button.textContent = 'Submit';
  
    button.style.cursor = 'pointer';
  
    button.addEventListener('click', async (e) => {
  
      e.preventDefault();
  
      const username = usernameInput.value.trim();
  
      const password = passwordInput.value.trim();
  
      if (!username || !password) return alert('Please fill in both fields.');
  
      try {
  
        const res = await fetch('/logininfo.json');
  
        const json = await res.json();
  
        const users = json?.data || [];
  
        const match = users.find(u => u.username === username && u.password === password);
  
        if (match) {
  
          localStorage.setItem('loggedIn', 'true');
  
          localStorage.setItem('user', JSON.stringify(match));
  
          const redirect = sessionStorage.getItem('redirectAfterLogin') || '/';
  
          window.location.href = redirect;
  
        } else {
  
          alert('Invalid credentials!');
  
        }
  
      } catch (err) {
  
        console.error('Login error:', err);
  
        alert('Login failed!');
  
      }
  
    });
  
  })();
   