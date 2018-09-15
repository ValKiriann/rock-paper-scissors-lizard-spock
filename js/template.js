//initializing variables
let gameMode = 0
let round = 1
let player1Move = 0
let player2Move = 0
let result = 'win'
let battleCode = 00
let player1Score = 0
let player2Score = 0

if(player1Move != player2Move) {
    battleCode = player1Move.toString() + player2Move.toString()
} 

let titleString = {
    win: 'You win!',
    lose: 'You lose!'
}
let resultStrings = {
    00: 'Its a tie!',
    02: 'Rock smashes scissors!',
    03: 'Rock smashes lizard!',
    10: 'Paper covers rock!',
    14: 'Paper disproves Spock',
    21: 'Scissors cut paper',
    23: 'Scissors decapitates lizard',
    31: 'Lizard eats paper',
    34: 'Lizard poisons Spock',
    40: 'Spock vaporizes rocks',
    42: 'Spock smashes scissors'
}

let movements = ['rock','paper','scissors','lizard','spock']
let players = ['Player', 'Bot', 'Bot 1', 'Bot2']

let homeView = `
    <div class="flex-col">
        <div class="logo flex-item">
            <img src="img/spock.svg" alt="logo">
            <!--
            <img src="img/lizard.svg" alt="logo">
            <img src="img/scissors.svg" alt="logo">
            <img src="img/paper.svg" alt="logo">
            <img src="img/rock.svg" alt="logo">
            -->
        </div>
        <div class="title flex-item"><h1 id="logoTitle">Spock</h1></div>
        <div class="main-menu flex-item">
            <h3 id="gt-rules">See the instructions</h3>
            <button class="btn" id="gt-player">Player vs Bot</button>
            <button class="btn" id="gt-bot">Bot vs Bot</button>
        </div>
    </div>
`;

let rulesView = `
    <div class="rulesView">
        <aside class="close" id="close">
            <img src="img/remove.svg" alt="">
        </aside>
        <section class="text-box">
            <h3>About the basic game</h3>
            <p>Rock, paper, scissors is a simple hand game that is played around the world. It is commonly used as a way of coming to decisions. The rules require that competing players use one hand to form one of three shapes at an agreed-upon time. The person that plays the strongest “object” is the winner of the game. </p>
        </section>
        <section class="text-box">
            <h3>Lizard and Spock variation</h3>
            <p>In this variation the rules are very similar to the original game, but with a few more options to choose from.</p>
        </section>
        <section class="text-box">
            <div class="title-icon">
                <img src="img/rock.svg" alt="rock gesture icon">
                <h3>The rock</h3>
                <p>In the basic version, rock smashes scissors. In this variation rock smashes scissors and lizard.</p>
            </div>
        </section>
        <section class="text-box">
            <div class="title-icon">
                <img src="img/paper.svg" alt="rock gesture icon">
                <h3>The paper</h3>
                <p>In the basic version, paper covers scissors. In this variation it also disproves Spock.</p>
            </div>
        </section>
        <section class="text-box">
            <div class="title-icon">
                <img src="img/scissors.svg" alt="rock gesture icon">
                <h3>The scissors</h3>
                <p>In the basic version, scissors cuts paper. Now it also decapitates lizard.</p>
            </div>
        </section>
        <section class="text-box">
            <div class="title-icon">
                <img src="img/lizard.svg" alt="rock gesture icon">
                <h3>The lizard</h3>
                <p>Lizard is a new gesture that belongs to the variation. Lizard eats paper and poisons Spock.</p>
            </div>
        </section>
        <section class="text-box">
            <div class="title-icon">
                <img src="img/spock.svg" alt="rock gesture icon">
                <h3>Spock</h3>
                <p>Spock is the second gesture of the variation. Spock vaporizes rock and smashes scissors.</p>
            </div>
        </section>
        <section class="text-box">
            <h3>Good luck and enjoy!</h3>
            <button class="btn btn-icon btn-trans" id="gt-home"><img src="img/back.svg" alt="back icon"> Back to home</button>
        </section>
    </div>
`;

let chooseView = `
    <div class="flex-col">
        <section class="title-round flex-item">
            <h3>Round ${round}</h3>
            <h4 id="">Choose your move</h4>
        </section>
        <section class="hand flex-item">
            <img src="img/hand.png" alt="a hand preparing to move">
        </section>
        <section class="move-menu flex-row flex-item">
            <img src="img/rock.svg" alt="rock movement icon" class="flex-item">
            <img src="img/paper.svg" alt="paper movement icon" class="flex-item">
            <img src="img/scissors.svg" alt="scissors movement icon" class="flex-item">
            <img src="img/lizard.svg" alt="lizard movement icon" class="flex-item">
            <img src="img/spock.svg" alt="spock movement icon" class="flex-item">
        </section>
    </div>
`;

let resultsView = `
    <div class="flex-col">
        <section class="title-result flex-item">
            <h2 class="${result}-title">${titleString[result]}</h2>
        </section>
        <section class="results-icons flex-row flex-item">
            <img class="${result}-icon" id="player1Icon" src="img/${movements[player1Move]}.svg" alt="left player movement election">
            <p class="vs">- VS -</p>
            <img class="${result}-icon" id="player2Icon"src="img/${movements[player1Move]}.svg" alt="right player movement election">
        </section>
        <section class="result-msg flex-item">
            <p>${resultStrings[battleCode]}</p>
        </section>
        <section class="scoreboard flex-item">
            <div class="score-label" id="player1Label"><span>${players[gameMode]}</span></div>
            <div class="score"><span id="player1Score">${player1Score}</span><span> - </span><span id="player2Score">${player2Score}</span></div>
            <div class="score-label" id="player2Label"><span>${players[gameMode+1]}</span></div>
        </section>
        <div class="main-menu flex-item">
            <button class="btn" id="gt-player">Next round!</button>
            <button class="btn btn-dark" id="gt-bot">End game</button>
        </div>
    </div>
`;
