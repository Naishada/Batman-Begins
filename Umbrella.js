class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
        this.body = Matter.Bodies.circle(x,y,60,options);
        World.add(world,this.body);
        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.image.scale = 6;
        }
        display(){
            var pos = this.body.position
            fill("pink");
            imageMode(CENTER)
            image(this.image,pos.x,pos.y,120,120);
        }
}