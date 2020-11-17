
var database;
var form,game
var gameState=0
var playerCount=0
var player;
var car1,car2,car3,car4;
var cars;
var allPlayers;
var car1Image,car2Image,car3Image,car4Image
var groundImage,trackImage
var barrier;

function setup(){
database=firebase.database()
game= new Game()
game.getGameState()
game.start()
createCanvas(windowWidth,windowHeight)


}
 function preload(){
    car1Image=loadImage("images/car1.png")
    car2Image=loadImage("images/car2.png")
    car3Image=loadImage("images/car3.png")
    car4Image=loadImage("images/car4.png")
    groundImage=loadImage("images/ground.png")
    trackImage=loadImage("images/track.jpg")
    

    
 }   

function draw(){

    
    if(playerCount===4){
        game.updateGameState(1)
    }
    if(gameState===1){
        clear()
    }
    if(gameState===1){
        game.play()
    }

    if(gameState===2){
        console.log("game ended")
    }

}
