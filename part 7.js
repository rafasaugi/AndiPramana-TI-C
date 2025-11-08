//Game play variables update
let gameOver = false;
let restartScreen;

//Score Variables ditaro abis gameplay variables
let highscore = 0;
let score = 0;

//tambahin di GameArea.start
restartScreen = new Component(1280,720,"images kita", 0,0,"image");

//reset game ditaro abis GameArea.start
    zombies = [];
    spawnZombiesInterval = setInterval(spawnZombie, getRandomInterval());
    score = 0;
    gameOver = false;

 //Kill Zombies ditaro abis reload
    for(let j = 0; j<bullets.length; j++)
    {
        for(let i = 0; i<zombies.length; i++)
        {
            if(bullets[j].x>zombies[i].x+27*imagesScale && bullets[j].x<zombies[i].x+(27+206)*imagesScale)
            {
                if(bullets[j].y>zombies[i].y+77*imagesScale && bullets[j].y<zombies[i].y+(77+197)*imagesScale)
                {
                    zombies.splice(i,1);
                    zombiesWaitTime.splice(i,1);
                    zombiesAnimationPosition.splice(i,1);
                    zombiesPlayerCollision.splice(i,1);


                    score+=1;
                    bullets[j].x = 9999;
                    bullets[j].y = 9999;
                }
            }
        }
    }


 //Collision detection abis kill zombies
    for(let i = 0; i<zombies.length; i++)
    {
        if(zombies[i].x+27*imagesScale>(640-37)-player.width*imagesScale && zombies[i].x+(27)*imagesScale<(640+(256-37)*imagesScale)-player.width*imagesScale)
        {
            if(zombies[i].y+79*imagesScale>(360-38*imagesScale)-player.height*imagesScale-80 && zombies[i].y+(79)*imagesScale<(360+(150-38)*imagesScale)-player.height*imagesScale+50)
            {
                zombiesPlayerCollision[i] = false;
                zombieAttackAnimationFunction(i);
            }
            else{
                if(zombiesPlayerCollision[i] === false)
                {
                    zombiesAnimationPosition[i] = 0;
                }
                zombiesPlayerCollision[i] = true;
            }
        }
        else{
            if(zombiesPlayerCollision[i] === false)
            {
                zombiesAnimationPosition[i] = 0;
            }
            zombiesPlayerCollision[i] = true;
        }
    }

// ditaro didalem update game object setelah zombies update
if(gameOver)
    {
        restartScreen.update();
        ctx.fillText("High Score: " + highscore.toString(), 640, 650);
    }

//ditaro setelah update game object
function endGame(){
    gameOver = true;
    if(highscore<score)
    {
        highscore = score;
    }
}

// update sebagian
this.update = function(){


        let ctx = GameArea.context;


        //Score text and High score text
        if(gameOver === false)
        {
            ctx.font = "50px Comic Sans MS";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText(score.toString(), 640, 100);
        }
        else{
            ctx.font = "60px Comic Sans MS";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("High Score: " + highscore.toString(), 640, 700);
        }


        ctx.save();
    }

    //ditaro sebelum move zombies
    ctx.fillText(score.toString(), 640, 60);