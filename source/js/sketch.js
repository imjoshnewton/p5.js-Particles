var font,
  vehicles = [],
  c,
  colors = ["#30CCC1", "#709996", "#55FF94", "#FF95BB", "#CC30B5"],
  maxParticles = 350;

function preload() {
  //font = loadFont('./AvenirNextLTPro-Demi.otf');
}

function setup() {
  var can =
    window.innerHeight < window.innerWidth
      ? window.innerHeight * 0.8
      : window.innerWidth * 0.9;
  var canvas = createCanvas(can, can);
  canvas.parent("sketch-div");
  background(255);
  c = {
    x: width / 2,
    y: height / 2,
  };

  //points = font.textToPoints('hello', 80, 200, 190,{sampleFactor:'1'});

  for (var i = 0; i < maxParticles; i++) {
    //var p = points[i];

    vehicles.push(
      new Vehicle(c.x, c.y, colors[Math.floor(random(0, colors.length))])
    );
  }
}

function draw() {
  background("rgba(51, 51, 51, 0.25)");

  // ambientLight(100, 80, 80);
  // pointLight(200, 200, 200, width, height, 0);
  //
  // translate(-width/2,-height/2,0); // Translate the 'center' to the top left corner in order to use canvas style coordinates

  vehicles.forEach(function (v) {
    v.behaviors();
    v.update();
    v.show();
  });

  console.log("fps: " + frameRate());
}

function windowResized() {
  var can =
    window.innerHeight < window.innerWidth
      ? window.innerHeight * 0.8
      : window.innerWidth * 0.9;

  resizeCanvas(can, can);

  vehicles.forEach(function (v) {
    v.updateTarget(width / 2, height / 2);
  });
}
