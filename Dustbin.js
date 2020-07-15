class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
      }
      this.image = loadImage("sprites/dustbingreen.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.bodyright = Bodies.rectangle(930, 620, 20, 100, options);
      this.width = width;
      this.height = height;
      World.add(world, this.bodyright);

      this.bodyleft = Bodies.rectangle(720, 620, 20, 100, options);
      this.width = width;
      this.height = height;
      World.add(world, this.bodyleft);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("White");
      image(this.image,this.body.position.x,this.body.position.y ,200, 200);
    pop();
    }
  };