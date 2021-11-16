/* ------- Destination HTML Page Styling------- */

/* Variables */
const navbarItems = document.getElementsByClassName('body-nav-item')
const moon = document.getElementsByClassName('moon-img')[0]
const mars = document.getElementsByClassName('mars-img')[0]
const europa = document.getElementsByClassName('europa-img')[0]
const titan = document.getElementsByClassName('titan-img')[0]

/* Event Listeners */
for (title of navbarItems) {
    title.addEventListener('click' , (e) => {
        if (e.target.innerHTML == 'MOON') {
            console.log('moon displayed')
            displayMoon()
        }

        else if (e.target.innerHTML == 'MARS') {
            console.log('mars diplayed')
            displayMars()
        }

        else if (e.target.innerHTML == 'EUROPA') {
            console.log('europa displayed')
            displayEuropa()
        }

        else if (e.target.innerHTML == 'TITAN') {
            console.log('titan displayed')
            displayTitan()
        }
        /* This Click Event Displays The Correct Image */
    })
}

/* Functions */
function displayMoon() {
    moon.classList.remove('hide')
    mars.classList.add('hide')
    europa.classList.add('hide')
    titan.classList.add('hide')

    for (item of navbarItems) {
        item.classList.remove('current-img')

        if (item.innerHTML == 'MOON') {
            item.classList.add('current-img')
        }
    }
}

function displayMars() {
    mars.classList.remove('hide')
    moon.classList.add('hide')
    europa.classList.add('hide')
    titan.classList.add('hide')

    for (item of navbarItems) {
        item.classList.remove('current-img')

        if (item.innerHTML == 'MARS') {
            item.classList.add('current-img')
        }
    }

    
}

function displayEuropa() {
    europa.classList.remove('hide')
    moon.classList.add('hide')
    mars.classList.add('hide')
    titan.classList.add('hide')

    for (item of navbarItems) {
        item.classList.remove('current-img')

        if (item.innerHTML == 'EUROPA') {
            item.classList.add('current-img')
        }
    }

    
}

function displayTitan() {
    titan.classList.remove('hide')
    moon.classList.add('hide')
    mars.classList.add('hide')
    europa.classList.add('hide')

    for (item of navbarItems) {
        item.classList.remove('current-img')

        if (item.innerHTML == 'TITAN') {
            item.classList.add('current-img')
        }
    }

    
}