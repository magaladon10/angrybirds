class Box{
 constructor(x,y,width,height){
    var options = {
        'restitution':1,
        'density':1
       }
     this.width = width
     this.height = height  
    this.body = Bodies.rectangle(x,y,this.width,this.height,options)
World.add(world,this.body)
 }
display(){
var angle = this.body.angle
push();
translate(this.body.position.x,this.body.position.y)
angleMode(RADIANS)
rotate(angle)
strokeWeight(4);
stroke("green");
fill("white");
rectMode(CENTER)

rect(0,0,this.width,this.height)
pop();
}
}