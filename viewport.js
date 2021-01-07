

var elementHeight = project.clientHeight;
const contentContainer = document.querySelector('.content-container')
const projectsHeader = document.querySelector('.projects-header')
var contContainer = document.querySelector('.contact-main-container')

var contactForm = document.querySelector('.contactForm')


contentContainer.addEventListener('scroll', animate);

// check if element is in view
function inView(ele) {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = ele.getBoundingClientRect().top + scrollY + ele.clientHeight;

    // is scroll position greater than element position? (is element in view?)

    if (scrollPosition >= elementPosition) {
        return true;
    }

    return false;
}

function isVisible(ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        (top > 0 || bottom > 0) &&
        top < vHeight
    );
}



// isvisible is when any element is visible
function animate() {

    // is element in view?
    if (isVisible(project) && !isVisible(intro)) {
        // element is in view, add class to element
        projectLink.classList.add('link-color')
    }
    else projectLink.classList.remove('link-color')
    if (!isVisible(project) && isVisible(about) && !inView(contact)) {
        // element is in view, add class to element
        aboutLink.classList.add('link-color')
    }
    else aboutLink.classList.remove('link-color')

    if (inView(contact) && isVisible(contact)) {
        // element is in view, add class to element
        contactLink.classList.add('link-color')
        contContainer.classList.add('clipContact')
        contactForm.classList.add('contactFormAnimation')
    }
    else contactLink.classList.remove('link-color')

    if (inView(intro) && isVisible(intro)) {
        // element is in view, add class to element
        introLink.classList.add('link-color')
    }
    else introLink.classList.remove('link-color')

}