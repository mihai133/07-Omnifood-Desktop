const headerEl = document.querySelector('.header');
const btnNavEl = document.querySelector('.btn-mobile-nav');


// document.addEventListener('click', function(e){

//     if(e.target == '.btn-mobile-nav') console.log('Close')
// })


// Menu toggle
btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open')
})

// Smooth scrolling
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link)=> {
    link.addEventListener('click', (e)=> {
        e.preventDefault();
        const href = link.getAttribute('href')

        // Scroll back to top

        if (href ==="#") window.scrollTo({
            top:0,
            behavior:"smooth"
        })

        // Scroll to other links
        if (href !== "#" && href.startsWith('#')) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({behavior:"smooth"})
        }

        // Close mobile nav
        if (link.classList.contains('main-nav-link')) headerEl.classList.toggle('nav-open')
    })
})