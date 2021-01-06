class Pig{
    constructor(x,y){
       var options = {
           'restitution':0.8,
           'density':1 
          }
        this.width = 50;
        this.height = 50;  
       this.body = Bodies.rectangle(x,y,this.width,this.height,options)
   World.add(world,this.body)
    }
   display(){
   var angle = this.body.angle
   push();
   translate(this.body.position.x,this.body.position.y)
   angleMode(RADIANS)
   rotate(angle)
   fill("green");
   rectMode(CENTER)
   
   rect(0,0,this.width,this.height)
   pop();
   }
   }