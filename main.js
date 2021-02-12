canvas=document.getElementById("race_Canvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car2_width=120;
car2_height=70;

car1X=10;
car1Y=10;
car2X=10;
car2Y=100;

car1_imgSrc="Yellow race car.png";
car2_imgSrc="Purple race car.jpeg";
bg_imgSrc="bg.jpg";

function Add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=bg_imgSrc;
    
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadP1;
    car1_imgTag.src=car1_imgSrc;
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadP2;
    car2_imgTag.src=car2_imgSrc;
}
function uploadBackground()
{
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadP1()
{
        ctx.drawImage(car1_imgTag, car1X, car1Y, car1_width, car1_height);
}
function uploadP2()
{
        ctx.drawImage(car2_imgTag, car2X, car2Y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '87')
    {
        P2Up();
        console.log("When w is pressed, move Purple car up");
    }
    if(keyPressed == '65')
    {
        P2Left();
        console.log("When a is pressed, move Purple car left");
    }
    if(keyPressed == '68')
    {
        P2Right();
        console.log("When d is pressed, move Purple car right");
    }
    if(keyPressed == '83')
    {
        P2Down();
        console.log("When s is pressed, move Purple car down");
    }
    if(keyPressed == "38")
    {
        car1Up();
        console.log("When up arrow key is pressed, move Yellow car up");
    }
    if(keyPressed == "37")
    {
        car1Left();
        console.log("When left arrow key is pressed, move Yellow car left");
    }
    if(keyPressed == "39")
    {
        car1Right();
        console.log("When right arrow key is pressed, move Yellow car right");
    }
    if(keyPressed == "40")
    {
        car1Down();
        console.log("When down arrow key is pressed, move Yellow car down");
    }
}

// Intializizing for moving functions

function car1Up()
{
    if(car1Y>=0)
    {
    car1Y=car1Y - 5;
    console.log("When up arrow key is pressed X and Y coordinates: X - " + car1X + " and Y - " + car1Y);
    uploadBackground();
    uploadP1();
    uploadP2();
    }
}
function P2Up()
{
    if(car2Y>=0)
    {
    car2Y=car2Y - 5;
    console.log("When w is pressed X and Y coordinates: X - " + car2X + " and Y - " + car2Y);
    uploadBackground();
    uploadP2();
    uploadP1();
   }
}
function car1Down()
{
    if(car1Y<=500)
    {
    car1Y=car1Y + 5;
    console.log("When down arrow key is pressed X and Y coordinates: X - " + car1X + " and Y - " + car1Y);
    uploadBackground();
    uploadP1();
    uploadP2();
    }
}
function P2Down()
{
    if(car2Y<=500)
    {
    car2Y=car2Y + 5;
    console.log("When s is pressed X and Y coordinates: X - " + car2X + " and Y - " + car2Y);
    uploadBackground();
    uploadP2();
    uploadP1();
    }
}
function car1Right()
{
    if(car1X<=700)
    {
    car1X=car1X + 5;
    console.log("When right arrow key is pressed X and Y coordinates: X - " + car1X + " and Y - " + car1Y);
    uploadBackground();
    uploadP1();
    uploadP2();
    }
}
function P2Right()
{
    if(car2Y<=400)
    {
    car2X=car2X + 5;
    console.log("When d is pressed X and Y coordinates: X - " + car2X + " and Y - " + car2Y);
    uploadBackground();
    uploadP2();
    uploadP1();
    }
}
function P2Left()
{
    if(car2Y>=0)
    {
    car2X=car2X - 5;
    console.log("When a is pressed X and Y coordinates: X - " + car2X + " and Y - " + car2Y);
    uploadBackground();
    uploadP2();
    uploadP1();
    }
}
function car1Left()
{
    if(car1X>=0)
    {
    car1X=car1X - 5;
    console.log("When left arrow key is pressed X and Y coordinates: X - " + car1X + " and Y - " + car1Y);
    uploadBackground();
    uploadP1();
    uploadP2();
    }
}
if(car1X>700)
{
    console.log("P1 won")
    document.getElementById("gameStats").innerHTML="Status: P1(Yellow car) won!";
}
if(car2X>700)
{
    console.log("P2 won")
    document.getElementById("gameStats").innerHTML="Status: P2(Purple car) won!";
}