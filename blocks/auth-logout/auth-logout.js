// Check login and show/hide logout block

const logoutBlock = document.querySelector('.auth-logout');

const logoutBtn = logoutBlock?.querySelector('a');

const username = localStorage.getItem('loggedInUser');

if (username && logoutBlock) {

  logoutBlock.style.display = 'block'; // show block

  logoutBtn.textContent = `Logout (${username})`;

} else if (logoutBlock) {

  logoutBlock.style.display = 'none'; // hide block if not logged in

}

// Logout function

logoutBtn?.addEventListener('click', (e) => {

  e.preventDefault();

  localStorage.removeItem('loggedInUser');

  // Optional: redirect or refresh

  location.reload(); // or window.location.href = '/login';

});
 