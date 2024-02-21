// background.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === 'clickNextButton') {
        // Simulate a click on the "Next" button
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(tabs[0].id, { code: 'document.querySelector(".next-button").click();' });
        });
      }
    });
  