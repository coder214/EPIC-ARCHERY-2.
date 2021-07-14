class PlayerArcher {
    constructor(x, y, width, height) {
      var archerp_options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, archerp_options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      Matter.Body.setAngle(this.body,PI/2);

      if(keyIsDown(UP_ARROW) && computerArcher.body.angle > -1.9){ 
        angle -= 0.1
        Matter.Body.setAngle(this.body,angle);

    }

    if(keyIsDown(DOWN_ARROW) && computerArcher.body.angle < -1.2){
        angle += 0.1
        Matter.Body.setAngle(this.body,angle);
    }
  
      pop();
    }
  }
  