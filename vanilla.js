

const projectLink = document.querySelector('.projectLink')
const project = document.querySelector('#projects')
projectLink.addEventListener('click', (event) => {
    project.scrollIntoView({
        behavior: 'smooth'
    });
})

const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) => {
    project.scrollIntoView({
        behavior: 'smooth'
    });
})

const introLink = document.querySelector('.introLink')
const intro = document.querySelector('#intro')
introLink.addEventListener('click', (event) => {
    intro.scrollIntoView({
        behavior: 'smooth'
    });
})

const aboutLink = document.querySelector('.aboutLink')
const about = document.querySelector('#about')
aboutLink.addEventListener('click', (event) => {
    about.scrollIntoView({
        behavior: 'smooth'
    });
})
const contactLink = document.querySelector('.contactLink')
const contact = document.querySelector('#contact')
contactLink.addEventListener('click', (event) => {
    contact.scrollIntoView({
        behavior: 'smooth'
    });
})




