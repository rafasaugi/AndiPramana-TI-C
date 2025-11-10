//Game Objects Array disimpen abis let grass
let grassArray = [];

//ini ditaro di GameArea.start abis grass9
grassArray = [grass1,grass2,grass3,grass4,grass5,grass6,grass7,grass8,grass9];

//ini ditaro sebelum Enable Movement Input
function moveGrassLeft()
{
    grassArray[2].x -= 1280*3;
    grassArray[5].x -= 1280*3;
    grassArray[8].x -= 1280*3;
    grassArray = [grassArray[2],grassArray[0],grassArray[1],grassArray[5],grassArray[3],grassArray[4],grassArray[8],grassArray[6],grassArray[7]];
}

function moveGrassRight()
{
    grassArray[0].x += 1280*3;
    grassArray[3].x += 1280*3;
    grassArray[6].x += 1280*3;
    grassArray = [grassArray[1],grassArray[2],grassArray[0],grassArray[4],grassArray[5],grassArray[3],grassArray[7],grassArray[8],grassArray[6]];
}

function moveGrassUp()
{
    grassArray[6].y += 720*3;
    grassArray[7].y += 720*3;
    grassArray[8].y += 720*3;
    grassArray = [grassArray[6],grassArray[7],grassArray[8],grassArray[0],grassArray[1],grassArray[2],grassArray[3],grassArray[4],grassArray[5]];
}

function moveGrassDown()
{
    grassArray[0].y -= 720*3;
    grassArray[1].y -= 720*3;
    grassArray[2].y -= 720*3;
    grassArray = [grassArray[3],grassArray[4],grassArray[5],grassArray[6],grassArray[7],grassArray[8],grassArray[0],grassArray[1],grassArray[2]];
}

//Grass variables ditaro di abis Animation Variables
let currentMaxX = 1280;
let currentMinX = -1280;
let currentMaxY = 720;
let currentMinY= -720;

// update moveForward dan moveBackwards
if (moveForward)
{
    //Move Player
    this.x -= movementSpeed * 10 * Math.cos(player.angle);
    this.y -= movementSpeed * 10 * Math.sin(player.angle);
    
    //Infinite grass
    InfiniteGrass();
}
else if(moveBackwards)
{
    //Move Player
    this.x += movementSpeed * 10 * Math.cos(player.angle);
    this.y += movementSpeed * 10 * Math.sin(player.angle);

    //Infinite grass
    InfiniteGrass();
}

// ditaro sebelum Enable Movement Input
function InfiniteGrass()
{
    if(grassArray [4].x +currentMaxX>currentMaxX)
{
    moveGrassLeft();
    currentMaxX+=1280;
}
    if(grassArray [4].x +currentMinX<currentMinX)
{
    moveGrassLeft();
    currentMinX-=1280;
}
    if(grassArray [4].y +currentMinY<currentMinY)
{
    moveGrassUp();
    currentMinY-=720;
}
    if (grassArray [4].y +currentMaxY>currentMaxY)
{
    moveGrassDown();
    currentMaxY+=720;
}
}

//update GameStart.Area bagian grass
grass1 = new Component(1280,720, "images kita", -1280,720,"grass");
grass2 = new Component(1280,720, "images kita", 0,720, "grass");
grass3 = new Component(1280,720, "images kita", 1280,720, "grass");
grass4 = new Component(1280,720, "images kita", -1280,0,"grass");
grass5 = new Component(1280,720, "images kita", 0,0, "grass");
grass6 = new Component(1280,720, "images kita", 1280,0,"grass");
grass7 = new Component(1280,720,"images kita", -1280,-720,"grass");
grass8 = new Component(1280,720, "images kita", 0,-720, "grass");
grass9 = new Component(1280,720,"images kita", 1280,-720, "grass");