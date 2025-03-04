window.addEventListener('load', () => {
  // Wait a few seconds before starting the reveal effect
  setTimeout(() => {
      // Fade out the container
      document.querySelector('.containerMain').style.opacity = '0';

      // After the fade-out, hide the container and show the original content
      setTimeout(() => {
          document.querySelector('.containerMain').style.display = 'none'; // Hide the container
          document.querySelector('.content').classList.add('show'); // Show the original page
      }, 2000); // Delay to match the fade-out duration
  }, 1000); // Wait for 1 second before starting the fade-out
});
