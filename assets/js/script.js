"use strict";

/**
 * Adds an event listener to an array of elements
 * @param {Array} elements - The array of elements to add the event listener to
 * @param {string} type - The type of event to listen for
 * @param {function} callback - The function to call when the event is triggered
 */
const addEventOnElements = function (elements, type, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(type, callback);
  }
};

// Selects the loading element and adds the 'loaded' class to it and the body element when the window is loaded
const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  this.document.body.classList.add("loaded");
});

/**
 * MOBILE NAVBAR TOGGLE
 */

// Selects the navbar, navbar toggle, navbar links, navbar links container, and overlay elements
const navbar = document.querySelector("[data-navbar]");
const navbarToggle = document.querySelector("[data-navbar-toggle]");
const navbarLinks = document.querySelectorAll("[data-navbar-link]");
const navbarLinksContainer = document.querySelector(
  "[data-navbar-links-container]"
);
const navbarLinksContainerHeight = navbarLinksContainer.clientHeight;
const navbarLinksContainerWidth = navbarLinksContainer.clientWidth;
const overlay = document.querySelector("[data-overlay]");

/**
 * Toggles the navbar, overlay, and body elements when the navbar toggle or overlay is clicked
 */
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

// Adds the toggleNavbar function as an event listener to the navbar toggle and overlay elements
addEventOnElements([navbarToggle, overlay], "click", toggleNavbar);

/**
 * Closes the navbar, overlay, and body elements when a navbar link is clicked
 */
const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
};

// Adds the closeNavbar function as an event listener to the navbar links
addEventOnElements(navbarLinks, "click", closeNavbar);

/**
 * HEADER
 */

// Selects the header element
const header = document.querySelector("[data-header]");

/**
 * Adds the 'active' class to the header element when the window is scrolled 200px or more
 */
const headerActive = function () {
  if (window.scrollY > 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// Adds the headerActive function as an event listener to the window scroll event
window.addEventListener("scroll", headerActive);

/**
 * SCROLL REVEAL
 */

// Selects all elements with the 'data-reveal' attribute
const revealElements = document.querySelectorAll("[data-reveal]");

/**
 * Adds the 'revealed' class to elements with the 'data-reveal' attribute when they are scrolled into view
 */
const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    if (
      window.scrollY + window.innerHeight >
      revealElements[i].offsetTop + 100
    ) {
      revealElements[i].classList.add("revealed");
    }
  }
};

// Adds the scrollReveal function as an event listener to the window scroll and load events
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
