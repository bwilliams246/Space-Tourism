/* ------- Destination HTML Page Styling------- */

/* Variables */
const navbarItems = document.getElementsByClassName('body-nav-item')
const moon = document.getElementsByClassName('moon-img')[0]
const mars = document.getElementsByClassName('mars-img')[0]
const europa = document.getElementsByClassName('europa-img')[0]
const titan = document.getElementsByClassName('titan-img')[0]

const moonInfo = document.getElementsByClassName('moon-container')[0]
const marsInfo = document.getElementsByClassName('mars-container')[0]
const europaInfo = document.getElementsByClassName('europa-container')[0]
const titanInfo = document.getElementsByClassName('titan-container')[0]

/* Event Listeners */
for (title of navbarItems) {
    title.addEventListener('click' , (e) => {
        if (e.target.innerHTML == 'MOON') {
            console.log('moon displayed')
            displayMoon()
            displayMoonInfo()
        }

        else if (e.target.innerHTML == 'MARS') {
            console.log('mars diplayed')
            displayMars()
            displayMarsInfo()
        }

        else if (e.target.innerHTML == 'EUROPA') {
            console.log('europa displayed')
            displayEuropa()
            displayEuropaInfo()
        }

        else if (e.target.innerHTML == 'TITAN') {
            console.log('titan displayed')
            displayTitan()
            displayTitanInfo()
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

/* These Functions Display The Correct Description And Header */
function displayMoonInfo() {
    moonInfo.classList.remove('hide')
    marsInfo.classList.add('hide')
    europaInfo.classList.add('hide')
    titanInfo.classList.add('hide')
}

function displayMarsInfo() {
    marsInfo.classList.remove('hide')
    moonInfo.classList.add('hide')
    europaInfo.classList.add('hide')
    titanInfo.classList.add('hide')
}

function displayEuropaInfo() {
    europaInfo.classList.remove('hide')
    moonInfo.classList.add('hide')
    marsInfo.classList.add('hide')
    titanInfo.classList.add('hide')
}

function displayTitanInfo() {
    titanInfo.classList.remove('hide')
    moonInfo.classList.add('hide')
    marsInfo.classList.add('hide')
    europaInfo.classList.add('hide')
}