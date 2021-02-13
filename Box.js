class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinwidth=200;
        this.dustbinheight=100;
        this.wallthickness=20;
        this.angle=0;

        this.bottombody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true});
        this.leftwallbody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        Matter.Body.setAngle(this.leftwallbody,this.angle);

        this.rightwallbody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        Matter.Body.setAngle(this.rightwallbody,-1*this.angle);
        World.add(world,this.bottombody);
        World.add(world,this.leftwallbody);
        World.add(world,this.rightwallbody);
        }
    display(){
        
       var positionbottom=this.bottombody.position;
       var positionleft=this.leftwallbody.position;
       var positionright=this.rightwallbody.position;

       push();
       translate(positionleft.x,positionleft.y);
       rectMode(CENTER);
       angleMode(RADIANS);
       fill("red");
       stroke(255);
       rotate(this.angle);
       rect(0,0,this.wallthickness,this.dustbinheight);
       pop();

       push();
       translate(positionright.x,positionright.y);
       rectMode(CENTER);
       angleMode(RADIANS);
       fill("red");
       stroke(255);
       rotate(-1*this.angle);
       rect(0,0,this.wallthickness,this.dustbinheight);
       pop();

       push();
       translate(positionbottom.x,positionbottom.y);
       rectMode(CENTER);
       angleMode(RADIANS);
       fill("red");
       stroke(255);
       rotate(this.angle);
       rect(0,0,this.dustbinwidth,this.wallthickness);
       pop();
    
    }

}