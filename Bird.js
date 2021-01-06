class Bird{
    constructor(x,y){
       var options = {
           'restitution':0.6,
           'density':1
          }
        this.width = 50;
        this.height = 50;  
       this.body = Bodies.rectangle(x,y,this.width,this.height,options)
   World.add(world,this.body)
    }
   display(){
       this.body.position.x=mouseX;
       this.body.position.y=mouseY;
   var angle = this.body.angle
   push();
   translate(this.body.position.x,this.body.position.y)
   angleMode(RADIANS)
   rotate(angle)
   
   fill("red");
   rectMode(CENTER)
   
   rect(0,0,this.width,this.height)
   pop();
   }
   }