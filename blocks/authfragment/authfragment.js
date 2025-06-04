// (() => {

//     if (localStorage.getItem('loggedIn') !== 'true') {
  
//       sessionStorage.setItem('redirectAfterLogin', window.location.href);
  
//       window.location.href = '/login';
  
//     }else{

//     }
  
//   })();

(async () => {

    // Fetch the JSON with protected pages
  
    let protectedPages = [];
  
    try {
  
      const res = await fetch('/protectedpages.json');
  
      const data = await res.json();
      console.log(data);
  
      protectedPages = data.protectedPages || [];
  
    } catch (err) {
  
      console.error('Failed to fetch protectedPages.json', err);
  
    }
  
    // Get current page path (like "/dashboard.html")
  
    const currentPath = window.location.pathname.toLowerCase();
  
    // Check if current page needs login
  
    if (protectedPages.includes(currentPath)) {
  
      // If not logged in, redirect to login page
  
      if (localStorage.getItem('loggedIn') !== 'true') {
  
        sessionStorage.setItem('redirectAfterLogin', window.location.href);
  
        window.location.href = '/login';
  
      }
  
    }
  
  })();
   