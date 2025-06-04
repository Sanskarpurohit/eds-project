(() => {

    if (localStorage.getItem('loggedIn') !== 'true') {
  
      sessionStorage.setItem('redirectAfterLogin', window.location.href);
  
      window.location.href = '/login';
  
    }else{

    }
  
  })();

