/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const sectionList = document.querySelectorAll('section');
const navBarList = document.querySelector('#navbar__list');
const topButton = document.querySelector('#topBtn');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//function to check if the section is in the viewport. If so, returns true. Otherwise, false.
let isInViewport = sec => {
  const rect = sec.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    //  fallbacks if browser does not support the above
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
// build the nav
//function to build navbar
let buildNav = (secList, navList) => {
  //for..of loop to create list item for every item in the secList and attach to the given navList
  for (const sec of secList) {
    const newElement = `<li data-link=${sec.getAttribute(
      'id'
    )} class="menu__link">
              <a href="#${sec.getAttribute('id')}">${sec.getAttribute(
      'data-nav'
    )}</a>
          </li>`;
    navList.insertAdjacentHTML('beforeend', newElement);
  }
};

// Add class 'your-active-class' to section when near top of viewport
let setActiveSection = secList => {
  for (const sec of secList) {
    //classical if-else for readability
    if (isInViewport(sec)) {
      sec.classList.toggle('your-active-class', true);
      document
        .querySelector(`[data-link="${sec.getAttribute('id')}"]`)
        .classList.toggle('your-active-class', true);
    } else {
      sec.classList.toggle('your-active-class', false);
      document
        .querySelector(`[data-link="${sec.getAttribute('id')}"]`)
        .classList.toggle('your-active-class', false);
    }
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.onload = () => buildNav(sectionList, navBarList);

// Scroll smooth to section on link click
const navLinks = document.querySelectorAll('#navbar__list a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // prevent the page from reloading (a default behavior when a link is clicked)
    const id = event.target.hasAttribute('data-link')
      ? event.target
      : event.target.parentElement; // get id from href value of the link

    // get the reference to the corresponding section
    const targetSection = document.querySelector(
      `#${id.getAttribute('data-link')}`
    ); // use `.querySelector(id)` to select the corresponding section

    // add smooth scrolling feature
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  });
});
// When the user scrolls down 30px from the top of the document, show the button
function scrollFunction () {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Set sections as active
window.onscroll = () => {
  setActiveSection(sectionList);
  scrollFunction();
};
