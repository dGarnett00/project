class AudioController { // This creates a new class called AudioController to handle all game sounds
    constructor() { // This is the function that runs when you make a new AudioController
        this.bgMusic = new Audio('./videos/Super Mario Bros. Theme Song.mp3'); // This loads the background music file
        this.flipSound = new Audio('./videos/coin.mp3'); // This loads the sound for flipping a card
        this.matchSound = new Audio('./videos/power.mp3'); // This loads the sound for matching cards
        this.victorySound = new Audio('./videos/win.mp3'); // This loads the sound for winning the game
        this.gameOverSound = new Audio('./videos/lose.mp3'); // This loads the sound for losing the game
        this.bgMusic.volume = 0.2; // This sets the background music volume to 20%
        this.bgMusic.loop = true; // This makes the background music repeat forever
    }
    startMusic() { // This function starts playing the background music
        this.bgMusic.play();
    }
    stopMusic() { // This function stops the background music and resets it to the beginning
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() { // This function plays the flip sound
        this.flipSound.play();
    }
    match() { // This function plays the match sound
        this.matchSound.play();
    }
    victory() { // This function stops the music and plays the victory sound
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() { // This function stops the music and plays the game over sound
        this.stopMusic();
        this.gameOverSound.play();
    }
}


class Match { // This creates a new class called Match to control the game logic
    constructor(totalTime, cards) { // This function runs when you make a new Match game
        this.cardsArray = cards; // This saves all the cards in the game
        this.totalTime = totalTime; // This saves the total time for the game
        this.timeRemaining = totalTime; // This sets the time left to the total time
        this.timer = document.getElementById('time-remaining') // This finds the element that shows the time left
        this.ticker = document.getElementById('flips'); // This finds the element that shows the number of flips
        this.audioController = new AudioController(); // This makes a new AudioController for this game
    }

    startGame() { // This function starts or restarts the game
        this.totalClicks = 0; // This sets the number of flips to zero
        this.timeRemaining = this.totalTime; // This resets the time left to the total time
        this.cardToCheck = null; // This means no card is selected yet
        this.matchedCards = []; // This is an empty list for matched cards
        this.busy = true; // This means the game is busy and you can't flip cards yet
        setTimeout(() => { // This waits half a second before starting the game
            this.audioController.startMusic(); // This starts the background music
            this.shuffleCards(this.cardsArray); // This shuffles the cards
            this.countdown = this.startCountdown(); // This starts the timer countdown
            this.busy = false; // This lets the player start flipping cards
        }, 500)
        this.hideCards(); // This hides all the cards
        this.timer.innerText = this.timeRemaining; // This shows the starting time
        this.ticker.innerText = this.totalClicks; // This shows the starting flip count
    }
    startCountdown() { // This function starts the timer countdown
        return setInterval(() => { // This runs the code inside every second
            this.timeRemaining--; // This subtracts one from the time left
            this.timer.innerText = this.timeRemaining; // This updates the time on the screen
            if(this.timeRemaining === 0) // If the time runs out
                this.gameOver(); // The game ends
        }, 1000);
    }
    gameOver() { // This function runs when the game is over
        clearInterval(this.countdown); // This stops the timer
        this.audioController.gameOver(); // This plays the game over sound
        document.getElementById('game-over').classList.add('visible'); // This shows the game over message
    }
    winner() { // This function runs when the player wins
        clearInterval(this.countdown); // This stops the timer
        document.getElementById('winner').classList.add('visible'); // This shows the winner message
    }
    hideCards() { // This function hides all the cards
        this.cardsArray.forEach(card => { // For each card in the game
            card.classList.remove('visible'); // Remove the visible class so the card is face down
            card.classList.remove('matched'); // Remove the matched class so the card is not marked as matched
        });
    }
    flipCard(card) { // This function flips a card when clicked
        if(this.canFlipCard(card)) { // If the card can be flipped
            this.audioController.flip(); // Play the flip sound
            this.totalClicks++; // Add one to the flip count
            this.ticker.innerText = this.totalClicks; // Update the flip count on the screen
            card.classList.add('visible'); // Show the card face up

            if(this.cardToCheck) { // If there is already a card selected
                this.checkForCardMatch(card); // Check if the two cards match
            } else {
                this.cardToCheck = card; // If not, set this card as the one to check
            }
        }
    }
    checkForCardMatch(card) { // This function checks if two cards match
        if(this.getCardType(card) === this.getCardType(this.cardToCheck)) // If the two cards have the same image
            this.cardMatch(card, this.cardToCheck); // Mark them as matched
        else 
            this.cardMismatch(card, this.cardToCheck); // Otherwise, hide them again

        this.cardToCheck = null; // Reset the card to check
    }
    cardMatch(card1, card2) { // This function marks two cards as matched
        this.matchedCards.push(card1); // Add the first card to the matched list
        this.matchedCards.push(card2); // Add the second card to the matched list
        card1.classList.add('matched'); // Add the matched class to the first card
        card2.classList.add('matched'); // Add the matched class to the second card
        this.audioController.match(); // Play the match sound
        if(this.matchedCards.length === this.cardsArray.length) // If all cards are matched
            this.winner(); // The player wins
    }
    cardMismatch(card1, card2) { // This function hides two cards that do not match
        this.busy = true; // Set the game to busy so no cards can be flipped
        setTimeout(() => { // Wait one second
            card1.classList.remove('visible'); // Hide the first card
            card2.classList.remove('visible'); // Hide the second card
            this.busy = false; // Allow cards to be flipped again
        }, 1000);
    }
    shuffleCards(cardsArray) { // This function shuffles the cards randomly
        for (let i = cardsArray.length - 1; i > 0; i--) { // Start from the last card and go backwards
            let randIndex = Math.floor(Math.random() * (i + 1)); // Pick a random index
            cardsArray[randIndex].style.order = i; // Swap the order of the random card
            cardsArray[i].style.order = randIndex; // Swap the order of the current card
        }
    }
    getCardType(card) { // This function gets the image source of a card
        return card.getElementsByClassName('face')[0].src; // Return the src of the first element with class 'face' inside the card
    }
    canFlipCard(card) { // This function checks if a card can be flipped
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck; // Only flip if not busy, not already matched, and not the same card
    }
}

// The code below waits for the page to load before starting the game
if (document.readyState == 'loading') { // If the page is still loading
    document.addEventListener('DOMContentLoaded', ready); // Wait until everything is loaded, then run the ready function
} else {
    ready(); // If the page is already loaded, run the ready function right away
}

function ready() { // This function sets up the game when the page is ready
    let overlays = Array.from(document.getElementsByClassName('overlay-text')); // Get all elements with class 'overlay-text' and put them in an array
    let cards = Array.from(document.getElementsByClassName('card')); // Get all elements with class 'card' and put them in an array
    let game = new Match(50, cards); // Make a new Match game with 50 seconds and all the cards

    overlays.forEach(overlay => { // For each overlay message
        overlay.addEventListener('click', () => { // When the overlay is clicked
            overlay.classList.remove('visible'); // Hide the overlay
            game.startGame(); // Start the game
        });
    });

    cards.forEach(card => { // For each card in the game
        card.addEventListener('click', () => { // When the card is clicked
            game.flipCard(card); // Try to flip the card
        });
    });
}