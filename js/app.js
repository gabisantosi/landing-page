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

// check if the element in on the viewport
function isInViewport (element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight + rect.height ||
        document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

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

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
//function to build navbar
let buildNav = (sectionList, navBarList) => {
  //for..of loop to create list item for every item in the secList and attach to the navList
  for (const sec of sectionList) {
    const newElement = `<li data-link=${sec.getAttribute(
      'id'
    )} class="menu__link">
               <a href="#${sec.getAttribute('id')}">${sec.getAttribute(
      'data-nav'
    )}</a>
           </li>`;
    navBarList.insertAdjacentHTML('beforeend', newElement);
  }
};

// Add class 'your-active-class' to section when on viewport
// loop through each section
let setActiveSection = secList => {
  sectionList.forEach(section => {
    // on window scroll
    const sectionId = section.getAttribute('id');
    const navbarSections = document.querySelectorAll('li');
    window.addEventListener('scroll', e => {
      // Check if is in viewport
      if (isInViewport(section)) {
        section.classList.add('your-active-class');
        for (let i = 0; i < navbarSections.length; i++) {
          const datalink = navbarSections[i].getAttribute('data-link');
          if (datalink == sectionId) {
            navbarSections[i].classList.add('your-active-class');
          }
        }
        // otherwise, remove the class
      } else {
        section.classList.remove('your-active-class');
        for (let i = 0; i < navbarSections.length; i++) {
          const datalink = navbarSections[i].getAttribute('data-link');
          if (datalink == sectionId) {
            navbarSections[i].classList.remove('your-active-class');
          }
        }
      }
    });
  });
};
/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu
window.onload = () => buildNav(sectionList, navBarList);

// Scroll smooth to section on link click

navBarList.addEventListener('click', e => {
  e.preventDefault(); // prevent the page from reloading (a default behavior when a link is clicked)
  const parent = e.target.hasAttribute('data-link')
    ? e.target
    : e.target.parentElement;

  // get the reference to the corresponding section
  const targetSection = document.getElementById(parent.dataset.link);
  // add smooth scrolling feature

  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
});

// Set sections as active and
window.onscroll = () => {
  setActiveSection(sectionList);
  scrollFunction();
};
/**
 * * End Main Functions
 *
 */
