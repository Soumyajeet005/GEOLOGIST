class Sand {
    constructor(x,y) {
      var options = {
        'restitution' : 1,
        'friction': 0.1,
        'density': 0.1,
      }
      this.body = Bodies.rectangle(x,y,10,10,options);
      this.width = 10;
      this.height = 10;
      World.add(world, this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill ("brown")
        rect(0,0,this.width,this.height);
        pop();     
    }
  }