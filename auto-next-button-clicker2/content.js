// Adapt these selectors and events based on your website analysis:
const videos = document.querySelectorAll("video");  // Find all video elements
const nextButton = document.querySelector("button[aria-label='Next']");  // Find the Next button (if applicable)

// Function to simulate the next video action
function playNextVideo() {
  // Choose one of the following approaches:

  // 1. If there's a "Next" button, click it:
  if (nextButton) {
    nextButton.click();
  } else {
    // 2. If no "Next" button, trigger the video player's logic:
    videos[1].play();  // Assuming the next video is the second one
  }
}

// Listen for the appropriate video end event
videos[0].addEventListener("ended", playNextVideo);  // Assuming the first video is the one to watch
