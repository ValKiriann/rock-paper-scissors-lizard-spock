// Made everything anonymous for safety reasons 
(function() {

    // function to render the views of the game
    function render(view){
        let wrapper = document.getElementById('wrapper');
        wrapper.innerHTML = view
    }

    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // Fix to properly set the full height on mobile devices
    function getRealVH(height) {
        var wrapper = document.getElementById('wrapper');
        wrapper.style.height = viewportHeight + 'px';
    }

    function botMove(){
        return Math.floor(Math.random() * movements.length);
    }
    
    function resolve(move1,move2) {
        console.log('I am starting to resolve')
        p1Move = move1
        p2Move = move2;
        resultCode = "R" + p1Move.toString() + p2Move.toString();

        if(winnings["M" + move1].includes(move2)){
            result = 'win'
            p1Score ++;
        }else if(move1 == move2) {
            result = 'tie';
        }else {
            result = 'lose';
            p2Score ++;
        }
    }

    // --- Start the app --- //

    if(viewportWidth < 1000 ){
        getRealVH(viewportHeight)
    }

    // render the homepage
    render(views.home());

    let wrapper = document.getElementById('wrapper')

    wrapper.addEventListener('click', function(event){
        if(event.target.dataset.gt){
            var view = event.target.dataset.gt
            switch(view){
                case 'home':
                    gameMode = 0
                    round = 1
                    p1Move = 0
                    p2Move = 0
                    result = ''
                    resultCode = ''
                    p1Score = 0
                    p2Score = 0
                    render(views.home())
                    break;
                case 'botFight':
                    gameMode = 2
                    resolve(botMove(),botMove())
                    render(views.results())
                    break;
                case 'next':
                    if(gameMode == 0){
                        round++
                        render(views.choice())
                    }else {
                        round++
                        resolve(botMove(),botMove())
                        render(views.results())
                    }
                    break;
                default: render(views[view]())
            }
        }else if(event.target.dataset.choice){
            resolve(event.target.dataset.choice,botMove())
            render(views.results())

        }
    })
})();