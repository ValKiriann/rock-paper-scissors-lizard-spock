/**
 * The app is encapsulated for safety reasons
 * It is difficult to manage all the events depending of the view that we have to render
 * so I decided to create only one event on the wrapper of the view and only activate it
 * when it clicks on an element that needs interactivity.
 * We can manage all the architecture of the app in one place and everything is ordered.
 * I have placed a special dataset property to the elements that need interactivity
 */
(function() {
    getRealVH()
    render(views.home(),animations.home);

    let wrapper = document.getElementById('wrapper')
    wrapper.addEventListener('click', function(event){
        if(event.target.dataset.gt){
            var view = event.target.dataset.gt
            switch(view){
                case 'home':
                    restartGame();
                    getRealVH()
                    render(views.home(),animations.home)
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
    window.addEventListener("resize", function() {
        getRealVH()
        console.log('im moving')
    });
})();