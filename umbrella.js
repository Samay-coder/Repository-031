class Umbrella {
    constructor(x, y, r){

        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x, y, this.r, options)

        this.r = r
        this.animation = loadImage("walking_1.png",
                                   "walking_2.png",
                                   "walking_3.png",
                                   "walking_4.png",
                                   "walking_5.png",
                                   "walking_6.png",
                                   "walking_1.png",
                                   "walking_8.png")

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