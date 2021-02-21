

var projHeader = document.querySelector('.projects-header');
var projHeaderHeight = projHeader.clientHeight;

const aboutSkillDesc = document.querySelectorAll('.about-skillDesc');

var aboutHeader = document.querySelector('.about-header')
var aboutHeaderHeight = aboutHeader.clientHeight;

var contactHeight = contact.clientHeight
var contContainer = document.querySelector('.contact-main-container')
var contContainerHeight = contContainer.clientHeight

// listen for scroll event and call animate function
contentContainer.addEventListener('scroll', animateEle);

// check if element is in view
function inView2(eleBox, eleHeight) {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = eleBox.getBoundingClientRect().top + scrollY + eleHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
}

// animate element when it is in view
function animateEle() {

    if (inView2(projHeader, projHeaderHeight) && isVisible(projHeader)) {
        // element is in view, add class to element
        projHeader.classList.add('moveRight');
    } else {
        projHeader.classList.remove('moveRight')
    }

    if (inView2(aboutHeader, aboutHeaderHeight) && isVisible(aboutHeader)) {
        // element is in view, add class to element
        aboutHeader.classList.add('moveLeft');
        aboutSkillDesc.forEach(item => {
            item.classList.add('moveRight')
        })
    } else {
        aboutHeader.classList.remove('moveLeft')
    }

}