document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.querySelector('video');
  
    if (videoElement) {
      videoElement.addEventListener('ended', function() {
        chrome.runtime.sendMessage({ action: 'clickNextButton' });
      });
    }
  });
  