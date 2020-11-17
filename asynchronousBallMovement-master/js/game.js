class Game{

    constructor(){


    }

    getGameState(){
        var gamestateRef=database.ref("gameState")
        gamestateRef.on("value",function(data){
            gameState=data.val()

        }
        )
    }

    updateGameState(state){
        database.ref("/").update({
            "gameState":state 
        })

    }
    
    start(){
        if (gameState===0){
            
            player= new Player()
           
            player.getplayerCount();
            
             form=new Form()
            form.display()
        }
            car1=createSprite(50,200,10,10)
            car1.addImage(car1Image)
            car1.setCollider("circle",0,0,50,)
            car2=createSprite(150,200,10,10)
            car2.addImage(car2Image)
            car2.setCollider("circle",0,0,50)
            car3=createSprite(250,200,10,10)
            car3.addImage(car3Image)
            car3.setCollider("circle",0,0,50)
            car4=createSprite(350,200,10,10)
            car4.addImage(car4Image)
            car4.setCollider("circle",0,0,50)
            cars=[car1,car2,car3,car4]
            barrier=createSprite(1080,923,windowWidth,90)
            barrier.x=windowWidth/2
            barrier.visible=false
            

            

        
    }
    play(){
        form.hide();
        background(groundImage)
        image(trackImage,0,-windowHeight*4.7,windowWidth,windowHeight*6)
        console.log(player.distance)
        Player.getplayerInfo()
        player.getcarsatEnd()
        if(keyIsDown(UP_ARROW)){
            player.distance = player.distance + 20;
            player.update();
        }
        

        if (player.distance>3850){
            gameState=2
            player.carsatend=player.carsatend+1
            Player.updatecarsatEnd(player.carsatend)
        }
        for (var car in cars){
            cars[car].collide(barrier);
            cars[car].debug=true
            barrier.debug=true
        }

      if (allPlayers!=undefined){
          var index=0;
          var x=200
          var y=0
          for(var plr in allPlayers){
              index=index+1
              x=x+220
              y=displayHeight-allPlayers[plr].distance
              cars[index-1].x=x
              cars[index-1].y=y
              if(index==player.index){
                //for barrier
                if(keyIsDown(DOWN_ARROW) &&  cars[index-1].y < 850){
                    player.distance = player.distance-20
                    player.update();
                }
                  cars[index-1].shapeColor="red"
                  camera.position.x=displayWidth/2
                  camera.position.y=cars[index-1].y
                  fill("red")
                  ellipse(x,y,80,80)
                 
                  

              }
          }
          
      }
        
        drawSprites(); 
    }

    
}