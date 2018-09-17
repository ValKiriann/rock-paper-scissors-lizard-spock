//initializing variables
let gameMode = 0
let round = 1
let p1Move = 0
let p2Move = 0
let result = ''
let resultCode = ''
let p1Score = 0
let p2Score = 0

let titleString = {
    win0: 'You win!',
    lose0: 'You lose!',
    tie0: 'Its a tie',
    win2: 'Bot 1 wins!',
    lose2: 'Bot 2 wins!',
    tie2: 'Its a perfect match!'
}

let players = ['Player', 'Bot', 'Bot 1', 'Bot2']

let movements = ['rock','paper','scissors','lizard','spock']

let winnings = {
    M0: [2,3],
    M1: [0,4],
    M2: [1,3],
    M3: [1,4],
    M4: [0,2]
}

let resultStrings = {
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

let descriptionStrings = {
    M0: 'In the basic version, rock smashes scissors. In this variation rock smashes scissors and lizard.',
    M1: 'In the basic version, paper covers scissors. In this variation it also disproves Spock.',
    M2: 'In the basic version, scissors cuts paper. Now it also decapitates lizard.',
    M3: 'Lizard is a new gesture that belongs to the variation. Lizard eats paper and poisons Spock.',
    M4: 'Spock is the second gesture of the variation. Spock vaporizes rock and smashes scissors.'
}

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

let views = {
    home: function() {
        return `
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
                <img class="${result}-icon" id="player1Icon" src="img/${movements[p1Move]}.svg" alt="left player movement election">
                <p class="vs">- VS -</p>
                <img class="${result}-player1" id="player2Icon"src="img/${movements[p2Move]}.svg" alt="right player movement election">
            </section>
            <section class="result-msg flex-item">
                <p>${resultStrings[resultCode]}</p>
            </section>
            <section class="scoreboard flex-item">
                <div class="score-label" id="player1Label"><span>${players[gameMode]}</span></div>
                <div class="score"><span id="player1Score">${p1Score}</span><span> - </span><span id="player2Score">${p2Score}</span></div>
                <div class="score-label" id="player2Label"><span>${players[gameMode+1]}</span></div>
            </section>
            <div class="main-menu flex-item">
                <button class="btn" data-gt="next">Next round!</button>
                <button class="btn btn-dark" data-gt="home">End game</button>
            </div>
        </div>
        `
    }
}

function botMove(){
    return Math.floor(Math.random() * movements.length);
}

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

// automatization process