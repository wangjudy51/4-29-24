function setup() {
  createCanvas(400, 400, WEBGL);
  frameRate(20)
}

function draw() {
  background(260);
  fill (252, 203, 189, 60);
  noStroke();
  var z = 50;
  
  rotateY(frameCount * 0.01);
  for (var x = -200; x <= width*4; x += 50) {
    
    for (var y = -200; y <= height*4; y += 50) {
      ellipse(x, y, z, z);
      
    }
  
  }
  
  rotateX(frameCount * 0.01);
  for ( var x = -200; x <= width*4; x += 50) {
    
    for ( var y = -200; y <= height*4; y += 50) {
      ellipse(x, y, z, z);
      
    }
  
  }
  
}