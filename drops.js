class Drops {
    constructor(x, y, r){

        var options = {
            friction:0.1
        }

        this.r = r

        this.body = Bodies.circle(x, y, this.r, options)

        World.add(world,this.body)
    }

    update(){
       if(this.body.position.y > height){
           Matter.body.setPosition(this.body, {x:random(0,400)}, {y:random(0,400)})
       }
    }

        display(){
            var pos = this.body.position
            strokeWeight(4);
            stroke("blue");
            fill(0,0,255);
            ellipseMode(RADIUS)
            ellipse(pos.x,pos.y,this.r,this.r)
        }
}