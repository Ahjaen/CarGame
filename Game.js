class Game {
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState")
        gameStateRef.on("value", function(data){
            gameState = data.val()
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState: state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(25)
        text("Game Has Begun",120,120)
        Player.getPlayerInfo()

        if(allPlayers !== undefined){
            var displayPos = 130
            for(var plr in allPlayers){
                if(plr === "player" + player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                displayPos += 20
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120,displayPos)
            }
        }
    }
}