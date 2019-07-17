// listening for the window to be resized.
// basically setting up media queries to remove and add bootstrap classes
window.addEventListener('resize', function() {
  let windowSize = document.documentElement.clientWidth;
  console.log(windowSize);
});
