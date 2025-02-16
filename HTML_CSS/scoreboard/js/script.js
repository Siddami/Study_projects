const scoreHome = document.getElementById('home-score') //get home score paragraph

const scoreGuest = document.getElementById('guest-score') //get guest score paragraph

const leader = document.getElementById('leader')

//home sum buttons
const hPlusOne = document.getElementById('home-plus-one')

const hPlusTwo = document.getElementById('home-plus-two')

const hPlusThree = document.getElementById('home-plus-three')

//guest sum buttons
const gPlusOne = document.getElementById('guest-plus-one')

const gPlusTwo = document.getElementById('guest-plus-two')

const gPlusThree = document.getElementById('guest-plus-three')

//score variables
let homeScore = 0;
let guestScore = 0;

function updateLeader() {
    if (homeScore > guestScore) {
        leader.textContent = "🏆 Home is leading!";
    } else if (guestScore > homeScore) {
        leader.textContent = "🏆 Guest is leading!";
    } else {
        leader.textContent = "It's a tie!";
    }
}

//home sum functions
function addOneHome() {
    homeScore += 1;
    scoreHome.textContent = homeScore;
    updateLeader();
}

function addTwoHome() {
    homeScore += 2;
    scoreHome.textContent = homeScore;
    updateLeader()
}

function addThreeHome() {
    homeScore += 3;
    scoreHome.textContent = homeScore;
    updateLeader()
}

//guest score functions
function addOneGuest() {
    guestScore += 1;
    scoreGuest.textContent = guestScore;
    updateLeader()
}

function addTwoGuest() {
    guestScore += 2;
    scoreGuest.textContent = guestScore;
    updateLeader()
}

function addThreeGuest() {
    guestScore += 3;
    scoreGuest.textContent = guestScore;
    updateLeader()
}

//reset function

function resetScore() {
    homeScore = 0
    guestScore = 0
    scoreGuest.textContent = guestScore;
    scoreHome.textContent = homeScore;
}