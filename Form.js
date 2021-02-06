class Form {
    constructor(){
        this.input = createInput("Your Name")
        this.button = createButton("Play")
        this.greeting = createElement("h3")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(150,0)

        this.input.position(150,150)
        this.button.position(200,200)

        this.button.mousePressed(function(){
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount += 1
            player.update()
            player.updateCount(playerCount)
            this. greeting.html("Welcome " + player.name)
            this.greeting.position(150,150)
        })
    }
}