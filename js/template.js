/** Initial variables
 * @param {number} gameMode - The mode you are playing, Player vs Bot or Bot vs Bot.
 * @param {number} round - The number of the round you are in the current game
 * @param {number} p1Move - The move that the first player has choosen
 * @param {number} p2Move - The move that the second player has choosen
 * @param {string} result - The result of the round from the perspective of the first player. win, tie or lose
 * @param {string} resultCode - The code that tells which string should the view render to show the result
 * @param {number} p1Score - The score of the first player in the current game
 * @param {number} p2Score - The score of the second player in the current game
 */
let gameMode = 0
let round = 1
let p1Move = 0
let p2Move = 0
let result = ''
let resultCode = ''
let p1Score = 0
let p2Score = 0
/** @param {object} titleString - The strings of the title in the results view */
const titleString = {
    win0: 'You win!',
    lose0: 'You lose!',
    tie0: 'Its a tie',
    win2: 'Bot 1 wins!',
    lose2: 'Bot 2 wins!',
    tie2: 'Its a perfect match!'
}
/** @param {array} players - The name of the players for the scoreboard labels */
const players = ['Player', 'Bot', 'Bot 1', 'Bot 2']
/** @param {array} movements - The movements for the game */
const movements = ['rock','paper','scissors','lizard','spock']
/** @param {object} winnings - Stores the winnings of every movement */
const winnings = {
    M0: [2,3],
    M1: [0,4],
    M2: [1,3],
    M3: [1,4],
    M4: [0,2]
}
/** @param {object} resultStrings - Stores the sentences to show when a round has finished by pair of movements */
const resultStrings = {
    R00: 'Poker face',
    R01: 'Paper covers rock!',
    R02: 'Rock smashes scissors!',
    R03: 'Rock smashes lizard!',
    R04: 'Spock vaporizes rocks',
    R11: 'I am paperless',
    R10: 'Paper covers rock!',
    R12: 'Scissors cut paper',
    R13: 'Lizard eats paper',
    R14: 'Paper disproves Spock',
    R22: 'Rock n Roll',
    R20: 'Rock smashes scissors!',
    R21: 'Scissors cut paper',
    R23: 'Scissors decapitates lizard',
    R24: 'Spock smashes scissors',
    R33: 'Lizarding',
    R30: 'Rock smashes lizard!',
    R31: 'Lizard eats paper',
    R32: 'Scissors decapitates lizard',
    R34: 'Lizard poisons Spock',
    R44: 'I dont know how to feel',
    R40: 'Spock vaporizes rocks',
    R41: 'Paper disproves Spock',
    R42: 'Spock smashes scissors',
    R43: 'Lizard poisons Spock'
}
/** @param {object} descriptionStrings - Stores the description of every movement to display them on the rules view */
const descriptionStrings = {
    M0: 'In the basic version, rock smashes scissors. In this variation rock smashes scissors and lizard.',
    M1: 'In the basic version, paper covers scissors. In this variation it also disproves Spock.',
    M2: 'In the basic version, scissors cuts paper. Now it also decapitates lizard.',
    M3: 'Lizard is a new gesture that belongs to the variation. Lizard eats paper and poisons Spock.',
    M4: 'Spock is the second gesture of the variation. Spock vaporizes rock and smashes scissors.'
}
/** 
 * @param {object} view_helpers - Object with the helper functions for the views object to help to render the views
 * @function view_helpers.rulesGenerator
 * @returns the data of every movement in the game for the rules view
 * @function view_helpers.choiceGenerator
 * @returns every movement that the user can use to play in the choice view
 */
let view_helpers = {
    rulesGenerator: function() {
        let content = ''
        for(let i=0;i<movements.length;i++){
            content += `
            <section class="text-box">
                <div class="title-icon">
                    <img src="img/${movements[i]}.svg" alt="${movements[i]} gesture icon">
                    <h3>The ${movements[i]}</h3>
                    <p>${descriptionStrings['M'+i]}</p>
                </div>
            </section>
            `
        }
        return content;
    },
    choiceGenerator: function() {
        let content = ''
        for(let i=0;i<movements.length;i++){
            content += `
            <img src="img/${movements[i]}.svg" alt="${movements[i]} movement icon" class=" move flex-item" data-choice="${i}">
            `
        }
        return content
    },
}
/** 
 * @param {object} views - Object with the functions to render every view of the game
 * @function views.home
 * @function views.rules
 * @function views.choice
 * @function views.results
 * @returns the template of the view
 */
let views = {
    home: function() {
        return `
        <div class="flex-col">
            <div id="logo-container" flex-item">
                <img class="logo active" src="img/rock.svg" alt="logo">
                <img class="logo" src="img/paper.svg" alt="logo">
                <img class="logo" src="img/scissors.svg" alt="logo">
                <img class="logo" src="img/lizard.svg" alt="logo">
                <img class="logo" src="img/spock.svg" alt="logo">
            </div>
            <div class="title flex-item"><h1 id="logoTitle">Rock</h1></div>
            <div class="main-menu flex-item">
                <h3 data-gt="rules">See the instructions</h3>
                <button class="btn" data-gt="choice">Player vs Bot</button>
                <button class="btn" data-gt="botFight">Bot vs Bot</button>
            </div>
        </div>
        `
    },
    rules: function() {
        return `
        <div class="rulesView">
            <aside class="close" data-gt="home">
                <img src="img/remove.svg" alt="close the instructions icon" data-gt="home">
            </aside>
            <section class="text-box">
                <h3>About the basic game</h3>
                <p>Rock, paper, scissors is a simple hand game that is played around the world. It is commonly used as a way of coming to decisions. The rules require that competing players use one hand to form one of three shapes at an agreed-upon time. The person that plays the strongest “object” is the winner of the game. </p>
            </section>
            <section class="text-box">
                <h3>Lizard and Spock variation</h3>
                <p>In this variation the rules are very similar to the original game, but with a few more options to choose from.</p>
            </section>
            ${view_helpers.rulesGenerator()}
            <section class="text-box">
                <h3>Good luck and enjoy!</h3>
                <button class="btn btn-icon btn-trans" data-gt="home"><img src="img/back.svg" alt="back icon"> Back to home</button>
            </section>
        </div>
    `
    },
    choice: function() {
        return `
        <div class="flex-col">
            <section class="title-round flex-item">
                <h3>Round ${round}</h3>
                <h4 id="">Choose your move</h4>
            </section>
            <section class="hand flex-item">
                <img src="img/hand.png" alt="a hand preparing to move">
            </section>
            <section class="move-menu flex-row flex-item">
                ${view_helpers.choiceGenerator()}
            </section>
        </div>
        `
    },
    results: function() {
        return `
        <div class="flex-col">
            <section class="title-result flex-item">
                <h2 class="${result}-title">${titleString[result+gameMode]}</h2>
            </section>
            <section class="results-icons flex-row flex-item">
                <img class="${result}-icon" src="img/${movements[p1Move]}.svg" alt="left player movement election">
                <p class="vs">- VS -</p>
                <img class="${result}-player1" src="img/${movements[p2Move]}.svg" alt="right player movement election">
            </section>
            <section class="result-msg flex-item">
                <p>${resultStrings[resultCode]}</p>
            </section>
            <section class="scoreboard flex-item">
                <div class="score-label" id="player1Label"><p>${players[gameMode]}</p></div>
                <div class="score"><span id="player1Score">${p1Score}</span><span> - </span><span id="player2Score">${p2Score}</span></div>
                <div class="score-label" id="player2Label"><p>${players[gameMode+1]}</p></div>
            </section>
            <div class="main-menu flex-item">
                <button class="btn" data-gt="next">Next round!</button>
                <button class="btn btn-trans" data-gt="home">End game</button>
            </div>
        </div>
        `
    }
}
/** 
 * @param {object} animations - Object with the animations to render in every view
 * @function animations.home
 * Makes the logo and the title change for every movement of the game in the home view
 */
let animations = {
    home: function(){
        var logoTitle = document.getElementById('logoTitle');
        var logos = document.getElementsByClassName('logo')
        logos[0].classList.add('active')
        var count = 0
        let logoInterval = self.setInterval(function () {
            if(document.body.contains(logoTitle)){
                if(count == (logos.length - 1)){
                    logos[logos.length - 1].classList.remove('active')
                    count = 0
                    logos[count].classList.add('active')
                    logoTitle.innerHTML = movements[count]
                }else {
                    logos[count].classList.remove('active')
                    logos[count+1].classList.add('active')
                    logoTitle.innerHTML = movements[count+1]
                    count++;
                }
            }else{
                window.clearInterval(logoInterval);
            }
            
        }, 800);
    },

}
/**
 * @function botMove
 * Generates a random number between the available movements in the game to choose a movement for the cpu
 * @returns a number
 */
function botMove(){
    return Math.floor(Math.random() * movements.length);
}
/**
 * @function resolve
 * It resolves who win when given two movements of a round
 * @param {number} move1 - The move of the player 1
 * @param {number} move2 - The move of the player 2
 * The function search if the move2 is included in the array of the move1 in the object winnings
 * If there is no coincidence it looks if the moves are the same
 * If the other things are false then the player 2 is the winner
 */
function resolve(move1,move2) {
    p1Move = move1
    p2Move = move2;
    resultCode = "R" + p1Move.toString() + p2Move.toString();

    if(winnings["M" + move1].includes(move2)){
        p1Score ++;
        return 'win'
    }else if(move1 == move2) {
        return 'tie';
    }else {
        p2Score ++;
        return 'lose';
    }
}
/**
 * @function render
 * @param {function} view - The function that returns the template of the view
 * @param {function} animation - The function that launch the animations of the view
 * It changes the view to the one that the user has selected with its event interaction
 */
function render(view, animation){
    let wrapper = document.getElementById('wrapper');
    wrapper.innerHTML = view
    if(animation){
        animation();
    }
}
/**
 * @function restartGame
 * Reset the variables to play a new game
 */
function restartGame(){
    gameMode = 0
    round = 1
    p1Move = 0
    p2Move = 0
    result = ''
    resultCode = ''
    p1Score = 0
    p2Score = 0
    return true;
}
/**
 * @function getRealVH
 * This function is a fix for the problem of having a full height layout that is not always rendering well on mobile phones because of browser conditions
 */
function getRealVH() {
    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var wrapper = document.getElementById('wrapper');
    if(viewportWidth < 992 ){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0
        wrapper.style.height = viewportHeight + 'px';
    }else if(viewportWidth >= 992 && viewportWidth < 1200){
        wrapper.style.height='600px';
    }else if(viewportWidth >= 1200){
        wrapper.style.height='700px';
    }
}