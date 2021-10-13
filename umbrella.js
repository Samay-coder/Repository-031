class Umbrella {
    constructor(x, y, r){

        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x, y, this.r, options)

        this.r = r
        this.animation = loadImage("images/Walking Frame/walking_1.png",
                                    "images/Walking Frame/walking_2.png",
                                    "images/Walking Frame/walking_3.png",
                                    "images/Walking Frame/walking_4.png",
                                    "images/Walking Frame/walking_5.png",
                                    "images/Walking Frame/walking_6.png",
                                    "images/Walking Frame/walking_1.png",
                                    "images/Walking Frame/walking_8.png")

        World.add(world,this.body)
    }

        display(){
            var pos = this.body.position
            strokeWeight(4);
            stroke("blue");
            fill(0,0,255);
            imageMode(CENTER)
            image(this.animation, pos.x,pos.y,this.r,this.r)
        }
}