function Vehicle(x, y, color) {
  this.pos = createVector(random(width), random(height)); // createVector(x, y);
  this.prevPos = [];
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.color = color;
  this.r = 8;
  this.maxspeed = 5;
  this.maxforce = 0.3;
}

Vehicle.prototype.behaviors = function () {
  //var arrive = this.arrive(this.target);
  //var seek = this.seek(this.target);
  var mouse = createVector(mouseX, mouseY);
  var seek = this.seek(this.target);
  var flee = this.flee(mouse);

  //arrive.mult(1);
  seek.mult(1);
  flee.mult(10);

  //this.applyForce(arrive);
  //this.applyForce(flee);
  this.applyForce(seek);
  this.applyForce(flee);
};

Vehicle.prototype.applyForce = function (f) {
  this.acc.add(f);
};

Vehicle.prototype.update = function () {
  //this.prevPos.push(this.pos);
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
  //if(this.prevPos.length > 9600) this.prevPos.splice(0, 1);
};

Vehicle.prototype.show = function () {
  //push();
  stroke(this.color);
  strokeWeight(7);
  //translate(this.pos.x, this.pos.y);
  //ambientMaterial(150);
  //sphere(6);
  //pop();
  point(this.pos.x, this.pos.y);

  // stroke(225);
  // strokeWeight(15);
  // for(var i = this.prevPos.length-1; i >= 0; i-=96){
  //   var p = this.prevPos[i];
  //   // var n = this.prevPos[i-1];
  //   //
  //   // line(p.x, p.y, n.x, n.y);
  //   //console.log(i + "   " + p.x + " " + p.y);
  //   point(p.x,p.y);
  // }
};

Vehicle.prototype.arrive = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    var speed = map(d, 0, 100, 0, this.maxspeed);
  }

  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
};

Vehicle.prototype.flee = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 100) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
};

Vehicle.prototype.seek = function (target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  desired.setMag(this.maxspeed);
  //desired.mult(-1);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
};

Vehicle.prototype.updateTarget = function (x, y) {
  this.target = createVector(x, y);
};
