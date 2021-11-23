/* ------- Destination HTML Page Logic------- */

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



/* ------- Crew HTML Page Logic ------- */

/* Variables */
const commanderInfo = document.getElementsByClassName('commander')[0]
const missionSpecialistInfo = document.getElementsByClassName('mission-specialist')[0]
const pilotInfo = document.getElementsByClassName('pilot')[0]
const flightEngineerInfo = document.getElementsByClassName('flight-engineer')[0]

const allCircles = document.getElementsByClassName('circle')
const allCrewMembers = document.getElementsByClassName('img')

/* Event Listeners */
for (circle of allCircles) {
    circle.addEventListener('click' , (e) => {
        let selector = e.target.classList[0]

        if (selector == 'selector-one') {
            console.log('first')
            displayCommanderInfo()
            showCommander()
        }

        else if (selector == 'selector-two') {
            console.log('second')
            displaySpecialistInfo()
            showMissionSpecialist()
        }

        else if (selector == 'selector-three') {
            console.log('third')
            displayPilotInfo()
            showPilot()
        }

        else if (selector == 'selector-four') {
            console.log('fourth')
            displayEngineerInfo()
            showFlightEngineer()
        }
    })
}

/* Functions */
function displayCommanderInfo() {
    commanderInfo.classList.remove('hide')
    missionSpecialistInfo.classList.add('hide')
    pilotInfo.classList.add('hide')
    flightEngineerInfo.classList.add('hide')

    for (circle of allCircles) {
        circle.classList.remove('current-person')
    }

    document.getElementsByClassName('selector-one')[0].classList.add('current-person')
}

function displaySpecialistInfo() {
    missionSpecialistInfo.classList.remove('hide')
    commanderInfo.classList.add('hide')
    pilotInfo.classList.add('hide')
    flightEngineerInfo.classList.add('hide')

    for (circle of allCircles) {
        circle.classList.remove('current-person')
    }

    document.getElementsByClassName('selector-two')[0].classList.add('current-person')
}

function displayPilotInfo() {
    pilotInfo.classList.remove('hide')
    commanderInfo.classList.add('hide')
    missionSpecialistInfo.classList.add('hide')
    flightEngineerInfo.classList.add('hide')

    for (circle of allCircles) {
        circle.classList.remove('current-person')
    }

    document.getElementsByClassName('selector-three')[0].classList.add('current-person')
}

function displayEngineerInfo() {
    flightEngineerInfo.classList.remove('hide')
    commanderInfo.classList.add('hide')
    missionSpecialistInfo.classList.add('hide')
    pilotInfo.classList.add('hide')

    for (circle of allCircles) {
        circle.classList.remove('current-person')
    }

    document.getElementsByClassName('selector-four')[0].classList.add('current-person')
}

function showCommander() {
    for (member of allCrewMembers) {
        member.classList.add('hide')
    }
    document.getElementsByClassName('commander-img')[0].classList.remove('hide')
}

function showMissionSpecialist() {
    for (member of allCrewMembers) {
        member.classList.add('hide')
    }
    document.getElementsByClassName('mission-specialist-img')[0].classList.remove('hide')
}

function showPilot() {
    for (member of allCrewMembers) {
        member.classList.add('hide')
    }
    document.getElementsByClassName('pilot-img')[0].classList.remove('hide')
}

function showFlightEngineer() {
    for (member of allCrewMembers) {
        member.classList.add('hide')
    }
    document.getElementsByClassName('flight-engineer-img')[0].classList.remove('hide')
}



/* ------- Tech HTML Page Logic ------- */

/* Variables */
const allTechCircles = document.getElementsByClassName('nav-circle')
const allTechImages = document.getElementsByClassName('tech-img')

/* Click Listeners */
for (circle of allTechCircles) {
    circle.addEventListener('click' , function (e) {
        if (e.target.innerHTML == '1') {
            if (e.target === allTechCircles[3]) {
                currentCircle(3)
                displayContent(3)
            }

            else {
                currentCircle(0)
                displayContent(0)
            }
        }

        else if (e.target.innerHTML == '2') {
            if (e.target === allTechCircles[4]) {
                currentCircle(4)
                displayContent(4)
            }
            

            else {
                currentCircle(1)
                displayContent(1)
            }
        }

        else if (e.target.innerHTML == '3') {
            if (e.target === allTechCircles[5]) {
                currentCircle(5)
                displayContent(5)
            }
            
            else {
                currentCircle(2)
                displayContent(2)
            }
        }
    })
}

/* Functions */
function displayContent(contentIndexNumber) {
    let allContainers = document.getElementsByClassName('info-container')
    let currentContainer = document.getElementsByClassName('info-container')[contentIndexNumber]
    let currentImg = document.getElementsByClassName('tech-img')[contentIndexNumber]

    for (box of allContainers) {
        box.classList.add('hide')
    }

    for (img of allTechImages) {
        img.classList.add('hide')
    }

    currentContainer.classList.remove('hide')
    currentImg.classList.remove('hide')
}

function currentCircle(contentIndexNumber) {
    for (circle of allTechCircles) {
        circle.classList.remove('current-circle')
    }

    document.getElementsByClassName('nav-circle')[contentIndexNumber].classList.add('current-circle')
}



/* ------- Navbar Mobile Logic ------- */

/* Variables */
const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
const openedMenu = document.getElementsByClassName('opened-menu')[0]
const xBtn = document.getElementsByClassName('x-btn')[0]

/* Click Listeners */
hamburgerMenu.addEventListener('click' , function() {
    openedMenu.classList.remove('hide')
    hamburgerMenu.classList.add('hide')
})

xBtn.addEventListener('click' , () => {
    hamburgerMenu.classList.remove('hide')
    openedMenu.classList.add('hide')
})