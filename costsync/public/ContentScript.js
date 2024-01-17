chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'TabUpdated') {
      const currentUrl = document.location.href;
  

      // Check if the URL has changed
      const previousUrl = localStorage.getItem('previousUrl');
      if (currentUrl !== previousUrl) {
        
        console.log('URL changed:', currentUrl);
        localStorage.setItem('previousUrl', currentUrl);
        if (currentUrl.includes("https://www.flipkart.com/")) {
            setTimeout(flipcart, 2000);
          } else if (currentUrl.includes("https://www.olx.in/")) {
            setTimeout(olx, 1000)

          } else if (currentUrl.includes("https://www.meesho.com/")) {
           mesho()
          }
        
      }
    }
  });
  
