var font,
    vehicles = [],
    c;

function preload() {
  font = loadFont('./AvenirNextLTPro-Demi.otf');
}

function setup() {
   createCanvas(600, 300, WEBGL);
   background(51);
   c = {
     x: width / 2,
     y: height / 2
   }

   points = font.textToPoints('hello', 80, 200, 190,{sampleFactor:'.5'});

   for (var i = 0; i < points.length; i++) {
     var p = points[i];

     vehicles.push(new Vehicle(p.x, p.y));
   }
}

function draw() {
  background('rgba(51, 51, 51, 1)');

  // var locY = (mouseY / height - 0.5) * (-2);
  // var locX = (mouseX / width - 0.5) * 2;

  ambientLight(100, 80, 80);
  pointLight(200, 200, 200, width, height, 0);

  translate(-width/2,-height/2,0);

  vehicles.forEach(function(v) {
    v.behaviors()
    v.update();
    v.show();
   });
}
