let shapes = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(200);
  for (let shape of shapes) {   //for (let...of...) ???
    fill(shape.color)
    if (shape.shapeType === 'square') {
      rect(shape.x, shape.y, 100, 100);
    }
    if (shape.shapeType == 'circle') {
      circle(shape.x, shape.y, 100);
    }
  }
}

// how to make object appear on canvas
function mousePressed() {
  addAShape();
}

function keyPressed() {
  shapes.splice(shape1, 1)
}

// object: shape1 
function addAShape() {
  shape1 = {
    x: mouseX,
    y: mouseY,
    color: random(['red', 'blue', 'green', 'pink', 'yellow']),
    shapeType: random(['square', 'circle'])
  }
  shapes.push(shape1);
//using pop was not a good idea
}

