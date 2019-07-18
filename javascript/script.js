// Grabbing DOM elements in the header
const headerIcon = document.getElementById('header-icon');
const headerName = document.getElementById('header-name');
const headerUl = document.getElementById('header-ul');
const headerLeftSpan = document.getElementById('header-left-span');

// Grabbing DOM icon elements in Specialized section

// DOM elements in contact card
const contactCardId = document.getElementById('contact-card-id');

// listening for the window to be resized.
// basically setting up media queries to remove and add bootstrap classes
window.addEventListener('load', function() {
  let windowSize = document.documentElement.clientWidth;
  // console.log(windowSize);
  if (windowSize <= 575.98) {
    headerLeftSpan.classList.remove('ml-5');
    headerLeftSpan.classList.add('ml-0');

    // removing margin right from the header UL group
    // console.log(headerUl);
    headerUl.classList.remove('mr-5');
    headerUl.classList.add('mr-0');
    headerUl.classList.add('mt-3');

    // margin on the contact info card bottom
    contactCardId.classList.add('mb-5');

    // console.log('Less than 575.98px');
  } else if (windowSize >= 576 && windowSize <= 767.98) {
    // removing margin left from headerIcon
    // console.log(headerLeftSpan);
    headerLeftSpan.classList.remove('ml-5');
    headerLeftSpan.classList.add('ml-0');

    // removing margin right from the header UL group
    // console.log(headerUl);
    headerUl.classList.remove('mr-5');
    headerUl.classList.add('mr-0');

    // logging the screen size were in
    console.log('equal to 576 less than = to 767.98');
  } else if (windowSize >= 768 && windowSize <= 991.98) {
    console.log('equal to 768 less than = to 991.98');
    // fix the header size of fonts

    // decrease the size of the icon

    // remove padding & margin

    // adding smaller padding and margin with bootstrap or css media query
    headerLeftSpan.classList.remove('ml-5');
    headerLeftSpan.classList.add('ml-2');
    console.log(headerLeftSpan);
  } else if (windowSize >= 992 && windowSize <= 1199.98) {
    console.log('equal to 992 and less than equal to 1199.98');
  }
});
