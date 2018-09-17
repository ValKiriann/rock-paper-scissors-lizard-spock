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
                    result = resolve(botMove(),botMove())
                    render(views.results())
                    break;
                case 'next':
                    if(gameMode == 0){
                        round++
                        render(views.choice())
                    }else {
                        round++
                        result = resolve(botMove(),botMove())
                        render(views.results())
                    }
                    break;
                default: render(views[view]())
            }
        }else if(event.target.dataset.choice){
            result = resolve(event.target.dataset.choice,botMove())
            render(views.results())

        }
    })
})();