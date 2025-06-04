const logoutBlock = document.querySelector('.auth-logout');
const logoutLink = document.querySelector('.auth-logout a');
function updateLogoutUI() {
 const loggedIn = localStorage.getItem('loggedIn') === 'true';
 const userJson = localStorage.getItem('user');
    const userobj=JSON.parse(userJson);
    const username=userobj.username;
    console.log(username);
 if (logoutBlock) {
   if (loggedIn && username) {
     logoutBlock.style.display = 'flex';  // show logout block
     alert("Hello "+username);
   }
 }
}
if (logoutLink) {
 logoutLink.addEventListener('click', (e) => {
   e.preventDefault();
   localStorage.setItem('loggedIn', 'false');
   localStorage.removeItem('username');
   updateLogoutUI();
   window.location.reload();
 });
}
updateLogoutUI();