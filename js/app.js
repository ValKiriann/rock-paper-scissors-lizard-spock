// Made everything anonymous for safety reasons 
(function() {

    // function to render the views of the game
    function renderView(view){
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
    
    if(viewportWidth < 1000 ){
        getRealVH(viewportHeight)
    }

    // render the homepage
    renderView(homeView);

    //events of the homepage
    let rulesBtn = document.getElementById('gt-rules');
    let playHumanBtn = document.getElementById('gt-player');
    let playBotBtn = document.getElementById('gt-bot');


    rulesBtn.addEventListener("click", function(){
        renderView(rulesView);
        let closeIcon = document.getElementById('close');
        let closeBtn = document.getElementById('gt-home');

        closeIcon.addEventListener("click",function() {
            location.reload();
        });
        closeBtn.addEventListener("click",function() {
            location.reload();
        });
    });
    playHumanBtn.addEventListener("click", function(){
        renderView(chooseView);

    });
    playBotBtn.addEventListener("click", function(){
        gameMode = 1;
        renderView(resultsView);
    });
})();