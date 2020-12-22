class Enemy{

    

        constructor(x,y){
        
        var options={
            restituition:0.8,
            friction:0.5,
            density:1.0,
            isStatic:true
        }
        
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height=100;
        this.image = loadImage("Images/ivy.png");
        World.add(world,this.body);
        }
        
        display(){
        
         var angle = this.body.angle;
         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
        }
        
        
        
    }       
        
        
        
        
        
        
        
        
        
 