class Drop{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.1,
            density : 1.2
        }
        this.body = Matter.Bodies.circle(x,y,2,options);
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position
        fill("lightblue");
        circle(pos.x,pos.y,4);
    }
    update(){
        if(this.rain.position.y>height ){
            Matter.Body.setPosition(this.rain,{x:random(0,400)},{y:random(0,400)});
        }
    }
}