// Audio elements and music control
let bgMusic;
let musicOn;

// Initialize music
function initMusic() {
    bgMusic = document.getElementById("bgMusic");
    musicOn = localStorage.getItem('musicEnabled') !== 'false';

    // Restore playback position
    const savedTime = parseFloat(localStorage.getItem('musicCurrentTime')) || 0;
    bgMusic.currentTime = savedTime;
    bgMusic.volume = 0.3;

    if (musicOn) {
        bgMusic.play().catch(e => {
            console.log("Autoplay blocked - need user interaction");
            updateMusicButton();
        });
    }
    updateMusicButton();
}

// Toggle music function
function toggleMusic() {
    musicOn = !musicOn;
    localStorage.setItem('musicEnabled', musicOn);

    if (musicOn) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
    updateMusicButton();
}

function updateMusicButton() {
    const toggleBtn = document.querySelector('.music-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = musicOn ? "🔊 Music On" : "🔇 Music Off";
    }
}

// Game state variables
let player = {
    name: "",
    chips: 0,
    toggleMusic: toggleMusic
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let selectedChipAmount = 0;

// DOM elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

// Card logic
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

// Game functions
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('player-setup-modal');
    const chipOptions = document.querySelectorAll('.chip-option');
    const startGameBtn = document.getElementById('start-game-btn');
    const playerNameInput = document.getElementById('player-name');
    const gameContainer = document.getElementById('game-container');

    // Initialize music
    initMusic();

    // Update music toggle button state
    updateMusicButton();


    // Handle chip selection
    chipOptions.forEach(option => {
        option.addEventListener('click', function() {
            chipOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedChipAmount = parseInt(this.dataset.amount);
        });
    });

    // Start game when button is clicked
    startGameBtn.addEventListener('click', function() {
        if (selectedChipAmount === 0) {
            alert("Please select a starting chip amount!");
            return;
        }

        player.name = playerNameInput.value.trim() || "Player";
        player.chips = selectedChipAmount;
        playerEl.textContent = player.name + ": $" + player.chips;

        modal.style.display = 'none';
        gameContainer.style.display = 'block';

        // Start the game
        startGame();
    });

    // Select default chip option (200)
    document.querySelector('.chip-option[data-amount="200"]').click();
});
