// content.js
document.addEventListener('DOMContentLoaded', function() {
    // Check if the video element is present on the page
    const videoElement = document.querySelector('video');
  
    if (videoElement) {
      // Add an event listener to detect when the video ends
      videoElement.addEventListener('ended', function() {
        // Send a message to the background script to click the "Next" button
        chrome.runtime.sendMessage({ action: 'clickNextButton' });
      });
    }
  });
  