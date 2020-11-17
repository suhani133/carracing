class Player{
constructor(){
    this.distance = 0;
    this.name = null;
    this.index = null;
    this.carsatend=0;

}
updatePlayercount(count){
database.ref("/").update({
    playerCount:count
})
    
}

getplayerCount(){
    var playerCountref=database.ref("playerCount")
        playerCountref.on("value",function(data){
            playerCount=data.val()
        }
    )
    }

update() {
    var playerIndex = "players/player" + this.index; // player/player4
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });

}

static getplayerInfo(){
    var playersref=database.ref("players")
    playersref.on("value",function(data){
        allPlayers=data.val()
    }
)   
}
deletePlayers(){
    database.ref("players").remove()
}
getcarsatEnd(){
   var carsatendref= database.ref("carsatend")
   carsatendref.on("value",(data)=>{
        this.carsatend=data.val()
    }
)
}
static updatecarsatEnd(cars){
    database.ref("/").update({
        carsatend:cars 
    })
}
}
