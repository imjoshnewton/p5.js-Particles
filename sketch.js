var font,
    vehicles = [],
    c;

function preload() {
  //font = loadFont('./AvenirNextLTPro-Demi.otf');
}

function setup() {
   //createCanvas(window.innerWidth, window.innerHeight, WEBGL);
   createCanvas(window.innerWidth, window.innerHeight);
   background(51);
   c = {
     x: width / 2,
     y: height / 2
   }

   //points = font.textToPoints('hello', 80, 200, 190,{sampleFactor:'1'});

   for (var i = 0; i < 1250; i++) {
     //var p = points[i];

     vehicles.push(new Vehicle(c.x, c.y));
   }
}

function draw() {
  background('rgba(51, 51, 51, 0.25)');

  // ambientLight(100, 80, 80);
  // pointLight(200, 200, 200, width, height, 0);
  //
  // translate(-width/2,-height/2,0); // Translate the 'center' to the top left corner in order to use canvas style coordinates

  vehicles.forEach(function(v) {
    v.behaviors()
    v.update();
    v.show();
   });

  console.log("fps: " + frameRate());
}
