const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function preload(){
    lightning1 = loadImage("images/thunderbolt/1.png")
    lightning2 = loadImage("images/thunderbolt/2.png")
    lightning3 = loadImage("images/thunderbolt/3.png")
    lightning4 = loadImage("images/thunderbolt/4.png")

    Bat = loadImage("images/bat.png")
}

var engine = Engine.create()

function setup(){
   createCanvas(400,400)

   var bat = createSprite(150, 300, 10, 10)
   bat.addImage(Bat)

    world = engine.World

    var Batman = new Umbrella(50,390,60,20)

    var maxDrops = 100

    for(var i=0; i<maxDrops; i++){
        rain.push(new Drops(random(0,400), random(0,400)));
    }
}

function draw(){
    background(0)
    Engine.update(engine)

    spawnLightning()
    
    rain.display()
    rain.update()
    Batman.display()
}

function spawnLightning(){
   var lightning = createSprite(100, 20, 10, 40)
   var rand = Math.round(random(1,4))

   switch(rand){
        case 1: lightning.addImage(lightning1)
            break;
        case 2: lightning.addImage(lightning2)
            break;
        case 3: lightning.addImage(lightning3)
            break;
        case 4: lightning.addImage(lightning4)
   }

   if(World.framecount % 10 == 0){
       lightning.show()
   } else {
       lightning.hide()
   }
}