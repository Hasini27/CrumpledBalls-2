class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.4,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
        this.image=loadImage("paper.png");
      World.add(world, this.body);
      }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      fill("white");
      rotate(angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,35,35);
    }
    };