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

// navigation global variable
const navigation = document.getElementById('navbar__list');
// section global variable
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {
  let navList = document.createElement('li');

  // looping over all sections
  sections.forEach((section) => {
    const sectionID = section.getAttribute('id');
    const sectionDataNav = section.getAttribute('data-nav');
    // looping in navList = navList + li + anchor every section name and id
    navList += `<a href='#${sectionID}' class='menu__link'${sectionDataNav}>${sectionDataNav}</a>`;
  });
  // append all elements to the navigation
  navigation.innerHTML = navList;
}

buildNav();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
