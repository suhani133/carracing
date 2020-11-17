class Form{
constructor(){
    this.input = createInput("name")
    this.button= createButton("play")
    this.title=createElement('h2')
    this.reset= createButton("reset")

}
hide(){
    this.input.hide()
        this.button.hide()
}
display(){
    this.title.position(450,100)
    this.title.html("car racing game")

    
    this.input.position(450,300)
    //console.log(input)

    this.reset.position(400,450)
    this.reset.mousePressed(()=>{
        player.updatePlayercount(0)
        game.updateGameState(0)
        Player.updatecarsatEnd(0)
        player.name=""
        player.distance=0
        player.deletePlayers()
    })

    this.button.position(400,400)
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.title.hide()
        var name=this.input.value()
        player.name = name;
        playerCount=playerCount+1;
        player.index = playerCount;
        player.updatePlayercount(playerCount)
        //updating player info in database
        player.update();
    })
}
}
