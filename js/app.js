// Made everything anonymous for safety reasons 
(function() {

    

    // Fix to properly set the full height on mobile devices
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

    // --- Start the app --- //
    
    getRealVH()

    // render the homepage
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