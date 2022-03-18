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

//Build scroll-up button:

mybutton = document.getElementById('myBtn');

// When the user scrolls down 30px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// call the function When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

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

 * Begin Main Functions
 *
 */

// build the nav
function buildNav () {
  let navList = document.createElement('li');

  // looping over all sections
  sections.forEach(section => {
    const sectionID = section.getAttribute('id');
    const sectionDataNav = section.getAttribute('data-nav');
    // looping in navList = navList + li + anchor every section name and id
    navList += `<a href='#${sectionID}' class='menu__link'${sectionDataNav}>${sectionDataNav}</a>`;
  });
  // append all elements to the navigation
  navigation.innerHTML = navList;
}

buildNav();

/* Whenever the target meets a threshold specified for the IntersectionObserver, the callback is invoked. 
The callback receives a list of IntersectionObserverEntry objects and the observer: */
const changeActiveSec = (entries, observer) => {
    entries.forEach((entry) => {
        // only do ActiveClass if the element is fully on screen
        if (entry.isIntersecting && entry.intersectionRatio == 1) {
            entry.target.classList.add('your-active-class');
        } else {
            entry.target.classList.remove('your-active-class');
        }
    });
}

// creates the observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
  /*  A threshold of 1.0 means that when 100% of the target is visible within the element
    specified by the root option, the callback is invoked.*/
};
const observer = new IntersectionObserver(changeActiveSec, options);

// target the sections observed
sections.forEach(section => {
  observer.observe(section);
});

/**
 * End Main Functions 
 */